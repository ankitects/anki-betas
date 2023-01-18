# Changes in 2.1.43

## Beta 1

Build 0fbae6bc / 2021-03-27.

- The reviewing screen will now wait for up to 100ms for images to load before
  showing, and waits until images have been loaded before scrolling to the
  answer.
- The default fade-in on the review screen has been removed.
- Fix DB check incorrectly identifying an issue after lapsing a card with a
  non-zero interval % in the V1 scheduler.
- Fix editing toolbar being initially active (thanks to Henrik).
- Fix some error messages (thanks to Rumo).
- Fix expand/collapse triggering click in sidebar (thanks to BlueGreenMagick).
- Update translations, thanks to the translators.
- Fix "Forgot Card" message.
- Fix deck list not updating after deleting.
