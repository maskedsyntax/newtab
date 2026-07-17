# newtab

A minimal, monospace new tab page for Firefox that follows your browser's
light/dark theme automatically. Replaces both the **new tab** page and the
**new window** homepage.

Vanilla HTML/CSS/JS — no build step, no dependencies, no data collection.

## What's in it

- Live clock, time-aware greeting, and date
- Search box (plain text → your search engine; a domain → straight there)
- Quick-link buttons
- Grayscale terminal-doc aesthetic; light/dark via `prefers-color-scheme`

## Configure

Everything you'd tweak lives in [`js/config.js`](js/config.js): search engine,
quick links, clock format (`clock24`, `showSeconds`), and greeting text.
No persistence — edit the file and reload.

## Preview the page (no install)

Open `index.html` directly in a browser. Handy URL params for testing:

- `?theme=dark` / `?theme=light` — force a theme (real tabs auto-follow the browser)
- `?hour=21` — preview the greeting at a given hour (0–23)

## Load it in Firefox

**Temporary (resets on restart, no signing needed):**

1. Go to `about:debugging#/runtime/this-firefox`
2. **Load Temporary Add-on…** → pick `manifest.json` in this folder
3. Open a new tab / new window

Or with [`web-ext`](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/):

```sh
npx web-ext run --firefox="/Applications/Firefox Developer Edition.app/Contents/MacOS/firefox"
```

**Permanent:** Firefox requires signed extensions. Either submit to
[AMO](https://addons.mozilla.org/developers/) (self-distribution signing is free),
or on Developer/Nightly set `xpinstall.signatures.required` to `false` in
`about:config` and install the built package.

## New windows

The new-window homepage is set via `chrome_settings_overrides.homepage`. The
first time you load the extension, Firefox shows a prompt asking to allow it to
change your homepage — **allow it** so new windows use this page too.

## Build a package

```sh
npx web-ext build --overwrite-dest
# -> web-ext-artifacts/new_tab-<version>.zip
```

## Other browsers

The page is dependency-free with only local assets, so it ports to Chromium
browsers (Chrome / Zen / Arc) with the same `chrome_url_overrides.newtab`.
Not yet packaged for them.
