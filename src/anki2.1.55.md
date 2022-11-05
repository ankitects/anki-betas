# Changes in 2.1.55

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