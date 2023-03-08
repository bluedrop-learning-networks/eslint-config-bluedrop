## Modules

* [main](#module_main) : <code>object</code>
    * [~recommended](#module_main..recommended) : <code>Object.&lt;string, Stack&gt;</code>
    * [~utils](#module_main..utils) : <code>Object.&lt;string, function()&gt;</code>
    * [~meta](#module_main..meta) : <code>Object.&lt;string, (function()\|Array.&lt;string&gt;\|Object.&lt;string, RuleSet&gt;)&gt;</code>
    * [~legacy](#module_main..legacy) : <code>object</code>
* [meta](#module_meta) : <code>object</code>
    * [~allRuleNames](#module_meta..allRuleNames) : <code>Array.&lt;string&gt;</code>
    * [~ourRuleNames](#module_meta..ourRuleNames) : <code>Array.&lt;string&gt;</code>
    * [~rulesByLayer](#module_meta..rulesByLayer) : <code>Object.&lt;string, RuleSet&gt;</code>
    * [~deprecatedRuleNames](#module_meta..deprecatedRuleNames) : <code>Array.&lt;string&gt;</code>
    * [~unusedRuleNames](#module_meta..unusedRuleNames) : <code>Array.&lt;string&gt;</code>
    * [~overlappingLayerRules](#module_meta..overlappingLayerRules) : <code>Object.&lt;RuleName, Object.&lt;LayerName, RuleSetting&gt;&gt;</code>
    * [~identicalLayerRules](#module_meta..identicalLayerRules) : <code>Object.&lt;string, Object.&lt;string, RuleSetting&gt;&gt;</code>
* [utils](#module_utils) : <code>object</code>
    * [~getLayerNames()](#module_utils..getLayerNames) ⇒ <code>Array.&lt;string&gt;</code>
    * [~getStack(list)](#module_utils..getStack) ⇒ [<code>Stack</code>](#Stack)
    * [~getLayer(name)](#module_utils..getLayer) ⇒ [<code>Layer</code>](#Layer)

## Typedefs

<dl>
<dt><a href="#Layer">Layer</a> : <code>Object.&lt;string, Object&gt;</code></dt>
<dd><blockquote>
<p>A <strong>Layer</strong> is equivalent to an <a href="https://eslint.org/docs/latest/use/configure/configuration-files-new#configuration-objects">eslint configuration object</a></p>
</blockquote>
<p>It holds information on the parse options, pugins, rules, settings, etc.
for linting source code within a specific scope.</p>
<p>Layers are composable, and are combined to create an eslint configuration.</p>
<p>Here, these grouped <em>Layers</em> comprise a <a href="#stack">Stack</a>.</p>
</dd>
<dt><a href="#Stack">Stack</a> : <code><a href="#Layer">Array.&lt;Layer&gt;</a></code></dt>
<dd><blockquote>
<p>A <strong>Stack</strong> is equivalent to the default export of an <code>esling.config.js</code> file</p>
</blockquote>
<p>It is also just an array of <a href="#layer">Layers</a></p>
<pre><code class="language-js">// in eslint.config.js

module.exports = stack
</code></pre>
</dd>
<dt><a href="#RuleSet">RuleSet</a> : <code>Object.&lt;string, any&gt;</code></dt>
<dd><p>A hash of rules and associated settings</p>
</dd>
</dl>

<a name="module_main"></a>

## main : <code>object</code>
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| recommended | <code>Object.&lt;string, Stack&gt;</code> | Recommended Stacks |
| legacy | <code>Object.&lt;string, Stack&gt;</code> | Legacy compatible Stacks |
| utils | <code>Object.&lt;string, function()&gt;</code> | Utilities |
| meta | <code>Object.&lt;string, (function()\|Array.&lt;string&gt;\|Object.&lt;string, RuleSet&gt;)&gt;</code> | Rule Metadata |


* [main](#module_main) : <code>object</code>
    * [~recommended](#module_main..recommended) : <code>Object.&lt;string, Stack&gt;</code>
    * [~utils](#module_main..utils) : <code>Object.&lt;string, function()&gt;</code>
    * [~meta](#module_main..meta) : <code>Object.&lt;string, (function()\|Array.&lt;string&gt;\|Object.&lt;string, RuleSet&gt;)&gt;</code>
    * [~legacy](#module_main..legacy) : <code>object</code>


* * *

<a name="module_main..recommended"></a>

### main~recommended : <code>Object.&lt;string, Stack&gt;</code>
The recommended configuration stacks provided by this module.

**Kind**: inner property of [<code>main</code>](#module_main)  

* * *

<a name="module_main..utils"></a>

### main~utils : <code>Object.&lt;string, function()&gt;</code>
Utils for working with eslint configs
```js
const { getStack, getLayerNames } = require('eslint-config-bluedrop/src/utils')
```

**Kind**: inner property of [<code>main</code>](#module_main)  

* * *

<a name="module_main..meta"></a>

### main~meta : <code>Object.&lt;string, (function()\|Array.&lt;string&gt;\|Object.&lt;string, RuleSet&gt;)&gt;</code>
Metadata about the eslint configuration.
```js
const { ourRuleNames, deprecatedRuleNames } = require('eslint-config-bluedrop/src/meta')
```

**Kind**: inner property of [<code>main</code>](#module_main)  

* * *

<a name="module_main..legacy"></a>

### main~legacy : <code>object</code>
Stacks which duplicate the configs in eslint-config-bluedrop v8.x

**Kind**: inner property of [<code>main</code>](#module_main)  

* * *

<a name="module_meta"></a>

## meta : <code>object</code>
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| ourRuleNames | <code>Array.&lt;RuleName&gt;</code> | The names of rules used by these configs |
| deprecatedRuleNames | <code>Array.&lt;RuleName&gt;</code> | The names of rules we use, but that are no longer supported |
| unusedRuleNames | <code>Array.&lt;RuleName&gt;</code> | The names of rules we could, but do not use |
| allRuleNames | <code>Array.&lt;RuleName&gt;</code> | The names of all rules know to this module |
| rulesByLayer | <code>Object.&lt;LayerName, RuleSet&gt;</code> | All of the rules organized by layer |
| overlappingLayerRules | <code>function</code> | A function which returns info on rule overlap between layers |
| identicalLayerRules | <code>function</code> | A function which returns rules w/ identical settings in multiple layers |


* [meta](#module_meta) : <code>object</code>
    * [~allRuleNames](#module_meta..allRuleNames) : <code>Array.&lt;string&gt;</code>
    * [~ourRuleNames](#module_meta..ourRuleNames) : <code>Array.&lt;string&gt;</code>
    * [~rulesByLayer](#module_meta..rulesByLayer) : <code>Object.&lt;string, RuleSet&gt;</code>
    * [~deprecatedRuleNames](#module_meta..deprecatedRuleNames) : <code>Array.&lt;string&gt;</code>
    * [~unusedRuleNames](#module_meta..unusedRuleNames) : <code>Array.&lt;string&gt;</code>
    * [~overlappingLayerRules](#module_meta..overlappingLayerRules) : <code>Object.&lt;RuleName, Object.&lt;LayerName, RuleSetting&gt;&gt;</code>
    * [~identicalLayerRules](#module_meta..identicalLayerRules) : <code>Object.&lt;string, Object.&lt;string, RuleSetting&gt;&gt;</code>


* * *

<a name="module_meta..allRuleNames"></a>

### meta~allRuleNames : <code>Array.&lt;string&gt;</code>
The names for all of the rules, used and unused

**Kind**: inner property of [<code>meta</code>](#module_meta)  
**Example**  
```js
console.log(allRulenames())
```

* * *

<a name="module_meta..ourRuleNames"></a>

### meta~ourRuleNames : <code>Array.&lt;string&gt;</code>
The names for all rules set/unset by this module

**Kind**: inner property of [<code>meta</code>](#module_meta)  
**Example**  
```js
console.log(ourRulenames())
```

* * *

<a name="module_meta..rulesByLayer"></a>

### meta~rulesByLayer : <code>Object.&lt;string, RuleSet&gt;</code>
The rulesets for all layers, indexed by layer name

**Kind**: inner property of [<code>meta</code>](#module_meta)  
**Example**  
```js
console.dir(rulesByLayer())
```

* * *

<a name="module_meta..deprecatedRuleNames"></a>

### meta~deprecatedRuleNames : <code>Array.&lt;string&gt;</code>
The names of deprecated rules

**Kind**: inner property of [<code>meta</code>](#module_meta)  
**Example**  
```js
console.log(deprecatedRuleNames())
```

* * *

<a name="module_meta..unusedRuleNames"></a>

### meta~unusedRuleNames : <code>Array.&lt;string&gt;</code>
The names of unused rules

**Kind**: inner property of [<code>meta</code>](#module_meta)  
**Example**  
```js
console.log(unusedRuleNames())
```

* * *

<a name="module_meta..overlappingLayerRules"></a>

### meta~overlappingLayerRules : <code>Object.&lt;RuleName, Object.&lt;LayerName, RuleSetting&gt;&gt;</code>
A function for detecting rule overlap between layers

**Kind**: inner property of [<code>meta</code>](#module_meta)  
**Example**  
```js
const { utils: { getLayerNames }, meta:{ overlappingLayerRules }} = require('eslint-config-bluedrop')
// using a util to get all of the layer names
console.dir(overlappingLayerRules(getLayerNames))
>    {
>      'arrow-parens': {
>        'common-ruleset-ecmascript-2015': 'error',
>        'common-ruleset-ecmascript-2022': 'off'
>      },
>      'no-console': { 'common-ruleset-possible-errors': 'error', 'console-base': 'off' },
>      'security/detect-child-process': {
>        'common-plugin-security': 'error',
>        'console-plugin-security': 'off'
>      },
>      ...
```

* * *

<a name="module_meta..identicalLayerRules"></a>

### meta~identicalLayerRules : <code>Object.&lt;string, Object.&lt;string, RuleSetting&gt;&gt;</code>
A function for detecting identical rules among layers

**Kind**: inner property of [<code>meta</code>](#module_meta)  
**Example**  
```js
const report = identicalLayerRules([
  './legacy/common-base',
  './legacy/console-base',
  './legacy/node-base',
])
console.dir(report)
```

* * *

<a name="module_utils"></a>

## utils : <code>object</code>
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| getStack | <code>function</code> | Get a stack. |
| getLayer | <code>function</code> | Get a layer. |
| getLayerNames | <code>function</code> | Get the list of layer names. |


* [utils](#module_utils) : <code>object</code>
    * [~getLayerNames()](#module_utils..getLayerNames) ⇒ <code>Array.&lt;string&gt;</code>
    * [~getStack(list)](#module_utils..getStack) ⇒ [<code>Stack</code>](#Stack)
    * [~getLayer(name)](#module_utils..getLayer) ⇒ [<code>Layer</code>](#Layer)


* * *

<a name="module_utils..getLayerNames"></a>

### utils~getLayerNames() ⇒ <code>Array.&lt;string&gt;</code>
Get all of the available layer names

**Kind**: inner method of [<code>utils</code>](#module_utils)  
**Returns**: <code>Array.&lt;string&gt;</code> - A Stack containing the requested layers  

* * *

<a name="module_utils..getStack"></a>

### utils~getStack(list) ⇒ [<code>Stack</code>](#Stack)
A function to get a stack from a list of layer names

**Kind**: inner method of [<code>utils</code>](#module_utils)  
**Returns**: [<code>Stack</code>](#Stack) - A Stack containing the requested layers  

| Param | Type | Description |
| --- | --- | --- |
| list | <code>Array.&lt;string&gt;</code> | A list of layers to stack |


* * *

<a name="module_utils..getLayer"></a>

### utils~getLayer(name) ⇒ [<code>Layer</code>](#Layer)
Get one layer

**Kind**: inner method of [<code>utils</code>](#module_utils)  
**Returns**: [<code>Layer</code>](#Layer) - The requested layer  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the layer to get |


* * *

<a name="Layer"></a>

## Layer : <code>Object.&lt;string, Object&gt;</code>
> A __Layer__ is equivalent to an [eslint configuration object]

It holds information on the parse options, pugins, rules, settings, etc.
for linting source code within a specific scope.

Layers are composable, and are combined to create an eslint configuration.

Here, these grouped _Layers_ comprise a [Stack](#stack).

[eslint configuration object]:https://eslint.org/docs/latest/use/configure/configuration-files-new#configuration-objects

**Kind**: global typedef  

* * *

<a name="Stack"></a>

## Stack : [<code>Array.&lt;Layer&gt;</code>](#Layer)
> A __Stack__ is equivalent to the default export of an `esling.config.js` file

It is also just an array of [Layers](#layer)
```js
// in eslint.config.js

module.exports = stack
```

[eslint configuration objects]:https://eslint.org/docs/latest/use/configure/configuration-files-new#configuration-objects

**Kind**: global typedef  
**Example** *(Here&#x27;s a Stack w/ two Layers)*  
```js
const myCLIMicroConfig = [
   {
     files: ['bin/*'],
     languageOptions: { globals: { process: 'readonly' } }
   },
   {
     files: ['test/*'],
     languageOptions: { globals: { describe: 'readonly', it: 'readonly' } }
   }
]
```

* * *

<a name="RuleSet"></a>

## RuleSet : <code>Object.&lt;string, any&gt;</code>
A hash of rules and associated settings

**Kind**: global typedef  

* * *

