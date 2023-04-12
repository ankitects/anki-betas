# Changes in 2.1.62

## Beta 1

Build bf05fae9 / 2023-04-12.

This build updates Qt6 on all platforms to the recently-released Qt6.5. Please
report any regressions or improvements you notice.

If you are on Linux and don't have ANKI_WAYLAND set, you may need to install
libxcb-cursor or Anki will fail to start. Eg on Debian/Ubuntu:

    sudo apt install libxcb-cursor0

Other changes:

- Fix MathJax editor not being sized correctly (thanks to Hikaru).
- Fix a flicker when dropdowns shown with reduce motion on (thanks to Hikaru).
- Add an option to fully randomize reviews in the V3 scheduler.
