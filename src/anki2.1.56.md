# Changes in 2.1.56

## Release Candidate 1

Build bc697597 / 2023-01-04.

New features/improvements:

- Cloze deletions can now be nested inside other cloze deletions (thanks to TRIAEIOU).
- Inactive cloze deletions can now be styled with .cloze-inactive (thanks to TRIAEIOU).
- Graphs in large collections now load approximately twice as quickly.
- Add-on config help is now shown in a webview (thanks to Abdo).

Fixes:

- Fix error popping up 12 hours after starting Anki on macOS and some Linux machines.
- Fix unreadable text when searching in sidebar.
- Fix fcitx not working on Linux Qt6 package.
- Fix old graphs failing to appear.
- Fix dark mode display issues on macOS/Qt5.
- Fix images not being constrained to window width when image shrinking disabled.
- Fix incorrect macOS minimum version in Qt5 build.
- Fix lack of highlight for marked cards in day mode.
- Fix pop-up menu in editor sometimes flashing (thanks to Hikaru).
- Fix some issues entering text via IME around MathJax area (thanks to Hikaru).
- Fix some regressions with the graphs when saving to a PDF.
- Fix truncated text on some buttons.
- Fix two mpv issues on Windows (thanks to Kelciour).
- Tweak focus highlight of some widgets (thanks to Abdo).

For devs:

- Improve web building/reloading experience (thanks to Aristotelis).
- Fix an issue building the code with the latest git version.
- Fix aqt type completion not working with PyPI wheel.
