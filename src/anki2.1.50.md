# Changes in 2.1.50

<!-- toc -->

## Since 2.1.49

A summary of all the changes in the betas.

### Qt6

The packaged builds now come in separate Qt5 and Qt6 versions. Qt6 is a
recently-updated version of the toolkit. It fixes some issues that existed in
Qt5, but some add-ons may need updating to work with it. We recommend you try it
first.

### Platform-Specific Changes

Windows:

- Windows 10 or 11 is required. If you are still using Windows 7 or 8, 2.1.49 is
  the last build that will install on your system.
- Update mpv audio player to 0.34 on Windows.

macOS:

- Anki now supports Apple Silicon natively. If you're on a newer Mac with an M1
  processor, pick the qt6-apple download for better performance and battery
  life.
- The Qt6 x86 build requires macOS 10.14.4
- The Qt5 x86 build requires macOS 10.13.4.

Linux:

- The Linux builds need zstd to decompress, eg:

```sh
sudo apt install zstd
tar xaf anki-2.1.50-linux-qt6.tar.zstd
```

- The packaged version requires glibc 2.27 or later.
- A wheel is now provided for ARM64 Linux, and requires glibc 2.31 or greater. See
  [this page](https://betas.ankiweb.net/#via-pypipip) for instructions on using it.
- Both Fcitx4 and Fcitx5 support is now bundled.

### Scheduler Changes

The V1 scheduler is no longer supported. If you have not yet updated to V2 or
V3, you will be prompted to update when you attempt to review cards in 2.1.50.

This release includes a number of improvements to the V3 scheduler, mostly
thanks to Rumo:

- Intermediate deck limits now affect their children. Please see the [scheduler
  page](https://faqs.ankiweb.net/the-2021-scheduler.html#daily-limits) for more
  info.
- When new cards are answered, Anki now records their original position. When you later
  export a shared deck without scheduling, the original positions will be restored.
- The Forget action now gives you options to restore the original card position,
  and to reset the card's lapse and repetition counters.
- The gathering and sorting of new cards has been reworked, trading a little performance
  for more intuitive behaviour:
  - It is now possible to sort notes or cards randomly at gather time, ensuring a random
    selection is taken from all available new cards.
  - The gather order and sort order options have been simplified, but should offer the same
    functionality as before. Please check your deck options after upgrading, as some users
    may need to adjust their display order settings to match what they were using before.
- The overview screen now shows how many cards will be buried.
- Added a separate option to control burying of interday learning siblings.
- Fixed interday learning siblings not being buried during review, causing them
  to reappear later after actions like an edit.
- If you have more than 2 learning steps, after the first step, Hard repeats the previous
  delay, instead of being the average of the previous and next step.
- When a Hard learning step exceeds a day, it is now rounded to a full day, so the
  delay does not vary depending on the time of day you answer.
- Fuzz is applied more evenly now, especially with smaller intervals.
- Fixed new cards not decrementing the review limit, which could lead to
  more new cards appearing after the review limit was reached.
- Review cards and new cards are now interspersed more evenly.
- When using Custom Study to extend deck limits in the V3 scheduler, parent/child
  limits of the selected deck are no longer adjusted.

### Editor Changes

Most of these changes are thanks to Henrik.

- A redesigned editing area, and a redesigned tag editor.
- MathJax has a live preview.
- HTML source and rendered text can be viewed at the same time.
- The HTML editor now matches the current Anki theme.
- Images can be resized within the editor.
- Fields can now have an optional description/tooltip assigned to them (thanks
  to Matthias, Henrik & Rumo).
- The "remove formatting" button now offers a choice of what to remove.
- Adjust color picker shortcut, and apply color when different color selected.
- Reduced editor button size on Windows/Linux (thanks to Matthias).
- Fixed IME input after pressing tab.
- Fixed media files not being inserted at cursor position on Windows.
- Cloze shortcut correctly positions cursor.
- Added a separate cloze button to repeat the current cloze.
- Lots of behind-the-scenes changes and fixes. Because of the extensive changes,
  some add-ons that modify the editing screen will have broken (see the
  developers section below)

### New Features

- Anki will now switch to day or night mode automatically depending on your
  system settings. You can force day or night mode in the Preferences screen.
  (thanks in large part to Rumo).
- Reworked backup handling (mostly thanks to Rumo):
  - Backups are created much faster than they were previously.
  - Anki can now create backups periodically. The default is every 30 minutes; you can adjust this in the preferences screen.
  - There are new options in the preferences to control the number of daily, weekly and
    monthly backups you'd like to retain.
  - The File menu now has an option to create a backup immediately.
  - Because the backup storage format has changed, backups created with 2.1.50 will not be
    importable into older Anki versions.
- Reworked .colpkg import/export (thanks to Rumo):
  - When exporting, you can optionally target Anki 2.1.50+. When doing so,
    imports and exports are faster, and media files will be compressed, but the
    resulting .colpkg will not be readable by older Anki clients.
  - Collections are now checked for corruption when importing.
- An option to ignore accents in searches by default has been added to
  preferences screen (thanks to Abdo).
- The Card Info screen now updates automatically as you change to a different
  card (thanks to Rumo).
- Added a View menu to the main window and browse window (thanks to Rumo). The
  view menu provides options to zoom in and out, and to toggle a full screen
  mode. Due to technical issues, the full screen mode is not currently available
  on Windows when graphics acceleration is enabled.
- A new TTS tag format that allows you to combine extra text and multiple
  fields, such as `[anki:tts lang=en_US]Here is {{Field1}} and {{Field2}}[/anki:tts]` (thanks to Rumo). There are no plans to deprecate the
  old TTS syntax - either can be used.
- Added an option to add/remove sidebar tag to selected notes (thanks to Rumo).
- Be smarter about mapping existing text to new fields when switching notetypes in the Add screen (thanks to Abdo).
- Apkg files can now be dragged on the main window to import them (thanks to Abdo).
- Added a "Create Copy" option in the browse screen and review screen, to copy
  selected note's contents into the Add window (thanks to Rumo).
- You can now search for tags by regular expression (thanks to Rumo). One use
  for this is locating notes that are tagged with a `parent` tag, while not matching
  ones tagged with `parent::child`: `tag:re:^parent$`.
- When switching Anki versions, an add-on update check is run on startup (thanks to Rumo).
- Make links with `target=_blank` work (thanks to Danish).
- Added "Forget Card" action to review screen (thanks to Araceli).
- Added Belarusian and Odia to available languages in the preferences.
- Added a silent option (/s) for the Windows uninstaller (thanks to Patric).
- Added tooltips to some browser columns (thanks to Rumo).

### Other Improvements

- Added a "Learn" label to the learning counts in the deck list.
- Added shortcut keys for creating lists and indentation (thanks to Rumo).
- Allow longer maximum answer times in the deck settings (thanks to Bruce).
- Behind-the-scenes improvements to the deck and notetype selectors (thanks to Sam).
- Change cards/notes toggle to Ctrl/Cmd+Alt+T to avoid conflict on macOS.
- Changed the "Previous Card Info" shortcut to avoid a conflict with language input.
- Colpkg imports now always require a full sync.
- Deck creation in the custom study screen has been reworked, and now supports undo properly (thanks to Rumo).
- Don't show error when gsettings exists but does not have a GNOME theme set (thanks to Spooghetti420).
- Don't show error when Windows color scheme setting is missing (thanks to qxo).
- Fall back on regular file deletion when no recycling bin/trash folder is available on Linux.
- Filtered decks in 'order added' now sort by card template.
- Fix deck name not updating after deck/notetype renamed (thanks to Hikaru).
- Fixed "tag duplicates" possibly operating on stale data (thanks to Ren).
- Fixed a number of issues with the preview window (thanks to Hikaru).
- Fixed AltGr triggering Ctrl+Alt shortcuts on Windows (thanks to Rumo)
- Fixed an error loading the old deck options screen when using Python 3.10.
- Fixed an error that could appear when clicking on the sidebar (thanks to qxo).
- Fixed an error that could occur in the browser when switching profiles (thanks to Hikaru).
- Fixed an error when an installed TTS voice on Windows supported multiple languages (thanks to Rumo).
- Fixed an error when exporting a collection with media files in it with very old modification dates (thanks to gnnoh).
- Fixed an intermittent error when building on Windows.
- Fixed error shown when double-tapping answer buttons on the v3 scheduler.
- Fixed errors and display issues when flagging and undoing in the review screen.
- Fixed external scripts being executed out of order (thanks to Hikaru).
- Fixed field content sometimes spilling outside container (thanks to Hikaru).
- Fixed flicker in review screen when referencing external js, and preload css files (thanks to Hikaru).
- Fixed incorrect card count in timebox after undo (thanks to Abdo).
- Fixed new card position appearing as a date when cards were in preview (thanks to Abdo).
- Fixed newly-added deck not being selected in the Add screen (thanks to Hikaru).
- Fixed quotation of "and" and "or" in search (thanks to Rumo).
- Fixed some parts of the media handling code matching more HTML tags than it should have (thanks to Brayan).
- Fixed sound failing to play after exporting a collection (thanks to Rumo and Kelciour).
- Fixed the deck list showing up blank in collections with many expanded decks.
- Fixed the main window sometimes failing to load properly when Anki starts (which could lead to blank windows, a giant sync icon, etc).
- Fixed unwanted `<div>` being left behind when deleting field contents (thanks to Hikaru).
- Fixed various memory leaks (thanks to Rumo and Hikaru).
- Flip sidebar location in RTL mode (thanks to Abdo).
- Hide "open new window" action in GNOME (thanks to Fusion future & Felipe)
- Improve search highlight color in templates screen (thanks to Abdo).
- Improved display of the card info screen (thanks to Rumo).
- Improved localization of large numbers in the graphs, and various layout tweaks (thanks to Vova).
- Improved performance with large selections in the Browse screen (thanks to Rumo).
- Improvements to the Change Notetype screen (thanks to Matthias).
- Performance improvements for searching through many fields with a wildcard search (thanks to Rumo).
- Randomized card positions now start at 1, which avoids a corner case in filtered deck scheduling.
- Reduced flicker when opening browser in night mode (thanks to Rumo).
- Report correct count in timebox screen with v2 scheduler (thanks to Abdo).
- Rows with database inconsistencies in the browse screen now prompt you to use "check database" instead of saying they were deleted (thanks to Rumo).
- Some behind-the-scenes code improvements (thanks to Sam).
- Support autoplay in audio tags again (thanks to Andreas).
- Support Markdown inside HTML tags in config.md (thanks to Abdo).
- The 'future due' graph no longer shows learning cards in a filtered deck as being due a long time ago.
- The `note:` and `card:` searches no longer do a substring match (thanks to Rumo).
- The Add Cards screen will no longer allow accidental triggering of main window shortcuts when it is open on a Mac (thanks to Rumo).
- The calendar graph uses consistent coloring as years are changed (thanks to Ryan).
- The custom study screen no longer (sometimes incorrectly) limits the amount you can extend the daily limits by.
- The top and bottom bars will no longer zoom in/out, but the main area and editors can be zoomed in and out (thanks to Rumo).
- Truncate deck names in the deck list if they are too long (thanks to Sachin).
- Tweaks to the sidebar icons (thanks to Henrik).
- Updated translations - thanks as always to all the translators.
- Use white menubar on Windows (thanks to Rumo).
- Various behind-the-scenes fixes (thanks to Arthur).
- Various improvements to right-to-left display (thanks to Abdo).
- When Anki encounters an issue with a card template, it now provides a link to a help page with more information (thanks to Rumo).
- Numerous other fixes and contributions, thanks to Rumo, Henrik, Abdo, Matthias,
  Evandro, Arthur, Soren, BlueGreenMagick, Yoshi, Jakub, Gesa, blue-putty,
  stopendy, TheFeelTrain and zjosua.

### For Developers

- Anki now requires Python 3.9.
- Anki contains some compatibility shims that should allow many add-ons written
  for PyQt5 to work with PyQt6 as well (thanks to Aristotelis). These shims will
  not remain forever, so it is recommended that you update your add-ons to be
  compatible with Qt6 without shims. The two main breakages are the renaming of
  PyQt5 to PyQt6 (you can support both by importing from aqt.qt instead), and
  the requirement that [enums are
  qualified](https://github.com/ankitects/anki/pull/1406/commits/a7812dedc096627692ab3d7e64b90be632f52134).
- If you’re using Qt Designer to generate UI files, the Qt5 and Qt6 versions
  need to be generated and bundled separately if you want to support both at once.
- PyQt6 does not support the Qt resource system (pyrcc was removed), so Anki now
  uses a different approach, and urls like `:/icons/foo.jpg` should become
  `icons:foo.jpg`.
- Henrik has spent a lot of time working out how to smoothly provide an API for
  the editor, and investigating how we can provide types to make targeting the API
  easier. This has required a number of refactorings, and some add-ons that were
  accessing the editor will have broken in this update. While the code is
  not set in stone yet, hopefully we're getting there. An example of using the
  latest API is available here: <https://github.com/hgiesel/anki_new_format_pack/commits/master>
- The way Anki is packaged has changed. Most of the standard library should be
  available now. If you notice any problems importing standard libraries that
  previously worked, please let us know.
- The aqt package no longer depends on PyQt, as either version 5 or 6 is supported.
  You can specify the major version you want when installing - eg `pip install aqt[qt6]`
- manifest.json now supports a 'homepage' argument (thanks to Abdo)
- `mw.progress.timer()` should now be passed a `parent` argument, as the
  previous default of using `mw` prevents the timers from being freed after they
  are no longer active.
- Improved Python code completion/type handling in VS Code (thanks to Rumo).

## Release Candidate 2

Release 6718e678 / 2022-03-31.

- Added a separate cloze button to repeat the current cloze (thanks to Henrik).
- Fixed an error when importing some colpkg files from older Anki versions that contained media.
- Fixed an issue with adding items to the editor toolbar from an add-on (thanks to Henrik).
- Fixed cloze shortcut on Windows.
- Fixed invalid HTML in field causing Anki to hang (thanks to Henrik).
- Force decimal separator to be a period in the deck options, to work around
  blank boxes in the Qt6 build.
- New cards no longer have their position changed by the Forget action when
  "restore position" is enabled, and the cards don't have an original position
  (thanks to Rumo).

## Release Candidate 1

Release ebe33a99 / 2022-03-29.

- Fixed a serious issue with repositioning/removing card templates in the card
  layout screen, that was present since beta 3 (thanks to Rumo for the fix).
- Fixed "create cloze with same number" shortcut on Qt6/macOS (thanks to Henrik).
- Fixed cursor sometimes not moving into MathJax editor, leading to accidental deletion (thanks to Henrik).
- Colpkg imports now always require a full sync.
- Fall back on regular file deletion when no recycling bin/trash folder is available on Linux.
- Randomized card positions now start at 1, which avoids a corner case in filtered deck scheduling.
- Rows with database inconsistencies in the browse screen now prompt you to use "check database" instead of saying they were deleted (thanks to Rumo).
- The 'future due' graph no longer shows learning cards in a filtered deck as being due a long time ago.
- When Anki encounters an issue with a card template, it now provides a link to a help page with more information (thanks to Rumo).

## Beta 9

Release 4515c41d / 2022-03-21.

- Fixed a serious issue with changing card numbers in Change Notetype that was
  present since beta 3. (thanks to Arthur for the reproduction steps).
- Anki can now create backups periodically, instead of only on close. The
  default is every 30 minutes; you can adjust this in the preferences screen.
- The File menu now has an option to create a backup immediately.
- When using Custom Study to extend deck limits in the V3 scheduler, parent/child
  limits of the selected deck are no longer adjusted (thanks to Rumo).
- Fixed an error that could occur in the browser when switching profiles
  (thanks to Hikaru).
- Improvements and optimizations to colpkg exports/imports (thanks to Rumo).

## Beta 8

Release 02c580e4 / 2022-03-17.

- Various fixes for .colpkg importing and exporting. We're reasonably confident
  the bugs have been ironed out at this point, but would appreciate you giving them
  a try and confirming the new code works well for you.
- .colpkg files created with the previous beta will not be importable into this
  build. If you created a .colpkg file with beta 7 and need to recover data from it,
  please get in touch and we can help you out.
- Fixed addMedia() call used by some add-ons (thanks to Henrik).

## Beta 7

Release 02ba50f2 / 2022-03-15.

This release has been yanked due to bugs in colpkg imports. Please wait for the next beta.

- Reworked .colpkg import/export (thanks to Rumo):
  - When exporting, you can optionally target Anki 2.1.50+. When doing so,
    imports and exports are faster, and media files will be compressed, but the
    resulting .colpkg will not be readable by older Anki clients.
  - Collections are now checked for corruption when importing.
- Various fixes for the editor (thanks to Henrik):
- Allow longer maximum answer times in the deck settings (thanks to Bruce).
- The custom study screen no longer (sometimes incorrectly) limits the amount
  you can extend the daily limits by.
- Fix an intermittent error when building on Windows.

## Beta 6

Release a495fbaa / 2022-03-09.

- Reworked backup handling (thanks to Rumo):
  - Backups are created much faster than they were previously, which allows Anki to
    close faster when you have a large collection, while still compressing the backups.
  - There are new options in the preferences to control the number of daily, weekly and
    monthly backups you'd like to retain. Anki will keep all backups made in the last 48 hours,
    but avoids making more than one every 5 minutes when you're rapidly opening and closing
    your profile.
  - Because the backup storage format has changed, backups created with 2.1.50 will not be
    importable into older Anki versions. Manually-exported colpkg files are still compatible
    with older Anki versions.
- When exporting a shared deck with scheduling disabled, the original card position will be
  restored if it is available (thanks to Rumo).
- The Forget action now gives you options to restore the original card position,
  and to reset the card's lapse and repetition counters (thanks to Rumo).
- You can now search for tags by regular expression (thanks to Rumo). One use
  for this is locating notes that are tagged with a `parent` tag, while not matching
  ones tagged with `parent::child`: `tag:re:^parent$`.
- Added a silent option (/s) for the Windows uninstaller (thanks to Patric).
- Fixed add-on config screen failing to show in bundled build.
- Fixed buried counts being shown when v2 scheduler enabled.
- Fixed MathJax sometimes being deleted when it wasn't visibly selected (thanks to Henrik).
- Fixed newline shortcut in MathJax editor (thanks to Henrik).
- Fixed shortcut/button to add a new tag (thanks to Henrik).
- Fixed some parts of the media handling code matching more HTML tags than it should have (thanks to Brayan).
- Fixes for the bury count on the overview screen (thanks to Rumo).

## Beta 5

Build 3564ece6 / 2022-02-25.

Editor fixes, thanks to Henrik:

- Fixed `<` and `>` not working correctly in the MathJax editor.
- Fixed media files not being inserted at cursor position on Windows.
- Cloze shortcut correctly positions cursor.
- Adjust color picker shortcut, and apply color when different color selected.
- Make it easy for add-ons to adjust the HTML editor theme.

Other changes:

- Fixed the errors when using the preview button in the browser, and more work on
  memory leaks (thanks to Rumo).
- Truncate deck names in the deck list if they are too long (thanks to Sachin).
- Flags are undoable again, and should update correctly in the browser.
- Hide the 'bury interday siblings' options when the V2 scheduler enabled.

## Beta 4

Build 4ed499fb / 2022-02-23.

V3 scheduler changes, thanks to Rumo:

- When new cards are answered for the first time, Anki will remember their original
  position, and it can be seen in the card info. An option to restore cards
  to their original position manually and on export will likely come in the next beta.
- The overview screen now shows how many cards will be buried. Please report any
  inaccuricies, as it is possible a different approach will be needed.
- Added a separate option to control burying of interday learning siblings. This is
  currently incorrectly shown when the V2 scheduler is enabled as well.
- When a Hard learning step exceeds a day, it is now rounded to a full day, so the
  delay does not vary depending on the time of day you answer.

Other new features:

- The way bold/italics/etc is applied in the editor has been reworked to be more
  robust, thanks to Henrik. This has resulted in tweaks to the formatting button
  order, and the clear formatting button now lets you configure what formatting
  should be removed.
- An option to ignore accents in searches by default has been added to
  preferences screen (thanks to Abdo).
- Added a View menu to the main window and browse window (thanks to Rumo).

Bugfixes:

- Added a "Learn" label to the learning counts in the deck list.
- Fixed an error loading the old deck options screen when using Python 3.10.
- Fixed an error when an installed TTS voice on Windows supported multiple languages (thanks to Rumo).
- Fixed an error when exporting a collection with media files in it with very old modification dates (thanks to gnnoh).
- Fixed junk appearing in the clipboard when copy/pasting on Windows, by rolling Qt back to the previous version.
- Fixed newly-added deck not being selected in the Add screen (thanks to Hikaru).
- Fixed sound failing to play after exporting a collection (thanks to Rumo and Kelciour).
- Fixed various memory leaks (thanks to Rumo and Hikaru).
- Flag changes no longer add an undo entry, which fixes some potential errors and unpredictable undo behaviour.
- Reduced flicker when opening browser in night mode (thanks to Rumo).
- Some behind-the-scenes code improvements (thanks to Sam).

For developers:

- `mw.progress.timer()` should now be passed a `parent` argument, as the
  previous default of using `mw` prevents the timers from being freed after they
  are no longer active.
- Improved Python code completion/type handling in VS Code (thanks to Rumo).

## Beta 3

Build 95dbf30f / 2022-02-10.

V3 scheduler changes, thanks to Rumo:

- Intermediate limits are now respected. For example, if you have a deck tree of
  A>B>C>D, and click on B, then deck C is limited by deck B, and deck D is
  limited by both deck B and deck C. This is similar to the way the previous
  schedulers behaved, except the decks above the one you click on do not
  contribute to the limit.
- The gathering and sorting of new cards has been reworked, trading a little performance
  for more intuitive behaviour:
  - It is now possible to sort notes or cards randomly at gather time, ensuring a random
    selection is taken from all available new cards.
  - The gather order and sort order options have been simplified, but should offer the same
    functionality as before. Please check your deck options after upgrading, as some users
    may need to adjust their display order settings to match what they were using before.
- If you have more than 2 learning steps, after the first step, Hard repeats the previous
  delay, instead of being the average of the previous and next step.
- Review cards and new cards are now interspersed more evenly.

Improvements to the editor, thanks to Henrik:

- You can now use the keyboard left/right keys to move into/out of the MathJax editor.
- The HTML editor now matches the current Anki theme.
- Fixed an issue that could prevent image resizing.
- Fixed IME input after pressing tab.
- Fixed currently-focused field not updating contents after an undo operation or find&replace.
- Fixed leading HTML comments being stripped by the HTML editor.
- Lots of other behind-the-scenes changes (see the developers section below) and fixes.

New features:

- Be smarter about mapping existing text to new fields when switching notetypes in the Add screen (thanks to Abdo).
- A new TTS tag format that allows you to combine extra text and multiple fields, such as
  `[anki:tts lang=en_US]Here is {{Field1}} and {{Field2}}[/anki:tts]` (thanks to Rumo). There are no plans
  to deprecate the old TTS syntax - either can be used.
- Apkg files can now be dragged on the main window to import them (thanks to Abdo).
- "Create Copy" uses the current card's deck, and can be also accessed via
  shortcut from the review screen (thanks to Rumo)
- Added Belarusian and Odia to available languages in the preferences.
- When switching Anki versions, an add-on update check is run on startup (thanks to Rumo).
- Make links with target=\_blank work (thanks to Danish).
- Added "Forget Card" action to review screen (thanks to Araceli).

Fixes and other improvements:

- Compression on automatic backups has been turned off, which can make Anki much faster to shut down with large
  collections (eg 7.9s->0.45s). Compression will likely come back in the future when we can integrate a more efficient
  compression library.
- Add back the missing "Show Duplicates" link in the editor (thanks to Matthias and Henrik).
- Added shortcut keys for creating lists and indentation (thanks to Rumo).
- Behind-the-scenes improvements to the deck and notetype selectors (thanks to Sam).
- Change cards/notes toggle to Ctrl/Cmd+Alt+T to avoid conflict on macOS.
- Deck creation in the custom study screen has been reworked, and now supports undo properly (thanks to Rumo).
- Don't show error when gsettings exists but does not have a GNOME theme set (thanks to Spooghetti420).
- Don't show error when Windows color scheme setting is missing (thanks to qxo).
- Filtered decks in 'order added' now sort by card template.
- Fixed a number of issues with the preview window (thanks to Hikaru).
- Fixed AltGr triggering Ctrl+Alt shortcuts on Windows (thanks to Rumo)
- Fixed an error that could appear when clicking on the sidebar (thanks to qxo).
- Fixed error shown when double-tapping answer buttons on the v3 scheduler.
- Fixed external scripts being executed out of order (thanks to Hikaru).
- Fixed field content sometimes spilling outside container (thanks to Hikaru).
- Fixed flicker in review screen when referencing external js, and preload css files (thanks to Hikaru).
- Fixed interday learning siblings not being buried during review, causing them to reappear later after actions like an edit.
- Fixed new card position appearing as a date when cards were in preview (thanks to Abdo).
- Fixed unwanted `<div>` being left behind when deleting field contents (thanks to Hikaru).
- Hide "open new window" action in GNOME (thanks to Fusion future & Felipe)
- Improve search highlight color in templates screen (thanks to Abdo).
- Improved display of the card info screen (thanks to Rumo).
- Improved localization of large numbers in the graphs, and various layout tweaks (thanks to Vova).
- Performance improvements for searching through many fields with a wildcard search (thanks to Rumo).
- Report correct count in timebox screen with v2 scheduler (thanks to Abdo).
- Support Markdown inside HTML tags in config.md (thanks to Abdo).
- The `note:` and `card:` searches no longer do a substring match (thanks to Rumo).
- The calendar graph uses consistent coloring as years are changed (thanks to Ryan).
- The top and bottom bars will no longer zoom in/out, but the main area and editors can be zoomed in and out (thanks to Rumo).
- Tweaks to the sidebar icons (thanks to Henrik).
- Updated translations - thanks as always to all the translators.
- Use white menubar on Windows (thanks to Rumo).
- Various behind-the-scenes fixes (thanks to Arthur).

Packaging changes:

- The building of the Anki packages has been reworked. Everything should
  hopefully behave as before; if you notice any problems, please let us know.
- Update to (Py)Qt 6.2.3.
- Update mpv to 0.34 on Windows.
- Fcitx5 support is now bundled with both the qt6 and qt5 Linux packages.
- Drop the experimental arm64 Linux package.

Notes for developers:

Henrik has spent a lot of time working out how to smoothly provide an API for
the editor, and investigating how we can provide types to make targeting the API
easier. This has required a number of refactorings, and some add-ons that were
accessing the editor will have broken again in this update. While the code is
not set in stone yet, hopefully we're getting there. An example of using the
latest API is available here:

<https://github.com/hgiesel/anki_new_format_pack/commits/master>

## Beta 2

Build db804d95 / 2021-12-09.

macOS:

- The Apple Silicon build now supports recording, and is fully native - Rosetta is no longer required.
- The Qt6 Intel build now has a minimum macOS requirement of 10.14.4.

Linux:

- Fixed not being able to run Anki after running install.sh.
- Added an experimental arm64 packaged build. PyQt and Qt are not included, so
  you need to link in your distro's version of PyQt5.15. For example, after
  untarring the file and changing into the top level directory with the 'anki'
  executable:

  ```
  # eg Debian 11:
  sudo apt install python3-pyqt5.{qtwebengine,qtmultimedia}
  ln -sf /usr/lib/python3/dist-packages/PyQt5 lib/

  # eg Fedora 34:
  sudo dnf install python3-qt5-webengine
  ln -sf /usr/lib64/python3.9/site-packages/PyQt5 lib/
  ```

  You may also be able to use the above technique for switching the x86_64
  builds to your system's PyQt version - just delete the PyQt5 or 6 folder
  before linking your system version in.

- Fcitx users: this build includes libraries that may allow the Qt5 build to
  work with Fcitx. Please let us know if they work for you or not.

Features:

- Added a "Create Copy" option in the browse screen, to copy selected note's
  contents into the Add window (thanks to Rumo).

Fixes:

- Make scrollbars dark again in night mode (thanks to Hikaru).
- Various improvements to right-to-left display (thanks to Abdo).
- Fixed an error being shown when gathering new cards in descending position in the v3 scheduler.
- Fixed unwanted height/width settings when copying images between fields (thanks to Henrik).
- Reduced editor button size on Windows/Linux (thanks to Mathtias).
- Support autoplay in audio tags again (thanks to Andreas).
- Don't save window position when they're full screen, as Qt doesn't handle it well (thanks to Rumo).
- Fixed the main window sometimes failing to load properly when Anki starts (which could lead to
  blank windows, a giant sync icon, etc).
- Miscellaneous other fixes, thanks to Abdo, Matthias, TheFeelTrain and Arthur.

## Beta 1

Build 43c41d76 / 2021-12-04.

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
- Fixed new cards not appearing in the correct order in the V3 scheduler.

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
- Numerous other fixes and contributions, thanks to Rumo, Henrik, Abdo, Matthias,
  Evandro, Arthur, Soren, BlueGreenMagick, Yoshi, Jakub, Gesa, blue-putty,
  stopendy, and zjosua.

For developers:

- Anki now requires Python 3.9.
- Anki contains some compatibility shims that should allow many add-ons written
  for PyQt5 to work with PyQt6 as well (thanks to Aristotelis). These shims will
  not remain forever, so it is recommended that you update your add-ons to be
  compatible with Qt6 without shims. The two main breakages are the renaming of
  PyQt5 to PyQt6 (you can support both by importing from aqt.qt instead), and
  the requirement that [enums are
  qualified](https://github.com/ankitects/anki/pull/1406/commits/a7812dedc096627692ab3d7e64b90be632f52134).
- If you’re using Qt Designer to generate UI files, the Qt5 and Qt6 versions
  need to be generated and bundled separately if you want to support both at once.
- PyQt6 does not support the Qt resource system (pyrcc was removed), so Anki now
  uses a different approach, and urls like `:/icons/foo.jpg` should become
  `icons:foo.jpg`.
- The way Anki is packaged has changed. Most of the standard library should be
  available now. If you notice any problems importing standard libraries that
  previously worked, please let us know.
- The aqt package no longer depends on PyQt, as either version 5 or 6 is supported.
  You can specify the major version you want when installing - eg `pip install aqt[qt6]`
- manifest.json now supports a 'homepage' argument (thanks to Abdo)
