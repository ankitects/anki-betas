# Changes in 2.1.53

## Release Candidate 1

Build f6ecddef / 2022-05-20.

Editor changes:

- Rework image resizing (thanks to Henrik). Images expand to the editor width by default now,
  and images that are resized for the editor will remain that way if you switch fields, or
  navigate to a different note and back.
- Existing height constraints on images are stripped when resizing (thanks to BlueGreenMagick).
- The MathJax editor now provides buttons/shortcuts to cloze-delete selected text (thanks to Henrik).
- MathJax preview now hides cloze markers.
- Style tags are no longer stripped when editing (thanks to Henrik).
- `<br>` tags in MathJax are now handled correctly (thanks to Henrik).
- MathJax in the review screen now supports mathtools, and available packages in editor and review screen match (thanks to Henrik).
- Move focus into HTML editor when hiding normal editor (thanks to Henrik).
- Image tags now have the alt property preserved when pasting.

Other changes:

- Fixed future due graph incorrectly including new cards.
- Custom study reports counts of child decks separately in v3 scheduler.
- Fixed initially-incorrect tooltip position in graphs (thanks to BlueGreenMagick).
- Fixed an error sometimes appearing in the browser when deleting notes (thanks to Rumo).
