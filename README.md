# Anki 2.1 Betas

## Downloads

You can get the latest beta from https://apps.ankiweb.net/downloads/beta/

## Problems

If you run into any issues, please let us know on the beta testing section of
our support site:

https://anki.tenderapp.com/discussions/beta-testing

## Changes

### Changes in 2.1.21beta2 (65ec9d19)

Before trying this beta, please back up your collection and media files,
as a lot has changed under the hood. Please keep an eye on the contents
of your media folder until this update receives more testing.

- More work on the handling of translations, including tweaks to the way
the answer buttons and the review history screen show intervals.
- You can now export .apkg files with the V2 scheduler enabled.
- Show next learning card due time, and count for today
- Add-on hook improvements, thanks to Glutanimate and Arthur.
- Hide the default deck in more cases (thanks to Arthur).
- Some improvements to the build process (thanks to Evandro).
- Fixed negative number in "add-on incompatible" message.
- Fixed field contents added by old add-ons like Japanese Support 
not appearing.
- Fixed card info screen not appearing.
- Fixed an error message when using very small learning steps.
- Add "New #" prefix to the due column for new cards.
- Add back missing fcntl for add-ons.
- Fix a race condition in the audio playing code.
- Fixed {{Deck}} showing the filtered deck name instead of the original deck.
- Fixed LaTeX in cloze deletions not being rendered by the media check.
- Cards in night mode now default to dark grey instead of black.
- Fix issue with macOS's dark mode in the alternate Mac build.
- Don't allow scaling of the UI below 100%, as it doesn't work properly.
- Fixed Anki not starting on Windows installs that were lacking TTS support.
- Interrupt current audio even if autoplay is disabled.


### Changes in 2.1.21beta1 (683b7983)

Before trying this beta, please back up your collection and media files,
as a lot has changed under the hood. Please keep an eye on the contents
of your media folder until this update receives more testing.

Media syncing improvements:

- Media syncing now happens in the background, so you can continue using
Anki while the media sync completes.
- Aside from syncing at open and close, Anki will sync any media changes
every 15-20 minutes.
- You can click on the sync button while the spinner is active to monitor
progress.
- Long filenames and problematic characters should be handled smoothly now,
instead of causing syncing errors.
- Anki should no longer sometimes forget to download files when a media
sync fails due to network errors.
- When media files are added within Anki, Anki now marks them
in the database immediately, which can make things faster for people with
slower disks if they are not modifying the media folder externally.

Media check improvements:

- The Check Media function now shows progress, and can be interrupted.
- There is now a separate button to generate missing LaTeX.
- If LaTeX fails to build, the problem card will be revealed in the browse
screen.
- When Anki finds files that are too long or would cause errors on some
operating systems, it will automatically rename them and update your notes
to point to the new filename.

Both media sync and the media check now place deleted files in a media.trash
folder inside your profile, instead of placing the files in the system trash.
Any files that have been sitting in that folder for a week or more will be
deleted permanently when you next run a media check.

Other changes:

- Updates to the translation infrastructure - please see https://anki.tenderapp.com/discussions/announcements/138-more-updates-to-ankis-translations
- Improvements to the readability of the scheduling code (thanks to Arthur)
- More hooks for add-on authors (thanks to Arthur & Aristotelis)

### Changes in 2.1.20beta10 (d0284f75)

For a full list of changes since 2.1.19, please see https://apps.ankiweb.net/docs/changes.html

- Added the ability to export selected notes from the Browse screen, thanks to Arthur.
- Don't filter em/strong tags when pasting.
- Fix rendering of question/answer column in browse screen.
- Clearer error when conditional replacement closing tags are switched.
- Show whether template errors occurred on the front or back template.
- Drawings done in AnkiMobile now appear correctly in night mode.
- Work around HTML editor sometimes failing to appear on macOS.
- Fix error when double-clicking the open profile button.
- Constrain image width in editor to the field width.
- Tweaks to replay audio button alignment/outline.

### Changes in 2.1.20beta9 (1fbd925f)

- Standard Windows and Linux builds updated to latest Qt.
- More legible colours in the stats screens in night mode.

### Changes in 2.1.20beta8 (5d91580c)

- Emptying a filtered deck in the V2 scheduler no longer unsuspends suspended cards inside it.
- Added an option in the preferences to not interrupt the currently playing audio when answering.
- In night mode, the scrollbar style is now consistent in and out of webviews.
- Lighter buttons and scrollbars in night mode.
- Fix the white lines showing on macOS dark mode in the browse screen.
- Fix some misaligned dialogs in night mode.
- Fix building from a .tar.gz file.

### Changes in 2.1.20beta7 (77912aa2/c70badcd/a4764e2a)

