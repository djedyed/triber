# Changelog (triber, public site)
Version lives in `<meta name="app-version">` in index.html and shows in the footer. Bump it with every release and add a line here.

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
