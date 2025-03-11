# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Blueprint <a name="Blueprint" id="cdk-data-zone.Blueprint"></a>

#### Initializers <a name="Initializers" id="cdk-data-zone.Blueprint.Initializer"></a>

```typescript
import { Blueprint } from 'cdk-data-zone'

new Blueprint(scope: Construct, id: string, props: BlueprintProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.Blueprint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-data-zone.Blueprint.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.Blueprint.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-data-zone.BlueprintProps">BlueprintProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-data-zone.Blueprint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-data-zone.Blueprint.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-data-zone.Blueprint.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-data-zone.BlueprintProps">BlueprintProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.Blueprint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-data-zone.Blueprint.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#cdk-data-zone.Blueprint.addParameters">addParameters</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-data-zone.Blueprint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-data-zone.Blueprint.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-data-zone.Blueprint.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addParameters` <a name="addParameters" id="cdk-data-zone.Blueprint.addParameters"></a>

```typescript
public addParameters(region: string, parameters: {[ key: string ]: string}): void
```

###### `region`<sup>Required</sup> <a name="region" id="cdk-data-zone.Blueprint.addParameters.parameter.region"></a>

- *Type:* string

---

###### `parameters`<sup>Required</sup> <a name="parameters" id="cdk-data-zone.Blueprint.addParameters.parameter.parameters"></a>

- *Type:* {[ key: string ]: string}

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.Blueprint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-data-zone.Blueprint.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-data-zone.Blueprint.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-data-zone.Blueprint.isConstruct"></a>

```typescript
import { Blueprint } from 'cdk-data-zone'

Blueprint.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-data-zone.Blueprint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-data-zone.Blueprint.isOwnedResource"></a>

```typescript
import { Blueprint } from 'cdk-data-zone'

Blueprint.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-data-zone.Blueprint.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-data-zone.Blueprint.isResource"></a>

```typescript
import { Blueprint } from 'cdk-data-zone'

Blueprint.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-data-zone.Blueprint.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.Blueprint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-data-zone.Blueprint.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-data-zone.Blueprint.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-data-zone.Blueprint.property.createdAt">createdAt</a></code> | <code>string</code> | The timestamp of when the data source was created. |
| <code><a href="#cdk-data-zone.Blueprint.property.updatedAt">updatedAt</a></code> | <code>string</code> | The timestamp of when the data source was updated. |
| <code><a href="#cdk-data-zone.Blueprint.property.blueprintId">blueprintId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.Blueprint.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.Blueprint.property.enabledRegions">enabledRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-data-zone.Blueprint.property.environmentBlueprintIdentifier">environmentBlueprintIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.Blueprint.property.manageAccessRole">manageAccessRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | *No description.* |
| <code><a href="#cdk-data-zone.Blueprint.property.provisioningRole">provisioningRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-data-zone.Blueprint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-data-zone.Blueprint.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-data-zone.Blueprint.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="cdk-data-zone.Blueprint.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

The timestamp of when the data source was created.

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="cdk-data-zone.Blueprint.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

The timestamp of when the data source was updated.

---

##### `blueprintId`<sup>Required</sup> <a name="blueprintId" id="cdk-data-zone.Blueprint.property.blueprintId"></a>

```typescript
public readonly blueprintId: string;
```

- *Type:* string

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="cdk-data-zone.Blueprint.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `enabledRegions`<sup>Required</sup> <a name="enabledRegions" id="cdk-data-zone.Blueprint.property.enabledRegions"></a>

```typescript
public readonly enabledRegions: string[];
```

- *Type:* string[]

---

##### `environmentBlueprintIdentifier`<sup>Required</sup> <a name="environmentBlueprintIdentifier" id="cdk-data-zone.Blueprint.property.environmentBlueprintIdentifier"></a>

```typescript
public readonly environmentBlueprintIdentifier: string;
```

- *Type:* string

---

##### `manageAccessRole`<sup>Required</sup> <a name="manageAccessRole" id="cdk-data-zone.Blueprint.property.manageAccessRole"></a>

```typescript
public readonly manageAccessRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

---

##### `provisioningRole`<sup>Required</sup> <a name="provisioningRole" id="cdk-data-zone.Blueprint.property.provisioningRole"></a>

```typescript
public readonly provisioningRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

---


### BlueprintBase <a name="BlueprintBase" id="cdk-data-zone.BlueprintBase"></a>

- *Implements:* <a href="#cdk-data-zone.IBlueprint">IBlueprint</a>

#### Initializers <a name="Initializers" id="cdk-data-zone.BlueprintBase.Initializer"></a>

```typescript
import { BlueprintBase } from 'cdk-data-zone'

