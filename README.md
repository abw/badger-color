# badger-color

This is a collection of tools including an online editor for designing color
palettes and exporting them as CSS and/or SCSS variables.

The palette editor is available here: https://abw.github.io/badger-color

This is a work-in-progress in a pre-release state.

## Installation

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

## Design a Palette

Use the [online palette editor](https://abw.github.io/badger-color) to design
a color palette.

Click on the download button to download the palette data as a JSON file.
Save this to your project somewhere.

## Export Palette Data

Run the following command to export the palette data as SCSS files containing
SCSS variables and CSS custom properties for each of the color ranges in your
palette.

```bash
$ npm badger-color-scss
```

It will prompt you to enter the path to your palette JSON file and an output
directory for the generated files.

```bash
✔ Where is the palette data file? … path/to/palette.json
✔ Where should the output files be written? … styles
```

You can also provide command line options to avoid the questions.  Use the
`-h` or `--help` option to see a summary of the options.  A typical invocation
will look like this:

```bash
$ npm badger-color-scss -p path/to/palette.json -o outdir -y -q
```

The script will generate a `colors.scss` file in the output directory and
separate files in the `color` sub-directory for each of the color ranges in
your palette.  The `colors.scss` will import each of the color range files.

## Add Palette Data to Your Stylesheet

Import the generated `colors.scss` file into your main stylesheet SCSS file.

```scss
@import "path/to/colors.scss";
```

Then start using the colors.  You can use the generated SCSS variables:

```scss
.example {
  color: $blue-50;
}
```

Or you can use the generated CSS custom properties:

```css
.example {
  color: var(--blue-50);
}
```

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
