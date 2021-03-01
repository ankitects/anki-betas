# Changes in 2.1.41

## Add-On Notes

Add-on authors, please see <https://forums.ankiweb.net/t/add-on-porting-notes-for-anki-2-1-41/7390>

## Beta 5

Build 14cc81f8 / 2021-03-01.

- Filtered deck screen now has a link to show cards not matched by search (thanks to Rumo, Abdo).
- Support Alt+number to switch between clozes in the card layout screen (thanks to Abdo).
- Fix images not shrinking to fit editor field (thanks to Henrik).
- Fix a focus handling issue in the editor (thanks to Henrik).
- Fix incorrect review counts in the 2.1 scheduler when parent decks had a
  smaller limit than their children.
- Fix early review cards remaining in new queue after upgrading to 2.1 scheduler.
- Improve error message when trying to nest under a filtered deck (thanks to Rumo).
- Use monospace font in HTML editor.

## Beta 4

Build 46e9720e / 2021-02-21.

Scheduler updates:

- The V1->V2 upgrade process no longer resets cards that are in learning, or
  removes cards from filtered decks.
- Users on the old scheduler will now see a message at the top of the deck
  list prompting them to update to the Anki 2.1 scheduler.
- New users will see the message too. Enabling it by default would be a smoother
  experience, but that needs to wait until AnkiDroid 2.15 is released as stable,
  with support for the newer timezone handling.
- There is no option to downgrade to the V1 scheduler anymore, though you can
  still do so by downgrading to an older Anki version first.

Fixes:

- Fix tag replacement/deletion matching substrings (thanks to Abdo).
- Fix images not shrinking to fit in fields (thanks to Henrik).
- Fix "saved searches" getting selected when clicking in empty area of sidebar
  (thanks to BlueGreekMagick).
- Reposition dialog's "shift cards" option now defaults to off.

## Beta 3

Build b3b40933 / 2021-02-12.

- Sidebar:

  - Drop multiple selection, and switch back to the old clicking behaviour.
    Multiple selection can be tackled again in a future update.
  - "Due" now shows only cards due that day.
  - Added "Overdue" item.

- "Set due" now leaves the review intervals alone unless '!' is provided.
- Fix stale preview in card layout screen (thanks to Henrik).
- Ignore manually scheduled cards in hour graph.

## Beta 2

Build 599d4634 / 2021-02-09.

- Sidebar changes:

  - Multiple selection. Currently only works with tag and deck drag&drop.
  - Ctrl/Alt/Shift options to add/modify the search now require
    a right click instead of a left click, to avoid conflicts with multiple
    selection.
  - Move "Current Deck" to Decks
  - Click on Decks to show whole collection.
  - Click on Flags to show any flag.
  - Click on Tags to show all non-empty tags.
  - Added "Untagged" under Tags.

- "Set Due Date" changes:

  - Interval can optionally be reset for review cards.
  - Input now remembered.

- Editor tweaks to make things easier for add-ons (thanks to Henrik).
- Fix slowdown after large "check media" report.
- Fix 'rsbackend' errors in some add-ons.
- Fix compatibility with fastbar add-on.
- Markdown rendering of deck config is now opt-in - once enabled,
  it will change the handling of both the overview and congrats screen.
  When not enabled, the congrats screen will not show the description.

## Beta 1

Build 704b5e58 / 2021-02-07.

This beta includes all the changes from 2.1.39beta1 - please see
its change notes as well.

Changes since 2.1.39beta1:

- The editor's code has been reworked, thanks to Henrik:

  - `<br>` tags will now be used by default instead of the previous `<div>`
    tags, which solves some issues with multiple lines in cloze deletions and
    MathJax.
  - Invalid field content can no longer spill out into the editing area.
  - Other behind-the-scenes changes have been made at the same time, and some
    add-ons that alter the editor will need updating.

- Browser sidebar improvements:

  - Added a search bar, thanks to Abdo.
  - The remaining items in the Filter button have been moved into the sidebar, and
    the Filter button removed.
  - Tags and decks can now be dragged and dropped.
  - Each section can now be expanded/collapsed.
  - Add-ons that were adjusting the sidebar or filter button may need updating.

- Search improvements, thanks to Rumo:

  - Filtered decks can now be created from a browser search, and vice versa.
  - Better ergonomics for developers.

- Reworked the Reschedule tool:
  - Split into separate "Forget" and "Set Due Date" actions
  - "Set Due Date" now [adjusts intervals](https://github.com/ankitects/anki/commit/704b5e581a70089798f0f4742640fde4a3f1a507) of review cards, instead of resetting them.
  - Changed the "Delete Tags" shortcut; Ctrl+Shift+D now changes the due date.
  - Added the action to the review screen as well.

Other changes:

- The tags field in the editor now autocompletes from anywhere in a tag name,
  not only the start.
- The title bar on Macs will now turn dark when night mode is activated.
- Improvements to the graphs, thanks to Henrik.
- Add deck description back to congrats screen, with [caveats](https://forums.ankiweb.net/t/anki-2-1-39-deck-descriptions-gone-after-finished-studying/7261).
- Add opus to media list in editor.
- Other improvements with thanks to Rumo, Henrik, Abdo, Arthur and Maksim.

For developers:

- Almost all of the Python codebase now has type hints. 🎉
