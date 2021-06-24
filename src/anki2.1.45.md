# Changes in 2.1.45

## Beta 2

Build b693bdbf / 2021-06-24.

Browser updates:

- Added an option in the Preferences screen to customize the starting
  search text (eg, to start with "deck:current").
- More reliably scroll to the current card.
- New tag icons and associated backend work (thanks to Henrik).

HTML editor, thanks to Henrik:

- Now appears inline, instead of in a separate pop-up.
- Supports syntax highlighting, and showing opening/closing tags.

Change notetype:

- Supports multiple undo.
- Can match old and new fields by name.
- Allows mapping a source field to more than one destination
  fields, allowing you to clone the contents of a field.

Other features:

- Warn user when they attempt to use cloze markers inappropriately
  (thanks to Rumo).
- Support system SSL certs on Linux.
- Improved add-on support for the new deck options screen (thanks to Henrik).
- Changed v3 scheduler label from "experimental" to "beta".
- Added Card Info action to reviewer (shortcut: i)

Fixes:

- Fixed resource leak in sound code (thanks to Kelciour).
- Fixed incorrect font on Windows (thanks to Kelciour).
- Fixed crash when pressing the copy shortcut with no active selection.
- Make the color selector inactive when no field is selected (thanks to hkr),
  and make it apply color immediately (thanks to Henrik).
- Fixed creation of filtered decks from Browser (thanks to Rumo).
- Fixed escaping of hyphens in searches (thanks to Rumo).
- Fixed 'Set Due Date' not remembering provided input.
- Fixed incorrect card count when removing multiple templates.
- Fixed an issue compiling on recent Python 3.9 installs.
- Fixed field pin status being forgotten when opening Cards screen (thanks to Henrik).
- Reduce chances of a flash when revealing answer on cards with images.
- Miscellaneous other changes.

## Beta 1

Build 5bd2dc65 / 2021-06-08.

Changes:

- Added an option to the v3 scheduler to sort new cards in reverse order.
- Added a Card Info option to the review screen.
- Reduced editor toolbar size on Macs.
- When opening the Browse screen with an active study card, the whole
  deck is now shown (thanks to Rumo).

Fixes:

- Fixed audio getting stuck when pausing near end (thanks to kelciour).
- Fixed current review card sometimes changing when making edits.
- Fixed deck options tooltip appearance (thanks to Matthias).
- Fixed selected deck not being honored when importing text file.
- Fixed styling changes not being reflected in preview.
- Fixed timebox window getting stuck when it appeared at start of study.
- Fixed various links to the manual (thanks to cherryblossom000).

## Alpha 4

Build be9bbf21 / 2021-06-02.

Known issues:

- Changes to styling section in card layout screen not reflected in preview.

v3 scheduler changes:

- The v3 scheduler can now be toggled in the Preferences screen.
- Review cards can now optionally be shown in subdeck order.
- Fixed 'deck priority' for new cards not following subdeck order.

Other features/behaviour changes:

- Updated text colour and highlight colour buttons, thanks to Henrik and Matthias.
- Added 3 new flag colours, thanks to Rumo.
- Sidebar items can be dragged onto the Saved Searches area to add them as a favourite,
  thanks to Rumo.
- Added a new menu item to clone the current deck options.
- Custom study now limits the tag selection to 100 tags or fewer.
- Extra checks are now done when updating a card template, such as detecting when
  a cloze notetype is missing a cloze directive, or two templates have identical question
  sides, thanks to Rumo.
- Editor toolbar styling improvements, thanks to Henrik and Matthias.
- The "sync required" indicator is now updated immediately, and will turn off
  if you undo the first change made after a sync.
- Removed the superfluous "keep input" option from the Fields dialog.
- When opening deck option from the study screen, you'll now be asked which deck
  you want if the card is in a subdeck.
- Support ctrl+numpad enter to add cards.

Fixes:

- Fixed an error/crash occurring when timeboxing was enabled.
- Fixed deck options screen mishandling steps shorter a minute.
- Fixed remembered tags not being applied to subsequently-added notes.
- Fixed an error being shown when exporting cards/decks with a non-default deck configuration.
- Fixed changes to the current field not being saved when saving the deck options.
- Fixes for building on linux-arm64 (thanks to qubist-pixel-ux).
- Force x11 mode when the packaged build is run on a system that tells Qt to use Wayland,
  as Wayland is not currently supported by the packaged build.
- When a fatal error occurs, close Anki instead of allowing it to remain in a stuck state.
- Fix formatting of some error messages, thanks to Rumo.
- Various behinds-the-scenes changes thanks to Henrik and Rumo.
- Miscellaneous other changes.

## Alpha 3

Build f91f00a5 / 2021-05-24.

- Fix new ease not being applied when failing a review card in the v3 scheduler.
- The `[...]` in cloze deletions is now read as "blank" by TTS (thanks to Rumo).
- Flags can now be renamed in the sidebar (thanks to Rumo).
- Improvements to the handling of shortcuts in the editor (thanks to Henrik).
- Improve cards/notes switch appearance (thanks to Rumo & Kleinerpirat).
- Various tweaks to the Deck Options screen.
- When Browse screen is opened, default to the first sidebar mode.
- Add night mode styling to 'type in the answer' box, and improve legibility
  of comparison.
