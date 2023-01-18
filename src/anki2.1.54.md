# Changes in 2.1.54

## Release Candidate 3

Build a8e34ce4 / 2022-06-22.

- Fixed fields sticking in add screen when they shouldn't (thanks to Henrik).
- Fixed incorrect header text alignment in Qt 6.3.1 (thanks to Rumo).
- Automatically map tags field in new import screen (thanks to Rumo).

## Release Candidate 2

Build 30c6bd58 / 2022-06-21.

- Fixed broken column headers in Browse screen. You'll need to reconfigure your
  columns after updating.
- Fixed undo history being cleared and error showing when double-tapping delete
  in Browse screen.
- Fixed field descriptions appearing underneath field text (thanks to Hikaru).
- Changing field delimiter in new import screen rebuilds field map.
- Editor API improvements (thanks to Henrik).
- Add ellipsis to Forget action.

## Release Candidate 1

Build 595c9273 / 2022-06-18.

A new CSV importer & exporter, thanks to Rumo:

- Shows a preview based on the selected field separator.
- Column mapping includes field text for reference.
- Multiple decks and notetypes can now be imported/exported at once, as columns
  can be mapped to deck or notetype name.
- Supports exporting and importing a unique identifier for a note, to use
  instead of a matching first field. This removes the need for the 'add note id'
  add-on.
- Extends the header syntax so that files can specify metadata such as the
  desired field separator, and the mapping of fields.
- The new functionality is not enabled by default, and can be enabled with a
  checkbox in the preferences screen. This also enables the new apkg
  import/export code introduced in 2.1.52. If you use the Special Fields add-on,
  you will need to disable this option in order to use the add-on.

Update to Qt 6.3.1:

- Fixes complex-language input (eg Japanese, Hindi, etc) on macOS being flaky.
- Fixes unwanted text when copying from the review screen on Windows.
- Fixes a startup failure with certain Linux keyboard configurations.

Other changes:

- Accept .zip extension when importing add-ons (thanks to Abdo).
- Add support for getting light/dark mode status with latest freedesktop
  standard (thanks to Bart).
- Field descriptions in the editor are now shown inline, instead of in a tooltip
  (thanks to Matthias).
- Fixed a rounding issue when describing time intervals of a year or more.
- Fixed an error that occurred after a one-way download fetched a collection
  with a different scheduler version enabled.
- Fixed desktop hanging when attempting to add a new notetype in KDE (kwin).
- Fixed flag names not updating after sync until Anki restarted.
- Fixed inability to enter underscore in tags area on some keyboard layouts
  (thanks to Henrik).
- Provide a way for the review screen to support drop events (thanks to Abdo).
- Other minor fixes and improvements.
