// Triber public site - connection settings.
// Leave both values empty to run in DEMO MODE (sample mixes, nothing is saved).
// Paste your Supabase project URL and its *publishable / anon* key to go live.
// That key is meant to be public: Row Level Security, not secrecy, protects the data.
window.TRIBER_CONFIG = {
  supabaseUrl: "https://qprvzwjmedxvtdyljhut.supabase.co",
  supabaseKey: "sb_publishable_-oEYpE1QcP8Xw5A4BZg6SA_5l3gpgS7",   // e.g. "sb_publishable_..." or the legacy anon JWT
  // Welcome screen links (https only). Empty = WhatsApp/Telegram/Facebook/X/Threads/Reddit/Bluesky open a "share TRIBER" window; others show "Link coming soon".
  // Listener sign-in. A method appears only when listed/enabled here AND switched on in Supabase (Auth > Providers). See ACCOUNTS.md
  auth: { providers: [], password: false, passkeys: false, phone: false, phoneChannel: "sms", email: false, mfa: true },   // ALL OFF for now: no listener login. To roll out later set e.g. providers: ["google"], password: true, then re-test (see ACCOUNTS.md)
  showWelcome: true,   // false = skip the welcome card entirely
  social: { whatsapp: "", telegram: "", instagram: "", tiktok: "", youtube: "", facebook: "", x: "", threads: "", snapchat: "", discord: "", spotify: "", soundcloud: "", mixcloud: "", applemusic: "", bandcamp: "", twitch: "", bluesky: "", reddit: "", pinterest: "", signal: "", messenger: "", email: "" }
};
