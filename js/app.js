/*
 * app.js — clock, greeting, date, search, and quick links.
 * Vanilla, no dependencies. Reads all data from window.NEWTAB_CONFIG.
 *
 * Colour theme (light/dark) is handled entirely in CSS via
 * prefers-color-scheme, so it follows the browser automatically. A
 * ?theme=dark|light query param is supported for previewing only.
 */
(function () {
  "use strict";

  var cfg = window.NEWTAB_CONFIG;

  var els = {
    root: document.documentElement,
    page: document.querySelector(".page"),
    digits: document.getElementById("clock-digits"),
    greeting: document.getElementById("greeting"),
    date: document.getElementById("date"),
    topDate: document.getElementById("topbar-date"),
    form: document.getElementById("search"),
    input: document.getElementById("search-input"),
    links: document.getElementById("links"),
  };

  // --- Preview hooks (URL params) -------------------------------------------

  var params = new URLSearchParams(window.location.search);

  function forcedHour() {
    if (!params.has("hour")) return null;
    var h = parseInt(params.get("hour"), 10);
    return h >= 0 && h <= 23 ? h : null;
  }

  // ?theme=dark|light forces a theme for previewing; otherwise the browser's
  // prefers-color-scheme decides (pure CSS, no JS).
  function applyPreviewTheme() {
    var t = params.get("theme");
    if (t === "dark" || t === "light") {
      els.root.setAttribute("data-theme", t);
    }
  }

  // --- Greeting -------------------------------------------------------------

  function resolveGreeting(hour) {
    var chosen = cfg.greetings[0];
    for (var i = 0; i < cfg.greetings.length; i++) {
      if (cfg.greetings[i].from <= hour) chosen = cfg.greetings[i];
    }
    return chosen.text;
  }

  // --- Clock + date ---------------------------------------------------------

  function pad(n) {
    return n < 10 ? "0" + n : "" + n;
  }

  function colon() {
    var span = document.createElement("span");
    span.className = "clock__colon";
    span.textContent = ":";
    return span;
  }

  function renderClock(now) {
    var h = now.getHours();
    var hh;
    if (cfg.clock24) {
      hh = pad(h);
    } else {
      hh = h % 12;
      if (hh === 0) hh = 12;
      hh = "" + hh;
    }
    // Build with DOM nodes (no innerHTML) so the colon can be styled separately.
    var d = els.digits;
    d.textContent = hh; // resets children, keeps the hours as a text node
    d.appendChild(colon());
    d.appendChild(document.createTextNode(pad(now.getMinutes())));
    if (cfg.showSeconds) {
      d.appendChild(colon());
      d.appendChild(document.createTextNode(pad(now.getSeconds())));
    }
  }

  function renderDate(now) {
    var opts = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
    var parts = new Intl.DateTimeFormat(undefined, opts).formatToParts(now);
    var weekday = "";
    var rest = [];
    parts.forEach(function (p) {
      if (p.type === "weekday") weekday = p.value;
      else if (p.type !== "literal") rest.push(p.value);
    });
    // e.g. "thursday · 16 july 2026"
    els.date.textContent = (weekday + " · " + rest.join(" ")).toLowerCase();
  }

  function tick() {
    var now = new Date();
    var forced = forcedHour();
    if (forced !== null) now.setHours(forced);
    renderClock(now);
    renderDate(now);
    els.greeting.textContent = resolveGreeting(now.getHours());
  }

  // --- Search ---------------------------------------------------------------

  // Heuristic: treat input as a URL if it has a scheme, or looks like a
  // bare domain / has no spaces and contains a dot with a TLD-ish tail.
  function looksLikeUrl(text) {
    if (/^[a-z]+:\/\//i.test(text)) return true;
    if (/\s/.test(text)) return false;
    return /^[^\s]+\.[a-z]{2,}(\/[^\s]*)?$/i.test(text);
  }

  function submitSearch(e) {
    e.preventDefault();
    var text = els.input.value.trim();
    if (!text) return;
    if (looksLikeUrl(text)) {
      window.location.href = /^[a-z]+:\/\//i.test(text) ? text : "https://" + text;
    } else {
      window.location.href = cfg.searchEngine.url + encodeURIComponent(text);
    }
  }

  // --- Quick links ----------------------------------------------------------

  function renderLinks() {
    var frag = document.createDocumentFragment();
    cfg.links.forEach(function (link) {
      var a = document.createElement("a");
      a.className = "chip";
      a.href = link.url;
      a.textContent = link.label;
      frag.appendChild(a);
    });
    els.links.appendChild(frag);
  }

  // --- Boot -----------------------------------------------------------------

  function init() {
    applyPreviewTheme();
    renderLinks();
    tick();
    els.page.hidden = false;
    els.input.focus();
    els.form.addEventListener("submit", submitSearch);

    // Re-render every second so the minute (or seconds) flips promptly.
    setInterval(tick, 1000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
