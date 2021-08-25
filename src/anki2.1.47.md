# Changes in 2.1.47

## Release Candidate 2

Build 3077a1f9 / 2021-08-25.

- Fixed calendar graph day labels showing incorrectly in some timezones.

For add-on developers:

- The Svelte components Anki exports should now work correctly in add-ons.
- WithShortcut is now also available.

## Release Candidate 1

Build dffa38c4 / 2021-08-22.

Changes to the [v3 scheduler](https://faqs.ankiweb.net/the-2021-scheduler.html):

- Interday learning cards are included in the learning count again, instead of
  the review count.
- Interday learning cards are still affected by the review limit. Interday
  learning cards are fetched first, then reviews, and finally new cards.
- Filtered decks with rescheduling disabled now log reviews, so the reviews will
  appear in your graphs.
- Added an option to sort reviews by ascending/descending ease.
- Fixed an issue where an error message could appear after undoing/redoing a mix
  of reviews and other changes.
- Fixed custom scheduling not working.

Other changes:

- The "timebox finished" message is now shown on card answer, instead of after
  revealing the next card. This should also address an issue where the message
  popped up outside of review.
- Added shortcut for Forget in the Browse screen.
- Fixed an error being shown when there was no current deck.
- Fixed incorrect quoting in duplicate search (thanks to Abdo).
- Fixed deck options inverting the "replay question when showing answer" option.
- Fixed an issue with ampersands in the Add Cards history button (thanks to
  Arthur).
- Fixed handling of audio/video tags (thanks to Hikaru).
- Fixed errors playing audio when computer was slow to respond (thanks to Kelciour).
- Fixed preferences screen not updating undo menu, and causing an error when
subsequently reviewing a card in the v3 scheduler.
- Fixed case changes being ignored in tag rename.
- Fixed error shown when DB check run on corrupt collection.
- Fixed deck options prompt showing the default deck, instead of the correct one.
- Fixed reposition command ignoring suspended cards.
