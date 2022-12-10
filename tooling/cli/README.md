# @incmix-ui/cli

Generate TypeScript types to provide autocomplete for your custom theme.

## Usage

```sh
npx @incmix-ui/cli tokens <path/to/your/theme.(js|ts)>
```

or

```sh
npx @incmix-ui/cli tokens <@your-org/Incmix-theme-package>
```

```sh
$ npx @incmix-ui/cli tokens --help

Usage: Incmix-cli tokens [options] <source>

Options:
  --out <path>              output file e.g. node_modules/@incmix-ui/styled-system/dist/declarations/src/theming.types.d.ts
  --strict-component-types  Generate strict types for props variant and size
  --strict-token-types      Generate strict types for theme tokens (e.g. color, spacing)
  --no-format               Disable auto formatting
  --watch [path]            Watch directory for changes and rebuild
  -h, --help                display help for command

Example call:
  $ Incmix-cli tokens theme.ts
```

> Note 🚨: If you delete the `node_modules` directory, you'll need to re-run the
> command to get proper typings again.

For convenience, you can add a `postinstall` script to your `package.json`, so
you don't have to think about this every time you re-install your dependencies.

```json title="package.json"
"scripts": {
  "gen:theme-typings": "Incmix-cli tokens <path/to/your/theme.(js|ts)>",
  "postinstall": "npm run gen:theme-typings"
}
```
