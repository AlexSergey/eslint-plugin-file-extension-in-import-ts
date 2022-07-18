# eslint-plugin-file-extension-in-import-ts

## Disclaimer

This is small patch to the great rule:

**file-extension-in-import**

from [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node/) module.

Author of code:

[mysticatea](https://github.com/mysticatea)

I've just added mapping functionality.

## Motivation

When we use type module we must add extension to the file

```js
import foo from "./path/to/a/file"
```
It's a bad practice

```js
import eslint from "eslint"
import foo from "./path/to/a/file.js"
```

It's a good practice.

**node/file-extension-in-import** rule raise error when we forgot to add extension to the import. But it doesn't work with Typescript.

[Full description of rule here](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/file-extension-in-import.md)

### Typescript usage

When we use Typescript we can't add .ts extension to the file. It won't be process with Typescript compiler. In this case we need to add .js extension.

In this case we need to replace .ts extension to .js.

In this plugin I will add possibility to make mapping for extensions:

```js
'file-extension-in-import-ts/file-extension-in-import-ts': [ 'error', 'always', { extensionsMapping: {'.ts': '.js'}}]
```

It means, this rule will fix our ts files to .js extension in import statement.

## Installation:

1. Install the package:
```shell
npm i -D eslint-plugin-file-extension-in-import-ts
```

2. Add to .eslintrc.js:
```json
{
  "plugins": [
    "file-extension-in-import-ts"
  ],
  "rules": {
    "file-extension-in-import-ts/file-extension-in-import-ts": "error"
  }
}
```

By default, the plugin will process mapping:

- .ts -> .js
- .tsx -> .js

## Troubleshooting

This plugin has conflict with [eslint-import-plugin](https://www.npmjs.com/package/eslint-plugin-import), the rule: *import/no-unresolved* rule

To quick fix it we can skip '.js' (in the folder with TS sources JS files are not existing).

```js
'import/no-unresolved': ['error', { ignore: [ '\\.js$' ] }],
```

## The MIT License

Copyright (c)
- [mysticatea](https://github.com/mysticatea)
- [alexsergey](https://github.com/AlexSergey)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the “Software”), to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
