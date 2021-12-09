# Intro & Downloads

## Downgrading

Beta versions may sometimes change your collection in a way that is not
compatible with older Anki versions. If you wish to switch back to an older
version, please go to the `File>Switch Profile` menu item, and click on
`Downgrade & Quit` in the current version first.

## Problems

If you run into any issues, please let us know on the [beta testing
section](https://forums.ankiweb.net/c/beta-testing/) of the user forums.

## Packaged Builds

You can get the [latest packaged beta](https://apps.ankiweb.net/downloads/beta/?C=N&O=D)
from AnkiWeb.

## Via PyPI/pip

If you have a local Python 3.9 installation, you can also install beta
builds directly with pip.

Anki will be installed in a local Python folder called 'pyenv'.

<details>
<summary>Mac/Linux</summary>

```
$ python3.9 -m venv pyenv
$ pyenv/bin/pip install --upgrade pip
$ pyenv/bin/pip install --upgrade --pre aqt[qt6]
$ pyenv/bin/anki
```

Repeat the last step if you wish to start the same Anki version again.
Repeat the last two steps to update to the latest beta and start it.

Remove `[qt6]` if you wish to use a compatible system-installed PyQt.

</details>

<details>
<summary>Windows</summary>

```
c:\> python -m venv \pyenv
c:\> pyenv\scripts\pip install --upgrade pip
c:\> pyenv\scripts\pip install --upgrade --pre aqt[qt6]
c:\> pyenv\scripts\anki
```

Repeat the last step if you wish to start the same Anki version again.
Repeat the last two steps to update to the latest beta and start it.

</details>
