# Changes in 2.1.48

## Release Candidate 2

Build 466d67ca / 2021-09-16.

- Possible fix for reported sound issues.
- Wayland is off by default again, but can be enabled by starting Anki with
  ANKI_WAYLAND=1 defined.

## Release Candidate 1

Build af2ec0b9 / 2021-09-13.

- Add "Previous Card Info" action to review screen (thanks to Evandro).
- Changes to the packaging to (hopefully) support Wayland.
- Fix flag names not updating on profile switch (thanks to Rumo).
- Hide "Rename with Parents" for top-level items (thanks to Rumo).
- "Add Field" action now correctly handles multi-word font names.
- Fix newline being added when coloring text (thanks to Henrik).
- Fix incorrect system font when running Anki in some non-English languages.
- Fix learning count sometimes jumping to a large number in the v3 scheduler.
- Fix console warning when playing audio (thanks to Evandro).
- Another fix for Reposition command not working on buried/suspended cards.
- Preserve focus when changing notetype in the Add screen.
- Miscellaneous other fixes.
