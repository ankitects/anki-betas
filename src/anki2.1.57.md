# Changes in 2.1.57

## Release Candidate 1

Build 14189a91 / 2023-01-26.

- Fix non-Latin text wrapping in deck options dropdown (thanks to Fabricio).
- Fix outer whitespace not being trimmed in type answer.
- Fix style label being shown in preferences on Windows (thanks to Matthias).
- Fix the future due graph counting learning cards on the wrong day.
- HTML is now escaped in the deck list.
- Improve styling of boxes in template editor (thanks to Matthias).
- Fix 'View Files' not working with a relative base folder (thanks to Abdo).

Dev related:

- Make it easier to override node/protoc binaries during a build (thanks to
  Mani)

## Beta 1

Build 5cdfa7a6 / 2023-01-18.

More UI improvements/fixes thanks to Matthias, including:

- The top toolbar area can now take on the color/background of the main window.
- The top toolbar appears more subtle during review.
- A new option in the preferences to automatically hide the top and bottom bar
  during review.
- A new option in the preferences to enable a "minimalist" mode that makes the
  UI more compact/less fancy.
- A new option in the preferences to switch between native styling and the Anki
  theme (on Mac/Linux).
- The preferences screen has been redesigned to be easier to navigate.

Syncing has also been updated:

- Tweaks to the sync protocol that should be transparent when syncing with
  AnkiWeb, but that will break syncing with third-party servers that haven't
  been updated yet.
- The sync server bundled with Anki has been updated, and now supports syncing
  media as well. More information is available on
  <https://docs.ankiweb.net/sync-server.html>.

Other changes:

- Switch to a different library for handling type-in-the-answer comparisons,
  which should give more reliable results, and not crash with certain inputs
  (thanks to Rumo).
- Fix `introduced:x` not working correctly when negated (thanks to Rumo).
- Fix ctrl+enter not working when importing screen first opened.
- Fix image dimensions not being correctly constrained (thanks to Hikaru).
- Fix incorrect total/average in added graph.
- Fix newlines not appearing when importing a csv file with HTML disabled.
- Fix quotes preventing field descriptions from showing.
- Fix spaces not handled properly when entering text around MathJax (thanks to
  Hikaru).
- Fix toolbar add-on breakages and introduce toolbar tray layout & API (thanks
  to Aristotelis).
- Fix type-in-the-answer not supported nested cloze deletions.
- Increase delay when adjusting clipboard, which may improve compatibility on
  some systems.
- Update Windows/Linux builds to Qt 6.4.2.
