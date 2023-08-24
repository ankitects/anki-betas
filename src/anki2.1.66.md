# Changes in 2.1.66

## Release Candidate 1

Build 70506aeb / 2023-08-20.

- The v3 scheduler is now the default for new users.
- When imports complete, a summary window is now shown (thanks to Abdo).
- Media check now automatically extracts images that have been embedded in fields.
- Handle importing of legacy AnkiDroid backups.
- Fixed a sporadic error in the review screen (thanks to mjuhanne).
- Fixed an error that could occur when syncing between newer and older clients.
- Fixed tab order in find&replace screen (thanks to Gabriel).

## Beta 1

Build 46915605 / 2023-07-26.

- Windows and Mac builds have been updated to the latest toolkit version,
which will hopefully fix some crashes/bugs. Please report any improvements or
regressions you notice.
- Use a different approach for detecting copy+paste from Anki fields, which may fix some crashes.
- The minimalist/reduce motion toggles should no longer affect card content.
- The built-in sync server can now be built without Python if you prefer.
- Add keyboard shortcut for legacy stats (thanks to Luc).
- Accessibility improvements (thanks to Derek and Kenny).
- Fix addon update dialog showing twice (thanks to Rumo).
- Fix bold toggle not working in certain circumstances (thanks to mmjang).
- Align code blocks to left (thanks to shunlog).
- Make weekday font smaller for Chinese locale (thanks to mmjang).
- Improve performance of invalid ID fix in DB check.
- Fix main window geometry/state not being restored in some cases (thanks to Abdo).
- Handle invalid float mtimes in DB check.
- Fix total note count not being logged in apkg import.
- Report actual error when DbError occurs.
- Fix two issues with MathJax editor (thanks to Hikaru).
- Don't fail silently when an empty csv is imported.
- Fix two issues that can cause editor fields to behave incorrectly (thanks to Hikaru).
- When cards are in intraday learning queue, don't use original due.
- Fix "Add-ons possibly involved" message never appearing on Windows (thanks to Abdo).
- Add partial support for Hangul keyboard shortcuts during review (thanks to Christopher).
- Disable add-on buttons when no field is focused by default (thanks to Abdo).
- Fix toggleable editor button styles (thanks to Abdo).
- Various other minor fixes and behind-the-scenes changes.

Dev related:

- Fix incorrect handling of locals in debug console (thanks to Rumo).
- Add did-add-field-hook analogous to did-delete-field (thanks to 3ter).
- Fix run-qt5.15.bat (thanks to Hikaru).
- Support more mime types for add_extension_based_on_mime (thanks to BenYip).
- Make set_config_help_action work with submodules (thanks to Abdo).
- Exclude Fabric's large canvas dependency (thanks to Kavel).
