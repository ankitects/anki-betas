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

You can get the [latest packaged beta](https://apps.ankiweb.net/downloads/beta/)
from AnkiWeb.

## Via PyPI/pip

If you have a local Python 3.8 or 3.9 installation, you can also install beta
builds directly with pip. Use something like the following, ensuring `2.1.99b1`
matches the version you want. Note that 'beta' should be 'b' when using pip, eg
2.1.99beta1 -> 2.1.99b1.

Anki will be installed in a local Python folder called 'pyenv'.

<details>
<summary>Mac/Linux</summary>

```
$ python3.8 -m venv pyenv
$ . pyenv/bin/activate
(pyenv) $ pip install --upgrade pip
(pyenv) $ pip install --upgrade aqt==2.1.99b2
(pyenv) $ pyenv/bin/anki
```

Repeat the last step if you wish to start the same Anki version again.

</details>

<details>
<summary>Windows</summary>

```
c:\> python -m venv \pyenv
c:\> \pyenv\scripts\activate.bat
c:\> pip install --upgrade pip
c:\> pip install aqt==2.1.99b2
c:\> pyenv\scripts\anki
```

Repeat the last step if you wish to start the same Anki version again.

</details>
