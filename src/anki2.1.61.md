# Changes in 2.1.61

## Beta 1

Build 5ad29c37 / 2023-03-11.

Improvements to the V3 scheduler:

- Added a global option to stop the review limit from limiting new cards (thanks
  to Rumo).
- You can now enable review burying without new burying again (thanks to Rumo).
  There are some caveats - please see the bury tooltips in the deck options.
- Ensure good is at least previous+1 even if low hard factor set.

Other improvements:

- The tag area in the editor is now shown with a dropdown instead of a splitter
  (thanks to Matthias).
- Add a button in the preferences to reset window sizes (thanks to Abdo).
- Passing an invalid profile name on the commandline will now show profile
  picker instead of an error.
- You can shift-click on a deck to select it as the current deck (thanks to
  Tobias).

Fixes:

- Fix silent file save failures and bad default save path in Flatpak (thanks to
  Jack).
- Fix HTML editor sometimes not properly sized when opening editor (thanks to
  Hikaru).
- Fix error showing if user clicks in sidebar before it's rendered.
- Fix backup creation for collections > 1 GiB (thanks to Rumo).
- Fix black on grey minimalist buttons in Qt5 (thanks to Daniel).
- Fix black on grey deck options on Qt5 (thanks to Daniel).
- Export static references from sound tags (thanks to Rumo).
- Fix packaged audio tools path on Windows (thanks to Abdo).
- Fix a case where 'reduce motion' and 'minimalist mode' were switched (thanks
  to Daniel).
- Fix panic with invalid sync server URL with port (thanks to Daniel).
- Fix double scrollbars in deck options (thanks to Fabricio).
- Fix images with non-Latin text and commas failing to display.
- Fix editor text possibly being transfer to different notetypes (thanks to
  Fabricio).
- Improve hover appearance of buttons (thanks to Matthias).
- Fix inability to activate search in graphs screen on Android (thanks to
  yellowjello).
