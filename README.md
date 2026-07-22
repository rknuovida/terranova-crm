# Terranova Sales CRM — Phase 1

Static PWA shell for the Terranova Green Energy internal sales CRM.
All data, authentication and state-level access control live in Supabase
(Postgres + Auth + Row-Level Security). This repo contains no secrets —
the key embedded in `index.html` is the public anon key; every data rule
is enforced server-side by RLS.
