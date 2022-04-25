# Changes in 2.1.52

<!-- toc -->

## Release Candidate 1

Build a989e508 / 2022-04-25.

- Update Qt to 6.3, which fixes inertial scrolling on macOS.
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
