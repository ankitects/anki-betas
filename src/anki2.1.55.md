# Changes in 2.1.55

## Release Candidate 2

Build e0c4ba4b / 2022-12-14.

- Better hover feedback on top menu (thanks to Matthias).
- Fix cursor moving to field start when closing MathJax editor.
- Fix disabled state not being conveyed in dropdowns (thanks to Matthias).
- Fix inability to choose black in editor.
- Fix MathJax popup not appearing when activated via mouse (thanks to Hikaru).
- Fix RTL issues on first run.
- Hide description button for filtered decks (thanks to Matthias).
- Improve dropdown arrow appearance (thanks to Matthias).
- Revert to Qt 6.3 on macOS, which fixes a flickering issue.

## Release Candidate 1

Build f38c4e2f / 2022-12-09.

- Close MathJax editor when Esc is pressed (thanks to Abdo).
- Field collapse state and HTML editor no longer resets when card added (thanks to Matthias).
- Fixed 'change notetype' starting with the wrong notetype selected.
- Fixed MathJax editor not hiding as you select a different note.
- Fixed more RTL issues (thanks to Matthias).
- Fixed some dialogs failing to appear on new installs.
- Fixed stuck animation when MathJax editor near edge of window (thanks to Matthias).
- Fixed text color button not applying colors in some cases (thanks to Henrik).
- Improve dropdown appearance and tweak change notetypes screen (thanks to Matthias).
- Increased initial add-on dialog size.
- Make up/down buttons in deck options more subtle (thanks to Matthias).
- Pages like deck options now have a larger default size.
- Possible fix for slow TTS on Windows.

Developer-focused:

- Fixed a 'git failed' message that could occur when building.
- Fixes to work with the latest timing library (thanks to Rumo).
- Make it easier to replace hooks (thanks to zjosua).


## Beta 7

Build fad1ff74 / 2022-12-04.

- Fixed 'remove formatting' not handling formatting in the middle of a selection.
- Fixed (or at least reduced) crashes on exit.
- Fixed alternate table row color on macOS dark mode.
- Fixed audio not playing on macOS.
- Fixed glitchy animation of floating elements (thanks to Matthias).
- Fixed incorrect field mapping in the change notetype screen.
- Fixed interface being reversed on first run with RTL language.
- Fixed some regressions in the tag editor. If you notice this causes empty tags to be added again, please let us know.
- Fixed the current text input not being saved when clicking on the Save button without leaving the field first.
- Fixed TTS throwing errors on Windows.
- Give containers a brighter color than canvas (thanks to Matthias).
- Improve button color/hover gradients (thanks to Matthias).
- Improve the appearance of dropdowns, and fix layout in CSV import screen (thanks to Matthias).
- MathJax preview is no longer subject to image shrinking.
- Reduce flicker when showing congrats screen.
- Slightly reduce padding in deck list (thanks to Matthias).
- The Hard button on the first step is now capped to a maximum of 1 day greater than Again (thanks to Rumo).
- The zoom level is no longer reset when moving between screens.
- Tweak scrollbar colors for better visibility in dark theme (thanks to Matthias).
- Tweak the appearance/behaviour of the increment/decrement buttons in deck options.
- Use third grid column in graphs layout on wide screens (thanks to Matthias).
- Added an option to force Windows/Linux-style appearance on Macs (thanks to Matthias). Enable with `mw.pm.set_force_custom_styles(True)` in the debug console, then restart.

## Beta 6

Build ca116699 / 2022-11-28.

- Fixed a number of issues with the tag editor (thanks to Matthias).
- Fixed shortcuts to select all/delete tags not working (thanks to Hikaru).
- Fixed non-native scrollbar and rubber-band scrolling in some screens on macOS (thanks to Matthias).
- Reduce size of dropdown text (thanks to Matthias).
- Tweak default styling to avoid overriding some shared deck styling (thanks to Matthias).
- Tweak button styling to improve restyle add-on behavior (thanks to BlueGreenMagick).

For developers:
- The build system has been switched from Bazel to Ninja.
- Wheels are available on PyPI again.
- Thanks to Stefan for a bunch of spelling/typo fixes to the code.

## Beta 5

Build b88a7394 / 2022-11-23.

