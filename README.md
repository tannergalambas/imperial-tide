# Imperial Tide — React Fan Clone

A small React + Vite + Tailwind project that recreates the structure and feel of **imperialtide.com** (navigation, hero with "Listen Now", "Tide Camp" feature grid, and a mailing list form). This repo ships with placeholder assets and copy — replace with your own.

## Quickstart
```bash
npm i
npm run dev
```

## Customize
- **Branding:** swap `/public/assets/logo.svg` and `/public/assets/hero.jpg`.
- **Streaming links:** edit `src/components/ListenNow.jsx`.
- **Mailing list:** wire `src/components/MailingList.jsx` to your ESP (e.g., Mailchimp/Beehiiv). Right now it fakes success.
- **Merch:** Nav uses Bandcamp merch by default. Change the URL in `NavBar.jsx`.

## Notes
- This is a fan-made educational clone. Not affiliated with Imperial Tide or Mascot Records.
- Avoid copying exact copyrighted text/images from the official site.
