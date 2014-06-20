# VideoJS Icon Font

## Building a fresh version of the font.

You'll need to install FontCustom first (instructions below), but when that's done:

    $ fontcustom compile

Fonts will be available in `./dist/fonts`, with stylesheets (CSS, SCSS, and Less)
available in `./dist/stylesheets`.

## Customizing the icon set

Simply edit the contents of the `vectors` directory. All svg files found in that
directory will be used to generate a new icon font.

To edit the generated stylesheets, modify the corresponding file in the `templates`
directory.

## Viewing available icons

Please see the [styleguide](styleguide/VideoJS-preview.html).

## Installing

### On OS X

This requires [Homebrew](http://brew.sh/) and you'll need [XQuartz](https://xquartz.macosforge.org/landing/),
so go ahead and install that before starting.

    $ brew install python
    $ brew install gettext libpng jpeg libtiff giflib cairo pango libspiro czmq fontconfig automake libtool pkg-config glib pango
    $ brew -v install fontforge —with-python --with-cairo --with-czmq --with-gif --with-x --with-libspiro --with-pango --enable-pyextension —debug

Pay attention and make sure all of that actually succeeded or you'll have an awesome time debugging.

    $ brew install ttfautohint
    $ gem install fontcustom

Yes, this means you need Python and Ruby. Yes, that's lame, but FontCustom is the best tool
we know of at this point. If you know of something, be kind and speak up.

## Credits

A vast majority of this icon set came from the wonderful [ionicons](http://ionicons.com/)
set by [@benjsperry](https://twitter.com/benjsperry) of [drifty](http://drifty.co/). We
added a few custom icons necessary for a player, but this set wouldn't be nearly as pretty
without such a great base.