- Foreground and background colours in text are now ignored
when pasting in night mode.
- On macOS, the system theme will be used when dark mode is active.
- Qt has been downgraded to 5.13 on macOS to facilitate the above.
- The audio replay buttons are smaller by default, and can be styled using fill and stroke on '.replay-button svg [circle|path]'.
- Night mode now also used .night_mode - if you notice any problems
with this please let me know.
- Disabled elastic scrolling in webviews to work around a Qt bug.
- Progress dialogs no longer pop up immediately.
- Minor night mode tweaks.

### Changes in 2.1.20beta6 (23f13a31)

- TTS tags now accept a 'speed=1.0' option to control voice speed.
- Adding \{\{tts-voices:}} to your template will show all available voices.
- Replay audio buttons now clickable in card layout and preview screens.
- Fix autoplay of audio in the preview screen.
- Fix Anki filtering spaces out of pasted sound files.
- Fix add-ons being marked as incompatible when they weren't.
- Handle AnkiWeb's new support for multiple add-on versions.

### Changes in 2.1.20beta5 (d428b3b4)

- Fix issues loading mpv on Mac/Linux.
- Replay buttons now appear in {{FrontSide}}.
- Replay buttons are shown in card layout and preview screens, but
are not yet clickable.
- More changes to the card display code, which will break more
add-ons I'm afraid.
- The template hooks have been updated - please see
https://github.com/ankitects/anki-addons/commits/master for required
changes.
- A few colour fixes for night mode.
- A change from Arthur that fixes one issue that was breaking add-ons.
- Invert LaTeX in night mode (thanks to zjosua).
- Support specifying min/max versions in .ankiaddon files.

### Changes in 2.1.20beta4 (98041059)

- The night mode option now turns the interface dark as well. Please
report any areas that don't display properly.
- Fix mplayer window popping up on Windows.
- Alter the way negated conditionals are handled in card generation.

### Changes in 2.1.20beta3 (95b497cc)

- You can now use `{{tts en_US:Field}}` on your card templates to use the
text to speech support built into Windows and macOS, changing the language
code as necessary.
- You can specify the voices you'd prefer - the first available one
will be used. Eg. `{{tts ja_JP voices=Apple_Otoya,Microsoft_Haruka:Field}}`.
The voices you specify must match the language.
- In addition to the built in TTS, there is an example add-on that uses gTTS
available here: https://ankiweb.net/shared/info/391644525
- To see all available voices, use the following in the debug console:

-----
for p in aqt.sound.av_player.players:
  if v := getattr(p, 'get_available_voices', None): pp(v())
-----

- Audio buttons are now shown on the card, and can be turned off in the
preferences. They will show for both regular audio and text to speech.
- Added shortcut keys in the review screen to pause and jump forward/backward
5 seconds.
- Anki now starts a new copy of mplayer for each audio file on Windows,
which avoids the need to create temporary files. If you notice any problems
related to this, please let me know.
- Add-ons that modified the audio code may break with this update.
- For add-on authors, some more examples using the new hook system are
available on the following page, including ported versions of the clickable
tags and additional card fields add-ons:
https://github.com/ankitects/anki-addons/tree/master/demos

### Changes in 2.1.20beta2 (c9a46268)

- Anki will now check for add-on updates once a day.
- Disabled add-ons are now included in the check as well.
- If a user attempts to install an add-on that doesn't support the version
they're on, Anki will now prevent them from doing so.
- The 'max supported version' that add-on authors can specify in AnkiWeb
is now used to prevent users from downloading add-ons that won't work on
their Anki version, and to disable add-ons when they update to a new version.
- Fix incorrect delay being logged when Hard is used on the first learning step
in the V2 scheduler.
- The editor no longer modifies percent-escaped text outside of image tags.
- Fix an extra linebreak being left in a field when an image is attached
to an empty field.

### Changes in 2.1.20beta1 (fa564772)

- Changes to the way cards are rendered that will break some add-ons - please
  see https://anki.tenderapp.com/discussions/beta-testing/1706-anki-2120-updates-to-card-template-rendering[here]
- A new hook system for add-ons - please see https://anki.tenderapp.com/discussions/beta-testing/1704-anki-2120-updates-to-the-hook-system[here]
- Tweaks to the 'tag updated notes' feature (thanks to Erez)
- Fix cards being sorted in wrong order when added after the note was created (thanks to Arthur)

### Changes in 2.1.17beta8 (f4fb7319)

- Minimum Python version is now 3.7.
- Updated the way templates are rendered. If you notice any problems or
messages printed to the console, please post on the support site.
- Double-clicking on .ankiaddon files should now work on Mac and Windows as well.
- Bug fix for tag updated notes feature (thanks to Erez).

### Changes in 2.1.17beta7 (a4d38d65)

- Added an option to tag updated notes when importing (thanks to Erez).
- Install add-ons by double clicking on their files (thanks to Glutanimate).
Currently only on Linux; support for Windows/Mac will be added soon.
- The alternate Windows build now uses Python 3.8/Qt 5.12.
- The alternate Mac build now uses Python 3.8.
- The alternate Linux build has been dropped.