- Fix Find&Replace searching in incorrect field.
- Fix missing cumulative overlays in graphs.
- Fix strange characters in Deck Options titlebar (thanks to Abdo).
- Fix Unbury action missing cards in child decks.
- Fix wrong stock note type being added (thanks to Abdo).
- Horizontal scrolling in the browse screen is less jumpy (thanks to Rumo).
- Report changed card count when changing deck/flag in Browse screen.
- Fix actions like a sort column change clearing the undo history.

## Alpha 2

Build b9a4908b / 2021-05-19.

- Fixed a bug that was causing the Undo action to force a full sync.
- You can now redo undone actions. The Redo menu item will be hidden
  for actions that don't support the new undo code, including reviews in
  the v1/v2 scheduer.
- Changed the shortcut for Undo in the Browse screen to match the main
  window.
- Fixed an error when switching between cards and notes modes (thanks to Rumo).
- Various tweaks to the appearance of the deck options screen (some thanks to
  Henrik).
- Fixed Custom Study when the v3 scheduler is enabled.
- Compatibility tweaks to fix the breakage of some add-ons.

The Fields/Cards text in the editor is currently a bit large, and it'll likely
be tweaked in the future.

## Alpha 1

Build 10bfb95f / 2021-05-17.

There have been a lot of under-the-hood changes in this release, and there may
be some rough edges at the moment.

Undo handling:

- Most actions now support multiple undo steps. You can change a card template,
  delete some notes, bury a card, then undo each of those steps if you wish.
- Actions that support multiple undo steps will now save the changes
  immediately, meaning that if Anki crashes, the changes you made in the last
  few minutes will no longer be lost.
- Actions that don't support the new undo handling (eg, Check Database), will
  clear the undo history.
- Add-ons will clear the undo history if they modify the database directly, or
  use routines that don't support undoing. There are some new routines available
  to add-ons to make operations undoable, but add-ons may need to be updated
  to use them.

Scheduling changes:

- An [experimental new scheduler](./2021-scheduler.md).
- The deck list now shows the learning count separately.
- On new collections, the v2 scheduler is now the default.

Browser changes, thanks to Rumo:

- The sidebar now has two modes. The default allows clicking on items to search
  for them. The other mode allows you to select multiple items at once, so you
  can drag & drop or delete multiple items.
- The browse screen can now be toggled between showing cards,
  and showing notes.
- When showing notes, some columns will show an aggregate over all the
  cards of a note.
- Added an introduced:x search to locate cards first studied in the last x days.
- Column rendering has been moved into the backend, and will be faster than
  before (but is still limited by the speed of the graphics toolkit).
- A fair bit of the browser code has been changed, and some add-ons like the
  "Advanced Browser" add-on will need to be updated to support the new approach.

Editor changes, thanks to Henrik:

- The editing toolbar has been reimplemented in a way that will allow easier
  improvements in the future.
- The toolbar's icons and style have been updated.
- The editor now provides bullet and numbered list buttons.
- The editor now provides buttons to control text alignment and indent.
- Sticky fields can now be toggled on/off from the editing screen.
- Editor shortcuts are handled differently, and the current approach does not
  work well on non-QWERTY keymaps. This will likely change before a stable release.
- A new API is available for add-ons, but this has not been finalized yet.

State handling:

- When you make changes, the user interface should update more consistently now.
  Adding a new tag to a note will update the sidebar in the Browse screen for
  example, and when you review a card that is shown there, the columns will
  update.
- The Browse screen no longer refreshes a search automatically. When you make a
  change, the column text may update, but the number of rows will not change.
  Deleted cards show "(deleted)" until you search again.
- The main window no longer shows a "waiting for editing to finish" screen. When
  you make changes such as editing a note, the main window will dim, and will
  automatically refresh when you return to it.

The deck options screen has been reimplemented:

- (Re)learning steps are now shown with units, eg 10m or 4d.
- Deck options are now shown on one scrollable page.
- Extra help is available for most options.
- It is easy to see at a glance which options have been changed from the
  default, and individual options can be reverted to the default setting.
- Warnings will be shown for some common issues (eg, review limit too low
  compared to new cards).
- Some of the more advanced options have been moved to a separate "Advanced"
  section.
- The old options can be accessed with a Shift+click, since it will take a while
  for add-ons to be updated to support the new screen.
- The deck description is now accessible via a button in the overview screen,
  instead of via the deck options.

Other changes:

- Numerous behind-the-scenes improvements from Henrik and Rumo.
- The Find&Replace option in the Browse screen can now be used on tags as well.
- You can now choose which add-ons you want to update (thanks to BlueGreenMagick).
- Fix text with single quote not being escaped in export (thanks to Ryan).
- Other fixes and improvements thanks to Abdo, Glutanimate, Arthur and Shaun.
- The Card Info screen ignores manual rescheduling when calculating the average
  time.
- Performance improvements and other miscellaneous fixes.
