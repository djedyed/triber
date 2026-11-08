// Triber public site - connection settings.
// Leave both values empty to run in DEMO MODE (sample mixes, nothing is saved).
// Paste your Supabase project URL and its *publishable / anon* key to go live.
// That key is meant to be public: Row Level Security, not secrecy, protects the data.
window.TRIBER_CONFIG = {
  supabaseUrl: "https://qprvzwjmedxvtdyljhut.supabase.co",
  supabaseKey: "sb_publishable_-oEYpE1QcP8Xw5A4BZg6SA_5l3gpgS7",   // e.g. "sb_publishable_..." or the legacy anon JWT
  // Welcome screen links (https only). Empty = WhatsApp/Telegram/Facebook/X/Threads/Reddit/Bluesky open a "share TRIBER" window; others show "Link coming soon".
  social: { whatsapp: "", telegram: "", instagram: "", tiktok: "", youtube: "", facebook: "", x: "", threads: "", snapchat: "", discord: "", spotify: "", soundcloud: "", mixcloud: "", applemusic: "", bandcamp: "", twitch: "", bluesky: "", reddit: "", pinterest: "", signal: "" }
};
