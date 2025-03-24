<div align="center">
  <span>
    <a href="https://deno.com" target="blank"><img src="./deno-logo.full_dark_filled.png" width="300" alt="Deno Logo" /></a>
  </span>
  <span>
    <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
  </span>
</div>

# Nestjs app, running on deno-deploy

- no typescript config
- esm
- top-level await
- ...and all other sweet toys from Deno out of the box

> By the way this is simple demo that it is possible... nothing special except
> explicit swapping `node/npm` with `deno`... it's just work!

### [Live example at nestjs-deno.deno.dev](https://nestjs-deno.deno.dev)

#### Issues

- Nestjs is written with first typescript decorators versions and so...
  `Warning experimentalDecorators compiler option is deprecated and may be removed at any time`
  such warning is already present
