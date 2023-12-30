# Intro & Downloads

## Downgrading

Beta versions may sometimes change your collection in a way that is not
compatible with older Anki versions. If you wish to switch back to an older
version, please go to the `File>Switch Profile` menu item, and click on
`Downgrade & Quit` in the current version first.

## Problems

If you run into any issues, please let us know on the
[beta testing section](https://forums.ankiweb.net/c/beta-testing/) of the user
forums.

## Packaged Builds

Betas are posted on <https://github.com/ankitects/anki/releases>.

## Via PyPI/pip

If you have a local Python 3.9+ installation, you can also install beta builds
directly with pip.

Anki will be installed in a local Python folder called 'pyenv'.

<details>
<summary>Mac (both Intel/Apple), and Linux (x86_64)</summary>

```
$ python3 -m venv pyenv
$ pyenv/bin/pip install --upgrade pip
$ pyenv/bin/pip install --upgrade --pre 'aqt[qt6]'
$ pyenv/bin/anki
```

- Repeat the last step if you wish to start the same Anki version again.
- Repeat the last two steps to update to the latest beta and start it.

</details>

<details>
<summary>Linux (ARM)</summary>

As there are no PyQt packages on PyPI for Linux/ARM, you will need to have your
distro's PyQt5 packages already installed. Eg on Debian 11:

```
$ sudo apt install python3-pyqt5.{qtwebengine,qtmultimedia}
```

Or on Fedora:

```
$ sudo dnf install python3-qt5-webengine
```

Then run the following:

```
$ python3 -m venv --system-site-packages pyenv
$ pyenv/bin/pip install --upgrade pip
$ pyenv/bin/pip install --upgrade --pre aqt
$ pyenv/bin/anki
```

- Repeat the last step if you wish to start the same Anki version again.
- Repeat the last two steps to update to the latest beta and start it.

</details>

<details>
<summary>Windows</summary>

```
c:\> python -m venv \pyenv
c:\> pyenv\scripts\pip install --upgrade pip
c:\> pyenv\scripts\pip install --upgrade --pre aqt[qt6]
c:\> pyenv\scripts\anki
```

Repeat the last step if you wish to start the same Anki version again. Repeat
the last two steps to update to the latest beta and start it.

</details>
