# TRIBER (public site)

Static site: stream and download DJ Eddie Ed's mixes. 7 player skins, tracklist "now playing", timestamped comments, likes, genres.
Pair repo: **triberabo** (private back office). Database: one Supabase project shared by both.

## Go live
1. Create a free Supabase project. SQL Editor -> paste and run `supabase/001_triber_schema.sql` (in the zip root).
2. Settings -> API: copy the Project URL and the **publishable / anon** key into `config.js`. (Never the service_role key.)
3. Publish this folder with GitHub Pages (Settings -> Pages -> main / root).
4. Leave `config.js` empty to run in **demo mode** (sample mixes, nothing saved).

## Notes
- `?intro=0` skips the logo stinger. `?mix=<id>` deep-links a mix. `?ref=name` tags where a visit came from.
- Free Supabase plan: 50 MB per file. For long mixes, paste an external audio URL in the back office (Cloudflare R2 etc.).
- "Stream only" hides the Download button; the audio URL itself is still public.
- The waveform is decorative (seeded per mix), not real audio analysis.