new BlueprintBase(scope: Construct, id: string, props?: ResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.BlueprintBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-data-zone.BlueprintBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.BlueprintBase.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.ResourceProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-data-zone.BlueprintBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-data-zone.BlueprintBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk-data-zone.BlueprintBase.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.ResourceProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.BlueprintBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-data-zone.BlueprintBase.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#cdk-data-zone.BlueprintBase.addParameters">addParameters</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-data-zone.BlueprintBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-data-zone.BlueprintBase.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-data-zone.BlueprintBase.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addParameters` <a name="addParameters" id="cdk-data-zone.BlueprintBase.addParameters"></a>

```typescript
public addParameters(region: string, parameters: {[ key: string ]: string}): void
```

###### `region`<sup>Required</sup> <a name="region" id="cdk-data-zone.BlueprintBase.addParameters.parameter.region"></a>

- *Type:* string

---

###### `parameters`<sup>Required</sup> <a name="parameters" id="cdk-data-zone.BlueprintBase.addParameters.parameter.parameters"></a>

- *Type:* {[ key: string ]: string}

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.BlueprintBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-data-zone.BlueprintBase.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-data-zone.BlueprintBase.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-data-zone.BlueprintBase.isConstruct"></a>

```typescript
import { BlueprintBase } from 'cdk-data-zone'

BlueprintBase.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-data-zone.BlueprintBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-data-zone.BlueprintBase.isOwnedResource"></a>

```typescript
import { BlueprintBase } from 'cdk-data-zone'

BlueprintBase.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-data-zone.BlueprintBase.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-data-zone.BlueprintBase.isResource"></a>

```typescript
import { BlueprintBase } from 'cdk-data-zone'

BlueprintBase.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-data-zone.BlueprintBase.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.BlueprintBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-data-zone.BlueprintBase.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-data-zone.BlueprintBase.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-data-zone.BlueprintBase.property.createdAt">createdAt</a></code> | <code>string</code> | The timestamp of when the data source was created. |
| <code><a href="#cdk-data-zone.BlueprintBase.property.updatedAt">updatedAt</a></code> | <code>string</code> | The timestamp of when the data source was updated. |
| <code><a href="#cdk-data-zone.BlueprintBase.property.blueprintId">blueprintId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-data-zone.BlueprintBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-data-zone.BlueprintBase.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-data-zone.BlueprintBase.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="cdk-data-zone.BlueprintBase.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

The timestamp of when the data source was created.

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="cdk-data-zone.BlueprintBase.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

The timestamp of when the data source was updated.

---

##### `blueprintId`<sup>Required</sup> <a name="blueprintId" id="cdk-data-zone.BlueprintBase.property.blueprintId"></a>

```typescript
public readonly blueprintId: string;
```

- *Type:* string

---


### DataSource <a name="DataSource" id="cdk-data-zone.DataSource"></a>

#### Initializers <a name="Initializers" id="cdk-data-zone.DataSource.Initializer"></a>

```typescript
import { DataSource } from 'cdk-data-zone'

new DataSource(scope: Construct, id: string, props: DataSourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.DataSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-data-zone.DataSource.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.DataSource.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-data-zone.DataSourceProps">DataSourceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-data-zone.DataSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-data-zone.DataSource.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-data-zone.DataSource.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-data-zone.DataSourceProps">DataSourceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.DataSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-data-zone.DataSource.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-data-zone.DataSource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-data-zone.DataSource.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-data-zone.DataSource.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.DataSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-data-zone.DataSource.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-data-zone.DataSource.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-data-zone.DataSource.isConstruct"></a>

```typescript
import { DataSource } from 'cdk-data-zone'

DataSource.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-data-zone.DataSource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-data-zone.DataSource.isOwnedResource"></a>

```typescript
import { DataSource } from 'cdk-data-zone'

DataSource.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-data-zone.DataSource.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-data-zone.DataSource.isResource"></a>

```typescript
import { DataSource } from 'cdk-data-zone'

DataSource.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-data-zone.DataSource.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.DataSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-data-zone.DataSource.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-data-zone.DataSource.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-data-zone.DataSource.property.createdAt">createdAt</a></code> | <code>string</code> | The timestamp of when the data source was created. |
| <code><a href="#cdk-data-zone.DataSource.property.updatedAt">updatedAt</a></code> | <code>string</code> | The timestamp of when the data source was updated. |
| <code><a href="#cdk-data-zone.DataSource.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | The identifier of the data source run. |
| <code><a href="#cdk-data-zone.DataSource.property.environment">environment</a></code> | <code><a href="#cdk-data-zone.IEnvironment">IEnvironment</a></code> | The ID of the environment in which the data source exists. |
| <code><a href="#cdk-data-zone.DataSource.property.lastRunAssetCount">lastRunAssetCount</a></code> | <code>aws-cdk-lib.IResolvable</code> | The count of the assets created during the last data source run. |
| <code><a href="#cdk-data-zone.DataSource.property.lastRunAt">lastRunAt</a></code> | <code>string</code> | The timestamp of when the data source run was last performed. |
| <code><a href="#cdk-data-zone.DataSource.property.lastRunStatus">lastRunStatus</a></code> | <code>string</code> | The status of the last data source run. |
| <code><a href="#cdk-data-zone.DataSource.property.project">project</a></code> | <code><a href="#cdk-data-zone.IProject">IProject</a></code> | The project ID included in the data source run activity. |
| <code><a href="#cdk-data-zone.DataSource.property.status">status</a></code> | <code>string</code> | The status of the data source. |
| <code><a href="#cdk-data-zone.DataSource.property.enabled">enabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-data-zone.DataSource.property.filterType">filterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.DataSource.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.DataSource.property.publishOnImport">publishOnImport</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-data-zone.DataSource.property.recommendation">recommendation</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-data-zone.DataSource.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.DataSource.property.schedule">schedule</a></code> | <code><a href="#cdk-data-zone.Schedule">Schedule</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-data-zone.DataSource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-data-zone.DataSource.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-data-zone.DataSource.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="cdk-data-zone.DataSource.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

The timestamp of when the data source was created.

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="cdk-data-zone.DataSource.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

The timestamp of when the data source was updated.

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="cdk-data-zone.DataSource.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

The identifier of the data source run.

---

##### `environment`<sup>Required</sup> <a name="environment" id="cdk-data-zone.DataSource.property.environment"></a>

```typescript
public readonly environment: IEnvironment;
```

- *Type:* <a href="#cdk-data-zone.IEnvironment">IEnvironment</a>

The ID of the environment in which the data source exists.

---

##### `lastRunAssetCount`<sup>Required</sup> <a name="lastRunAssetCount" id="cdk-data-zone.DataSource.property.lastRunAssetCount"></a>

```typescript
public readonly lastRunAssetCount: IResolvable;
```

- *Type:* aws-cdk-lib.IResolvable

The count of the assets created during the last data source run.

---

##### `lastRunAt`<sup>Required</sup> <a name="lastRunAt" id="cdk-data-zone.DataSource.property.lastRunAt"></a>

```typescript
public readonly lastRunAt: string;
```

- *Type:* string

The timestamp of when the data source run was last performed.

---

##### `lastRunStatus`<sup>Required</sup> <a name="lastRunStatus" id="cdk-data-zone.DataSource.property.lastRunStatus"></a>

```typescript
public readonly lastRunStatus: string;
```

- *Type:* string

The status of the last data source run.

---

##### `project`<sup>Required</sup> <a name="project" id="cdk-data-zone.DataSource.property.project"></a>

```typescript
public readonly project: IProject;
```

- *Type:* <a href="#cdk-data-zone.IProject">IProject</a>

The project ID included in the data source run activity.

---

##### `status`<sup>Required</sup> <a name="status" id="cdk-data-zone.DataSource.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The status of the data source.

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="cdk-data-zone.DataSource.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="cdk-data-zone.DataSource.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-data-zone.DataSource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `publishOnImport`<sup>Required</sup> <a name="publishOnImport" id="cdk-data-zone.DataSource.property.publishOnImport"></a>

```typescript
public readonly publishOnImport: boolean;
```

- *Type:* boolean

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="cdk-data-zone.DataSource.property.recommendation"></a>

```typescript
public readonly recommendation: boolean;
```

- *Type:* boolean

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-data-zone.DataSource.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="cdk-data-zone.DataSource.property.schedule"></a>

```typescript
public readonly schedule: Schedule;
```

- *Type:* <a href="#cdk-data-zone.Schedule">Schedule</a>

---


### DataSourceBase <a name="DataSourceBase" id="cdk-data-zone.DataSourceBase"></a>

- *Implements:* <a href="#cdk-data-zone.IDataSource">IDataSource</a>

#### Initializers <a name="Initializers" id="cdk-data-zone.DataSourceBase.Initializer"></a>

```typescript
import { DataSourceBase } from 'cdk-data-zone'

new DataSourceBase(scope: Construct, id: string, props?: ResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.DataSourceBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-data-zone.DataSourceBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.DataSourceBase.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.ResourceProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-data-zone.DataSourceBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-data-zone.DataSourceBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk-data-zone.DataSourceBase.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.ResourceProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.DataSourceBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-data-zone.DataSourceBase.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-data-zone.DataSourceBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-data-zone.DataSourceBase.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-data-zone.DataSourceBase.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.DataSourceBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-data-zone.DataSourceBase.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-data-zone.DataSourceBase.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-data-zone.DataSourceBase.isConstruct"></a>

```typescript
import { DataSourceBase } from 'cdk-data-zone'

DataSourceBase.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-data-zone.DataSourceBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-data-zone.DataSourceBase.isOwnedResource"></a>

```typescript
import { DataSourceBase } from 'cdk-data-zone'

DataSourceBase.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-data-zone.DataSourceBase.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-data-zone.DataSourceBase.isResource"></a>

```typescript
import { DataSourceBase } from 'cdk-data-zone'

DataSourceBase.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-data-zone.DataSourceBase.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.DataSourceBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-data-zone.DataSourceBase.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-data-zone.DataSourceBase.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-data-zone.DataSourceBase.property.createdAt">createdAt</a></code> | <code>string</code> | The timestamp of when the data source was created. |
| <code><a href="#cdk-data-zone.DataSourceBase.property.updatedAt">updatedAt</a></code> | <code>string</code> | The timestamp of when the data source was updated. |
| <code><a href="#cdk-data-zone.DataSourceBase.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | The identifier of the data source run. |
| <code><a href="#cdk-data-zone.DataSourceBase.property.environment">environment</a></code> | <code><a href="#cdk-data-zone.IEnvironment">IEnvironment</a></code> | The ID of the environment in which the data source exists. |
| <code><a href="#cdk-data-zone.DataSourceBase.property.lastRunAssetCount">lastRunAssetCount</a></code> | <code>aws-cdk-lib.IResolvable</code> | The count of the assets created during the last data source run. |
| <code><a href="#cdk-data-zone.DataSourceBase.property.lastRunAt">lastRunAt</a></code> | <code>string</code> | The timestamp of when the data source run was last performed. |
| <code><a href="#cdk-data-zone.DataSourceBase.property.lastRunStatus">lastRunStatus</a></code> | <code>string</code> | The status of the last data source run. |
| <code><a href="#cdk-data-zone.DataSourceBase.property.project">project</a></code> | <code><a href="#cdk-data-zone.IProject">IProject</a></code> | The project ID included in the data source run activity. |
| <code><a href="#cdk-data-zone.DataSourceBase.property.status">status</a></code> | <code>string</code> | The status of the data source. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-data-zone.DataSourceBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-data-zone.DataSourceBase.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-data-zone.DataSourceBase.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="cdk-data-zone.DataSourceBase.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

The timestamp of when the data source was created.

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="cdk-data-zone.DataSourceBase.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

The timestamp of when the data source was updated.

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="cdk-data-zone.DataSourceBase.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

The identifier of the data source run.

---

##### `environment`<sup>Required</sup> <a name="environment" id="cdk-data-zone.DataSourceBase.property.environment"></a>

```typescript
public readonly environment: IEnvironment;
```

- *Type:* <a href="#cdk-data-zone.IEnvironment">IEnvironment</a>

The ID of the environment in which the data source exists.

---

##### `lastRunAssetCount`<sup>Required</sup> <a name="lastRunAssetCount" id="cdk-data-zone.DataSourceBase.property.lastRunAssetCount"></a>

```typescript
public readonly lastRunAssetCount: IResolvable;
```

- *Type:* aws-cdk-lib.IResolvable

The count of the assets created during the last data source run.

---

##### `lastRunAt`<sup>Required</sup> <a name="lastRunAt" id="cdk-data-zone.DataSourceBase.property.lastRunAt"></a>

```typescript
public readonly lastRunAt: string;
```

- *Type:* string

The timestamp of when the data source run was last performed.

---

##### `lastRunStatus`<sup>Required</sup> <a name="lastRunStatus" id="cdk-data-zone.DataSourceBase.property.lastRunStatus"></a>

```typescript
public readonly lastRunStatus: string;
```

- *Type:* string

The status of the last data source run.

---

##### `project`<sup>Required</sup> <a name="project" id="cdk-data-zone.DataSourceBase.property.project"></a>

```typescript
public readonly project: IProject;
```

- *Type:* <a href="#cdk-data-zone.IProject">IProject</a>

The project ID included in the data source run activity.

---

##### `status`<sup>Required</sup> <a name="status" id="cdk-data-zone.DataSourceBase.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The status of the data source.

---


### Domain <a name="Domain" id="cdk-data-zone.Domain"></a>

#### Initializers <a name="Initializers" id="cdk-data-zone.Domain.Initializer"></a>

```typescript
import { Domain } from 'cdk-data-zone'

new Domain(scope: Construct, id: string, props: DomainProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.Domain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-data-zone.Domain.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.Domain.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-data-zone.DomainProps">DomainProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-data-zone.Domain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-data-zone.Domain.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-data-zone.Domain.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-data-zone.DomainProps">DomainProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.Domain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-data-zone.Domain.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#cdk-data-zone.Domain.addSingleSignOn">addSingleSignOn</a></code> | *No description.* |
| <code><a href="#cdk-data-zone.Domain.createProject">createProject</a></code> | *No description.* |
| <code><a href="#cdk-data-zone.Domain.enableBlueprint">enableBlueprint</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-data-zone.Domain.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-data-zone.Domain.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-data-zone.Domain.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addSingleSignOn` <a name="addSingleSignOn" id="cdk-data-zone.Domain.addSingleSignOn"></a>

```typescript
public addSingleSignOn(singleSignOn: SingleSignOn): void
```

###### `singleSignOn`<sup>Required</sup> <a name="singleSignOn" id="cdk-data-zone.Domain.addSingleSignOn.parameter.singleSignOn"></a>

- *Type:* <a href="#cdk-data-zone.SingleSignOn">SingleSignOn</a>

---

##### `createProject` <a name="createProject" id="cdk-data-zone.Domain.createProject"></a>

```typescript
public createProject(id: string, options: ProjectOptions): Project
```

###### `id`<sup>Required</sup> <a name="id" id="cdk-data-zone.Domain.createProject.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="cdk-data-zone.Domain.createProject.parameter.options"></a>

- *Type:* <a href="#cdk-data-zone.ProjectOptions">ProjectOptions</a>

---

##### `enableBlueprint` <a name="enableBlueprint" id="cdk-data-zone.Domain.enableBlueprint"></a>

```typescript
public enableBlueprint(blueprintIdentifier: string, options?: BlueprintOptions): Blueprint
```

###### `blueprintIdentifier`<sup>Required</sup> <a name="blueprintIdentifier" id="cdk-data-zone.Domain.enableBlueprint.parameter.blueprintIdentifier"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk-data-zone.Domain.enableBlueprint.parameter.options"></a>

- *Type:* <a href="#cdk-data-zone.BlueprintOptions">BlueprintOptions</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.Domain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-data-zone.Domain.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-data-zone.Domain.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-data-zone.Domain.isConstruct"></a>

```typescript
import { Domain } from 'cdk-data-zone'

Domain.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-data-zone.Domain.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-data-zone.Domain.isOwnedResource"></a>

```typescript
import { Domain } from 'cdk-data-zone'

Domain.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-data-zone.Domain.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-data-zone.Domain.isResource"></a>

```typescript
import { Domain } from 'cdk-data-zone'

Domain.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-data-zone.Domain.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.Domain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-data-zone.Domain.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-data-zone.Domain.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-data-zone.Domain.property.createdAt">createdAt</a></code> | <code>string</code> | The timestamp of when the data source was created. |
| <code><a href="#cdk-data-zone.Domain.property.updatedAt">updatedAt</a></code> | <code>string</code> | The timestamp of when the data source was updated. |
| <code><a href="#cdk-data-zone.Domain.property.domainArn">domainArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.Domain.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.Domain.property.managedAccount">managedAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.Domain.property.portalUrl">portalUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.Domain.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.Domain.property.domainExecutionRole">domainExecutionRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | *No description.* |
| <code><a href="#cdk-data-zone.Domain.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | *No description.* |
| <code><a href="#cdk-data-zone.Domain.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.Domain.property.description">description</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-data-zone.Domain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-data-zone.Domain.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-data-zone.Domain.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="cdk-data-zone.Domain.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

The timestamp of when the data source was created.

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="cdk-data-zone.Domain.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

The timestamp of when the data source was updated.

---

##### `domainArn`<sup>Required</sup> <a name="domainArn" id="cdk-data-zone.Domain.property.domainArn"></a>

```typescript
public readonly domainArn: string;
```

- *Type:* string

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="cdk-data-zone.Domain.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `managedAccount`<sup>Required</sup> <a name="managedAccount" id="cdk-data-zone.Domain.property.managedAccount"></a>

```typescript
public readonly managedAccount: string;
```

- *Type:* string

---

##### `portalUrl`<sup>Required</sup> <a name="portalUrl" id="cdk-data-zone.Domain.property.portalUrl"></a>

```typescript
public readonly portalUrl: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="cdk-data-zone.Domain.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `domainExecutionRole`<sup>Required</sup> <a name="domainExecutionRole" id="cdk-data-zone.Domain.property.domainExecutionRole"></a>

```typescript
public readonly domainExecutionRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="cdk-data-zone.Domain.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-data-zone.Domain.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-data-zone.Domain.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---


### DomainBase <a name="DomainBase" id="cdk-data-zone.DomainBase"></a>

- *Implements:* <a href="#cdk-data-zone.IDomain">IDomain</a>

#### Initializers <a name="Initializers" id="cdk-data-zone.DomainBase.Initializer"></a>

```typescript
import { DomainBase } from 'cdk-data-zone'

new DomainBase(scope: Construct, id: string, props?: ResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.DomainBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-data-zone.DomainBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.DomainBase.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.ResourceProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-data-zone.DomainBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-data-zone.DomainBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk-data-zone.DomainBase.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.ResourceProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.DomainBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-data-zone.DomainBase.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#cdk-data-zone.DomainBase.addSingleSignOn">addSingleSignOn</a></code> | *No description.* |
| <code><a href="#cdk-data-zone.DomainBase.createProject">createProject</a></code> | *No description.* |
| <code><a href="#cdk-data-zone.DomainBase.enableBlueprint">enableBlueprint</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-data-zone.DomainBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-data-zone.DomainBase.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-data-zone.DomainBase.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addSingleSignOn` <a name="addSingleSignOn" id="cdk-data-zone.DomainBase.addSingleSignOn"></a>

```typescript
public addSingleSignOn(singleSignOn: SingleSignOn): void
```

###### `singleSignOn`<sup>Required</sup> <a name="singleSignOn" id="cdk-data-zone.DomainBase.addSingleSignOn.parameter.singleSignOn"></a>

- *Type:* <a href="#cdk-data-zone.SingleSignOn">SingleSignOn</a>

---

##### `createProject` <a name="createProject" id="cdk-data-zone.DomainBase.createProject"></a>

```typescript
public createProject(id: string, options: ProjectOptions): Project
```

###### `id`<sup>Required</sup> <a name="id" id="cdk-data-zone.DomainBase.createProject.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="cdk-data-zone.DomainBase.createProject.parameter.options"></a>

- *Type:* <a href="#cdk-data-zone.ProjectOptions">ProjectOptions</a>

---

##### `enableBlueprint` <a name="enableBlueprint" id="cdk-data-zone.DomainBase.enableBlueprint"></a>

```typescript
public enableBlueprint(blueprintIdentifier: string, options?: BlueprintOptions): Blueprint
```

###### `blueprintIdentifier`<sup>Required</sup> <a name="blueprintIdentifier" id="cdk-data-zone.DomainBase.enableBlueprint.parameter.blueprintIdentifier"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk-data-zone.DomainBase.enableBlueprint.parameter.options"></a>

- *Type:* <a href="#cdk-data-zone.BlueprintOptions">BlueprintOptions</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.DomainBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-data-zone.DomainBase.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-data-zone.DomainBase.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-data-zone.DomainBase.isConstruct"></a>

```typescript
import { DomainBase } from 'cdk-data-zone'

DomainBase.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-data-zone.DomainBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-data-zone.DomainBase.isOwnedResource"></a>

```typescript
import { DomainBase } from 'cdk-data-zone'

DomainBase.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-data-zone.DomainBase.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-data-zone.DomainBase.isResource"></a>

```typescript
import { DomainBase } from 'cdk-data-zone'

DomainBase.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-data-zone.DomainBase.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.DomainBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-data-zone.DomainBase.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-data-zone.DomainBase.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-data-zone.DomainBase.property.createdAt">createdAt</a></code> | <code>string</code> | The timestamp of when the data source was created. |
| <code><a href="#cdk-data-zone.DomainBase.property.updatedAt">updatedAt</a></code> | <code>string</code> | The timestamp of when the data source was updated. |
| <code><a href="#cdk-data-zone.DomainBase.property.domainArn">domainArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.DomainBase.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.DomainBase.property.managedAccount">managedAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.DomainBase.property.portalUrl">portalUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.DomainBase.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-data-zone.DomainBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-data-zone.DomainBase.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-data-zone.DomainBase.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="cdk-data-zone.DomainBase.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

The timestamp of when the data source was created.

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="cdk-data-zone.DomainBase.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

The timestamp of when the data source was updated.

---

##### `domainArn`<sup>Required</sup> <a name="domainArn" id="cdk-data-zone.DomainBase.property.domainArn"></a>

```typescript
public readonly domainArn: string;
```

- *Type:* string

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="cdk-data-zone.DomainBase.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `managedAccount`<sup>Required</sup> <a name="managedAccount" id="cdk-data-zone.DomainBase.property.managedAccount"></a>

```typescript
public readonly managedAccount: string;
```

- *Type:* string

---

##### `portalUrl`<sup>Required</sup> <a name="portalUrl" id="cdk-data-zone.DomainBase.property.portalUrl"></a>

```typescript
public readonly portalUrl: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="cdk-data-zone.DomainBase.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---


### Environment <a name="Environment" id="cdk-data-zone.Environment"></a>

#### Initializers <a name="Initializers" id="cdk-data-zone.Environment.Initializer"></a>

```typescript
import { Environment } from 'cdk-data-zone'

new Environment(scope: Construct, id: string, props: EnvironmentProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.Environment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-data-zone.Environment.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.Environment.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-data-zone.EnvironmentProps">EnvironmentProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-data-zone.Environment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-data-zone.Environment.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-data-zone.Environment.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-data-zone.EnvironmentProps">EnvironmentProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.Environment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-data-zone.Environment.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#cdk-data-zone.Environment.addDataSource">addDataSource</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-data-zone.Environment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-data-zone.Environment.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-data-zone.Environment.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addDataSource` <a name="addDataSource" id="cdk-data-zone.Environment.addDataSource"></a>

```typescript
public addDataSource(name: string, options: DataSourceOptions): DataSource
```

###### `name`<sup>Required</sup> <a name="name" id="cdk-data-zone.Environment.addDataSource.parameter.name"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="cdk-data-zone.Environment.addDataSource.parameter.options"></a>

- *Type:* <a href="#cdk-data-zone.DataSourceOptions">DataSourceOptions</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.Environment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-data-zone.Environment.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-data-zone.Environment.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-data-zone.Environment.isConstruct"></a>

```typescript
import { Environment } from 'cdk-data-zone'

Environment.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-data-zone.Environment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-data-zone.Environment.isOwnedResource"></a>

```typescript
import { Environment } from 'cdk-data-zone'

Environment.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-data-zone.Environment.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-data-zone.Environment.isResource"></a>

```typescript
import { Environment } from 'cdk-data-zone'

Environment.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-data-zone.Environment.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.Environment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-data-zone.Environment.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-data-zone.Environment.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-data-zone.Environment.property.createdAt">createdAt</a></code> | <code>string</code> | The timestamp of when the environment was created. |
| <code><a href="#cdk-data-zone.Environment.property.updatedAt">updatedAt</a></code> | <code>string</code> | The timestamp of when the environment was updated. |
| <code><a href="#cdk-data-zone.Environment.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | The identifier of the AWS account in which an environment exists. |
| <code><a href="#cdk-data-zone.Environment.property.awsAccountRegion">awsAccountRegion</a></code> | <code>string</code> | The AWS Region in which an environment exists. |
| <code><a href="#cdk-data-zone.Environment.property.createdBy">createdBy</a></code> | <code>string</code> | The Amazon  user who created the environment. |
| <code><a href="#cdk-data-zone.Environment.property.domainId">domainId</a></code> | <code>string</code> | The identifier of the Amazon  domain in which the environment exists. |
| <code><a href="#cdk-data-zone.Environment.property.environmentBlueprintId">environmentBlueprintId</a></code> | <code>string</code> | The identifier of a blueprint with which an environment profile, or a custom environment is created. |
| <code><a href="#cdk-data-zone.Environment.property.environmentId">environmentId</a></code> | <code>string</code> | The identifier of the environment. |
| <code><a href="#cdk-data-zone.Environment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.Environment.property.project">project</a></code> | <code><a href="#cdk-data-zone.IProject">IProject</a></code> | The identifier of the project in which the environment exists. |
| <code><a href="#cdk-data-zone.Environment.property.provider">provider</a></code> | <code>string</code> | The provider of the environment. |
| <code><a href="#cdk-data-zone.Environment.property.status">status</a></code> | <code>string</code> | The status of the environment. |
| <code><a href="#cdk-data-zone.Environment.property.environmentProfile">environmentProfile</a></code> | <code><a href="#cdk-data-zone.IEnvironmentProfile">IEnvironmentProfile</a></code> | The identifier of the environment profile with which the environment was created. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-data-zone.Environment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-data-zone.Environment.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-data-zone.Environment.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="cdk-data-zone.Environment.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

The timestamp of when the environment was created.

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="cdk-data-zone.Environment.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

The timestamp of when the environment was updated.

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="cdk-data-zone.Environment.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

The identifier of the AWS account in which an environment exists.

---

##### `awsAccountRegion`<sup>Required</sup> <a name="awsAccountRegion" id="cdk-data-zone.Environment.property.awsAccountRegion"></a>

```typescript
public readonly awsAccountRegion: string;
```

- *Type:* string

The AWS Region in which an environment exists.

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="cdk-data-zone.Environment.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

The Amazon  user who created the environment.

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="cdk-data-zone.Environment.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The identifier of the Amazon  domain in which the environment exists.

---

##### `environmentBlueprintId`<sup>Required</sup> <a name="environmentBlueprintId" id="cdk-data-zone.Environment.property.environmentBlueprintId"></a>

```typescript
public readonly environmentBlueprintId: string;
```

- *Type:* string

The identifier of a blueprint with which an environment profile, or a custom environment is created.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="cdk-data-zone.Environment.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The identifier of the environment.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-data-zone.Environment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="cdk-data-zone.Environment.property.project"></a>

```typescript
public readonly project: IProject;
```

- *Type:* <a href="#cdk-data-zone.IProject">IProject</a>

The identifier of the project in which the environment exists.

---

##### `provider`<sup>Required</sup> <a name="provider" id="cdk-data-zone.Environment.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

The provider of the environment.

---

##### `status`<sup>Required</sup> <a name="status" id="cdk-data-zone.Environment.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The status of the environment.

---

##### `environmentProfile`<sup>Optional</sup> <a name="environmentProfile" id="cdk-data-zone.Environment.property.environmentProfile"></a>

```typescript
public readonly environmentProfile: IEnvironmentProfile;
```

- *Type:* <a href="#cdk-data-zone.IEnvironmentProfile">IEnvironmentProfile</a>

The identifier of the environment profile with which the environment was created.

---


### EnvironmentBase <a name="EnvironmentBase" id="cdk-data-zone.EnvironmentBase"></a>

- *Implements:* <a href="#cdk-data-zone.IEnvironment">IEnvironment</a>

#### Initializers <a name="Initializers" id="cdk-data-zone.EnvironmentBase.Initializer"></a>

```typescript
import { EnvironmentBase } from 'cdk-data-zone'

new EnvironmentBase(scope: Construct, id: string, props?: ResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.EnvironmentBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-data-zone.EnvironmentBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.EnvironmentBase.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.ResourceProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-data-zone.EnvironmentBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-data-zone.EnvironmentBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk-data-zone.EnvironmentBase.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.ResourceProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.EnvironmentBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-data-zone.EnvironmentBase.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#cdk-data-zone.EnvironmentBase.addDataSource">addDataSource</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-data-zone.EnvironmentBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-data-zone.EnvironmentBase.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-data-zone.EnvironmentBase.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addDataSource` <a name="addDataSource" id="cdk-data-zone.EnvironmentBase.addDataSource"></a>

```typescript
public addDataSource(name: string, options: DataSourceOptions): DataSource
```

###### `name`<sup>Required</sup> <a name="name" id="cdk-data-zone.EnvironmentBase.addDataSource.parameter.name"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="cdk-data-zone.EnvironmentBase.addDataSource.parameter.options"></a>

- *Type:* <a href="#cdk-data-zone.DataSourceOptions">DataSourceOptions</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.EnvironmentBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-data-zone.EnvironmentBase.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-data-zone.EnvironmentBase.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-data-zone.EnvironmentBase.isConstruct"></a>

```typescript
import { EnvironmentBase } from 'cdk-data-zone'

EnvironmentBase.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-data-zone.EnvironmentBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-data-zone.EnvironmentBase.isOwnedResource"></a>

```typescript
import { EnvironmentBase } from 'cdk-data-zone'

EnvironmentBase.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-data-zone.EnvironmentBase.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-data-zone.EnvironmentBase.isResource"></a>

```typescript
import { EnvironmentBase } from 'cdk-data-zone'

EnvironmentBase.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-data-zone.EnvironmentBase.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.EnvironmentBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-data-zone.EnvironmentBase.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-data-zone.EnvironmentBase.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-data-zone.EnvironmentBase.property.createdAt">createdAt</a></code> | <code>string</code> | The timestamp of when the data source was created. |
| <code><a href="#cdk-data-zone.EnvironmentBase.property.updatedAt">updatedAt</a></code> | <code>string</code> | The timestamp of when the data source was updated. |
| <code><a href="#cdk-data-zone.EnvironmentBase.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | The identifier of the AWS account in which an environment exists. |
| <code><a href="#cdk-data-zone.EnvironmentBase.property.awsAccountRegion">awsAccountRegion</a></code> | <code>string</code> | The AWS Region in which an environment exists. |
| <code><a href="#cdk-data-zone.EnvironmentBase.property.createdBy">createdBy</a></code> | <code>string</code> | The Amazon  user who created the environment. |
| <code><a href="#cdk-data-zone.EnvironmentBase.property.domainId">domainId</a></code> | <code>string</code> | The identifier of the Amazon  domain in which the environment exists. |
| <code><a href="#cdk-data-zone.EnvironmentBase.property.environmentBlueprintId">environmentBlueprintId</a></code> | <code>string</code> | The identifier of a blueprint with which an environment profile is created. |
| <code><a href="#cdk-data-zone.EnvironmentBase.property.environmentId">environmentId</a></code> | <code>string</code> | The identifier of the environment. |
| <code><a href="#cdk-data-zone.EnvironmentBase.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.EnvironmentBase.property.project">project</a></code> | <code><a href="#cdk-data-zone.IProject">IProject</a></code> | The identifier of the project in which the environment exists. |
| <code><a href="#cdk-data-zone.EnvironmentBase.property.provider">provider</a></code> | <code>string</code> | The provider of the environment. |
| <code><a href="#cdk-data-zone.EnvironmentBase.property.status">status</a></code> | <code>string</code> | The status of the environment. |
| <code><a href="#cdk-data-zone.EnvironmentBase.property.environmentProfile">environmentProfile</a></code> | <code><a href="#cdk-data-zone.IEnvironmentProfile">IEnvironmentProfile</a></code> | The identifier of the environment profile with which the environment was created. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-data-zone.EnvironmentBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-data-zone.EnvironmentBase.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-data-zone.EnvironmentBase.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="cdk-data-zone.EnvironmentBase.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

The timestamp of when the data source was created.

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="cdk-data-zone.EnvironmentBase.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

The timestamp of when the data source was updated.

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="cdk-data-zone.EnvironmentBase.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

The identifier of the AWS account in which an environment exists.

---

##### `awsAccountRegion`<sup>Required</sup> <a name="awsAccountRegion" id="cdk-data-zone.EnvironmentBase.property.awsAccountRegion"></a>

```typescript
public readonly awsAccountRegion: string;
```

- *Type:* string

The AWS Region in which an environment exists.

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="cdk-data-zone.EnvironmentBase.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

The Amazon  user who created the environment.

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="cdk-data-zone.EnvironmentBase.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The identifier of the Amazon  domain in which the environment exists.

---

##### `environmentBlueprintId`<sup>Required</sup> <a name="environmentBlueprintId" id="cdk-data-zone.EnvironmentBase.property.environmentBlueprintId"></a>

```typescript
public readonly environmentBlueprintId: string;
```

- *Type:* string

The identifier of a blueprint with which an environment profile is created.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="cdk-data-zone.EnvironmentBase.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The identifier of the environment.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-data-zone.EnvironmentBase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="cdk-data-zone.EnvironmentBase.property.project"></a>

```typescript
public readonly project: IProject;
```

- *Type:* <a href="#cdk-data-zone.IProject">IProject</a>

The identifier of the project in which the environment exists.

---

##### `provider`<sup>Required</sup> <a name="provider" id="cdk-data-zone.EnvironmentBase.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

The provider of the environment.

---

##### `status`<sup>Required</sup> <a name="status" id="cdk-data-zone.EnvironmentBase.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The status of the environment.

---

##### `environmentProfile`<sup>Optional</sup> <a name="environmentProfile" id="cdk-data-zone.EnvironmentBase.property.environmentProfile"></a>

```typescript
public readonly environmentProfile: IEnvironmentProfile;
```

- *Type:* <a href="#cdk-data-zone.IEnvironmentProfile">IEnvironmentProfile</a>

The identifier of the environment profile with which the environment was created.

---


### EnvironmentProfile <a name="EnvironmentProfile" id="cdk-data-zone.EnvironmentProfile"></a>

#### Initializers <a name="Initializers" id="cdk-data-zone.EnvironmentProfile.Initializer"></a>

```typescript
import { EnvironmentProfile } from 'cdk-data-zone'

new EnvironmentProfile(scope: Construct, id: string, props: EnvironmentProfileProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.EnvironmentProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-data-zone.EnvironmentProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.EnvironmentProfile.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-data-zone.EnvironmentProfileProps">EnvironmentProfileProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-data-zone.EnvironmentProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-data-zone.EnvironmentProfile.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-data-zone.EnvironmentProfile.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-data-zone.EnvironmentProfileProps">EnvironmentProfileProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.EnvironmentProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-data-zone.EnvironmentProfile.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#cdk-data-zone.EnvironmentProfile.addEnvironment">addEnvironment</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-data-zone.EnvironmentProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-data-zone.EnvironmentProfile.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-data-zone.EnvironmentProfile.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEnvironment` <a name="addEnvironment" id="cdk-data-zone.EnvironmentProfile.addEnvironment"></a>

```typescript
public addEnvironment(id: string, options: EnvironmentOptions): Environment
```

###### `id`<sup>Required</sup> <a name="id" id="cdk-data-zone.EnvironmentProfile.addEnvironment.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="cdk-data-zone.EnvironmentProfile.addEnvironment.parameter.options"></a>

- *Type:* <a href="#cdk-data-zone.EnvironmentOptions">EnvironmentOptions</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.EnvironmentProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-data-zone.EnvironmentProfile.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-data-zone.EnvironmentProfile.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-data-zone.EnvironmentProfile.isConstruct"></a>

```typescript
import { EnvironmentProfile } from 'cdk-data-zone'

EnvironmentProfile.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-data-zone.EnvironmentProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-data-zone.EnvironmentProfile.isOwnedResource"></a>

```typescript
import { EnvironmentProfile } from 'cdk-data-zone'

EnvironmentProfile.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-data-zone.EnvironmentProfile.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-data-zone.EnvironmentProfile.isResource"></a>

```typescript
import { EnvironmentProfile } from 'cdk-data-zone'

EnvironmentProfile.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-data-zone.EnvironmentProfile.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.EnvironmentProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-data-zone.EnvironmentProfile.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-data-zone.EnvironmentProfile.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-data-zone.EnvironmentProfile.property.createdAt">createdAt</a></code> | <code>string</code> | The timestamp of when an environment profile was created. |
| <code><a href="#cdk-data-zone.EnvironmentProfile.property.updatedAt">updatedAt</a></code> | <code>string</code> | The timestamp of when the environment profile was updated. |
| <code><a href="#cdk-data-zone.EnvironmentProfile.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.EnvironmentProfile.property.awsAccountRegion">awsAccountRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.EnvironmentProfile.property.createdBy">createdBy</a></code> | <code>string</code> | The Amazon  user who created the environment profile. |
| <code><a href="#cdk-data-zone.EnvironmentProfile.property.environmentBlueprintId">environmentBlueprintId</a></code> | <code>string</code> | The identifier of a blueprint with which an environment profile is created. |
| <code><a href="#cdk-data-zone.EnvironmentProfile.property.environmentProfileId">environmentProfileId</a></code> | <code>string</code> | The identifier of the environment profile. |
| <code><a href="#cdk-data-zone.EnvironmentProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.EnvironmentProfile.property.project">project</a></code> | <code><a href="#cdk-data-zone.IProject">IProject</a></code> | The identifier of a project in which an environment profile exists. |
| <code><a href="#cdk-data-zone.EnvironmentProfile.property.description">description</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-data-zone.EnvironmentProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-data-zone.EnvironmentProfile.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-data-zone.EnvironmentProfile.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="cdk-data-zone.EnvironmentProfile.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

The timestamp of when an environment profile was created.

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="cdk-data-zone.EnvironmentProfile.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

The timestamp of when the environment profile was updated.

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="cdk-data-zone.EnvironmentProfile.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `awsAccountRegion`<sup>Required</sup> <a name="awsAccountRegion" id="cdk-data-zone.EnvironmentProfile.property.awsAccountRegion"></a>

```typescript
public readonly awsAccountRegion: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="cdk-data-zone.EnvironmentProfile.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

The Amazon  user who created the environment profile.

---

##### `environmentBlueprintId`<sup>Required</sup> <a name="environmentBlueprintId" id="cdk-data-zone.EnvironmentProfile.property.environmentBlueprintId"></a>

```typescript
public readonly environmentBlueprintId: string;
```

- *Type:* string

The identifier of a blueprint with which an environment profile is created.

---

##### `environmentProfileId`<sup>Required</sup> <a name="environmentProfileId" id="cdk-data-zone.EnvironmentProfile.property.environmentProfileId"></a>

```typescript
public readonly environmentProfileId: string;
```

- *Type:* string

The identifier of the environment profile.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-data-zone.EnvironmentProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="cdk-data-zone.EnvironmentProfile.property.project"></a>

```typescript
public readonly project: IProject;
```

- *Type:* <a href="#cdk-data-zone.IProject">IProject</a>

The identifier of a project in which an environment profile exists.

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-data-zone.EnvironmentProfile.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---


### EnvironmentProfileBase <a name="EnvironmentProfileBase" id="cdk-data-zone.EnvironmentProfileBase"></a>

- *Implements:* <a href="#cdk-data-zone.IEnvironmentProfile">IEnvironmentProfile</a>

#### Initializers <a name="Initializers" id="cdk-data-zone.EnvironmentProfileBase.Initializer"></a>

```typescript
import { EnvironmentProfileBase } from 'cdk-data-zone'

new EnvironmentProfileBase(scope: Construct, id: string, props?: ResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.EnvironmentProfileBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-data-zone.EnvironmentProfileBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.EnvironmentProfileBase.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.ResourceProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-data-zone.EnvironmentProfileBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-data-zone.EnvironmentProfileBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk-data-zone.EnvironmentProfileBase.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.ResourceProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.EnvironmentProfileBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-data-zone.EnvironmentProfileBase.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#cdk-data-zone.EnvironmentProfileBase.addEnvironment">addEnvironment</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-data-zone.EnvironmentProfileBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-data-zone.EnvironmentProfileBase.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-data-zone.EnvironmentProfileBase.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEnvironment` <a name="addEnvironment" id="cdk-data-zone.EnvironmentProfileBase.addEnvironment"></a>

```typescript
public addEnvironment(id: string, options: EnvironmentOptions): Environment
```

###### `id`<sup>Required</sup> <a name="id" id="cdk-data-zone.EnvironmentProfileBase.addEnvironment.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="cdk-data-zone.EnvironmentProfileBase.addEnvironment.parameter.options"></a>

- *Type:* <a href="#cdk-data-zone.EnvironmentOptions">EnvironmentOptions</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.EnvironmentProfileBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-data-zone.EnvironmentProfileBase.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-data-zone.EnvironmentProfileBase.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-data-zone.EnvironmentProfileBase.isConstruct"></a>

```typescript
import { EnvironmentProfileBase } from 'cdk-data-zone'

EnvironmentProfileBase.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-data-zone.EnvironmentProfileBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-data-zone.EnvironmentProfileBase.isOwnedResource"></a>

```typescript
import { EnvironmentProfileBase } from 'cdk-data-zone'

EnvironmentProfileBase.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-data-zone.EnvironmentProfileBase.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-data-zone.EnvironmentProfileBase.isResource"></a>

```typescript
import { EnvironmentProfileBase } from 'cdk-data-zone'

EnvironmentProfileBase.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-data-zone.EnvironmentProfileBase.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.EnvironmentProfileBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-data-zone.EnvironmentProfileBase.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-data-zone.EnvironmentProfileBase.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-data-zone.EnvironmentProfileBase.property.createdAt">createdAt</a></code> | <code>string</code> | The timestamp of when the data source was created. |
| <code><a href="#cdk-data-zone.EnvironmentProfileBase.property.updatedAt">updatedAt</a></code> | <code>string</code> | The timestamp of when the data source was updated. |
| <code><a href="#cdk-data-zone.EnvironmentProfileBase.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.EnvironmentProfileBase.property.awsAccountRegion">awsAccountRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.EnvironmentProfileBase.property.createdBy">createdBy</a></code> | <code>string</code> | The Amazon  user who created the environment profile. |
| <code><a href="#cdk-data-zone.EnvironmentProfileBase.property.environmentBlueprintId">environmentBlueprintId</a></code> | <code>string</code> | The identifier of a blueprint with which an environment profile is created. |
| <code><a href="#cdk-data-zone.EnvironmentProfileBase.property.environmentProfileId">environmentProfileId</a></code> | <code>string</code> | The identifier of the environment profile. |
| <code><a href="#cdk-data-zone.EnvironmentProfileBase.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.EnvironmentProfileBase.property.project">project</a></code> | <code><a href="#cdk-data-zone.IProject">IProject</a></code> | The identifier of a project in which an environment profile exists. |
| <code><a href="#cdk-data-zone.EnvironmentProfileBase.property.description">description</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-data-zone.EnvironmentProfileBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-data-zone.EnvironmentProfileBase.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-data-zone.EnvironmentProfileBase.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="cdk-data-zone.EnvironmentProfileBase.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

The timestamp of when the data source was created.

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="cdk-data-zone.EnvironmentProfileBase.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

The timestamp of when the data source was updated.

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="cdk-data-zone.EnvironmentProfileBase.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `awsAccountRegion`<sup>Required</sup> <a name="awsAccountRegion" id="cdk-data-zone.EnvironmentProfileBase.property.awsAccountRegion"></a>

```typescript
public readonly awsAccountRegion: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="cdk-data-zone.EnvironmentProfileBase.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

The Amazon  user who created the environment profile.

---

##### `environmentBlueprintId`<sup>Required</sup> <a name="environmentBlueprintId" id="cdk-data-zone.EnvironmentProfileBase.property.environmentBlueprintId"></a>

```typescript
public readonly environmentBlueprintId: string;
```

- *Type:* string

The identifier of a blueprint with which an environment profile is created.

---

##### `environmentProfileId`<sup>Required</sup> <a name="environmentProfileId" id="cdk-data-zone.EnvironmentProfileBase.property.environmentProfileId"></a>

```typescript
public readonly environmentProfileId: string;
```

- *Type:* string

The identifier of the environment profile.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-data-zone.EnvironmentProfileBase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="cdk-data-zone.EnvironmentProfileBase.property.project"></a>

```typescript
public readonly project: IProject;
```

- *Type:* <a href="#cdk-data-zone.IProject">IProject</a>

The identifier of a project in which an environment profile exists.

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-data-zone.EnvironmentProfileBase.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---


### FormMetadata <a name="FormMetadata" id="cdk-data-zone.FormMetadata"></a>

#### Initializers <a name="Initializers" id="cdk-data-zone.FormMetadata.Initializer"></a>

```typescript
import { FormMetadata } from 'cdk-data-zone'

new FormMetadata(scope: Construct, id: string, props: FormMetadataProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.FormMetadata.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-data-zone.FormMetadata.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.FormMetadata.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-data-zone.FormMetadataProps">FormMetadataProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-data-zone.FormMetadata.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-data-zone.FormMetadata.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-data-zone.FormMetadata.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-data-zone.FormMetadataProps">FormMetadataProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.FormMetadata.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-data-zone.FormMetadata.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-data-zone.FormMetadata.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-data-zone.FormMetadata.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-data-zone.FormMetadata.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.FormMetadata.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-data-zone.FormMetadata.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-data-zone.FormMetadata.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-data-zone.FormMetadata.isConstruct"></a>

```typescript
import { FormMetadata } from 'cdk-data-zone'

FormMetadata.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-data-zone.FormMetadata.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-data-zone.FormMetadata.isOwnedResource"></a>

```typescript
import { FormMetadata } from 'cdk-data-zone'

FormMetadata.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-data-zone.FormMetadata.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-data-zone.FormMetadata.isResource"></a>

```typescript
import { FormMetadata } from 'cdk-data-zone'

FormMetadata.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-data-zone.FormMetadata.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.FormMetadata.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-data-zone.FormMetadata.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-data-zone.FormMetadata.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-data-zone.FormMetadata.property.formName">formName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.FormMetadata.property.formRevision">formRevision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.FormMetadata.property.project">project</a></code> | <code><a href="#cdk-data-zone.Project">Project</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-data-zone.FormMetadata.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-data-zone.FormMetadata.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-data-zone.FormMetadata.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `formName`<sup>Required</sup> <a name="formName" id="cdk-data-zone.FormMetadata.property.formName"></a>

```typescript
public readonly formName: string;
```

- *Type:* string

---

##### `formRevision`<sup>Required</sup> <a name="formRevision" id="cdk-data-zone.FormMetadata.property.formRevision"></a>

```typescript
public readonly formRevision: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="cdk-data-zone.FormMetadata.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* <a href="#cdk-data-zone.Project">Project</a>

---


### FormMetadataBase <a name="FormMetadataBase" id="cdk-data-zone.FormMetadataBase"></a>

- *Implements:* <a href="#cdk-data-zone.IFormMetadata">IFormMetadata</a>

#### Initializers <a name="Initializers" id="cdk-data-zone.FormMetadataBase.Initializer"></a>

```typescript
import { FormMetadataBase } from 'cdk-data-zone'

new FormMetadataBase(scope: Construct, id: string, props?: ResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.FormMetadataBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-data-zone.FormMetadataBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.FormMetadataBase.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.ResourceProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-data-zone.FormMetadataBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-data-zone.FormMetadataBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk-data-zone.FormMetadataBase.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.ResourceProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.FormMetadataBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-data-zone.FormMetadataBase.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-data-zone.FormMetadataBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-data-zone.FormMetadataBase.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-data-zone.FormMetadataBase.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.FormMetadataBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-data-zone.FormMetadataBase.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-data-zone.FormMetadataBase.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-data-zone.FormMetadataBase.isConstruct"></a>

```typescript
import { FormMetadataBase } from 'cdk-data-zone'

FormMetadataBase.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-data-zone.FormMetadataBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-data-zone.FormMetadataBase.isOwnedResource"></a>

```typescript
import { FormMetadataBase } from 'cdk-data-zone'

FormMetadataBase.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-data-zone.FormMetadataBase.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-data-zone.FormMetadataBase.isResource"></a>

```typescript
import { FormMetadataBase } from 'cdk-data-zone'

FormMetadataBase.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-data-zone.FormMetadataBase.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.FormMetadataBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-data-zone.FormMetadataBase.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-data-zone.FormMetadataBase.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-data-zone.FormMetadataBase.property.formName">formName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.FormMetadataBase.property.formRevision">formRevision</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-data-zone.FormMetadataBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-data-zone.FormMetadataBase.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-data-zone.FormMetadataBase.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `formName`<sup>Required</sup> <a name="formName" id="cdk-data-zone.FormMetadataBase.property.formName"></a>

```typescript
public readonly formName: string;
```

- *Type:* string

---

##### `formRevision`<sup>Required</sup> <a name="formRevision" id="cdk-data-zone.FormMetadataBase.property.formRevision"></a>

```typescript
public readonly formRevision: string;
```

- *Type:* string

---


### Glossary <a name="Glossary" id="cdk-data-zone.Glossary"></a>

#### Initializers <a name="Initializers" id="cdk-data-zone.Glossary.Initializer"></a>

```typescript
import { Glossary } from 'cdk-data-zone'

new Glossary(scope: Construct, id: string, props: GlossaryProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.Glossary.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-data-zone.Glossary.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.Glossary.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-data-zone.GlossaryProps">GlossaryProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-data-zone.Glossary.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-data-zone.Glossary.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-data-zone.Glossary.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-data-zone.GlossaryProps">GlossaryProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.Glossary.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-data-zone.Glossary.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#cdk-data-zone.Glossary.addGlossaryTerms">addGlossaryTerms</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-data-zone.Glossary.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-data-zone.Glossary.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-data-zone.Glossary.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addGlossaryTerms` <a name="addGlossaryTerms" id="cdk-data-zone.Glossary.addGlossaryTerms"></a>

```typescript
public addGlossaryTerms(terms: GlossaryTermOptions[]): GlossaryTerm[]
```

###### `terms`<sup>Required</sup> <a name="terms" id="cdk-data-zone.Glossary.addGlossaryTerms.parameter.terms"></a>

- *Type:* <a href="#cdk-data-zone.GlossaryTermOptions">GlossaryTermOptions</a>[]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.Glossary.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-data-zone.Glossary.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-data-zone.Glossary.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-data-zone.Glossary.isConstruct"></a>

```typescript
import { Glossary } from 'cdk-data-zone'

Glossary.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-data-zone.Glossary.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-data-zone.Glossary.isOwnedResource"></a>

```typescript
import { Glossary } from 'cdk-data-zone'

Glossary.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-data-zone.Glossary.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-data-zone.Glossary.isResource"></a>

```typescript
import { Glossary } from 'cdk-data-zone'

Glossary.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-data-zone.Glossary.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.Glossary.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-data-zone.Glossary.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-data-zone.Glossary.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-data-zone.Glossary.property.glossaryId">glossaryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.Glossary.property.project">project</a></code> | <code><a href="#cdk-data-zone.Project">Project</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-data-zone.Glossary.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-data-zone.Glossary.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-data-zone.Glossary.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `glossaryId`<sup>Required</sup> <a name="glossaryId" id="cdk-data-zone.Glossary.property.glossaryId"></a>

```typescript
public readonly glossaryId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="cdk-data-zone.Glossary.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* <a href="#cdk-data-zone.Project">Project</a>

---


### GlossaryBase <a name="GlossaryBase" id="cdk-data-zone.GlossaryBase"></a>

- *Implements:* <a href="#cdk-data-zone.IGlossary">IGlossary</a>

#### Initializers <a name="Initializers" id="cdk-data-zone.GlossaryBase.Initializer"></a>

```typescript
import { GlossaryBase } from 'cdk-data-zone'

new GlossaryBase(scope: Construct, id: string, props?: ResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.GlossaryBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-data-zone.GlossaryBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.GlossaryBase.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.ResourceProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-data-zone.GlossaryBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-data-zone.GlossaryBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk-data-zone.GlossaryBase.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.ResourceProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.GlossaryBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-data-zone.GlossaryBase.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#cdk-data-zone.GlossaryBase.addGlossaryTerms">addGlossaryTerms</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-data-zone.GlossaryBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-data-zone.GlossaryBase.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-data-zone.GlossaryBase.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addGlossaryTerms` <a name="addGlossaryTerms" id="cdk-data-zone.GlossaryBase.addGlossaryTerms"></a>

```typescript
public addGlossaryTerms(terms: GlossaryTermOptions[]): GlossaryTerm[]
```

###### `terms`<sup>Required</sup> <a name="terms" id="cdk-data-zone.GlossaryBase.addGlossaryTerms.parameter.terms"></a>

- *Type:* <a href="#cdk-data-zone.GlossaryTermOptions">GlossaryTermOptions</a>[]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.GlossaryBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-data-zone.GlossaryBase.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-data-zone.GlossaryBase.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-data-zone.GlossaryBase.isConstruct"></a>

```typescript
import { GlossaryBase } from 'cdk-data-zone'

GlossaryBase.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-data-zone.GlossaryBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-data-zone.GlossaryBase.isOwnedResource"></a>

```typescript
import { GlossaryBase } from 'cdk-data-zone'

GlossaryBase.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-data-zone.GlossaryBase.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-data-zone.GlossaryBase.isResource"></a>

```typescript
import { GlossaryBase } from 'cdk-data-zone'

GlossaryBase.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-data-zone.GlossaryBase.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.GlossaryBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-data-zone.GlossaryBase.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-data-zone.GlossaryBase.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-data-zone.GlossaryBase.property.glossaryId">glossaryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.GlossaryBase.property.project">project</a></code> | <code><a href="#cdk-data-zone.Project">Project</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-data-zone.GlossaryBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-data-zone.GlossaryBase.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-data-zone.GlossaryBase.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `glossaryId`<sup>Required</sup> <a name="glossaryId" id="cdk-data-zone.GlossaryBase.property.glossaryId"></a>

```typescript
public readonly glossaryId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="cdk-data-zone.GlossaryBase.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* <a href="#cdk-data-zone.Project">Project</a>

---


### GlossaryTerm <a name="GlossaryTerm" id="cdk-data-zone.GlossaryTerm"></a>

#### Initializers <a name="Initializers" id="cdk-data-zone.GlossaryTerm.Initializer"></a>

```typescript
import { GlossaryTerm } from 'cdk-data-zone'

new GlossaryTerm(scope: Construct, id: string, props: GlossaryTermProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.GlossaryTerm.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-data-zone.GlossaryTerm.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.GlossaryTerm.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-data-zone.GlossaryTermProps">GlossaryTermProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-data-zone.GlossaryTerm.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-data-zone.GlossaryTerm.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-data-zone.GlossaryTerm.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-data-zone.GlossaryTermProps">GlossaryTermProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.GlossaryTerm.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-data-zone.GlossaryTerm.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-data-zone.GlossaryTerm.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-data-zone.GlossaryTerm.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-data-zone.GlossaryTerm.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.GlossaryTerm.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-data-zone.GlossaryTerm.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-data-zone.GlossaryTerm.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-data-zone.GlossaryTerm.isConstruct"></a>

```typescript
import { GlossaryTerm } from 'cdk-data-zone'

GlossaryTerm.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-data-zone.GlossaryTerm.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-data-zone.GlossaryTerm.isOwnedResource"></a>

```typescript
import { GlossaryTerm } from 'cdk-data-zone'

GlossaryTerm.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-data-zone.GlossaryTerm.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-data-zone.GlossaryTerm.isResource"></a>

```typescript
import { GlossaryTerm } from 'cdk-data-zone'

GlossaryTerm.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-data-zone.GlossaryTerm.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.GlossaryTerm.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-data-zone.GlossaryTerm.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-data-zone.GlossaryTerm.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-data-zone.GlossaryTerm.property.glossaryTermId">glossaryTermId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.GlossaryTerm.property.glossary">glossary</a></code> | <code><a href="#cdk-data-zone.IGlossary">IGlossary</a></code> | *No description.* |
| <code><a href="#cdk-data-zone.GlossaryTerm.property.project">project</a></code> | <code><a href="#cdk-data-zone.Project">Project</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-data-zone.GlossaryTerm.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-data-zone.GlossaryTerm.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-data-zone.GlossaryTerm.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `glossaryTermId`<sup>Required</sup> <a name="glossaryTermId" id="cdk-data-zone.GlossaryTerm.property.glossaryTermId"></a>

```typescript
public readonly glossaryTermId: string;
```

- *Type:* string

---

##### `glossary`<sup>Required</sup> <a name="glossary" id="cdk-data-zone.GlossaryTerm.property.glossary"></a>

```typescript
public readonly glossary: IGlossary;
```

- *Type:* <a href="#cdk-data-zone.IGlossary">IGlossary</a>

---

##### `project`<sup>Required</sup> <a name="project" id="cdk-data-zone.GlossaryTerm.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* <a href="#cdk-data-zone.Project">Project</a>

---


### GlossaryTermBase <a name="GlossaryTermBase" id="cdk-data-zone.GlossaryTermBase"></a>

- *Implements:* <a href="#cdk-data-zone.IGlossaryTerm">IGlossaryTerm</a>

#### Initializers <a name="Initializers" id="cdk-data-zone.GlossaryTermBase.Initializer"></a>

```typescript
import { GlossaryTermBase } from 'cdk-data-zone'

new GlossaryTermBase(scope: Construct, id: string, props?: ResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.GlossaryTermBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-data-zone.GlossaryTermBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.GlossaryTermBase.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.ResourceProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-data-zone.GlossaryTermBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-data-zone.GlossaryTermBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk-data-zone.GlossaryTermBase.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.ResourceProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.GlossaryTermBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-data-zone.GlossaryTermBase.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-data-zone.GlossaryTermBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-data-zone.GlossaryTermBase.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-data-zone.GlossaryTermBase.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.GlossaryTermBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-data-zone.GlossaryTermBase.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-data-zone.GlossaryTermBase.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-data-zone.GlossaryTermBase.isConstruct"></a>

```typescript
import { GlossaryTermBase } from 'cdk-data-zone'

GlossaryTermBase.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-data-zone.GlossaryTermBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-data-zone.GlossaryTermBase.isOwnedResource"></a>

```typescript
import { GlossaryTermBase } from 'cdk-data-zone'

GlossaryTermBase.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-data-zone.GlossaryTermBase.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-data-zone.GlossaryTermBase.isResource"></a>

```typescript
import { GlossaryTermBase } from 'cdk-data-zone'

GlossaryTermBase.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-data-zone.GlossaryTermBase.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.GlossaryTermBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-data-zone.GlossaryTermBase.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-data-zone.GlossaryTermBase.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-data-zone.GlossaryTermBase.property.glossaryTermId">glossaryTermId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-data-zone.GlossaryTermBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-data-zone.GlossaryTermBase.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-data-zone.GlossaryTermBase.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `glossaryTermId`<sup>Required</sup> <a name="glossaryTermId" id="cdk-data-zone.GlossaryTermBase.property.glossaryTermId"></a>

```typescript
public readonly glossaryTermId: string;
```

- *Type:* string

---


### Project <a name="Project" id="cdk-data-zone.Project"></a>

#### Initializers <a name="Initializers" id="cdk-data-zone.Project.Initializer"></a>

```typescript
import { Project } from 'cdk-data-zone'

new Project(scope: Construct, id: string, props: ProjectProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.Project.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-data-zone.Project.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.Project.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-data-zone.ProjectProps">ProjectProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-data-zone.Project.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-data-zone.Project.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-data-zone.Project.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-data-zone.ProjectProps">ProjectProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.Project.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-data-zone.Project.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#cdk-data-zone.Project.addFormMetadata">addFormMetadata</a></code> | *No description.* |
| <code><a href="#cdk-data-zone.Project.addGlossaries">addGlossaries</a></code> | *No description.* |
| <code><a href="#cdk-data-zone.Project.addGlossary">addGlossary</a></code> | *No description.* |
| <code><a href="#cdk-data-zone.Project.addGlossaryTerm">addGlossaryTerm</a></code> | *No description.* |
| <code><a href="#cdk-data-zone.Project.addMember">addMember</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-data-zone.Project.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-data-zone.Project.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-data-zone.Project.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addFormMetadata` <a name="addFormMetadata" id="cdk-data-zone.Project.addFormMetadata"></a>

```typescript
public addFormMetadata(forms: Forms): void
```

###### `forms`<sup>Required</sup> <a name="forms" id="cdk-data-zone.Project.addFormMetadata.parameter.forms"></a>

- *Type:* <a href="#cdk-data-zone.Forms">Forms</a>

---

##### `addGlossaries` <a name="addGlossaries" id="cdk-data-zone.Project.addGlossaries"></a>

```typescript
public addGlossaries(glossaries: Glossaries): void
```

###### `glossaries`<sup>Required</sup> <a name="glossaries" id="cdk-data-zone.Project.addGlossaries.parameter.glossaries"></a>

- *Type:* <a href="#cdk-data-zone.Glossaries">Glossaries</a>

---

##### `addGlossary` <a name="addGlossary" id="cdk-data-zone.Project.addGlossary"></a>

```typescript
public addGlossary(options: GlossaryOptions): Glossary
```

###### `options`<sup>Required</sup> <a name="options" id="cdk-data-zone.Project.addGlossary.parameter.options"></a>

- *Type:* <a href="#cdk-data-zone.GlossaryOptions">GlossaryOptions</a>

---

##### `addGlossaryTerm` <a name="addGlossaryTerm" id="cdk-data-zone.Project.addGlossaryTerm"></a>

```typescript
public addGlossaryTerm(term: string): void
```

###### `term`<sup>Required</sup> <a name="term" id="cdk-data-zone.Project.addGlossaryTerm.parameter.term"></a>

- *Type:* string

---

##### `addMember` <a name="addMember" id="cdk-data-zone.Project.addMember"></a>

```typescript
public addMember(id: string, options: MemberOptions): void
```

###### `id`<sup>Required</sup> <a name="id" id="cdk-data-zone.Project.addMember.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="cdk-data-zone.Project.addMember.parameter.options"></a>

- *Type:* <a href="#cdk-data-zone.MemberOptions">MemberOptions</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.Project.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-data-zone.Project.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-data-zone.Project.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-data-zone.Project.isConstruct"></a>

```typescript
import { Project } from 'cdk-data-zone'

Project.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-data-zone.Project.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-data-zone.Project.isOwnedResource"></a>

```typescript
import { Project } from 'cdk-data-zone'

Project.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-data-zone.Project.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-data-zone.Project.isResource"></a>

```typescript
import { Project } from 'cdk-data-zone'

Project.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-data-zone.Project.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.Project.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-data-zone.Project.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-data-zone.Project.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-data-zone.Project.property.createdAt">createdAt</a></code> | <code>string</code> | The timestamp of when the data source was created. |
| <code><a href="#cdk-data-zone.Project.property.updatedAt">updatedAt</a></code> | <code>string</code> | The timestamp of when the project was last updated. |
| <code><a href="#cdk-data-zone.Project.property.createdBy">createdBy</a></code> | <code>string</code> | The Amazon  user who created the project. |
| <code><a href="#cdk-data-zone.Project.property.projectDomainId">projectDomainId</a></code> | <code>string</code> | The identifier of a Amazon  domain where the project exists. |
| <code><a href="#cdk-data-zone.Project.property.projectId">projectId</a></code> | <code>string</code> | The identifier of a project. |
| <code><a href="#cdk-data-zone.Project.property.managementRole">managementRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | *No description.* |
| <code><a href="#cdk-data-zone.Project.property.membership">membership</a></code> | <code>aws-cdk-lib.aws_datazone.CfnProjectMembership</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-data-zone.Project.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-data-zone.Project.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-data-zone.Project.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="cdk-data-zone.Project.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

The timestamp of when the data source was created.

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="cdk-data-zone.Project.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

The timestamp of when the project was last updated.

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="cdk-data-zone.Project.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

The Amazon  user who created the project.

---

##### `projectDomainId`<sup>Required</sup> <a name="projectDomainId" id="cdk-data-zone.Project.property.projectDomainId"></a>

```typescript
public readonly projectDomainId: string;
```

- *Type:* string

The identifier of a Amazon  domain where the project exists.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="cdk-data-zone.Project.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The identifier of a project.

---

##### `managementRole`<sup>Required</sup> <a name="managementRole" id="cdk-data-zone.Project.property.managementRole"></a>

```typescript
public readonly managementRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

---

##### `membership`<sup>Required</sup> <a name="membership" id="cdk-data-zone.Project.property.membership"></a>

```typescript
public readonly membership: CfnProjectMembership;
```

- *Type:* aws-cdk-lib.aws_datazone.CfnProjectMembership

---


### ProjectBase <a name="ProjectBase" id="cdk-data-zone.ProjectBase"></a>

- *Implements:* <a href="#cdk-data-zone.IProject">IProject</a>

#### Initializers <a name="Initializers" id="cdk-data-zone.ProjectBase.Initializer"></a>

```typescript
import { ProjectBase } from 'cdk-data-zone'

new ProjectBase(scope: Construct, id: string, props?: ResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.ProjectBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-data-zone.ProjectBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.ProjectBase.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.ResourceProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-data-zone.ProjectBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-data-zone.ProjectBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk-data-zone.ProjectBase.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.ResourceProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.ProjectBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-data-zone.ProjectBase.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#cdk-data-zone.ProjectBase.addFormMetadata">addFormMetadata</a></code> | *No description.* |
| <code><a href="#cdk-data-zone.ProjectBase.addGlossaries">addGlossaries</a></code> | *No description.* |
| <code><a href="#cdk-data-zone.ProjectBase.addGlossary">addGlossary</a></code> | *No description.* |
| <code><a href="#cdk-data-zone.ProjectBase.addGlossaryTerm">addGlossaryTerm</a></code> | *No description.* |
| <code><a href="#cdk-data-zone.ProjectBase.addMember">addMember</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-data-zone.ProjectBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-data-zone.ProjectBase.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-data-zone.ProjectBase.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addFormMetadata` <a name="addFormMetadata" id="cdk-data-zone.ProjectBase.addFormMetadata"></a>

```typescript
public addFormMetadata(forms: Forms): void
```

###### `forms`<sup>Required</sup> <a name="forms" id="cdk-data-zone.ProjectBase.addFormMetadata.parameter.forms"></a>

- *Type:* <a href="#cdk-data-zone.Forms">Forms</a>

---

##### `addGlossaries` <a name="addGlossaries" id="cdk-data-zone.ProjectBase.addGlossaries"></a>

```typescript
public addGlossaries(glossaries: Glossaries): void
```

###### `glossaries`<sup>Required</sup> <a name="glossaries" id="cdk-data-zone.ProjectBase.addGlossaries.parameter.glossaries"></a>

- *Type:* <a href="#cdk-data-zone.Glossaries">Glossaries</a>

---

##### `addGlossary` <a name="addGlossary" id="cdk-data-zone.ProjectBase.addGlossary"></a>

```typescript
public addGlossary(options: GlossaryOptions): Glossary
```

###### `options`<sup>Required</sup> <a name="options" id="cdk-data-zone.ProjectBase.addGlossary.parameter.options"></a>

- *Type:* <a href="#cdk-data-zone.GlossaryOptions">GlossaryOptions</a>

---

##### `addGlossaryTerm` <a name="addGlossaryTerm" id="cdk-data-zone.ProjectBase.addGlossaryTerm"></a>

```typescript
public addGlossaryTerm(term: string): void
```

###### `term`<sup>Required</sup> <a name="term" id="cdk-data-zone.ProjectBase.addGlossaryTerm.parameter.term"></a>

- *Type:* string

---

##### `addMember` <a name="addMember" id="cdk-data-zone.ProjectBase.addMember"></a>

```typescript
public addMember(id: string, options: MemberOptions): void
```

###### `id`<sup>Required</sup> <a name="id" id="cdk-data-zone.ProjectBase.addMember.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="cdk-data-zone.ProjectBase.addMember.parameter.options"></a>

- *Type:* <a href="#cdk-data-zone.MemberOptions">MemberOptions</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.ProjectBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-data-zone.ProjectBase.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-data-zone.ProjectBase.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-data-zone.ProjectBase.isConstruct"></a>

```typescript
import { ProjectBase } from 'cdk-data-zone'

ProjectBase.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-data-zone.ProjectBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-data-zone.ProjectBase.isOwnedResource"></a>

```typescript
import { ProjectBase } from 'cdk-data-zone'

ProjectBase.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-data-zone.ProjectBase.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-data-zone.ProjectBase.isResource"></a>

```typescript
import { ProjectBase } from 'cdk-data-zone'

ProjectBase.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-data-zone.ProjectBase.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.ProjectBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-data-zone.ProjectBase.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-data-zone.ProjectBase.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-data-zone.ProjectBase.property.createdAt">createdAt</a></code> | <code>string</code> | The timestamp of when the data source was created. |
| <code><a href="#cdk-data-zone.ProjectBase.property.updatedAt">updatedAt</a></code> | <code>string</code> | The timestamp of when the data source was updated. |
| <code><a href="#cdk-data-zone.ProjectBase.property.createdBy">createdBy</a></code> | <code>string</code> | The Amazon  user who created the project. |
| <code><a href="#cdk-data-zone.ProjectBase.property.projectDomainId">projectDomainId</a></code> | <code>string</code> | The identifier of a Amazon  domain where the project exists. |
| <code><a href="#cdk-data-zone.ProjectBase.property.projectId">projectId</a></code> | <code>string</code> | The identifier of a project. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-data-zone.ProjectBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-data-zone.ProjectBase.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-data-zone.ProjectBase.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="cdk-data-zone.ProjectBase.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

The timestamp of when the data source was created.

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="cdk-data-zone.ProjectBase.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

The timestamp of when the data source was updated.

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="cdk-data-zone.ProjectBase.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

The Amazon  user who created the project.

---

##### `projectDomainId`<sup>Required</sup> <a name="projectDomainId" id="cdk-data-zone.ProjectBase.property.projectDomainId"></a>

```typescript
public readonly projectDomainId: string;
```

- *Type:* string

The identifier of a Amazon  domain where the project exists.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="cdk-data-zone.ProjectBase.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The identifier of a project.

---


### ResourceBase <a name="ResourceBase" id="cdk-data-zone.ResourceBase"></a>

#### Initializers <a name="Initializers" id="cdk-data-zone.ResourceBase.Initializer"></a>

```typescript
import { ResourceBase } from 'cdk-data-zone'

new ResourceBase(scope: Construct, id: string, props?: ResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.ResourceBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-data-zone.ResourceBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.ResourceBase.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.ResourceProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-data-zone.ResourceBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-data-zone.ResourceBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk-data-zone.ResourceBase.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.ResourceProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.ResourceBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-data-zone.ResourceBase.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-data-zone.ResourceBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-data-zone.ResourceBase.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-data-zone.ResourceBase.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.ResourceBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-data-zone.ResourceBase.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-data-zone.ResourceBase.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-data-zone.ResourceBase.isConstruct"></a>

```typescript
import { ResourceBase } from 'cdk-data-zone'

ResourceBase.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-data-zone.ResourceBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-data-zone.ResourceBase.isOwnedResource"></a>

```typescript
import { ResourceBase } from 'cdk-data-zone'

ResourceBase.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-data-zone.ResourceBase.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-data-zone.ResourceBase.isResource"></a>

```typescript
import { ResourceBase } from 'cdk-data-zone'

ResourceBase.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-data-zone.ResourceBase.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.ResourceBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-data-zone.ResourceBase.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-data-zone.ResourceBase.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-data-zone.ResourceBase.property.createdAt">createdAt</a></code> | <code>string</code> | The timestamp of when the data source was created. |
| <code><a href="#cdk-data-zone.ResourceBase.property.updatedAt">updatedAt</a></code> | <code>string</code> | The timestamp of when the data source was updated. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-data-zone.ResourceBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-data-zone.ResourceBase.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-data-zone.ResourceBase.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="cdk-data-zone.ResourceBase.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

The timestamp of when the data source was created.

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="cdk-data-zone.ResourceBase.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

The timestamp of when the data source was updated.

---


## Structs <a name="Structs" id="Structs"></a>

### BlueprintOptions <a name="BlueprintOptions" id="cdk-data-zone.BlueprintOptions"></a>

#### Initializer <a name="Initializer" id="cdk-data-zone.BlueprintOptions.Initializer"></a>

```typescript
import { BlueprintOptions } from 'cdk-data-zone'

const blueprintOptions: BlueprintOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.BlueprintOptions.property.enabledRegions">enabledRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-data-zone.BlueprintOptions.property.manageAccessRole">manageAccessRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | *No description.* |
| <code><a href="#cdk-data-zone.BlueprintOptions.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#cdk-data-zone.BlueprintOptions.property.provisioningRole">provisioningRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | *No description.* |
| <code><a href="#cdk-data-zone.BlueprintOptions.property.regionalParameters">regionalParameters</a></code> | <code>{[ key: string ]: {[ key: string ]: string}}</code> | *No description.* |

---

##### `enabledRegions`<sup>Optional</sup> <a name="enabledRegions" id="cdk-data-zone.BlueprintOptions.property.enabledRegions"></a>

```typescript
public readonly enabledRegions: string[];
```

- *Type:* string[]

---

##### `manageAccessRole`<sup>Optional</sup> <a name="manageAccessRole" id="cdk-data-zone.BlueprintOptions.property.manageAccessRole"></a>

```typescript
public readonly manageAccessRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="cdk-data-zone.BlueprintOptions.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `provisioningRole`<sup>Optional</sup> <a name="provisioningRole" id="cdk-data-zone.BlueprintOptions.property.provisioningRole"></a>

```typescript
public readonly provisioningRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

---

##### `regionalParameters`<sup>Optional</sup> <a name="regionalParameters" id="cdk-data-zone.BlueprintOptions.property.regionalParameters"></a>

```typescript
public readonly regionalParameters: {[ key: string ]: {[ key: string ]: string}};
```

- *Type:* {[ key: string ]: {[ key: string ]: string}}

---

### BlueprintProps <a name="BlueprintProps" id="cdk-data-zone.BlueprintProps"></a>

#### Initializer <a name="Initializer" id="cdk-data-zone.BlueprintProps.Initializer"></a>

```typescript
import { BlueprintProps } from 'cdk-data-zone'

const blueprintProps: BlueprintProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.BlueprintProps.property.domain">domain</a></code> | <code><a href="#cdk-data-zone.IDomain">IDomain</a></code> | *No description.* |
| <code><a href="#cdk-data-zone.BlueprintProps.property.environmentBlueprintIdentifier">environmentBlueprintIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.BlueprintProps.property.enabledRegions">enabledRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-data-zone.BlueprintProps.property.manageAccessRole">manageAccessRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | *No description.* |
| <code><a href="#cdk-data-zone.BlueprintProps.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#cdk-data-zone.BlueprintProps.property.provisioningRole">provisioningRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | *No description.* |
| <code><a href="#cdk-data-zone.BlueprintProps.property.regionalParameters">regionalParameters</a></code> | <code>{[ key: string ]: {[ key: string ]: string}}</code> | *No description.* |

---

##### `domain`<sup>Required</sup> <a name="domain" id="cdk-data-zone.BlueprintProps.property.domain"></a>

```typescript
public readonly domain: IDomain;
```

- *Type:* <a href="#cdk-data-zone.IDomain">IDomain</a>

---

##### `environmentBlueprintIdentifier`<sup>Required</sup> <a name="environmentBlueprintIdentifier" id="cdk-data-zone.BlueprintProps.property.environmentBlueprintIdentifier"></a>

```typescript
public readonly environmentBlueprintIdentifier: string;
```

- *Type:* string

---

##### `enabledRegions`<sup>Optional</sup> <a name="enabledRegions" id="cdk-data-zone.BlueprintProps.property.enabledRegions"></a>

```typescript
public readonly enabledRegions: string[];
```

- *Type:* string[]

---

##### `manageAccessRole`<sup>Optional</sup> <a name="manageAccessRole" id="cdk-data-zone.BlueprintProps.property.manageAccessRole"></a>

```typescript
public readonly manageAccessRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="cdk-data-zone.BlueprintProps.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `provisioningRole`<sup>Optional</sup> <a name="provisioningRole" id="cdk-data-zone.BlueprintProps.property.provisioningRole"></a>

```typescript
public readonly provisioningRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

---

##### `regionalParameters`<sup>Optional</sup> <a name="regionalParameters" id="cdk-data-zone.BlueprintProps.property.regionalParameters"></a>

```typescript
public readonly regionalParameters: {[ key: string ]: {[ key: string ]: string}};
```

- *Type:* {[ key: string ]: {[ key: string ]: string}}

---

### CronOptions <a name="CronOptions" id="cdk-data-zone.CronOptions"></a>

#### Initializer <a name="Initializer" id="cdk-data-zone.CronOptions.Initializer"></a>

```typescript
import { CronOptions } from 'cdk-data-zone'

const cronOptions: CronOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.CronOptions.property.day">day</a></code> | <code>string</code> | The day of the month to run this rule at. |
| <code><a href="#cdk-data-zone.CronOptions.property.hour">hour</a></code> | <code>string</code> | The hour to run this rule at. |
| <code><a href="#cdk-data-zone.CronOptions.property.minute">minute</a></code> | <code>string</code> | The minute to run this rule at. |
| <code><a href="#cdk-data-zone.CronOptions.property.month">month</a></code> | <code>string</code> | The month to run this rule at. |
| <code><a href="#cdk-data-zone.CronOptions.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.CronOptions.property.weekDay">weekDay</a></code> | <code>string</code> | The day of the week to run this rule at. |
| <code><a href="#cdk-data-zone.CronOptions.property.year">year</a></code> | <code>string</code> | The year to run this rule at. |

---

##### `day`<sup>Optional</sup> <a name="day" id="cdk-data-zone.CronOptions.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string
- *Default:* Every day of the month

The day of the month to run this rule at.

---

##### `hour`<sup>Optional</sup> <a name="hour" id="cdk-data-zone.CronOptions.property.hour"></a>

```typescript
public readonly hour: string;
```

- *Type:* string
- *Default:* Every hour

The hour to run this rule at.

---

##### `minute`<sup>Optional</sup> <a name="minute" id="cdk-data-zone.CronOptions.property.minute"></a>

```typescript
public readonly minute: string;
```

- *Type:* string
- *Default:* Every minute

The minute to run this rule at.

---

##### `month`<sup>Optional</sup> <a name="month" id="cdk-data-zone.CronOptions.property.month"></a>

```typescript
public readonly month: string;
```

- *Type:* string
- *Default:* Every month

The month to run this rule at.

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="cdk-data-zone.CronOptions.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `weekDay`<sup>Optional</sup> <a name="weekDay" id="cdk-data-zone.CronOptions.property.weekDay"></a>

```typescript
public readonly weekDay: string;
```

- *Type:* string
- *Default:* Any day of the week

The day of the week to run this rule at.

---

##### `year`<sup>Optional</sup> <a name="year" id="cdk-data-zone.CronOptions.property.year"></a>

```typescript
public readonly year: string;
```

- *Type:* string
- *Default:* Every year

The year to run this rule at.

---

### DataSourceOptions <a name="DataSourceOptions" id="cdk-data-zone.DataSourceOptions"></a>

#### Initializer <a name="Initializer" id="cdk-data-zone.DataSourceOptions.Initializer"></a>

```typescript
import { DataSourceOptions } from 'cdk-data-zone'

const dataSourceOptions: DataSourceOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.DataSourceOptions.property.configuration">configuration</a></code> | <code><a href="#cdk-data-zone.IDataSourceConfiguration">IDataSourceConfiguration</a></code> | *No description.* |
| <code><a href="#cdk-data-zone.DataSourceOptions.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.DataSourceOptions.property.enabled">enabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-data-zone.DataSourceOptions.property.publishOnImport">publishOnImport</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-data-zone.DataSourceOptions.property.recommendation">recommendation</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-data-zone.DataSourceOptions.property.schedule">schedule</a></code> | <code><a href="#cdk-data-zone.Schedule">Schedule</a></code> | *No description.* |

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="cdk-data-zone.DataSourceOptions.property.configuration"></a>

```typescript
public readonly configuration: IDataSourceConfiguration;
```

- *Type:* <a href="#cdk-data-zone.IDataSourceConfiguration">IDataSourceConfiguration</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-data-zone.DataSourceOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="cdk-data-zone.DataSourceOptions.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

---

##### `publishOnImport`<sup>Optional</sup> <a name="publishOnImport" id="cdk-data-zone.DataSourceOptions.property.publishOnImport"></a>

```typescript
public readonly publishOnImport: boolean;
```

- *Type:* boolean

---

##### `recommendation`<sup>Optional</sup> <a name="recommendation" id="cdk-data-zone.DataSourceOptions.property.recommendation"></a>

```typescript
public readonly recommendation: boolean;
```

- *Type:* boolean

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="cdk-data-zone.DataSourceOptions.property.schedule"></a>

```typescript
public readonly schedule: Schedule;
```

- *Type:* <a href="#cdk-data-zone.Schedule">Schedule</a>

---

### DataSourceProps <a name="DataSourceProps" id="cdk-data-zone.DataSourceProps"></a>

#### Initializer <a name="Initializer" id="cdk-data-zone.DataSourceProps.Initializer"></a>

```typescript
import { DataSourceProps } from 'cdk-data-zone'

const dataSourceProps: DataSourceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.DataSourceProps.property.configuration">configuration</a></code> | <code><a href="#cdk-data-zone.IDataSourceConfiguration">IDataSourceConfiguration</a></code> | *No description.* |
| <code><a href="#cdk-data-zone.DataSourceProps.property.environment">environment</a></code> | <code><a href="#cdk-data-zone.IEnvironment">IEnvironment</a></code> | *No description.* |
| <code><a href="#cdk-data-zone.DataSourceProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.DataSourceProps.property.project">project</a></code> | <code><a href="#cdk-data-zone.IProject">IProject</a></code> | *No description.* |
| <code><a href="#cdk-data-zone.DataSourceProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.DataSourceProps.property.enabled">enabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-data-zone.DataSourceProps.property.publishOnImport">publishOnImport</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-data-zone.DataSourceProps.property.recommendation">recommendation</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-data-zone.DataSourceProps.property.schedule">schedule</a></code> | <code><a href="#cdk-data-zone.Schedule">Schedule</a></code> | *No description.* |

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="cdk-data-zone.DataSourceProps.property.configuration"></a>

```typescript
public readonly configuration: IDataSourceConfiguration;
```

- *Type:* <a href="#cdk-data-zone.IDataSourceConfiguration">IDataSourceConfiguration</a>

---

##### `environment`<sup>Required</sup> <a name="environment" id="cdk-data-zone.DataSourceProps.property.environment"></a>

```typescript
public readonly environment: IEnvironment;
```

- *Type:* <a href="#cdk-data-zone.IEnvironment">IEnvironment</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-data-zone.DataSourceProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="cdk-data-zone.DataSourceProps.property.project"></a>

```typescript
public readonly project: IProject;
```

- *Type:* <a href="#cdk-data-zone.IProject">IProject</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-data-zone.DataSourceProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="cdk-data-zone.DataSourceProps.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

---

##### `publishOnImport`<sup>Optional</sup> <a name="publishOnImport" id="cdk-data-zone.DataSourceProps.property.publishOnImport"></a>

```typescript
public readonly publishOnImport: boolean;
```

- *Type:* boolean

---

##### `recommendation`<sup>Optional</sup> <a name="recommendation" id="cdk-data-zone.DataSourceProps.property.recommendation"></a>

```typescript
public readonly recommendation: boolean;
```

- *Type:* boolean

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="cdk-data-zone.DataSourceProps.property.schedule"></a>

```typescript
public readonly schedule: Schedule;
```

- *Type:* <a href="#cdk-data-zone.Schedule">Schedule</a>

---

### DomainProps <a name="DomainProps" id="cdk-data-zone.DomainProps"></a>

#### Initializer <a name="Initializer" id="cdk-data-zone.DomainProps.Initializer"></a>

```typescript
import { DomainProps } from 'cdk-data-zone'

const domainProps: DomainProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.DomainProps.property.name">name</a></code> | <code>string</code> | The name of the Amazon DataZone domain. |
| <code><a href="#cdk-data-zone.DomainProps.property.description">description</a></code> | <code>string</code> | The description of the Amazon DataZone domain. |
| <code><a href="#cdk-data-zone.DomainProps.property.domainExecutionRole">domainExecutionRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | The domain execution role that is created when an Amazon DataZone domain is created. |
| <code><a href="#cdk-data-zone.DomainProps.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The identifier of the AWS Key Management Service (KMS) key that is used to encrypt the Amazon DataZone domain, metadata, and reporting data. |
| <code><a href="#cdk-data-zone.DomainProps.property.singleSignOn">singleSignOn</a></code> | <code><a href="#cdk-data-zone.SingleSignOn">SingleSignOn</a></code> | The single sign-on details in Amazon DataZone. |
| <code><a href="#cdk-data-zone.DomainProps.property.tags">tags</a></code> | <code>string[]</code> | The tags specified for the Amazon DataZone domain. |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-data-zone.DomainProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Amazon DataZone domain.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domain.html#cfn-datazone-domain-name](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domain.html#cfn-datazone-domain-name)

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-data-zone.DomainProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the Amazon DataZone domain.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domain.html#cfn-datazone-domain-description](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domain.html#cfn-datazone-domain-description)

---

##### `domainExecutionRole`<sup>Optional</sup> <a name="domainExecutionRole" id="cdk-data-zone.DomainProps.property.domainExecutionRole"></a>

```typescript
public readonly domainExecutionRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

The domain execution role that is created when an Amazon DataZone domain is created.

The domain execution role is created in the AWS account that houses the Amazon DataZone domain.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domain.html#cfn-datazone-domain-domainexecutionrole](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domain.html#cfn-datazone-domain-domainexecutionrole)

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="cdk-data-zone.DomainProps.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

The identifier of the AWS Key Management Service (KMS) key that is used to encrypt the Amazon DataZone domain, metadata, and reporting data.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domain.html#cfn-datazone-domain-kmskeyidentifier](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domain.html#cfn-datazone-domain-kmskeyidentifier)

---

##### `singleSignOn`<sup>Optional</sup> <a name="singleSignOn" id="cdk-data-zone.DomainProps.property.singleSignOn"></a>

```typescript
public readonly singleSignOn: SingleSignOn;
```

- *Type:* <a href="#cdk-data-zone.SingleSignOn">SingleSignOn</a>

The single sign-on details in Amazon DataZone.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domain.html#cfn-datazone-domain-singlesignon](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domain.html#cfn-datazone-domain-singlesignon)

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-data-zone.DomainProps.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

The tags specified for the Amazon DataZone domain.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domain.html#cfn-datazone-domain-tags](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domain.html#cfn-datazone-domain-tags)

---

### EnvironmentOptions <a name="EnvironmentOptions" id="cdk-data-zone.EnvironmentOptions"></a>

#### Initializer <a name="Initializer" id="cdk-data-zone.EnvironmentOptions.Initializer"></a>

```typescript
import { EnvironmentOptions } from 'cdk-data-zone'

const environmentOptions: EnvironmentOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.EnvironmentOptions.property.description">description</a></code> | <code>string</code> | The description of the environment. |
| <code><a href="#cdk-data-zone.EnvironmentOptions.property.glossaryTerms">glossaryTerms</a></code> | <code>string[]</code> | The glossary terms that can be used in this Amazon  environment. |
| <code><a href="#cdk-data-zone.EnvironmentOptions.property.name">name</a></code> | <code>string</code> | The name of the Amazon  environment. |
| <code><a href="#cdk-data-zone.EnvironmentOptions.property.userParameters">userParameters</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_datazone.CfnEnvironment.EnvironmentParameterProperty[]</code> | The user parameters of this Amazon  environment. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-data-zone.EnvironmentOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the environment.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html#cfn-datazone-environment-description](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html#cfn-datazone-environment-description)

---

##### `glossaryTerms`<sup>Optional</sup> <a name="glossaryTerms" id="cdk-data-zone.EnvironmentOptions.property.glossaryTerms"></a>

```typescript
public readonly glossaryTerms: string[];
```

- *Type:* string[]

The glossary terms that can be used in this Amazon  environment.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html#cfn-datazone-environment-glossaryterms](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html#cfn-datazone-environment-glossaryterms)

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-data-zone.EnvironmentOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Amazon  environment.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html#cfn-datazone-environment-name](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html#cfn-datazone-environment-name)

---

##### `userParameters`<sup>Optional</sup> <a name="userParameters" id="cdk-data-zone.EnvironmentOptions.property.userParameters"></a>

```typescript
public readonly userParameters: IResolvable | IResolvable | EnvironmentParameterProperty[];
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.IResolvable | aws-cdk-lib.aws_datazone.CfnEnvironment.EnvironmentParameterProperty[]

The user parameters of this Amazon  environment.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html#cfn-datazone-environment-userparameters](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html#cfn-datazone-environment-userparameters)

---

### EnvironmentProfileProps <a name="EnvironmentProfileProps" id="cdk-data-zone.EnvironmentProfileProps"></a>

#### Initializer <a name="Initializer" id="cdk-data-zone.EnvironmentProfileProps.Initializer"></a>

```typescript
import { EnvironmentProfileProps } from 'cdk-data-zone'

const environmentProfileProps: EnvironmentProfileProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.EnvironmentProfileProps.property.blueprint">blueprint</a></code> | <code><a href="#cdk-data-zone.IBlueprint">IBlueprint</a></code> | The identifier of a blueprint with which an environment profile is created. |
| <code><a href="#cdk-data-zone.EnvironmentProfileProps.property.name">name</a></code> | <code>string</code> | The name of the environment profile. |
| <code><a href="#cdk-data-zone.EnvironmentProfileProps.property.project">project</a></code> | <code><a href="#cdk-data-zone.IProject">IProject</a></code> | The identifier of a project in which an environment profile exists. |
| <code><a href="#cdk-data-zone.EnvironmentProfileProps.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | The identifier of an AWS account in which an environment profile exists. |
| <code><a href="#cdk-data-zone.EnvironmentProfileProps.property.awsAccountRegion">awsAccountRegion</a></code> | <code>string</code> | The AWS Region in which an environment profile exists. |
| <code><a href="#cdk-data-zone.EnvironmentProfileProps.property.description">description</a></code> | <code>string</code> | The description of the environment profile. |
| <code><a href="#cdk-data-zone.EnvironmentProfileProps.property.userParameters">userParameters</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_datazone.CfnEnvironmentProfile.EnvironmentParameterProperty[]</code> | The user parameters of this Amazon  environment profile. |

---

##### `blueprint`<sup>Required</sup> <a name="blueprint" id="cdk-data-zone.EnvironmentProfileProps.property.blueprint"></a>

```typescript
public readonly blueprint: IBlueprint;
```

- *Type:* <a href="#cdk-data-zone.IBlueprint">IBlueprint</a>

The identifier of a blueprint with which an environment profile is created.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentprofile.html#cfn-datazone-environmentprofile-environmentblueprintidentifier](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentprofile.html#cfn-datazone-environmentprofile-environmentblueprintidentifier)

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-data-zone.EnvironmentProfileProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the environment profile.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentprofile.html#cfn-datazone-environmentprofile-name](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentprofile.html#cfn-datazone-environmentprofile-name)

---

##### `project`<sup>Required</sup> <a name="project" id="cdk-data-zone.EnvironmentProfileProps.property.project"></a>

```typescript
public readonly project: IProject;
```

- *Type:* <a href="#cdk-data-zone.IProject">IProject</a>

The identifier of a project in which an environment profile exists.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentprofile.html#cfn-datazone-environmentprofile-projectidentifier](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentprofile.html#cfn-datazone-environmentprofile-projectidentifier)

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="cdk-data-zone.EnvironmentProfileProps.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string
- *Default:* the  Domain account

The identifier of an AWS account in which an environment profile exists.

---

##### `awsAccountRegion`<sup>Optional</sup> <a name="awsAccountRegion" id="cdk-data-zone.EnvironmentProfileProps.property.awsAccountRegion"></a>

```typescript
public readonly awsAccountRegion: string;
```

- *Type:* string
- *Default:* the  Domain region

The AWS Region in which an environment profile exists.

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-data-zone.EnvironmentProfileProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the environment profile.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentprofile.html#cfn-datazone-environmentprofile-description](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentprofile.html#cfn-datazone-environmentprofile-description)

---

##### `userParameters`<sup>Optional</sup> <a name="userParameters" id="cdk-data-zone.EnvironmentProfileProps.property.userParameters"></a>

```typescript
public readonly userParameters: IResolvable | IResolvable | EnvironmentParameterProperty[];
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.IResolvable | aws-cdk-lib.aws_datazone.CfnEnvironmentProfile.EnvironmentParameterProperty[]

The user parameters of this Amazon  environment profile.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentprofile.html#cfn-datazone-environmentprofile-userparameters](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentprofile.html#cfn-datazone-environmentprofile-userparameters)

---

### EnvironmentProps <a name="EnvironmentProps" id="cdk-data-zone.EnvironmentProps"></a>

#### Initializer <a name="Initializer" id="cdk-data-zone.EnvironmentProps.Initializer"></a>

```typescript
import { EnvironmentProps } from 'cdk-data-zone'

const environmentProps: EnvironmentProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.EnvironmentProps.property.name">name</a></code> | <code>string</code> | The name of the Amazon  environment. |
| <code><a href="#cdk-data-zone.EnvironmentProps.property.project">project</a></code> | <code><a href="#cdk-data-zone.IProject">IProject</a></code> | The identifier of the Amazon  project in which this environment is created. |
| <code><a href="#cdk-data-zone.EnvironmentProps.property.description">description</a></code> | <code>string</code> | The description of the environment. |
| <code><a href="#cdk-data-zone.EnvironmentProps.property.environmentAccountId">environmentAccountId</a></code> | <code>string</code> | (Required for Custom Service Environments)  The AWS Region in which the custom service environment will be created in exists. |
| <code><a href="#cdk-data-zone.EnvironmentProps.property.environmentAccountRegion">environmentAccountRegion</a></code> | <code>string</code> | (Required for Custom Service Environments) The identifier of an AWS account in which the custom service environment will be created in exists. |
| <code><a href="#cdk-data-zone.EnvironmentProps.property.environmentBlueprintId">environmentBlueprintId</a></code> | <code>string</code> | The identifier of the custom aws service blueprint with which the environment is to be created. |
| <code><a href="#cdk-data-zone.EnvironmentProps.property.environmentProfile">environmentProfile</a></code> | <code><a href="#cdk-data-zone.IEnvironmentProfile">IEnvironmentProfile</a></code> | The identifier of the environment profile that is used to create this Amazon DataZone Environment. |
| <code><a href="#cdk-data-zone.EnvironmentProps.property.environmentRole">environmentRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | The ARN of the environment role. |
| <code><a href="#cdk-data-zone.EnvironmentProps.property.glossaryTerms">glossaryTerms</a></code> | <code>string[]</code> | The glossary terms that can be used in this Amazon  environment. |
| <code><a href="#cdk-data-zone.EnvironmentProps.property.userParameters">userParameters</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_datazone.CfnEnvironment.EnvironmentParameterProperty[]</code> | The user parameters of this Amazon  environment. |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-data-zone.EnvironmentProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Amazon  environment.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html#cfn-datazone-environment-name](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html#cfn-datazone-environment-name)

---

##### `project`<sup>Required</sup> <a name="project" id="cdk-data-zone.EnvironmentProps.property.project"></a>

```typescript
public readonly project: IProject;
```

- *Type:* <a href="#cdk-data-zone.IProject">IProject</a>

The identifier of the Amazon  project in which this environment is created.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html#cfn-datazone-environment-projectidentifier](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html#cfn-datazone-environment-projectidentifier)

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-data-zone.EnvironmentProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the environment.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html#cfn-datazone-environment-description](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html#cfn-datazone-environment-description)

---

##### `environmentAccountId`<sup>Optional</sup> <a name="environmentAccountId" id="cdk-data-zone.EnvironmentProps.property.environmentAccountId"></a>

```typescript
public readonly environmentAccountId: string;
```

- *Type:* string

(Required for Custom Service Environments)  The AWS Region in which the custom service environment will be created in exists.

---

##### `environmentAccountRegion`<sup>Optional</sup> <a name="environmentAccountRegion" id="cdk-data-zone.EnvironmentProps.property.environmentAccountRegion"></a>

```typescript
public readonly environmentAccountRegion: string;
```

- *Type:* string

(Required for Custom Service Environments) The identifier of an AWS account in which the custom service environment will be created in exists.

---

##### `environmentBlueprintId`<sup>Optional</sup> <a name="environmentBlueprintId" id="cdk-data-zone.EnvironmentProps.property.environmentBlueprintId"></a>

```typescript
public readonly environmentBlueprintId: string;
```

- *Type:* string

The identifier of the custom aws service blueprint with which the environment is to be created.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html)

---

##### `environmentProfile`<sup>Optional</sup> <a name="environmentProfile" id="cdk-data-zone.EnvironmentProps.property.environmentProfile"></a>

```typescript
public readonly environmentProfile: IEnvironmentProfile;
```

- *Type:* <a href="#cdk-data-zone.IEnvironmentProfile">IEnvironmentProfile</a>

The identifier of the environment profile that is used to create this Amazon DataZone Environment.

(Not allowed for Custom Service Blueprints)

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html#cfn-datazone-environment-environmentprofileidentifier](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html#cfn-datazone-environment-environmentprofileidentifier)

---

##### `environmentRole`<sup>Optional</sup> <a name="environmentRole" id="cdk-data-zone.EnvironmentProps.property.environmentRole"></a>

```typescript
public readonly environmentRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

The ARN of the environment role.

(Required For Custom Service Blueprints Only)

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html#cfn-datazone-environment-environmentrolearn](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html#cfn-datazone-environment-environmentrolearn)

---

##### `glossaryTerms`<sup>Optional</sup> <a name="glossaryTerms" id="cdk-data-zone.EnvironmentProps.property.glossaryTerms"></a>

```typescript
public readonly glossaryTerms: string[];
```

- *Type:* string[]

The glossary terms that can be used in this Amazon  environment.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html#cfn-datazone-environment-glossaryterms](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html#cfn-datazone-environment-glossaryterms)

---

##### `userParameters`<sup>Optional</sup> <a name="userParameters" id="cdk-data-zone.EnvironmentProps.property.userParameters"></a>

```typescript
public readonly userParameters: IResolvable | IResolvable | EnvironmentParameterProperty[];
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.IResolvable | aws-cdk-lib.aws_datazone.CfnEnvironment.EnvironmentParameterProperty[]

The user parameters of this Amazon  environment.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html#cfn-datazone-environment-userparameters](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html#cfn-datazone-environment-userparameters)

---

### FilterConfiguration <a name="FilterConfiguration" id="cdk-data-zone.FilterConfiguration"></a>

#### Initializer <a name="Initializer" id="cdk-data-zone.FilterConfiguration.Initializer"></a>

```typescript
import { FilterConfiguration } from 'cdk-data-zone'

const filterConfiguration: FilterConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.FilterConfiguration.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.FilterConfiguration.property.filterExpressions">filterExpressions</a></code> | <code><a href="#cdk-data-zone.FilterExpression">FilterExpression</a>[]</code> | *No description.* |
| <code><a href="#cdk-data-zone.FilterConfiguration.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="cdk-data-zone.FilterConfiguration.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `filterExpressions`<sup>Optional</sup> <a name="filterExpressions" id="cdk-data-zone.FilterConfiguration.property.filterExpressions"></a>

```typescript
public readonly filterExpressions: FilterExpression[];
```

- *Type:* <a href="#cdk-data-zone.FilterExpression">FilterExpression</a>[]

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="cdk-data-zone.FilterConfiguration.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

### FilterExpression <a name="FilterExpression" id="cdk-data-zone.FilterExpression"></a>

#### Initializer <a name="Initializer" id="cdk-data-zone.FilterExpression.Initializer"></a>

```typescript
import { FilterExpression } from 'cdk-data-zone'

const filterExpression: FilterExpression = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.FilterExpression.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.FilterExpression.property.filterType">filterType</a></code> | <code>string</code> | *No description.* |

---

##### `expression`<sup>Required</sup> <a name="expression" id="cdk-data-zone.FilterExpression.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `filterType`<sup>Optional</sup> <a name="filterType" id="cdk-data-zone.FilterExpression.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

---

### FormMetadataOptions <a name="FormMetadataOptions" id="cdk-data-zone.FormMetadataOptions"></a>

#### Initializer <a name="Initializer" id="cdk-data-zone.FormMetadataOptions.Initializer"></a>

```typescript
import { FormMetadataOptions } from 'cdk-data-zone'

const formMetadataOptions: FormMetadataOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.FormMetadataOptions.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.FormMetadataOptions.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.FormMetadataOptions.property.smithyModel">smithyModel</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-data-zone.FormMetadataOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-data-zone.FormMetadataOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `smithyModel`<sup>Optional</sup> <a name="smithyModel" id="cdk-data-zone.FormMetadataOptions.property.smithyModel"></a>

```typescript
public readonly smithyModel: string;
```

- *Type:* string

---

### FormMetadataProps <a name="FormMetadataProps" id="cdk-data-zone.FormMetadataProps"></a>

#### Initializer <a name="Initializer" id="cdk-data-zone.FormMetadataProps.Initializer"></a>

```typescript
import { FormMetadataProps } from 'cdk-data-zone'

const formMetadataProps: FormMetadataProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.FormMetadataProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.FormMetadataProps.property.project">project</a></code> | <code><a href="#cdk-data-zone.Project">Project</a></code> | *No description.* |
| <code><a href="#cdk-data-zone.FormMetadataProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.FormMetadataProps.property.smithyModel">smithyModel</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-data-zone.FormMetadataProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="cdk-data-zone.FormMetadataProps.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* <a href="#cdk-data-zone.Project">Project</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-data-zone.FormMetadataProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `smithyModel`<sup>Optional</sup> <a name="smithyModel" id="cdk-data-zone.FormMetadataProps.property.smithyModel"></a>

```typescript
public readonly smithyModel: string;
```

- *Type:* string

---

### GlossaryOptions <a name="GlossaryOptions" id="cdk-data-zone.GlossaryOptions"></a>

#### Initializer <a name="Initializer" id="cdk-data-zone.GlossaryOptions.Initializer"></a>

```typescript
import { GlossaryOptions } from 'cdk-data-zone'

const glossaryOptions: GlossaryOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.GlossaryOptions.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.GlossaryOptions.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.GlossaryOptions.property.terms">terms</a></code> | <code><a href="#cdk-data-zone.GlossaryTermOptions">GlossaryTermOptions</a>[]</code> | *No description.* |

---

##### `description`<sup>Required</sup> <a name="description" id="cdk-data-zone.GlossaryOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-data-zone.GlossaryOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `terms`<sup>Optional</sup> <a name="terms" id="cdk-data-zone.GlossaryOptions.property.terms"></a>

```typescript
public readonly terms: GlossaryTermOptions[];
```

- *Type:* <a href="#cdk-data-zone.GlossaryTermOptions">GlossaryTermOptions</a>[]

---

### GlossaryProps <a name="GlossaryProps" id="cdk-data-zone.GlossaryProps"></a>

#### Initializer <a name="Initializer" id="cdk-data-zone.GlossaryProps.Initializer"></a>

```typescript
import { GlossaryProps } from 'cdk-data-zone'

const glossaryProps: GlossaryProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.GlossaryProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.GlossaryProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.GlossaryProps.property.project">project</a></code> | <code><a href="#cdk-data-zone.Project">Project</a></code> | *No description.* |
| <code><a href="#cdk-data-zone.GlossaryProps.property.terms">terms</a></code> | <code><a href="#cdk-data-zone.GlossaryTermOptions">GlossaryTermOptions</a>[]</code> | *No description.* |

---

##### `description`<sup>Required</sup> <a name="description" id="cdk-data-zone.GlossaryProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-data-zone.GlossaryProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="cdk-data-zone.GlossaryProps.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* <a href="#cdk-data-zone.Project">Project</a>

---

##### `terms`<sup>Optional</sup> <a name="terms" id="cdk-data-zone.GlossaryProps.property.terms"></a>

```typescript
public readonly terms: GlossaryTermOptions[];
```

- *Type:* <a href="#cdk-data-zone.GlossaryTermOptions">GlossaryTermOptions</a>[]

---

### GlossaryTermOptions <a name="GlossaryTermOptions" id="cdk-data-zone.GlossaryTermOptions"></a>

#### Initializer <a name="Initializer" id="cdk-data-zone.GlossaryTermOptions.Initializer"></a>

```typescript
import { GlossaryTermOptions } from 'cdk-data-zone'

const glossaryTermOptions: GlossaryTermOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.GlossaryTermOptions.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.GlossaryTermOptions.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.GlossaryTermOptions.property.enabled">enabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-data-zone.GlossaryTermOptions.property.longDescription">longDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.GlossaryTermOptions.property.shortDescription">shortDescription</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-data-zone.GlossaryTermOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-data-zone.GlossaryTermOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="cdk-data-zone.GlossaryTermOptions.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

---

##### `longDescription`<sup>Optional</sup> <a name="longDescription" id="cdk-data-zone.GlossaryTermOptions.property.longDescription"></a>

```typescript
public readonly longDescription: string;
```

- *Type:* string

---

##### `shortDescription`<sup>Optional</sup> <a name="shortDescription" id="cdk-data-zone.GlossaryTermOptions.property.shortDescription"></a>

```typescript
public readonly shortDescription: string;
```

- *Type:* string

---

### GlossaryTermProps <a name="GlossaryTermProps" id="cdk-data-zone.GlossaryTermProps"></a>

#### Initializer <a name="Initializer" id="cdk-data-zone.GlossaryTermProps.Initializer"></a>

```typescript
import { GlossaryTermProps } from 'cdk-data-zone'

const glossaryTermProps: GlossaryTermProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.GlossaryTermProps.property.glossary">glossary</a></code> | <code><a href="#cdk-data-zone.IGlossary">IGlossary</a></code> | *No description.* |
| <code><a href="#cdk-data-zone.GlossaryTermProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.GlossaryTermProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.GlossaryTermProps.property.enabled">enabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-data-zone.GlossaryTermProps.property.longDescription">longDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.GlossaryTermProps.property.shortDescription">shortDescription</a></code> | <code>string</code> | *No description.* |

---

##### `glossary`<sup>Required</sup> <a name="glossary" id="cdk-data-zone.GlossaryTermProps.property.glossary"></a>

```typescript
public readonly glossary: IGlossary;
```

- *Type:* <a href="#cdk-data-zone.IGlossary">IGlossary</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-data-zone.GlossaryTermProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-data-zone.GlossaryTermProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="cdk-data-zone.GlossaryTermProps.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

---

##### `longDescription`<sup>Optional</sup> <a name="longDescription" id="cdk-data-zone.GlossaryTermProps.property.longDescription"></a>

```typescript
public readonly longDescription: string;
```

- *Type:* string

---

##### `shortDescription`<sup>Optional</sup> <a name="shortDescription" id="cdk-data-zone.GlossaryTermProps.property.shortDescription"></a>

```typescript
public readonly shortDescription: string;
```

- *Type:* string

---

### GlueOptions <a name="GlueOptions" id="cdk-data-zone.GlueOptions"></a>

#### Initializer <a name="Initializer" id="cdk-data-zone.GlueOptions.Initializer"></a>

```typescript
import { GlueOptions } from 'cdk-data-zone'

const glueOptions: GlueOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.GlueOptions.property.filterConfigurations">filterConfigurations</a></code> | <code><a href="#cdk-data-zone.FilterConfiguration">FilterConfiguration</a>[]</code> | *No description.* |
| <code><a href="#cdk-data-zone.GlueOptions.property.dataAccessRole">dataAccessRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | *No description.* |
| <code><a href="#cdk-data-zone.GlueOptions.property.autoImportDataQualityResult">autoImportDataQualityResult</a></code> | <code>boolean</code> | *No description.* |

---

##### `filterConfigurations`<sup>Required</sup> <a name="filterConfigurations" id="cdk-data-zone.GlueOptions.property.filterConfigurations"></a>

```typescript
public readonly filterConfigurations: FilterConfiguration[];
```

- *Type:* <a href="#cdk-data-zone.FilterConfiguration">FilterConfiguration</a>[]

---

##### `dataAccessRole`<sup>Optional</sup> <a name="dataAccessRole" id="cdk-data-zone.GlueOptions.property.dataAccessRole"></a>

```typescript
public readonly dataAccessRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

---

##### `autoImportDataQualityResult`<sup>Optional</sup> <a name="autoImportDataQualityResult" id="cdk-data-zone.GlueOptions.property.autoImportDataQualityResult"></a>

```typescript
public readonly autoImportDataQualityResult: boolean;
```

- *Type:* boolean

---

### MemberOptions <a name="MemberOptions" id="cdk-data-zone.MemberOptions"></a>

#### Initializer <a name="Initializer" id="cdk-data-zone.MemberOptions.Initializer"></a>

```typescript
import { MemberOptions } from 'cdk-data-zone'

const memberOptions: MemberOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.MemberOptions.property.designation">designation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.MemberOptions.property.groupIdentifier">groupIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.MemberOptions.property.userIdentifier">userIdentifier</a></code> | <code>string</code> | *No description.* |

---

##### `designation`<sup>Optional</sup> <a name="designation" id="cdk-data-zone.MemberOptions.property.designation"></a>

```typescript
public readonly designation: string;
```

- *Type:* string

---

##### `groupIdentifier`<sup>Optional</sup> <a name="groupIdentifier" id="cdk-data-zone.MemberOptions.property.groupIdentifier"></a>

```typescript
public readonly groupIdentifier: string;
```

- *Type:* string

---

##### `userIdentifier`<sup>Optional</sup> <a name="userIdentifier" id="cdk-data-zone.MemberOptions.property.userIdentifier"></a>

```typescript
public readonly userIdentifier: string;
```

- *Type:* string

---

### ProjectOptions <a name="ProjectOptions" id="cdk-data-zone.ProjectOptions"></a>

#### Initializer <a name="Initializer" id="cdk-data-zone.ProjectOptions.Initializer"></a>

```typescript
import { ProjectOptions } from 'cdk-data-zone'

const projectOptions: ProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.ProjectOptions.property.name">name</a></code> | <code>string</code> | The name of a project. |
| <code><a href="#cdk-data-zone.ProjectOptions.property.description">description</a></code> | <code>string</code> | The description of a project. |
| <code><a href="#cdk-data-zone.ProjectOptions.property.forms">forms</a></code> | <code><a href="#cdk-data-zone.Forms">Forms</a></code> | *No description.* |
| <code><a href="#cdk-data-zone.ProjectOptions.property.glossaries">glossaries</a></code> | <code><a href="#cdk-data-zone.Glossaries">Glossaries</a></code> | *No description.* |
| <code><a href="#cdk-data-zone.ProjectOptions.property.glossaryTerms">glossaryTerms</a></code> | <code>string[]</code> | The glossary terms that can be used in this Amazon  project. |
| <code><a href="#cdk-data-zone.ProjectOptions.property.managementRole">managementRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-data-zone.ProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of a project.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-project.html#cfn-datazone-project-name](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-project.html#cfn-datazone-project-name)

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-data-zone.ProjectOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of a project.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-project.html#cfn-datazone-project-description](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-project.html#cfn-datazone-project-description)

---

##### `forms`<sup>Optional</sup> <a name="forms" id="cdk-data-zone.ProjectOptions.property.forms"></a>

```typescript
public readonly forms: Forms;
```

- *Type:* <a href="#cdk-data-zone.Forms">Forms</a>

---

##### `glossaries`<sup>Optional</sup> <a name="glossaries" id="cdk-data-zone.ProjectOptions.property.glossaries"></a>

```typescript
public readonly glossaries: Glossaries;
```

- *Type:* <a href="#cdk-data-zone.Glossaries">Glossaries</a>

---

##### `glossaryTerms`<sup>Optional</sup> <a name="glossaryTerms" id="cdk-data-zone.ProjectOptions.property.glossaryTerms"></a>

```typescript
public readonly glossaryTerms: string[];
```

- *Type:* string[]

The glossary terms that can be used in this Amazon  project.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-project.html#cfn-datazone-project-glossaryterms](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-project.html#cfn-datazone-project-glossaryterms)

---

##### `managementRole`<sup>Optional</sup> <a name="managementRole" id="cdk-data-zone.ProjectOptions.property.managementRole"></a>

```typescript
public readonly managementRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

---

### ProjectProps <a name="ProjectProps" id="cdk-data-zone.ProjectProps"></a>

#### Initializer <a name="Initializer" id="cdk-data-zone.ProjectProps.Initializer"></a>

```typescript
import { ProjectProps } from 'cdk-data-zone'

const projectProps: ProjectProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.ProjectProps.property.domain">domain</a></code> | <code><a href="#cdk-data-zone.IDomain">IDomain</a></code> | The identifier of a Amazon  domain where the project exists. |
| <code><a href="#cdk-data-zone.ProjectProps.property.name">name</a></code> | <code>string</code> | The name of a project. |
| <code><a href="#cdk-data-zone.ProjectProps.property.description">description</a></code> | <code>string</code> | The description of a project. |
| <code><a href="#cdk-data-zone.ProjectProps.property.forms">forms</a></code> | <code><a href="#cdk-data-zone.Forms">Forms</a></code> | *No description.* |
| <code><a href="#cdk-data-zone.ProjectProps.property.glossaries">glossaries</a></code> | <code><a href="#cdk-data-zone.Glossaries">Glossaries</a></code> | *No description.* |
| <code><a href="#cdk-data-zone.ProjectProps.property.glossaryTerms">glossaryTerms</a></code> | <code>string[]</code> | The glossary terms that can be used in this Amazon  project. |
| <code><a href="#cdk-data-zone.ProjectProps.property.managementRole">managementRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | *No description.* |

---

##### `domain`<sup>Required</sup> <a name="domain" id="cdk-data-zone.ProjectProps.property.domain"></a>

```typescript
public readonly domain: IDomain;
```

- *Type:* <a href="#cdk-data-zone.IDomain">IDomain</a>

The identifier of a Amazon  domain where the project exists.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-project.html#cfn-datazone-project-domainidentifier](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-project.html#cfn-datazone-project-domainidentifier)

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-data-zone.ProjectProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of a project.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-project.html#cfn-datazone-project-name](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-project.html#cfn-datazone-project-name)

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-data-zone.ProjectProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of a project.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-project.html#cfn-datazone-project-description](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-project.html#cfn-datazone-project-description)

---

##### `forms`<sup>Optional</sup> <a name="forms" id="cdk-data-zone.ProjectProps.property.forms"></a>

```typescript
public readonly forms: Forms;
```

- *Type:* <a href="#cdk-data-zone.Forms">Forms</a>

---

##### `glossaries`<sup>Optional</sup> <a name="glossaries" id="cdk-data-zone.ProjectProps.property.glossaries"></a>

```typescript
public readonly glossaries: Glossaries;
```

- *Type:* <a href="#cdk-data-zone.Glossaries">Glossaries</a>

---

##### `glossaryTerms`<sup>Optional</sup> <a name="glossaryTerms" id="cdk-data-zone.ProjectProps.property.glossaryTerms"></a>

```typescript
public readonly glossaryTerms: string[];
```

- *Type:* string[]

The glossary terms that can be used in this Amazon  project.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-project.html#cfn-datazone-project-glossaryterms](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-project.html#cfn-datazone-project-glossaryterms)

---

##### `managementRole`<sup>Optional</sup> <a name="managementRole" id="cdk-data-zone.ProjectProps.property.managementRole"></a>

```typescript
public readonly managementRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

---

### RedshiftOptions <a name="RedshiftOptions" id="cdk-data-zone.RedshiftOptions"></a>

#### Initializer <a name="Initializer" id="cdk-data-zone.RedshiftOptions.Initializer"></a>

```typescript
import { RedshiftOptions } from 'cdk-data-zone'

const redshiftOptions: RedshiftOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.RedshiftOptions.property.filterConfigurations">filterConfigurations</a></code> | <code><a href="#cdk-data-zone.FilterConfiguration">FilterConfiguration</a>[]</code> | *No description.* |
| <code><a href="#cdk-data-zone.RedshiftOptions.property.dataAccessRole">dataAccessRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | *No description.* |
| <code><a href="#cdk-data-zone.RedshiftOptions.property.credentials">credentials</a></code> | <code>aws-cdk-lib.aws_secretsmanager.Secret</code> | *No description.* |
| <code><a href="#cdk-data-zone.RedshiftOptions.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.RedshiftOptions.property.redshiftType">redshiftType</a></code> | <code>string</code> | *No description.* |

---

##### `filterConfigurations`<sup>Required</sup> <a name="filterConfigurations" id="cdk-data-zone.RedshiftOptions.property.filterConfigurations"></a>

```typescript
public readonly filterConfigurations: FilterConfiguration[];
```

- *Type:* <a href="#cdk-data-zone.FilterConfiguration">FilterConfiguration</a>[]

---

##### `dataAccessRole`<sup>Optional</sup> <a name="dataAccessRole" id="cdk-data-zone.RedshiftOptions.property.dataAccessRole"></a>

```typescript
public readonly dataAccessRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="cdk-data-zone.RedshiftOptions.property.credentials"></a>

```typescript
public readonly credentials: Secret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.Secret

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-data-zone.RedshiftOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `redshiftType`<sup>Required</sup> <a name="redshiftType" id="cdk-data-zone.RedshiftOptions.property.redshiftType"></a>

```typescript
public readonly redshiftType: string;
```

- *Type:* string

---

### SingleSignOn <a name="SingleSignOn" id="cdk-data-zone.SingleSignOn"></a>

#### Initializer <a name="Initializer" id="cdk-data-zone.SingleSignOn.Initializer"></a>

```typescript
import { SingleSignOn } from 'cdk-data-zone'

const singleSignOn: SingleSignOn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.SingleSignOn.property.ssoType">ssoType</a></code> | <code><a href="#cdk-data-zone.SingleSignOnType">SingleSignOnType</a></code> | *No description.* |
| <code><a href="#cdk-data-zone.SingleSignOn.property.userAssignment">userAssignment</a></code> | <code><a href="#cdk-data-zone.AssignmentType">AssignmentType</a></code> | *No description.* |

---

##### `ssoType`<sup>Required</sup> <a name="ssoType" id="cdk-data-zone.SingleSignOn.property.ssoType"></a>

```typescript
public readonly ssoType: SingleSignOnType;
```

- *Type:* <a href="#cdk-data-zone.SingleSignOnType">SingleSignOnType</a>

---

##### `userAssignment`<sup>Optional</sup> <a name="userAssignment" id="cdk-data-zone.SingleSignOn.property.userAssignment"></a>

```typescript
public readonly userAssignment: AssignmentType;
```

- *Type:* <a href="#cdk-data-zone.AssignmentType">AssignmentType</a>

---

### SourceOptions <a name="SourceOptions" id="cdk-data-zone.SourceOptions"></a>

#### Initializer <a name="Initializer" id="cdk-data-zone.SourceOptions.Initializer"></a>

```typescript
import { SourceOptions } from 'cdk-data-zone'

const sourceOptions: SourceOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.SourceOptions.property.filterConfigurations">filterConfigurations</a></code> | <code><a href="#cdk-data-zone.FilterConfiguration">FilterConfiguration</a>[]</code> | *No description.* |
| <code><a href="#cdk-data-zone.SourceOptions.property.dataAccessRole">dataAccessRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | *No description.* |

---

##### `filterConfigurations`<sup>Required</sup> <a name="filterConfigurations" id="cdk-data-zone.SourceOptions.property.filterConfigurations"></a>

```typescript
public readonly filterConfigurations: FilterConfiguration[];
```

- *Type:* <a href="#cdk-data-zone.FilterConfiguration">FilterConfiguration</a>[]

---

##### `dataAccessRole`<sup>Optional</sup> <a name="dataAccessRole" id="cdk-data-zone.SourceOptions.property.dataAccessRole"></a>

```typescript
public readonly dataAccessRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

---

## Classes <a name="Classes" id="Classes"></a>

### BlueprintEnvironmentIdentifiers <a name="BlueprintEnvironmentIdentifiers" id="cdk-data-zone.BlueprintEnvironmentIdentifiers"></a>

#### Initializers <a name="Initializers" id="cdk-data-zone.BlueprintEnvironmentIdentifiers.Initializer"></a>

```typescript
import { BlueprintEnvironmentIdentifiers } from 'cdk-data-zone'

new BlueprintEnvironmentIdentifiers()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.BlueprintEnvironmentIdentifiers.property.DEFAULT_DATA_LAKE">DEFAULT_DATA_LAKE</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.BlueprintEnvironmentIdentifiers.property.DEFAULT_DATA_WAREHOUSE">DEFAULT_DATA_WAREHOUSE</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_DATA_LAKE`<sup>Required</sup> <a name="DEFAULT_DATA_LAKE" id="cdk-data-zone.BlueprintEnvironmentIdentifiers.property.DEFAULT_DATA_LAKE"></a>

```typescript
public readonly DEFAULT_DATA_LAKE: string;
```

- *Type:* string

---

##### `DEFAULT_DATA_WAREHOUSE`<sup>Required</sup> <a name="DEFAULT_DATA_WAREHOUSE" id="cdk-data-zone.BlueprintEnvironmentIdentifiers.property.DEFAULT_DATA_WAREHOUSE"></a>

```typescript
public readonly DEFAULT_DATA_WAREHOUSE: string;
```

- *Type:* string

---

### DataSourceConfigurationBase <a name="DataSourceConfigurationBase" id="cdk-data-zone.DataSourceConfigurationBase"></a>

- *Implements:* <a href="#cdk-data-zone.IDataSourceConfiguration">IDataSourceConfiguration</a>

#### Initializers <a name="Initializers" id="cdk-data-zone.DataSourceConfigurationBase.Initializer"></a>

```typescript
import { DataSourceConfigurationBase } from 'cdk-data-zone'

new DataSourceConfigurationBase()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.DataSourceConfigurationBase.fromGlue">fromGlue</a></code> | *No description.* |
| <code><a href="#cdk-data-zone.DataSourceConfigurationBase.fromRedshift">fromRedshift</a></code> | *No description.* |

---

##### `fromGlue` <a name="fromGlue" id="cdk-data-zone.DataSourceConfigurationBase.fromGlue"></a>

```typescript
import { DataSourceConfigurationBase } from 'cdk-data-zone'

DataSourceConfigurationBase.fromGlue(options: GlueOptions)
```

###### `options`<sup>Required</sup> <a name="options" id="cdk-data-zone.DataSourceConfigurationBase.fromGlue.parameter.options"></a>

- *Type:* <a href="#cdk-data-zone.GlueOptions">GlueOptions</a>

---

##### `fromRedshift` <a name="fromRedshift" id="cdk-data-zone.DataSourceConfigurationBase.fromRedshift"></a>

```typescript
import { DataSourceConfigurationBase } from 'cdk-data-zone'

DataSourceConfigurationBase.fromRedshift(options: RedshiftOptions)
```

###### `options`<sup>Required</sup> <a name="options" id="cdk-data-zone.DataSourceConfigurationBase.fromRedshift.parameter.options"></a>

- *Type:* <a href="#cdk-data-zone.RedshiftOptions">RedshiftOptions</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.DataSourceConfigurationBase.property.configuration">configuration</a></code> | <code>aws-cdk-lib.aws_datazone.CfnDataSource.DataSourceConfigurationInputProperty</code> | *No description.* |
| <code><a href="#cdk-data-zone.DataSourceConfigurationBase.property.filterType">filterType</a></code> | <code>string</code> | *No description.* |

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="cdk-data-zone.DataSourceConfigurationBase.property.configuration"></a>

```typescript
public readonly configuration: DataSourceConfigurationInputProperty;
```

- *Type:* aws-cdk-lib.aws_datazone.CfnDataSource.DataSourceConfigurationInputProperty

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="cdk-data-zone.DataSourceConfigurationBase.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

---


### Forms <a name="Forms" id="cdk-data-zone.Forms"></a>


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.Forms.fromFile">fromFile</a></code> | *No description.* |
| <code><a href="#cdk-data-zone.Forms.fromInline">fromInline</a></code> | *No description.* |

---

##### `fromFile` <a name="fromFile" id="cdk-data-zone.Forms.fromFile"></a>

```typescript
import { Forms } from 'cdk-data-zone'

Forms.fromFile(path: string)
```

###### `path`<sup>Required</sup> <a name="path" id="cdk-data-zone.Forms.fromFile.parameter.path"></a>

- *Type:* string

---

##### `fromInline` <a name="fromInline" id="cdk-data-zone.Forms.fromInline"></a>

```typescript
import { Forms } from 'cdk-data-zone'

Forms.fromInline(options: ...FormMetadataOptions[])
```

###### `options`<sup>Required</sup> <a name="options" id="cdk-data-zone.Forms.fromInline.parameter.options"></a>

- *Type:* ...<a href="#cdk-data-zone.FormMetadataOptions">FormMetadataOptions</a>[]

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.Forms.property.metadataOptions">metadataOptions</a></code> | <code><a href="#cdk-data-zone.FormMetadataOptions">FormMetadataOptions</a>[]</code> | *No description.* |

---

##### `metadataOptions`<sup>Required</sup> <a name="metadataOptions" id="cdk-data-zone.Forms.property.metadataOptions"></a>

```typescript
public readonly metadataOptions: FormMetadataOptions[];
```

- *Type:* <a href="#cdk-data-zone.FormMetadataOptions">FormMetadataOptions</a>[]

---


### Glossaries <a name="Glossaries" id="cdk-data-zone.Glossaries"></a>


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.Glossaries.fromFile">fromFile</a></code> | *No description.* |
| <code><a href="#cdk-data-zone.Glossaries.fromInline">fromInline</a></code> | *No description.* |

---

##### `fromFile` <a name="fromFile" id="cdk-data-zone.Glossaries.fromFile"></a>

```typescript
import { Glossaries } from 'cdk-data-zone'

Glossaries.fromFile(path: string)
```

###### `path`<sup>Required</sup> <a name="path" id="cdk-data-zone.Glossaries.fromFile.parameter.path"></a>

- *Type:* string

---

##### `fromInline` <a name="fromInline" id="cdk-data-zone.Glossaries.fromInline"></a>

```typescript
import { Glossaries } from 'cdk-data-zone'

Glossaries.fromInline(options: ...GlossaryOptions[])
```

###### `options`<sup>Required</sup> <a name="options" id="cdk-data-zone.Glossaries.fromInline.parameter.options"></a>

- *Type:* ...<a href="#cdk-data-zone.GlossaryOptions">GlossaryOptions</a>[]

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.Glossaries.property.glossariesList">glossariesList</a></code> | <code><a href="#cdk-data-zone.GlossaryOptions">GlossaryOptions</a>[]</code> | *No description.* |

---

##### `glossariesList`<sup>Required</sup> <a name="glossariesList" id="cdk-data-zone.Glossaries.property.glossariesList"></a>

```typescript
public readonly glossariesList: GlossaryOptions[];
```

- *Type:* <a href="#cdk-data-zone.GlossaryOptions">GlossaryOptions</a>[]

---


### Schedule <a name="Schedule" id="cdk-data-zone.Schedule"></a>


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.Schedule.fromCron">fromCron</a></code> | *No description.* |

---

##### `fromCron` <a name="fromCron" id="cdk-data-zone.Schedule.fromCron"></a>

```typescript
import { Schedule } from 'cdk-data-zone'

Schedule.fromCron(options: CronOptions)
```

###### `options`<sup>Required</sup> <a name="options" id="cdk-data-zone.Schedule.fromCron.parameter.options"></a>

- *Type:* <a href="#cdk-data-zone.CronOptions">CronOptions</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.Schedule.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.Schedule.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |

---

##### `expression`<sup>Required</sup> <a name="expression" id="cdk-data-zone.Schedule.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="cdk-data-zone.Schedule.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IBlueprint <a name="IBlueprint" id="cdk-data-zone.IBlueprint"></a>

- *Extends:* <a href="#cdk-data-zone.IResource">IResource</a>

- *Implemented By:* <a href="#cdk-data-zone.Blueprint">Blueprint</a>, <a href="#cdk-data-zone.BlueprintBase">BlueprintBase</a>, <a href="#cdk-data-zone.IBlueprint">IBlueprint</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.IBlueprint.addParameters">addParameters</a></code> | *No description.* |

---

##### `addParameters` <a name="addParameters" id="cdk-data-zone.IBlueprint.addParameters"></a>

```typescript
public addParameters(region: string, parameters: {[ key: string ]: string}): void
```

###### `region`<sup>Required</sup> <a name="region" id="cdk-data-zone.IBlueprint.addParameters.parameter.region"></a>

- *Type:* string

---

###### `parameters`<sup>Required</sup> <a name="parameters" id="cdk-data-zone.IBlueprint.addParameters.parameter.parameters"></a>

- *Type:* {[ key: string ]: string}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.IBlueprint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-data-zone.IBlueprint.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-data-zone.IBlueprint.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-data-zone.IBlueprint.property.createdAt">createdAt</a></code> | <code>string</code> | The timestamp of when the data source was created. |
| <code><a href="#cdk-data-zone.IBlueprint.property.updatedAt">updatedAt</a></code> | <code>string</code> | The timestamp of when the data source was updated. |
| <code><a href="#cdk-data-zone.IBlueprint.property.blueprintId">blueprintId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-data-zone.IBlueprint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-data-zone.IBlueprint.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-data-zone.IBlueprint.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="cdk-data-zone.IBlueprint.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

The timestamp of when the data source was created.

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="cdk-data-zone.IBlueprint.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

The timestamp of when the data source was updated.

---

##### `blueprintId`<sup>Required</sup> <a name="blueprintId" id="cdk-data-zone.IBlueprint.property.blueprintId"></a>

```typescript
public readonly blueprintId: string;
```

- *Type:* string

---

### IDataSource <a name="IDataSource" id="cdk-data-zone.IDataSource"></a>

- *Extends:* <a href="#cdk-data-zone.IResource">IResource</a>

- *Implemented By:* <a href="#cdk-data-zone.DataSource">DataSource</a>, <a href="#cdk-data-zone.DataSourceBase">DataSourceBase</a>, <a href="#cdk-data-zone.IDataSource">IDataSource</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.IDataSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-data-zone.IDataSource.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-data-zone.IDataSource.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-data-zone.IDataSource.property.createdAt">createdAt</a></code> | <code>string</code> | The timestamp of when the data source was created. |
| <code><a href="#cdk-data-zone.IDataSource.property.updatedAt">updatedAt</a></code> | <code>string</code> | The timestamp of when the data source was updated. |
| <code><a href="#cdk-data-zone.IDataSource.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | The identifier of the data source run. |
| <code><a href="#cdk-data-zone.IDataSource.property.environment">environment</a></code> | <code><a href="#cdk-data-zone.IEnvironment">IEnvironment</a></code> | The ID of the environment in which the data source exists. |
| <code><a href="#cdk-data-zone.IDataSource.property.lastRunAssetCount">lastRunAssetCount</a></code> | <code>aws-cdk-lib.IResolvable</code> | The count of the assets created during the last data source run. |
| <code><a href="#cdk-data-zone.IDataSource.property.lastRunAt">lastRunAt</a></code> | <code>string</code> | The timestamp of when the data source run was last performed. |
| <code><a href="#cdk-data-zone.IDataSource.property.lastRunStatus">lastRunStatus</a></code> | <code>string</code> | The status of the last data source run. |
| <code><a href="#cdk-data-zone.IDataSource.property.project">project</a></code> | <code><a href="#cdk-data-zone.IProject">IProject</a></code> | The project ID included in the data source run activity. |
| <code><a href="#cdk-data-zone.IDataSource.property.status">status</a></code> | <code>string</code> | The status of the data source. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-data-zone.IDataSource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-data-zone.IDataSource.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-data-zone.IDataSource.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="cdk-data-zone.IDataSource.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

The timestamp of when the data source was created.

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="cdk-data-zone.IDataSource.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

The timestamp of when the data source was updated.

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="cdk-data-zone.IDataSource.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

The identifier of the data source run.

---

##### `environment`<sup>Required</sup> <a name="environment" id="cdk-data-zone.IDataSource.property.environment"></a>

```typescript
public readonly environment: IEnvironment;
```

- *Type:* <a href="#cdk-data-zone.IEnvironment">IEnvironment</a>

The ID of the environment in which the data source exists.

---

##### `lastRunAssetCount`<sup>Required</sup> <a name="lastRunAssetCount" id="cdk-data-zone.IDataSource.property.lastRunAssetCount"></a>

```typescript
public readonly lastRunAssetCount: IResolvable;
```

- *Type:* aws-cdk-lib.IResolvable

The count of the assets created during the last data source run.

---

##### `lastRunAt`<sup>Required</sup> <a name="lastRunAt" id="cdk-data-zone.IDataSource.property.lastRunAt"></a>

```typescript
public readonly lastRunAt: string;
```

- *Type:* string

The timestamp of when the data source run was last performed.

---

##### `lastRunStatus`<sup>Required</sup> <a name="lastRunStatus" id="cdk-data-zone.IDataSource.property.lastRunStatus"></a>

```typescript
public readonly lastRunStatus: string;
```

- *Type:* string

The status of the last data source run.

---

##### `project`<sup>Required</sup> <a name="project" id="cdk-data-zone.IDataSource.property.project"></a>

```typescript
public readonly project: IProject;
```

- *Type:* <a href="#cdk-data-zone.IProject">IProject</a>

The project ID included in the data source run activity.

---

##### `status`<sup>Required</sup> <a name="status" id="cdk-data-zone.IDataSource.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The status of the data source.

---

### IDataSourceConfiguration <a name="IDataSourceConfiguration" id="cdk-data-zone.IDataSourceConfiguration"></a>

- *Implemented By:* <a href="#cdk-data-zone.DataSourceConfigurationBase">DataSourceConfigurationBase</a>, <a href="#cdk-data-zone.IDataSourceConfiguration">IDataSourceConfiguration</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.IDataSourceConfiguration.property.configuration">configuration</a></code> | <code>aws-cdk-lib.aws_datazone.CfnDataSource.DataSourceConfigurationInputProperty</code> | *No description.* |
| <code><a href="#cdk-data-zone.IDataSourceConfiguration.property.filterType">filterType</a></code> | <code>string</code> | *No description.* |

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="cdk-data-zone.IDataSourceConfiguration.property.configuration"></a>

```typescript
public readonly configuration: DataSourceConfigurationInputProperty;
```

- *Type:* aws-cdk-lib.aws_datazone.CfnDataSource.DataSourceConfigurationInputProperty

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="cdk-data-zone.IDataSourceConfiguration.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

---

### IDomain <a name="IDomain" id="cdk-data-zone.IDomain"></a>

- *Extends:* <a href="#cdk-data-zone.IResource">IResource</a>

- *Implemented By:* <a href="#cdk-data-zone.Domain">Domain</a>, <a href="#cdk-data-zone.DomainBase">DomainBase</a>, <a href="#cdk-data-zone.IDomain">IDomain</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.IDomain.addSingleSignOn">addSingleSignOn</a></code> | *No description.* |
| <code><a href="#cdk-data-zone.IDomain.createProject">createProject</a></code> | *No description.* |
| <code><a href="#cdk-data-zone.IDomain.enableBlueprint">enableBlueprint</a></code> | *No description.* |

---

##### `addSingleSignOn` <a name="addSingleSignOn" id="cdk-data-zone.IDomain.addSingleSignOn"></a>

```typescript
public addSingleSignOn(singleSignOn: SingleSignOn): void
```

###### `singleSignOn`<sup>Required</sup> <a name="singleSignOn" id="cdk-data-zone.IDomain.addSingleSignOn.parameter.singleSignOn"></a>

- *Type:* <a href="#cdk-data-zone.SingleSignOn">SingleSignOn</a>

---

##### `createProject` <a name="createProject" id="cdk-data-zone.IDomain.createProject"></a>

```typescript
public createProject(id: string, options: ProjectOptions): Project
```

###### `id`<sup>Required</sup> <a name="id" id="cdk-data-zone.IDomain.createProject.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="cdk-data-zone.IDomain.createProject.parameter.options"></a>

- *Type:* <a href="#cdk-data-zone.ProjectOptions">ProjectOptions</a>

---

##### `enableBlueprint` <a name="enableBlueprint" id="cdk-data-zone.IDomain.enableBlueprint"></a>

```typescript
public enableBlueprint(blueprintIdentifier: string, options?: BlueprintOptions): Blueprint
```

###### `blueprintIdentifier`<sup>Required</sup> <a name="blueprintIdentifier" id="cdk-data-zone.IDomain.enableBlueprint.parameter.blueprintIdentifier"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk-data-zone.IDomain.enableBlueprint.parameter.options"></a>

- *Type:* <a href="#cdk-data-zone.BlueprintOptions">BlueprintOptions</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.IDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-data-zone.IDomain.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-data-zone.IDomain.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-data-zone.IDomain.property.createdAt">createdAt</a></code> | <code>string</code> | The timestamp of when the data source was created. |
| <code><a href="#cdk-data-zone.IDomain.property.updatedAt">updatedAt</a></code> | <code>string</code> | The timestamp of when the data source was updated. |
| <code><a href="#cdk-data-zone.IDomain.property.domainArn">domainArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.IDomain.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.IDomain.property.managedAccount">managedAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.IDomain.property.portalUrl">portalUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.IDomain.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-data-zone.IDomain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-data-zone.IDomain.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-data-zone.IDomain.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="cdk-data-zone.IDomain.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

The timestamp of when the data source was created.

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="cdk-data-zone.IDomain.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

The timestamp of when the data source was updated.

---

##### `domainArn`<sup>Required</sup> <a name="domainArn" id="cdk-data-zone.IDomain.property.domainArn"></a>

```typescript
public readonly domainArn: string;
```

- *Type:* string

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="cdk-data-zone.IDomain.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `managedAccount`<sup>Required</sup> <a name="managedAccount" id="cdk-data-zone.IDomain.property.managedAccount"></a>

```typescript
public readonly managedAccount: string;
```

- *Type:* string

---

##### `portalUrl`<sup>Required</sup> <a name="portalUrl" id="cdk-data-zone.IDomain.property.portalUrl"></a>

```typescript
public readonly portalUrl: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="cdk-data-zone.IDomain.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

### IEnvironment <a name="IEnvironment" id="cdk-data-zone.IEnvironment"></a>

- *Extends:* <a href="#cdk-data-zone.IResource">IResource</a>

- *Implemented By:* <a href="#cdk-data-zone.Environment">Environment</a>, <a href="#cdk-data-zone.EnvironmentBase">EnvironmentBase</a>, <a href="#cdk-data-zone.IEnvironment">IEnvironment</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.IEnvironment.addDataSource">addDataSource</a></code> | *No description.* |

---

##### `addDataSource` <a name="addDataSource" id="cdk-data-zone.IEnvironment.addDataSource"></a>

```typescript
public addDataSource(name: string, options: DataSourceOptions): DataSource
```

###### `name`<sup>Required</sup> <a name="name" id="cdk-data-zone.IEnvironment.addDataSource.parameter.name"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="cdk-data-zone.IEnvironment.addDataSource.parameter.options"></a>

- *Type:* <a href="#cdk-data-zone.DataSourceOptions">DataSourceOptions</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.IEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-data-zone.IEnvironment.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-data-zone.IEnvironment.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-data-zone.IEnvironment.property.createdAt">createdAt</a></code> | <code>string</code> | The timestamp of when the data source was created. |
| <code><a href="#cdk-data-zone.IEnvironment.property.updatedAt">updatedAt</a></code> | <code>string</code> | The timestamp of when the data source was updated. |
| <code><a href="#cdk-data-zone.IEnvironment.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | The identifier of the AWS account in which an environment exists. |
| <code><a href="#cdk-data-zone.IEnvironment.property.awsAccountRegion">awsAccountRegion</a></code> | <code>string</code> | The AWS Region in which an environment exists. |
| <code><a href="#cdk-data-zone.IEnvironment.property.createdBy">createdBy</a></code> | <code>string</code> | The Amazon  user who created the environment. |
| <code><a href="#cdk-data-zone.IEnvironment.property.domainId">domainId</a></code> | <code>string</code> | The identifier of the Amazon  domain in which the environment exists. |
| <code><a href="#cdk-data-zone.IEnvironment.property.environmentBlueprintId">environmentBlueprintId</a></code> | <code>string</code> | The identifier of a blueprint with which an environment profile is created. |
| <code><a href="#cdk-data-zone.IEnvironment.property.environmentId">environmentId</a></code> | <code>string</code> | The identifier of the environment. |
| <code><a href="#cdk-data-zone.IEnvironment.property.project">project</a></code> | <code><a href="#cdk-data-zone.IProject">IProject</a></code> | The identifier of the project in which the environment exists. |
| <code><a href="#cdk-data-zone.IEnvironment.property.provider">provider</a></code> | <code>string</code> | The provider of the environment. |
| <code><a href="#cdk-data-zone.IEnvironment.property.status">status</a></code> | <code>string</code> | The status of the environment. |
| <code><a href="#cdk-data-zone.IEnvironment.property.environmentProfile">environmentProfile</a></code> | <code><a href="#cdk-data-zone.IEnvironmentProfile">IEnvironmentProfile</a></code> | The identifier of the environment profile with which the environment was created. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-data-zone.IEnvironment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-data-zone.IEnvironment.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-data-zone.IEnvironment.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="cdk-data-zone.IEnvironment.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

The timestamp of when the data source was created.

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="cdk-data-zone.IEnvironment.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

The timestamp of when the data source was updated.

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="cdk-data-zone.IEnvironment.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

The identifier of the AWS account in which an environment exists.

---

##### `awsAccountRegion`<sup>Required</sup> <a name="awsAccountRegion" id="cdk-data-zone.IEnvironment.property.awsAccountRegion"></a>

```typescript
public readonly awsAccountRegion: string;
```

- *Type:* string

The AWS Region in which an environment exists.

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="cdk-data-zone.IEnvironment.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

The Amazon  user who created the environment.

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="cdk-data-zone.IEnvironment.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The identifier of the Amazon  domain in which the environment exists.

---

##### `environmentBlueprintId`<sup>Required</sup> <a name="environmentBlueprintId" id="cdk-data-zone.IEnvironment.property.environmentBlueprintId"></a>

```typescript
public readonly environmentBlueprintId: string;
```

- *Type:* string

The identifier of a blueprint with which an environment profile is created.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="cdk-data-zone.IEnvironment.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The identifier of the environment.

---

##### `project`<sup>Required</sup> <a name="project" id="cdk-data-zone.IEnvironment.property.project"></a>

```typescript
public readonly project: IProject;
```

- *Type:* <a href="#cdk-data-zone.IProject">IProject</a>

The identifier of the project in which the environment exists.

---

##### `provider`<sup>Required</sup> <a name="provider" id="cdk-data-zone.IEnvironment.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

The provider of the environment.

---

##### `status`<sup>Required</sup> <a name="status" id="cdk-data-zone.IEnvironment.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The status of the environment.

---

##### `environmentProfile`<sup>Optional</sup> <a name="environmentProfile" id="cdk-data-zone.IEnvironment.property.environmentProfile"></a>

```typescript
public readonly environmentProfile: IEnvironmentProfile;
```

- *Type:* <a href="#cdk-data-zone.IEnvironmentProfile">IEnvironmentProfile</a>

The identifier of the environment profile with which the environment was created.

---

### IEnvironmentProfile <a name="IEnvironmentProfile" id="cdk-data-zone.IEnvironmentProfile"></a>

- *Extends:* <a href="#cdk-data-zone.IResource">IResource</a>

- *Implemented By:* <a href="#cdk-data-zone.EnvironmentProfile">EnvironmentProfile</a>, <a href="#cdk-data-zone.EnvironmentProfileBase">EnvironmentProfileBase</a>, <a href="#cdk-data-zone.IEnvironmentProfile">IEnvironmentProfile</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.IEnvironmentProfile.addEnvironment">addEnvironment</a></code> | *No description.* |

---

##### `addEnvironment` <a name="addEnvironment" id="cdk-data-zone.IEnvironmentProfile.addEnvironment"></a>

```typescript
public addEnvironment(id: string, options: EnvironmentOptions): Environment
```

###### `id`<sup>Required</sup> <a name="id" id="cdk-data-zone.IEnvironmentProfile.addEnvironment.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="cdk-data-zone.IEnvironmentProfile.addEnvironment.parameter.options"></a>

- *Type:* <a href="#cdk-data-zone.EnvironmentOptions">EnvironmentOptions</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.IEnvironmentProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-data-zone.IEnvironmentProfile.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-data-zone.IEnvironmentProfile.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-data-zone.IEnvironmentProfile.property.createdAt">createdAt</a></code> | <code>string</code> | The timestamp of when the data source was created. |
| <code><a href="#cdk-data-zone.IEnvironmentProfile.property.updatedAt">updatedAt</a></code> | <code>string</code> | The timestamp of when the data source was updated. |
| <code><a href="#cdk-data-zone.IEnvironmentProfile.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.IEnvironmentProfile.property.awsAccountRegion">awsAccountRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.IEnvironmentProfile.property.createdBy">createdBy</a></code> | <code>string</code> | The Amazon  user who created the environment profile. |
| <code><a href="#cdk-data-zone.IEnvironmentProfile.property.environmentBlueprintId">environmentBlueprintId</a></code> | <code>string</code> | The identifier of a blueprint with which an environment profile is created. |
| <code><a href="#cdk-data-zone.IEnvironmentProfile.property.environmentProfileId">environmentProfileId</a></code> | <code>string</code> | The identifier of the environment profile. |
| <code><a href="#cdk-data-zone.IEnvironmentProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.IEnvironmentProfile.property.project">project</a></code> | <code><a href="#cdk-data-zone.IProject">IProject</a></code> | The identifier of a project in which an environment profile exists. |
| <code><a href="#cdk-data-zone.IEnvironmentProfile.property.description">description</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-data-zone.IEnvironmentProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-data-zone.IEnvironmentProfile.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-data-zone.IEnvironmentProfile.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="cdk-data-zone.IEnvironmentProfile.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

The timestamp of when the data source was created.

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="cdk-data-zone.IEnvironmentProfile.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

The timestamp of when the data source was updated.

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="cdk-data-zone.IEnvironmentProfile.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `awsAccountRegion`<sup>Required</sup> <a name="awsAccountRegion" id="cdk-data-zone.IEnvironmentProfile.property.awsAccountRegion"></a>

```typescript
public readonly awsAccountRegion: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="cdk-data-zone.IEnvironmentProfile.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

The Amazon  user who created the environment profile.

---

##### `environmentBlueprintId`<sup>Required</sup> <a name="environmentBlueprintId" id="cdk-data-zone.IEnvironmentProfile.property.environmentBlueprintId"></a>

```typescript
public readonly environmentBlueprintId: string;
```

- *Type:* string

The identifier of a blueprint with which an environment profile is created.

---

##### `environmentProfileId`<sup>Required</sup> <a name="environmentProfileId" id="cdk-data-zone.IEnvironmentProfile.property.environmentProfileId"></a>

```typescript
public readonly environmentProfileId: string;
```

- *Type:* string

The identifier of the environment profile.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-data-zone.IEnvironmentProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="cdk-data-zone.IEnvironmentProfile.property.project"></a>

```typescript
public readonly project: IProject;
```

- *Type:* <a href="#cdk-data-zone.IProject">IProject</a>

The identifier of a project in which an environment profile exists.

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-data-zone.IEnvironmentProfile.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

### IFormMetadata <a name="IFormMetadata" id="cdk-data-zone.IFormMetadata"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#cdk-data-zone.FormMetadata">FormMetadata</a>, <a href="#cdk-data-zone.FormMetadataBase">FormMetadataBase</a>, <a href="#cdk-data-zone.IFormMetadata">IFormMetadata</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.IFormMetadata.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-data-zone.IFormMetadata.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-data-zone.IFormMetadata.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-data-zone.IFormMetadata.property.formName">formName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.IFormMetadata.property.formRevision">formRevision</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-data-zone.IFormMetadata.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-data-zone.IFormMetadata.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-data-zone.IFormMetadata.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `formName`<sup>Required</sup> <a name="formName" id="cdk-data-zone.IFormMetadata.property.formName"></a>

```typescript
public readonly formName: string;
```

- *Type:* string

---

##### `formRevision`<sup>Required</sup> <a name="formRevision" id="cdk-data-zone.IFormMetadata.property.formRevision"></a>

```typescript
public readonly formRevision: string;
```

- *Type:* string

---

### IGlossary <a name="IGlossary" id="cdk-data-zone.IGlossary"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#cdk-data-zone.Glossary">Glossary</a>, <a href="#cdk-data-zone.GlossaryBase">GlossaryBase</a>, <a href="#cdk-data-zone.IGlossary">IGlossary</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.IGlossary.addGlossaryTerms">addGlossaryTerms</a></code> | *No description.* |

---

##### `addGlossaryTerms` <a name="addGlossaryTerms" id="cdk-data-zone.IGlossary.addGlossaryTerms"></a>

```typescript
public addGlossaryTerms(terms: GlossaryTermOptions[]): GlossaryTerm[]
```

###### `terms`<sup>Required</sup> <a name="terms" id="cdk-data-zone.IGlossary.addGlossaryTerms.parameter.terms"></a>

- *Type:* <a href="#cdk-data-zone.GlossaryTermOptions">GlossaryTermOptions</a>[]

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.IGlossary.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-data-zone.IGlossary.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-data-zone.IGlossary.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-data-zone.IGlossary.property.glossaryId">glossaryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-data-zone.IGlossary.property.project">project</a></code> | <code><a href="#cdk-data-zone.Project">Project</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-data-zone.IGlossary.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-data-zone.IGlossary.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-data-zone.IGlossary.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `glossaryId`<sup>Required</sup> <a name="glossaryId" id="cdk-data-zone.IGlossary.property.glossaryId"></a>

```typescript
public readonly glossaryId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="cdk-data-zone.IGlossary.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* <a href="#cdk-data-zone.Project">Project</a>

---

### IGlossaryTerm <a name="IGlossaryTerm" id="cdk-data-zone.IGlossaryTerm"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#cdk-data-zone.GlossaryTerm">GlossaryTerm</a>, <a href="#cdk-data-zone.GlossaryTermBase">GlossaryTermBase</a>, <a href="#cdk-data-zone.IGlossaryTerm">IGlossaryTerm</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.IGlossaryTerm.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-data-zone.IGlossaryTerm.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-data-zone.IGlossaryTerm.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-data-zone.IGlossaryTerm.property.glossaryTermId">glossaryTermId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-data-zone.IGlossaryTerm.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-data-zone.IGlossaryTerm.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-data-zone.IGlossaryTerm.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `glossaryTermId`<sup>Required</sup> <a name="glossaryTermId" id="cdk-data-zone.IGlossaryTerm.property.glossaryTermId"></a>

```typescript
public readonly glossaryTermId: string;
```

- *Type:* string

---

### IProject <a name="IProject" id="cdk-data-zone.IProject"></a>

- *Extends:* <a href="#cdk-data-zone.IResource">IResource</a>

- *Implemented By:* <a href="#cdk-data-zone.Project">Project</a>, <a href="#cdk-data-zone.ProjectBase">ProjectBase</a>, <a href="#cdk-data-zone.IProject">IProject</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.IProject.addFormMetadata">addFormMetadata</a></code> | *No description.* |
| <code><a href="#cdk-data-zone.IProject.addGlossaries">addGlossaries</a></code> | *No description.* |
| <code><a href="#cdk-data-zone.IProject.addGlossary">addGlossary</a></code> | *No description.* |
| <code><a href="#cdk-data-zone.IProject.addGlossaryTerm">addGlossaryTerm</a></code> | *No description.* |
| <code><a href="#cdk-data-zone.IProject.addMember">addMember</a></code> | *No description.* |

---

##### `addFormMetadata` <a name="addFormMetadata" id="cdk-data-zone.IProject.addFormMetadata"></a>

```typescript
public addFormMetadata(forms: Forms): void
```

###### `forms`<sup>Required</sup> <a name="forms" id="cdk-data-zone.IProject.addFormMetadata.parameter.forms"></a>

- *Type:* <a href="#cdk-data-zone.Forms">Forms</a>

---

##### `addGlossaries` <a name="addGlossaries" id="cdk-data-zone.IProject.addGlossaries"></a>

```typescript
public addGlossaries(glossaries: Glossaries): void
```

###### `glossaries`<sup>Required</sup> <a name="glossaries" id="cdk-data-zone.IProject.addGlossaries.parameter.glossaries"></a>

- *Type:* <a href="#cdk-data-zone.Glossaries">Glossaries</a>

---

##### `addGlossary` <a name="addGlossary" id="cdk-data-zone.IProject.addGlossary"></a>

```typescript
public addGlossary(options: GlossaryOptions): Glossary
```

###### `options`<sup>Required</sup> <a name="options" id="cdk-data-zone.IProject.addGlossary.parameter.options"></a>

- *Type:* <a href="#cdk-data-zone.GlossaryOptions">GlossaryOptions</a>

---

##### `addGlossaryTerm` <a name="addGlossaryTerm" id="cdk-data-zone.IProject.addGlossaryTerm"></a>

```typescript
public addGlossaryTerm(term: string): void
```

###### `term`<sup>Required</sup> <a name="term" id="cdk-data-zone.IProject.addGlossaryTerm.parameter.term"></a>

- *Type:* string

---

##### `addMember` <a name="addMember" id="cdk-data-zone.IProject.addMember"></a>

```typescript
public addMember(id: string, options: MemberOptions): void
```

###### `id`<sup>Required</sup> <a name="id" id="cdk-data-zone.IProject.addMember.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="cdk-data-zone.IProject.addMember.parameter.options"></a>

- *Type:* <a href="#cdk-data-zone.MemberOptions">MemberOptions</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.IProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-data-zone.IProject.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-data-zone.IProject.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-data-zone.IProject.property.createdAt">createdAt</a></code> | <code>string</code> | The timestamp of when the data source was created. |
| <code><a href="#cdk-data-zone.IProject.property.updatedAt">updatedAt</a></code> | <code>string</code> | The timestamp of when the data source was updated. |
| <code><a href="#cdk-data-zone.IProject.property.createdBy">createdBy</a></code> | <code>string</code> | The Amazon  user who created the project. |
| <code><a href="#cdk-data-zone.IProject.property.projectDomainId">projectDomainId</a></code> | <code>string</code> | The identifier of a Amazon  domain where the project exists. |
| <code><a href="#cdk-data-zone.IProject.property.projectId">projectId</a></code> | <code>string</code> | The identifier of a project. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-data-zone.IProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-data-zone.IProject.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-data-zone.IProject.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="cdk-data-zone.IProject.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

The timestamp of when the data source was created.

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="cdk-data-zone.IProject.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

The timestamp of when the data source was updated.

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="cdk-data-zone.IProject.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

The Amazon  user who created the project.

---

##### `projectDomainId`<sup>Required</sup> <a name="projectDomainId" id="cdk-data-zone.IProject.property.projectDomainId"></a>

```typescript
public readonly projectDomainId: string;
```

- *Type:* string

The identifier of a Amazon  domain where the project exists.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="cdk-data-zone.IProject.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The identifier of a project.

---

### IResource <a name="IResource" id="cdk-data-zone.IResource"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#cdk-data-zone.Blueprint">Blueprint</a>, <a href="#cdk-data-zone.BlueprintBase">BlueprintBase</a>, <a href="#cdk-data-zone.DataSource">DataSource</a>, <a href="#cdk-data-zone.DataSourceBase">DataSourceBase</a>, <a href="#cdk-data-zone.Domain">Domain</a>, <a href="#cdk-data-zone.DomainBase">DomainBase</a>, <a href="#cdk-data-zone.Environment">Environment</a>, <a href="#cdk-data-zone.EnvironmentBase">EnvironmentBase</a>, <a href="#cdk-data-zone.EnvironmentProfile">EnvironmentProfile</a>, <a href="#cdk-data-zone.EnvironmentProfileBase">EnvironmentProfileBase</a>, <a href="#cdk-data-zone.Project">Project</a>, <a href="#cdk-data-zone.ProjectBase">ProjectBase</a>, <a href="#cdk-data-zone.IBlueprint">IBlueprint</a>, <a href="#cdk-data-zone.IDataSource">IDataSource</a>, <a href="#cdk-data-zone.IDomain">IDomain</a>, <a href="#cdk-data-zone.IEnvironment">IEnvironment</a>, <a href="#cdk-data-zone.IEnvironmentProfile">IEnvironmentProfile</a>, <a href="#cdk-data-zone.IProject">IProject</a>, <a href="#cdk-data-zone.IResource">IResource</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-data-zone.IResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-data-zone.IResource.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-data-zone.IResource.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-data-zone.IResource.property.createdAt">createdAt</a></code> | <code>string</code> | The timestamp of when the data source was created. |
| <code><a href="#cdk-data-zone.IResource.property.updatedAt">updatedAt</a></code> | <code>string</code> | The timestamp of when the data source was updated. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-data-zone.IResource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-data-zone.IResource.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-data-zone.IResource.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="cdk-data-zone.IResource.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

The timestamp of when the data source was created.

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="cdk-data-zone.IResource.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

The timestamp of when the data source was updated.

---

## Enums <a name="Enums" id="Enums"></a>

### AssignmentType <a name="AssignmentType" id="cdk-data-zone.AssignmentType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.AssignmentType.AUTOMATIC">AUTOMATIC</a></code> | *No description.* |
| <code><a href="#cdk-data-zone.AssignmentType.MANUAL">MANUAL</a></code> | *No description.* |

---

##### `AUTOMATIC` <a name="AUTOMATIC" id="cdk-data-zone.AssignmentType.AUTOMATIC"></a>

---


##### `MANUAL` <a name="MANUAL" id="cdk-data-zone.AssignmentType.MANUAL"></a>

---


### SingleSignOnType <a name="SingleSignOnType" id="cdk-data-zone.SingleSignOnType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-data-zone.SingleSignOnType.IAM_IDC">IAM_IDC</a></code> | *No description.* |
| <code><a href="#cdk-data-zone.SingleSignOnType.DISABLED">DISABLED</a></code> | *No description.* |

---

##### `IAM_IDC` <a name="IAM_IDC" id="cdk-data-zone.SingleSignOnType.IAM_IDC"></a>

---


##### `DISABLED` <a name="DISABLED" id="cdk-data-zone.SingleSignOnType.DISABLED"></a>

---

