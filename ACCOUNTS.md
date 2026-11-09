# TRIBER listener accounts (v1.11.0)

Optional. With nothing enabled in `config.js` the site works exactly as before (no accounts, no Sign in button).
Each method appears only when it is listed in `config.js` under `auth` AND switched on in Supabase.

## One-time setup
1. Supabase SQL editor: paste the CONTENTS of `supabase/003_listeners.sql` (profiles, delete-my-account).
2. Authentication > Sign In / Providers: turn **Allow new users to sign up** ON. This is safe: admin rights come only from the `admins` table, and listeners see nothing in the back office (tested: 83 RLS assertions).
3. Authentication > URL Configuration: add `https://djedyed.github.io/triber/` to Redirect URLs (keep the back-office URL there too).
4. Authentication > Multi-Factor: TOTP (authenticator app) is on by default and free.

## Methods (edit `auth` in config.js)
| Method | config | Supabase side | Cost |
|---|---|---|---|
| Google, Apple, Facebook, Discord, Spotify, Twitch, X | `providers: ["google", ...]` (X is `twitter`) | enable the provider with its app id/secret | free; Apple needs a paid developer account |
| Phone code by WhatsApp | `phone: true, phoneChannel: "whatsapp"` | Providers > Phone, Twilio with the WhatsApp channel | paid per message |
| Phone code, your own (free) |  `phone: true, phoneChannel: "sms"` | Hooks > Send SMS > HTTPS pointing at Talking Drum (see talkingdrum/README.md) | WhatsApp free (unofficial), SMS = your SIM plan |
| Phone code by SMS | `phone: true, phoneChannel: "sms"` | Providers > Phone, Twilio/MessageBird/Vonage | paid per message |
| Email link | `email: true` | Email provider (built-in mail is rate-limited; use your own SMTP for volume) | free |
| Authenticator app (MFA) | `mfa: true` | on by default | free |

Telegram and WhatsApp *join* buttons are separate (they live under `social`). Telegram login is not a Supabase provider; it would need a bot plus a small Edge Function.

## Listeners
Account button opens: display name, two-step sign-in (QR code, then a 6-digit code), sign out, delete my account. After sign-in with MFA on, a code is asked for each new session.

## Passkeys for listeners (v1.14.0)
Flow: a new listener signs in once (email link, password or a provider), is offered "Add a passkey", and from then on taps "Sign in with a passkey" (fingerprint, face or device PIN). Supabase cannot create an account from a passkey alone: a passkey can only be added while signed in.
Supabase > Authentication > Passkeys > enable. **The Relying Party ID is one value for the whole project and must be the site's bare domain.** The public site lives on `djedyed.github.io` and the back office on `triberabo.pages.dev`; these share no parent domain, so one project can serve passkeys for only one of them. Recommended: RP ID `djedyed.github.io` with origin `https://djedyed.github.io` for listeners, and keep the back office on password + Google/Microsoft. To have both, put both on one custom domain (e.g. `triber.example`, `www.` for listeners and `abo.` for the back office) and use that as the RP ID.
Passkeys are tied to the RP ID: changing it later orphans every registered passkey. Passkeys are a Supabase beta.

## If Google (or any sign-in or email link) sends you to the back office
Supabase only returns people to a page listed under Authentication > URL Configuration > **Redirect URLs**. If the page the sign-in started from is not on that list, Supabase quietly uses the **Site URL** instead. With the Site URL set to the back office, a listener who signs in on the public site lands on `triberabo.pages.dev` (and an admin sees the admin).
Fix in Supabase (Authentication > URL Configuration):
1. **Site URL**: `https://djedyed.github.io/triber/` (the public site is the default for everyone).
2. **Redirect URLs**, add all of: `https://djedyed.github.io/triber/`, `https://djedyed.github.io/triber/**`, `https://triberabo.pages.dev/`, `https://triberabo.pages.dev/**`, `http://localhost:8080/**`.
The back office always asks to come back to itself, so it keeps working. Also confirm the Google provider's Authorized redirect URI in Google Cloud is `https://qprvzwjmedxvtdyljhut.supabase.co/auth/v1/callback` (that one URL serves both sites).
