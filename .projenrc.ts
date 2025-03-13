import { CdklabsConstructLibrary } from 'cdklabs-projen-project-types';
import { JsonPatch } from 'projen';
import { UpdateSnapshot } from 'projen/lib/javascript';

const project = new CdklabsConstructLibrary({
  projenrcTs: true,
  private: false,
  name: 'cdk-data-zone',
  description: 'Amazon DataZone L2 Construct library',
  author: 'Amazon Web Services',
  authorAddress: 'gyalai@amazon.ch',
  cdkVersion: '2.160.0',
  constructsVersion: '10.0.46',
  jsiiVersion: '~5.5',
  defaultReleaseBranch: 'main',
  repositoryUrl: 'https://github.com/cdklabs/cdk-data-zone.git',
  devDeps: [
    'cdklabs-projen-project-types',
    'aws-cdk-lib',
    '@aws-cdk/integ-runner@^2.60.0',
    '@aws-cdk/integ-tests-alpha',
    'cdk-nag',
    '@cdklabs/cdk-cicd-wrapper-cli',
  ],
  peerDeps: ['aws-cdk-lib'],
  jestOptions: {
    jestConfig: {
      testMatch: [
        '<rootDir>/test/**/*(*.)@(spec|test).ts?(x)',
        '<rootDir>/src/**/*(*.)@(spec|test).ts?(x)',
      ],
    },
    updateSnapshot: UpdateSnapshot.NEVER,
  },
  autoApproveOptions: {
    allowedUsernames: ['aws-cdk-automation', 'dependabot[bot]'],
  },
  pullRequestTemplate: true,

  gitignore: [
    '__pycache__',
    '.coverage',
    '.devbox',
    '.env',
    '.envrc',
    '.pytest_cache',
    '.venv',
    '.vscode',
  ],
  stability: 'experimental',
});

project.addTask('license', {
  exec: 'cdk-cicd license',
  description: 'Check license headers',
  receiveArgs: true,
});

project.addTask('py-prepare', {
  exec: './scripts/py-prepare.sh',
  description: 'Install python dependencies',
  receiveArgs: false,
});

project.addTask('py-lint', {
  exec: './scripts/py-lint.sh',
  description: 'Run python linter(s), e.g: black',
  receiveArgs: false,
});

project.addTask('py-test', {
  exec: './scripts/py-test.sh',
  description: 'Run python tests, e.g: pytest',
  receiveArgs: false,
});

// JSII sets this to `false` so we need to be compatible
const tsConfigDev = project.tryFindObjectFile('tsconfig.dev.json');
tsConfigDev?.patch(JsonPatch.replace('/compilerOptions/esModuleInterop', false));

project.synth();