# TRIBER (public site)

Static site: stream and download DJ Eddie Ed's mixes. 7 player skins, tracklist "now playing", timestamped comments, likes, genres.
Pair repo: **triberabo** (private back office). Database: one Supabase project shared by both.

## Go live
1. Create a free Supabase project. SQL Editor -> paste and run `supabase/001_triber_schema.sql` (in the zip root).
2. Settings -> API: copy the Project URL and the **publishable / anon** key into `config.js`. (Never the service_role key.)
3. Publish this folder with GitHub Pages (Settings -> Pages -> main / root).
4. Leave `config.js` empty to run in **demo mode** (sample mixes, nothing saved).

## Notes
- `?intro=0` skips the logo intro (`assets/triber-intro-16x9.mp4` for landscape, `assets/triber-intro-9x16.mp4` for portrait). `?mix=<id>` deep-links a mix. `?ref=name` tags where a visit came from.
- Free Supabase plan: 50 MB per file. For long mixes, paste an external audio URL in the back office (Cloudflare R2 etc.).
- "Stream only" hides the Download button; the audio URL itself is still public.
- The waveform is decorative (seeded per mix), not real audio analysis.


## LED displays and 12-band EQ (v1.9.0)
The Now playing window shows a multicolor LED spectrum (log-spaced columns, hue by frequency: red bass to violet highs). The EQ has 3, 7 and 12 bands; each 12-band fader has its own color and live LED meters. Both read the analyser, which needs a CORS-enabled audio host (Supabase Storage is). If the host blocks it, the mix plays flat and the LEDs stay dim. The LED pill in the Now playing window turns the display (and the always-on audio routing) off.