This beta is built with the new build system in PR #2022. The packages should
behave as before, but if you notice any issues, please let us know. The wheels
for this beta are missing from PyPi.

More UI tweaks thanks to Matthias:

- Fixed the editor freezing when expanding/collapsing images.
- Fixed the double border when 'reduce motion' is on.
- Don't show/hide the field icons on hover when 'reduce motion' is on.
- Move the options button in the editor to the left.
- Fixed some issues with field descriptions not updating.
- Fixed bad answer button display when answer times disabled.
- UI size tweaks.

Other fixes:

- Fixed inverted ctrl+right/left handling in RTL fields again (thanks to Abdo).
- Add tooltip to More button (thanks to Hikaru).
- Fixed incorrect location of tag completion pop-up (thanks to Hikaru).
- Fixed a regression in some add-ons in the browser (thanks to Abdo).
- Fixed an issue with the night theme class (thanks to BlueGreenMagick).
- Improve handling of invalid UTF-8 in DB check.
- Suppress the "Unknown error" message that the web toolkit can output on Windows.
- Improve an add-on hook (thanks to zjosua).

## Beta 4

Build e3c3405f / 2022-11-05.

Lots of UI fixes thanks to Matthias:

- Add back thick field focus border.
- Add margin to buttons in reviewer.
- Duplicate outline in editor no longer gets hidden when field not active.
- Fix a lack of styling in the review area.
- Fix colors on things like flags changing unintentionally.
- Fix dropdowns wrapping to the top.
- Fix fields not showing with reduce motion active.
- Fix HTML editor not showing content initially.
- Fix issues with the reviewer answer button area.
- Fix short deck options' help text appearing next to the title.
- Fix some issues with displaying on the Qt5 build.
- Fix various RTL issues.
- Flatten buttons to match macOS style (thanks also to Hikaru).
- Increasingly increment/decrement SpinBox value on long press.
- Prevent deck options switches from toggling on label click.
- Set same font size for all platforms and make editor UI a bit smaller.
- Tweaks to browser column headers.
- Use circle icon for radio box.
- Use custom scrollbar in stats screen, use grid layout, and tweak styling.

Other fixes/improvements:

- Fixed Apple Silicon macOS build failing to start.
- Double-click on browse panes to split evenly (thanks to Aristotelis).
- Fix browser sidebars appearing in wrong order in RTL mode (thanks to Abdo).
- Fix headers in importing screen overlapping section content.
- Fix MathJax pop-up appearing at bottom of screen.
- Fix wrong deck preset being selected by default in some cases.
- Improve the appearance of hte note/card switch toggle (thanks to Aristotelis).
- Preload images on the front side of a card to reduce pop-in (thanks to Kelciour).
- Remove untranslated 'see old deck options for add-ons' notice.

## Beta 3

Build e5c4ccf0 / 2022-10-29.

More UI work, thanks to Matthias. The styling is not set in stone, so we'd appreciate you letting us know
what you like better now, and anything you don't like.

- Reworked the appearance of the main window.
- Changes to the theming of things like buttons, particularly on Windows/Linux.
- Improvements to the deck options screen.
- Fixed field names appearing on top of field content, by finishing the work Henrik had previously done.
- Improved appearance of add-on buttons in editor.
- The tag area separator in the editor now snaps into place.
- Improved the tag completion pop-up.
- Lay some of the groundwork for custom color themes in the future.

Known issues in this beta:

- The 'reduce motion' option in the preferences breaks the editing window.

Improvements/Fixes:

- Fixed indent/outdent shortcuts not working properly.
- Fixed maximized browser window not being restored (thanks to Hikaru).
- Fixed some issues with dragging tags/decks onto other tags/decks (thanks to Abdo).
- Improve Anki's error handling, including some more informative error messages (thanks to Rumo).
- Preserve background color when copy+pasting between fields.

## Beta 2

Build e14f87ba / 2022-10-12.

More UI improvements thanks to Matthias:

- Improve visibility/appearance of duplicate warning.
- Fix selected tag not being highlighted.
- HTML tag auto-close can now be toggled via settings button in editor.
- Move MathJax preview toggle to settings button.
- When MathJax preview disabled, newly added equations no longer pop-up the preview.
- Cards/notes selector now uses full label.
- Improve layout for RTL languages.
- Add left/right padding to buttons.
- Ensure dropdowns are shown within window margins.
- Fix vertical misalignment of bottom toolbar buttons.
- Fix misaligned settings button.
- Fix unreadable tooltips in dark mode on Windows.
- Fix daily limits in deck options incorrectly starting from 1.
- Tweak border color in dark mode.
- Tweak appearance of menus on Windows/Linux.

