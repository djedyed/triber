# Changelog (triber, public site)
Version lives in `<meta name="app-version">` in index.html and shows in the footer. Bump it with every release and add a line here.

## 1.7.0 — 2026-11-05
- Mix cover art: shows beside the title, as the record label on the Vinyl and Gramophone skins, on the CD, and as the lock-screen artwork.

## 1.6.0 — 2026-11-05
- Gramophone skin redrawn from a real brass-horn machine: scalloped brass bell, curved neck, nickel tone arm that tracks the record, mahogany cabinet with turned posts, crank.
- New Master control in Your sound: Normalize, Loud, Max (compressor, makeup gain, limiter and soft clip) with a gain-reduction readout.
- Tracklist rows size to their content and wrap long artist and title text instead of cutting it off.

## 1.5.2 — 2026-11-03
- Tracklist rows read “Track name by Artist name”, matching the now-playing line.

## 1.5.1 — 2026-11-03
- New purple and grey palette in both modes. Light: Orchid Purple #8A3FFC, Muted Amethyst #A76FE6, Charcoal #262626, Neutral Grey #6F6F6F, off-white #F4F4F6. Dark: Electric Violet #A78BFA, Neon Lavender #C084FC, Onyx #121214, Dark Slate #222226, Soft Silver #F3F4F6, Steel Grey #9CA3AF.
- Button text picks black or white automatically for contrast on any genre colour; genre-coloured text is darkened in light mode.

## 1.5.0 — 2026-11-03
- Light and Dark appearance that follows the system by default (Auto), with an Auto / Light / Dark switch in the header. On a Mac or iPhone set to switch at sunset, the site changes with it.
- Optional “Warm” night tint (a Night-Shift-style filter) for devices without Night Shift. It is off by default and does not replace Night Shift: the system's own warm shift still applies on top.
- Colour tokens, theme-color (browser bar), form controls and scrollbars follow the scheme; higher-contrast preference respected; EQ display now sharp on Retina screens.

## 1.4.2 — 2026-11-03
- Updated supabase-js from 2.45.4 to 2.118.0, loaded as the exact file with a subresource-integrity hash so a tampered CDN copy is refused.

## 1.4.1 — 2026-11-01
- Now-playing line reads “Track name by Artist name” (Mixcloud style), without BPM/key/label. Those stay in the tracklist.

## 1.4.0 — 2026-11-01
- Track labels: each track can carry BPM, musical key and record label. They show in the tracklist, the “now playing” line and the cassette label.
- Needs the 002_track_labels.sql migration on Supabase (the site still works without it, just without the extra labels).

## 1.3.0 — 2026-11-01
- Realistic animated skins to match the cassette: reel-to-reel (gold flanges that spin, tape packs that move across, VU needles that follow the sound, tape counter), wooden gramophone (spinning record and cog, tonearm that tracks inward), 8-track cartridge (spinning spoked reel, shrinking tape pack, program lights follow the track, handwritten label) and a gold-and-slate turntable (strobe-dot platter, tonearm tracks in, start LED).
- Skins use original artwork inspired by classic gear; no brand names.
- All motion stops under prefers-reduced-motion.

## 1.2.0 — 2026-11-01
- New realistic cassette skin: black shell, gold three-window hubs, tape packs that move from the left reel to the right as the mix plays, reels that spin faster as their pack shrinks, tape path across the head.
- Cassette label is handwritten and randomly shows the mix title or the current track title/artist (rerolled per mix and per track, with random paper colour and side A/B).
- Listener equaliser (EQ button): 3-band and 7-band, fader controls, presets, live response curve and spectrum, saved on the device. Needs audio hosting with CORS (Supabase Storage is fine); mixes on hosts without CORS play flat.

## 1.1.0 - 2026-11-01
- New logo intro video (Ed's Triber.mp4), sparkle mark removed.
- Intro now autosizes to any window (fits width and height, 16:9, safe-area aware).
- Version shown in the footer; assets and config.js carry ?v= so browsers pick up new files.

## 1.0.0 - 2026-11-01
- First release: player with 7 skins, tracklist now-playing, comments, likes, downloads, genres, demo mode.
