/*
 * background.js — make NEW WINDOWS show our page too.
 *
 * chrome_url_overrides.newtab covers new *tabs*. New *windows* open the
 * homepage (about:home), which extensions can't override reliably:
 * pointing chrome_settings_overrides.homepage at a moz-extension:// page
 * renders blank in new windows (Firefox bug 1490260).
 *
 * Instead we watch for a newly-created normal window and, if its initial
 * tab is the default home/new-tab/blank page, navigate it to our page.
 * This is a plain navigation, so it isn't affected by that bug.
 */
var NEWTAB_URL = chrome.runtime.getURL("index.html");

// Only replace the browser's own placeholder pages — never a real URL the
// user intentionally opened (e.g. "open link in new window").
var REPLACEABLE = ["about:home", "about:newtab", "about:blank", ""];

chrome.windows.onCreated.addListener(function (win) {
  if (win.type && win.type !== "normal") return;
  chrome.tabs.query({ windowId: win.id }, function (tabs) {
    (tabs || []).forEach(function (tab) {
      if (REPLACEABLE.indexOf(tab.url) !== -1) {
        chrome.tabs.update(tab.id, { url: NEWTAB_URL });
      }
    });
  });
});
