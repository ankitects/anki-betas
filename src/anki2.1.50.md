# Changes in 2.1.50

## Beta 1

Build TBA / 2021-TBA

Toolkit changes:

- The packaged builds now come in separate Qt5 and Qt6 versions.
- Qt6 is a recently-updated version of the toolkit. It fixes some issues that
existed in Qt5, but it may introduce new problems. We recommend you try it first.
- Qt5 is the graphics toolkit used to build previous Anki releases. If you find
  that Qt5 works for you and Qt6 does not, please let us know.

Windows:

- Windows 10 or 11 is required. If you are still using Windows 7 or 8, 2.1.49 is
  the last build that will install on your system.

macOS:

- There is now a native build for Apple Silicon. It currently does not support
  recording, and the audio playback still uses Intel binaries, so you will still
  need Rosetta installed. Only Qt6 is available for Apple Silicon.
- The Qt6 x86 build requires macOS 10.14.
- The Qt5 x86 build requires macOS 10.13.4.

Linux:

- The Linux builds need zstd to decompress, eg:

```sh
sudo apt install zstd
tar axf anki-2.1.50-linux-qt6.tar.zstd
```

- The x86 builds require glibc 2.27 or later.
- A wheel is now provided for ARM64 Linux, and requires glibc 2.31 or greater. A
  packaged version is not currently possible.
- No fcitx driver or gtk2 theme is bundled with the packaged builds at the moment.  

Major editor changes, mostly thanks to Henrik:

- A redesigned tag editor.
- MathJax has a live preview.
- HTML and rendered text can be viewed at the same time.
- Images can be resized within the editor.
- Fields can now have an optional description/tooltip assigned to them (thanks
  to Matthias, Henrik & Rumo).
- Lots of behind-the-scenes changes. Because of the extensive changes, some
  add-ons that modify the editing screen will have broken.

Scheduler changes:

- The V1 scheduler is no longer supported. If you have not yet updated to V2 or V3,
you will be prompted to update when you attempt to review cards in 2.1.50.
- The V3 scheduler will be declared stable when 2.1.50 is released.
- The V3 scheduler applies fuzz more evenly now, especially with smaller
  intervals (thanks to Rumo).
- Fixed new cards not decrementing the review limit in V3, which could lead to
  more new cards appearing after the review limit was reached.  

Other new features:

- Anki will now switch to day or night mode automatically depending on your
  system settings. You can force day or night mode in the Preferences screen.
  (thanks in large part to Rumo).
- The Card Info screen now updates automatically as you change to a different
  card (thanks to Rumo).
- Added a shortcut to make Anki full screen (F11 or Cmd+Ctrl+F, thanks to Rumo).
- Added tooltips to some browser columns (thanks to Rumo).
- Added an option to add/remove sidebar tag to selected notes (thanks to Rumo).

Other improvements:

- Improvements to the Change Notetype screen (thanks to Matthias).
- Improved performance with large selections in the Browse screen (thanks to Rumo).
- Fixed the deck list showing up blank in collections with many expanded decks.
- Changed the "Previous Card Info" shortcut to avoid a conflict with language input.
- Possible fix for intermittent UI glitch on initial startup (thanks to Evandro).
- Flip sidebar location in RTL mode (thanks to Abdo).
- Fix deck name not updating after deck/notetype renamed (thanks to Hikaru).
- Fixed "tag duplicates" possibly operating on stale data (thanks to Ren).
- The Add Cards screen will no longer allow accidental triggering of main window
shortcuts when it is open on a Mac (thanks to Rumo).
- Fixed incorrect card count in timebox after undo (thanks to Abdo).
- Fixed quotation of "and" and "or" in search (thanks to Rumo).
- Numerous other fixes and contributions, thanks to Rumo, Henrik, Abdo, Evandro,
  Arthur, Soren, BlueGreenMagick, Yoshi, Jakub, Gesa, blue-putty, stopendy, and
  zjosua.

For developers:

- Anki now requires Python 3.9.
- Anki contains some compatibility shims that should allow many add-ons written
  for PyQt5 to work with PyQt6 as well (thanks to Aristotelis). These shims will
  not remain forever, so it is recommended that you update your add-ons to be
  compatible with Qt6 without shims. The two main breakages are the renaming of
  PyQt5 to PyQt6 (you can support both by importing from aqt.qt instead), and
  the requirement that [enums are
  qualified](https://github.com/ankitects/anki/pull/1406/commits/b5906305b37e2ed4767fd495a5ce74f629cb8ed1).
- If you’re using Qt Designer to generate UI files, the Qt5 and Qt6 versions
  need to be generated and bundled separately if you want to support both at once.
- PyQt6 does not support the Qt resource system (pyrcc was removed), so Anki now
  uses a different approach, and urls like `:/icons/foo.jpg` should become
  `icons:foo.jpg`.
- The way Anki is packaged has changed. Most of the standard library should be
  available now. If you notice any problems importing standard libraries that
  previously worked, please let us know.
- The aqt package no longer depends on PyQt, as either version 5 or 6 is supported.
  You can specify the major version you want when installing - eg 'pip install aqt[qt6]'
- manifest.json now supports a 'homepage' argument (thanks to Abdo)
