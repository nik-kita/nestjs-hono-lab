# About

> Simple notes about problem parts of the project that should be fixed or at
> least be known for developers. Code fragments are used to have possibility
> check actuality of imports with `deno test --doc` command to minify the risk
> to be outdated info.

## Type-related problems

- apollo plugin for playground is referred to `cjs` source instead of `esm`

  ```ts
  import { playground_plugin } from "./src/app.module.ts";
  ```
-
