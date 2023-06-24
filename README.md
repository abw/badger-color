# badger-color

This is a collection of tools including an online editor for designing color
palettes and exporting them as CSS or SCSS variables.

The only palette editor is available here: https://abw.github.io/badger-color

## Getting Started

Add the `@abw/badger-color` module to your project using your favourite
package manager.  Unless you're planning on running the online editor it
should be sufficient to add it as a dev dependency.

```bash
## using npm
$ npm add -D @abw/badger-color

## using yarn
$ yarn add -D @abw/badger-color

## using pnpm
$ pnpm add -D @abw/badger-color
```

## Documentation TODO

At the time of writing the emphasis has been on getting the online editor
working.  There are some back-end tools for exporting palette data to CSS
and SCSS variables but they still need some polishing and they're not
documented yet.

Sorry about that.  Watch this space.

## Notes for Maintainers

Check out the repository.

```bash
$ git clone https://github.com/abw/badger-color.git
$ cd badger-color
```

Install the dependencies.

```bash
$ pnpm install
```

To run the development server.

```bash
$ pnpm dev
```

To run the tests.

```bash
$ pnpm test
```

To build for production.

```bash
$ pnpm build
```

To build the documentation.

```bash
$ pnpm build:docs
```

To preview the documentation.

```bash
$ pnpm preview
```

Check source code for formatting errors.

```bash
$ pnpm lint
```
