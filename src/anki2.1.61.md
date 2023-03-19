# Changes in 2.1.61

## Beta 2

Build d0ab7acb / 2023-03-20.

- You can now exclude certain fields from unqualified searches via the Fields
  screen (thanks to Abdo).
- You can now import decks with broken timestamps - they'll automatically be
  fixed on import (thanks to Rumo).
- A DB check will now fix broken timestamps (thanks to Rumo).
- Reduce motion is now on by default, as it fixes an issue with the bottom bar
  failing to appear for some users.
- Fix new limit in v3 decreasing more than it should (thanks to Rumo).
- Fix current tag text not being saved when changing note via shortcut key
  (thanks to Hikaru).
- Fix tags popover becoming separated from the tags field (thanks to Fabricio).
- Custom schedulers now have the deck name and random seed passed in to them, so
  they don't need to extract the info from the DOM (thanks to Rumo).
- Ensure the bottom buttons aren't displayed until the custom scheduling code
  has finished running (thanks to Rumo).
- Refresh study screen if the user toggles the v3 scheduler (thanks to Rumo).
- Fix notetypes screen not being closable after adding a notetype on Mac.
- Improve debug console (thanks to Rumo).
- Check for division by zero when calculating browser aspect ratio, which fixes
  an issue with i3 (thanks to Ben).
- Fallback to Wayland if X11 is not available (thanks to Ingemar).
- Tweaks to the build scripts to make packaging in distros easier (thanks to
  Euan).

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
