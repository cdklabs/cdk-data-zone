import { CdklabsConstructLibrary } from 'cdklabs-projen-project-types';
import { JsonPatch } from 'projen';
import { UpdateSnapshot } from 'projen/lib/javascript';

const project = new CdklabsConstructLibrary({
  projenrcTs: true,
  private: false,
  name: 'cdk-data-zone',
  description: 'AWS DataZone L2 Construct library',
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
    '.envrc',
    '.env',
    '.devbox',
    '.vscode',
  ],
  stability: 'experimental',
});

project.addTask('license', {
  exec: 'cdk-cicd license',
  description: 'Check license headers',
  receiveArgs: true,
});

// JSII sets this to `false` so we need to be compatible
const tsConfigDev = project.tryFindObjectFile('tsconfig.dev.json');
tsConfigDev?.patch(JsonPatch.replace('/compilerOptions/esModuleInterop', false));

project.synth();