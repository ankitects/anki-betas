# Changes in 2.1.51

<!-- toc -->

## Release Candidate 2

Build a7cb5e21 / 2022-04-19.

- Fixed compatibility with older macOS versions.
- Fixed formatting being turned off when pressing shift (thanks to Henrik).
- Remember original card position when using 'set due date' on a card (thanks to
  Rumo).
- Fixed compatibility with 'card info during review' and similar add-ons.
- Fixed illegible calendar buttons in dark mode on Mac/Linux.
- Fixed stats PDF being illegible when saving in dark mode after scrolling down
  (thanks to Luka).
- Use `<b>` and `<i>` formatting tags, instead of `<strong>` and `<em>`.
- Fixed an issue with the search history when clicking on items in the sidebar
  (thanks to Rumo).
- Anki now closes the Browse screen before full sync or colpkg import/export, so
  it doesn't show errors.

## Release Candidate 1

Build 51a0641b / 2022-04-10.

- Reviews in the V3 scheduler can now optionally be sorted by relative
  overdueness (thanks to Abdo).
- Improve editor startup time, especially with many fields (thanks to Henrik).
- Automatically re-enable disabled add-ons when user explicitly reinstalls them,
  and improve conflict handling (thanks to Aristotelis).
- Fixed an issue that was breaking some add-ons when running on Windows without
  using anki-console.bat
- Fixed card layout screen opening too wide if card template name was long
  (thanks to Sam).
- Fixed full sync not being triggered when changing sort field.
