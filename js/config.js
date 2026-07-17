/*
 * config.js — the single edit surface for this new tab page.
 *
 * Everything you'd want to personalise lives here: your search engine,
 * your quick links, the clock format, and the greeting text.
 * Colours are NOT here — the page is grayscale and follows your browser's
 * light/dark theme automatically (see css/style.css).
 * Nothing is persisted — edit this file by hand and reload.
 */
window.NEWTAB_CONFIG = {
  // Use 24-hour time ("21:47"). Set to false for 12-hour ("9:47").
  clock24: true,

  // Show seconds on the clock ("21:47:03").
  showSeconds: false,

  // Where the search box sends plain queries. Change the url to switch engines,
  // e.g. DuckDuckGo: "https://duckduckgo.com/?q="
  searchEngine: {
    name: "Google",
    url: "https://www.google.com/search?q=",
  },

  // Your quick links. Add / remove / reorder freely.
  links: [
    { label: "github", url: "https://github.com/maskedsyntax" },
    { label: "x", url: "https://x.com/aftaab___" },
    { label: "threads", url: "https://www.threads.com/" },
    { label: "cloudflare", url: "https://dash.cloudflare.com/login?redirect_uri=%2Fc05668f629019633455449b2c0fb26a4%2Fhome%2Foverview" },
    { label: "vercel", url: "https://vercel.com/aftaab25s-projects" },
    { label: "analytics", url: "https://analytics.google.com/analytics/web/#/a392093031p533987410/reports/intelligenthome" },
    { label: "app store connect", url: "https://appstoreconnect.apple.com/apps" },
    { label: "play console", url: "https://play.google.com/console/u/2/developers/6545320536558877924/app-list" },
    { label: "my apps", url: "https://apps.apple.com/us/developer/aftaab-siddiqui/id1894832139" },
    { label: "ko-fi", url: "https://ko-fi.com/aftaabsiddiqui" },
    { label: "upwork", url: "https://www.upwork.com/nx/find-work/best-matches" },
    { label: "namecheap", url: "https://www.namecheap.com/" },
    { label: "twitch", url: "https://www.twitch.tv" },
    { label: "rapidapi", url: "https://rapidapi.com/hub" },
    { label: "netflix", url: "https://www.netflix.com" },
    { label: "prime video", url: "https://www.primevideo.com" },
    { label: "peerlist", url: "https://peerlist.io" },
    { label: "linkedin", url: "https://www.linkedin.com" },
    { label: "youtube", url: "https://www.youtube.com" },
    { label: "fiverr", url: "https://www.fiverr.com" },
    { label: "therapy", url: "https://meet.google.com/gyw-kpah-trp" },
    { label: "firebase", url: "https://console.firebase.google.com/u/2/" },
    { label: "reddit", url: "https://www.reddit.com" },
    { label: "product hunt", url: "https://www.producthunt.com" },
    { label: "indie hackers", url: "https://www.indiehackers.com" },
    { label: "hacker news", url: "https://news.ycombinator.com" },
    { label: "apple certificates", url: "https://developer.apple.com/account/resources/certificates/list" },
    { label: "supabase", url: "https://supabase.com/dashboard/org/kjqovfpgeaqnmncgqnwy" },
  ],

  // Time-of-day greeting. The last entry whose `from` hour is <= the current
  // hour wins. Lowercase to match the terminal aesthetic.
  greetings: [
    { from: 0, text: "good night" },
    { from: 5, text: "good morning" },
    { from: 12, text: "good afternoon" },
    { from: 17, text: "good evening" },
    { from: 21, text: "good night" },
  ],
};
