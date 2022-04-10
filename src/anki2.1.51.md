# Changes in 2.1.51

<!-- toc -->

## Release Candidate 1

Build 51a0641b / 2022-04-10.

- Reviews in the V3 scheduler can now optionally be sorted by relative overdueness (thanks to Abdo).
- Improve editor startup time, especially with many fields (thanks to Henrik).
- Automatically re-enable disabled add-ons when user explicitly reinstalls them, and improve conflict handling (thanks to Aristotelis).
- Fixed an issue that was breaking some add-ons when running on Windows without using anki-console.bat
- Fixed card layout screen opening too wide if card template name was long (thanks to Sam).
- Fixed full sync not being triggered when changing sort field.
