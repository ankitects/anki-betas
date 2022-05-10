# Changes in 2.1.52

<!-- toc -->

## Release Candidate 3

Build ab1c2395 / 2022-05-10.

The Qt 6.3.1 release we were waiting on has been delayed by a month, so 2.1.52 is now
expected to release as stable within the next week, if no important issues come up.

Editor improvements:

- Ctrl/Cmd+A in tag editing area now selects all tags (thanks to BlueGreenMagick).
- Pressing tab on the last field now moves focus to tag area (thanks to Henrik).
- Reduce size of editor buttons on Windows/Linux (thanks to Henrik).
- Tags copied from the tag editor are no longer joined together when pasted into
  the add tags/remove tags dialogs (thanks to Henrik).
- Fixed `&amp;` showing up when using `&` in MathJax (thanks in part to Henrik).
- Fixed various issues with tag editing (thanks to BlueGreenMagick and Henrik).

Other fixes:

- Fixed scrollbars showing in bottom area of review screen (thanks to Matthias).
- Fixed v3 scheduler allowing one extra card when review limit reached (thanks to Rumo).
- Fixed Anki needing to close when invalid modification times encountered by the browser on
  Windows.
- Fixed new importer failing to import a subdeck export (thanks to Rumo).
- Improve progress feedback when using the new importing and exporting code.
- New import code supports .zip filenames, and runs on drag/drop + file double-click cases as well.

For developers:

- The `field_filter` hook can now check if it's running for the question or answer side (thanks to Abdo).
- Added a `av_player_will_play_tags` hook (thanks to Abdo).

## Release Candidate 2

Build 63f05b2b / 2022-05-02.

Bugfixes/tweaks:

- The Qt5 Mac build now caps tag autocomplete matches to 10, as showing more is extremely slow in the old toolkit version.
- Fix custom study applying the previously-input limit, instead of the current one.
- Fix an error when previewing cards and selecting multiple cards (thanks to Rumo).
- Removed the highlight on the Show Answer and Good buttons.
- Make it easier to search in fields programmatically (thanks to Abdo).

This build also includes a new implementation of apkg importing and exporting, thanks to Rumo. Some advantages:

- Undo/redo is now supported.
- Faster imports (especially for decks with a lot of note content).
- Support for older clients can be optionally disabled, which results in smaller
  apkg files, and faster imports.
- Flags are removed when scheduling is excluded.

The new functionality is hidden behind a feature flag, and **not active by default**.
You can try it out by using `mw.pm.set_new_import_export(True)` in the [debug console](https://docs.ankiweb.net/misc.html#debug-console).
To revert to the old behaviour, replace True with False.

Things to note:

- This is new code that has received limited testing so far, so please use `File>Create Backup` before trying it out.
  Any testing/feedback you can provide would be appreciated.
- While active, it is not currently possible to export files other than apkg/colpkg.
- The Special Fields add-on will not work while this functionality is enabled.

## Release Candidate 1

Build a989e508 / 2022-04-25.

- Update Qt to 6.3, which fixes slow loading of large images, and inertial scrolling on macOS.
- List text is now aligned to the left by default (thanks to Matthias).
- Reset page zoom when moving between different screens.
- Fixed backspace sometimes removing multiple images at once (thanks to Henrik).
- Fixed colpkg imports not being cancellable (thanks to Rumo).
- Fixed copying and pasting MathJax on Windows (Qt6).
- Fixed current working directory changing on apkg export.
- Fixed custom browser font not being honored (Qt6).
- Fixed due graph showing wrong date for review cards in a filtered deck with rescheduling disabled.
- Fixed some formatting being lost when copying between fields on Windows (Qt6).
- Fixed grey background in type answer text + dark mode (thanks to Matthias).
- Fixed handling of `<` and `>` symbols in MathJax (thanks to Henrik).
- Fixed intermittent editor loading failures when add-ons have injected a large amount of code.
- Fixed pasting of local files of unsupported types that contain spaces (thanks to Abdo).
- The Qt6 Linux build now defaults to X11/XWayland instead of Wayland due to some [remaining issues](https://github.com/ankitects/anki/issues/1767);
  you can force-enable Wayland with ANKI_WAYLAND=1.
