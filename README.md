# VideoJS Icon Font

## Building a fresh version of the font.

You'll need to install FontCustom first (instructions below), but when that's done:

    $ grunt

Fonts will be available in `./build/fonts`, with stylesheets (CSS, SCSS, and Less)
available in `./build/css`.

## Customizing the icon set

Simply edit the contents of the `vectors` directory. All svg files found in that
directory will be used to generate a new icon font.

To edit the generated stylesheets, modify the corresponding file in the `templates`
directory.

## Viewing available icons

After compiling a font, you can view the newly available icons in
the [generated preview](styleguide/videojs.html).

## Installing

### On OS X

Installation requires [Homebrew](http://brew.sh). For installation on other platforms,
please see the [Grunt-Webfont README](https://github.com/sapegin/grunt-webfont).

    $ brew install ttfautohint fontforge --with-python
    $ npm install grunt-webfont --save-dev

## Credits

A vast majority of this icon set came from the wonderful [ionicons](http://ionicons.com/)
set by [@benjsperry](https://twitter.com/benjsperry) of [drifty](http://drifty.co/). We
added a few custom icons necessary for a player, but this set wouldn't be nearly as pretty
without such a great base.
