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

  // Your quick links, grouped into labelled sections. Add / remove / reorder
  // groups and links freely. `icon` is a file in assets/icons/brands/<icon>.svg
  // (Simple Icons slug). Use "_generic" if there's no matching logo.
  linkGroups: [
    {
      title: "code",
      links: [
        { label: "github", url: "https://github.com/maskedsyntax", icon: "github" },
        { label: "vercel", url: "https://vercel.com/aftaab25s-projects", icon: "vercel" },
        { label: "cloudflare", url: "https://dash.cloudflare.com/login?redirect_uri=%2Fc05668f629019633455449b2c0fb26a4%2Fhome%2Foverview", icon: "cloudflare" },
        { label: "supabase", url: "https://supabase.com/dashboard/org/kjqovfpgeaqnmncgqnwy", icon: "supabase" },
        { label: "firebase", url: "https://console.firebase.google.com/u/2/", icon: "firebase" },
        { label: "rapidapi", url: "https://rapidapi.com/hub", icon: "_generic" },
        { label: "namecheap", url: "https://www.namecheap.com/", icon: "namecheap" },
      ],
    },
    {
      title: "ship",
      links: [
        { label: "app store", url: "https://appstoreconnect.apple.com/apps", icon: "appstore" },
        { label: "play console", url: "https://play.google.com/console/u/2/developers/6545320536558877924/app-list", icon: "googleplay" },
        { label: "certificates", url: "https://developer.apple.com/account/resources/certificates/list", icon: "apple" },
        { label: "my apps", url: "https://apps.apple.com/us/developer/aftaab-siddiqui/id1894832139", icon: "apple" },
      ],
    },
    {
      title: "work",
      links: [
        { label: "upwork", url: "https://www.upwork.com/nx/find-work/best-matches", icon: "upwork" },
        { label: "fiverr", url: "https://www.fiverr.com", icon: "fiverr" },
        { label: "ko-fi", url: "https://ko-fi.com/aftaabsiddiqui", icon: "kofi" },
        { label: "analytics", url: "https://analytics.google.com/analytics/web/#/a392093031p533987410/reports/intelligenthome", icon: "googleanalytics" },
      ],
    },
    {
      title: "social",
      links: [
        { label: "x", url: "https://x.com/aftaab___", icon: "x" },
        { label: "threads", url: "https://www.threads.com/", icon: "threads" },
        { label: "linkedin", url: "https://www.linkedin.com", icon: "linkedin" },
        { label: "peerlist", url: "https://peerlist.io", icon: "peerlist" },
        { label: "reddit", url: "https://www.reddit.com", icon: "reddit" },
      ],
    },
    {
      title: "read",
      links: [
        { label: "hacker news", url: "https://news.ycombinator.com", icon: "ycombinator" },
        { label: "indie hackers", url: "https://www.indiehackers.com", icon: "indiehackers" },
        { label: "product hunt", url: "https://www.producthunt.com", icon: "producthunt" },
      ],
    },
    {
      title: "watch",
      links: [
        { label: "youtube", url: "https://www.youtube.com", icon: "youtube" },
        { label: "twitch", url: "https://www.twitch.tv", icon: "twitch" },
        { label: "netflix", url: "https://www.netflix.com", icon: "netflix" },
        { label: "prime video", url: "https://www.primevideo.com", icon: "primevideo" },
        { label: "therapy", url: "https://meet.google.com/gyw-kpah-trp", icon: "googlemeet" },
      ],
    },
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
