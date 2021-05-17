# Changes in 2.1.45

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
