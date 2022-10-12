# Changes in 2.1.55

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