A bunch of behind-the-scenes changes to the code in this release. If you
notice any regressions, please post on the beta testing thread.

### Changes in 2.1.17beta6 (4cead7ef)

- Added a beta label to the experimental scheduler,
as a timezone corner case needs to be addressed before
general release.
- Fixed sidebar background on Windows 10.
- Fixed building from source on 32 bit Linux.
- Fixed alternate template syntax not being recognized.
- Automatically remove ':' from field names when opening the
card templates screen, as it conflicts with the template syntax.

### Changes in 2.1.17beta5 (518cc442)

- Changing large note types is significantly faster.
- Fix a bug that was preventing new profiles from being created.
- Fix a bug in the handling of MathJax+Cloze (thanks to Michal).
- Fix missing border when the user has modified the interface scale.

### Changes in 2.1.17beta4 (bfcc8379)

The standard Mac and Linux builds have now been updated to the new toolkit
as well - please report any regressions.

### Changes in 2.1.17beta3 (da942617)

Another Windows-only build.

- Improved the performance of the browse screen's sidebar.
- If you use any add-ons that alter the sidebar, you will need to disable
them prior to upgrading, as add-on authors will need to modify their code
to work with the new implementation.
- Added an option in the preferences screen to adjust the UI size.
- Fixed a regression in the way duplicate deck names were handled.

### Changes in 2.1.17beta2 (ff6b58c2)

A Windows-only build, built with the latest toolkit version. Please report
any improvements or regressions.

If you've previously customized the DPI/Scaling as described on
https://apps.ankiweb.net/docs/knownissues21.html#text-size, please try
running the beta without the customizations and report how you go.

In beta 2:

- Alter the way DPI scaling is handled.
- Remove help button from some Window titles.
- Alter a change made in .16 that could break some editor add-ons.

### Changes in 2.1.17beta1 (81bdd860)

A Windows-only build, built with the latest toolkit version. Please report
any improvements or regressions.

### Changes in 2.1.16beta4 (4bc33e2f)

- Syncing should work properly now when you change timezones without visiting AnkiWeb.
- Ensure learning cards in filtered decks with 'order due' show in template order.

### Changes in 2.1.16beta3 (bb62a3c1)

- Remove the 'experimental' label from the new scheduler.
- New installs default to the new scheduler.
- You can now import and export decks with scheduling enabled in the new scheduler.
- Fix bold/italics/underline pasting that broke in the last beta.
- Hide empty Default deck in deck picker (thanks to Arthur).
- Add an extra day to the interval when using Easy on a relearning card.
- Preserve surrounding styling when making cloze deletions.

### Changes in 2.1.16beta2 (bceb4feb)

- Pasting now includes formatting by default.
- Preserve foreground/background color when pasting.
- Preserve bold/italic/underline when pasting from Google Docs.
- When pasting with the shift key, bold/italics/underline is also stripped.
- Draw preview screen more quickly.
- Fix race condition in preview screen (thanks to Håkon).
- Use --exact with dvsvgm to prevent truncated subscript/superscript in LaTeX.
- Various small fixes.

Thanks to Arthur for contributing a number of fixes:

- Newly created cards could be given the wrong due number.
- Sticky fields were ignored when closing the add card window.
- Adding a note type forced a full sync.
- Remove shortcut keys from translations.
- Documentation changes for translators.
- Case not being preserved when changing a deck's parent.
- Hide default deck in other screens when empty.

### Changes in 2.1.16beta1 (2e7b7560)

This build updates the translation handling as part of the move to Crowdin.
Some languages were missing some plural forms in the past - in order to prevent
errors, the missing forms have been copied from the highest previous plural.

If you'd like to contribute to the translation effort, please see
https://apps.ankiweb.net/docs/manual.html#translating-anki

Also:

- Fix qtwebengineprocesses not being cleaned up when stats window closed.
- Allow smaller window when editing current card.
- Support pasting multiple URLs at once.
- Add ability to force software rendering on old Macs (thanks to Mike)
- A fix for case insensitive field name handling in find&replace (thanks to lovac42)
- Fix non-integer intervals being imported from Mnemosyne (thanks to Blauelf)
- Clear undo queue when changing scheduler (thanks to lovac42)
- Default to not closing add window (thanks to Aidan)
- Sort new cards separately when sorting by ease (thanks to Arthur)
- Fix a bug in the V2 scheduler.
- Properly handle backslashes in the replacement section of Find&Replace.

### Changes in 2.1.15beta1 (442df9d6)

This is a candidate for the next stable release, so if you encounter any
issues, please let me know as soon as you can.

- The V2 scheduler now fully randomizes review cards due on a given day.
- Fix add-ons errors on Windows when profile path was short.
- Fix flag changes in Browse screen not syncing.
- Cleanup recording wav file when recording canceled.
- Fix the window icon on Wayland (thanks to Wilco).
- Add a progress bar to media deletion.
- Other minor changes.