Other improvements/fixes:

- Update Qt to 6.4, which performs better under Wayland. Please let us know of any improvements/regressions
  it brings.
- Fix MathJax editor not being hidden when note added or switched.
- Fix scrolling with keys/keyboard event listeners not working on answer side (thanks to Hikaru).
- Fix styling of pop-over arrows (thanks to BlueGreekMagick).
- Make it easier to read add-on errors (thanks to Abdo).
- Fix type answer warning making text bold.
- Fix font size not being removed when pasting between fields.

## Beta 1

Build f72570c or 6944210 / 2022-09-28.

Various UI changes, thanks to Matthias:

- The tags area can now be collapsed/expanded (thanks also to Henrik).
- The editor in the browse screen can now be shown on the right.
- Redesigned editor field appearance.
- Fields can now be collapsed/expanded. The animation can be disabled in the preferences.
- Added an option for fields to show the HTML editor by default.
- Tweaks to the light and dark themes.
- Tweaks to widget styling on Windows/Linux.
- Ensure long words wrap in the editor.
- Fix not being able to scroll when hovering over HTML editor.

V3 scheduler improvements, thanks to Rumo:

- Custom scheduling now supports per-card data, enabling
  things like [FSRS](https://forums.ankiweb.net/t/how-did-i-publish-a-paper-in-acmkdd-as-an-undergraduate-a-fantastic-research-experience-on-spaced-repetition-algorithm-open-source-the-code-and-dataset/23387).
- Decks can now specify daily limits independently of the deck preset. You can either specify a permanent
  override, or one that will reset when the next day comes around.

Import/export improvements, thanks to Rumo:

- The new import/export code is now the default.
- When scheduling is included, filtered decks are no longer converted to normal decks.
- When a deck is specified in a CSV import, it's now created if missing.
- Various other fixes.

Other improvements:

- You can now control whether images are automatically shrunk or not in the editor.
- Improvements to the MathJax editor (thanks to Henrik).
- The MathJax preview can now be turned off.
- You no longer need to add or remove a file to the media folder for file changes to be picked up.
- The way your typed text is compared with the correct answer has been tweaked.
- Anki now opens to the previously-active profile (thanks to Sam).
- Remember previous choices in reposition dialog (thanks to Sam).
- Card info now refreshes as a card is reviewed (thanks to Rumo).
- Make dvipng use transparent background by default (thanks to gnnoh).
- `introduced:x` now ignores manual reschedulings (thanks to Rumo).
- Updated to Qt 6.3.2
- The maximum answer time can now be set below 30 seconds.

Fixes:

- You should no longer see strange behaviour when changing learning steps while cards are in learning (thanks to Rumo).
- Cmd+Shift+C cloze shortcut should be more responsive on macOS now.
- Fix sidebar appearing as small window in some cases (thanks to Hikaru).
- Add screen can be closed with Cmd+W on macOS (thanks to Sam).
- Fix {{CardFlags}} not working with flags 5-7
- Fix an error showing when making network connections on macOS after leaving Anki open for a few days.
- Fix certain installed TTS voices on Windows causing errors.
- Fix daily counts being included in apkg import.
- Fix fields sticking in add screen when they shouldn't (thanks to Henrik).
- Fix flicker when remapping imported notetype field (thanks to Rumo).
- Fix incorrect header text alignment in Qt 6.3.1 (thanks to Rumo).
- Fix non-admin users having trouble with Anki on macOS.
- Fix reviewer shortcuts being inaccessible due to IME
- Fix scheduler change not reflected after normal sync.
- Fix slow field pin/unpin with large notetype (thanks to Rumo).
- Fix the UI getting stuck at startup when multiple pop-ups appear (thanks to Sam).
- Keep content of unmapped fields when importing CSV (thanks to Rumo).
- Possible fix for error when copying text in editor
- Preserve background-color when pasting external content in light mode.
- The HTML editor no longer automatically closes tags.
