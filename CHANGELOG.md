# Changelog (triber, public site)
Version lives in `<meta name="app-version">` in index.html and shows in the footer. Bump it with every release and add a line here.

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
