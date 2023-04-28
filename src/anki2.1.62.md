# Changes in 2.1.62

## Release Candidate 1

Build fd509efc / 2023-04-28.

- Revert Windows build to Qt 6.4, due to the reports of slowdowns on 6.5.
  Upgrade from 6.4.2 to 6.4.3.
- Add a new option to the card templates screen to restore a notetype to the
  default fields/templates/styling.
- Add clearer tooltip to hourly breakdown graph (thanks to Rumo).
- Fix focus loss when closing HTML editor (thanks to Hikaru).
- Prevent MathJax editor from closing when you selected text with the mouse and
  released the mouse button outside the window (thanks to Hikaru).
- Pass original deck name to custom scheduling code, instead of filtered deck
  name.
- When importing an .apkg where notetypes have changed, display a clearer
  message, and only if the notes in the incoming collection are newer.

## Beta 1

Build b5fa47e3 or bf05fae9 / 2023-04-12.

This build updates Qt6 on all platforms to the recently-released Qt6.5. Please
report any regressions or improvements you notice.

- The minimum macOS version for the Qt6 build is now macOS 11.
- If you are on Linux and don't have ANKI_WAYLAND set, you may need to install
  libxcb-cursor or Anki will fail to start. Eg on Debian/Ubuntu:

  sudo apt install libxcb-cursor0

Other changes:

- Fix MathJax editor not being sized correctly (thanks to Hikaru).
- Fix a flicker when dropdowns shown with reduce motion on (thanks to Hikaru).
- Add an option to fully randomize reviews in the V3 scheduler.
