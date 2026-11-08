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
| Phone code by SMS | `phone: true, phoneChannel: "sms"` | Providers > Phone, Twilio/MessageBird/Vonage | paid per message |
| Email link | `email: true` | Email provider (built-in mail is rate-limited; use your own SMTP for volume) | free |
| Authenticator app (MFA) | `mfa: true` | on by default | free |

Telegram and WhatsApp *join* buttons are separate (they live under `social`). Telegram login is not a Supabase provider; it would need a bot plus a small Edge Function.

## Listeners
Account button opens: display name, two-step sign-in (QR code, then a 6-digit code), sign out, delete my account. After sign-in with MFA on, a code is asked for each new session.
