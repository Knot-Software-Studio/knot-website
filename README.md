# knot-website

Website-Prototyp für Knot und unser erstes Produkt, den Erlebnisplaner.
Gebaut mit React + Vite.

## Struktur

```
index.html              Vite Entry-HTML
src/
  main.jsx               React-Einstiegspunkt
  App.jsx                Seiten-Layout
  index.css               Styles (globales CSS)
  components/
    Header.jsx            Navigation inkl. mobiles Menü
    Hero.jsx               Hero-Bereich mit App-Mockup
    About.jsx               Über-uns-Bereich
    Product.jsx              Erlebnisplaner-Features
    Contact.jsx               Kontaktkarten
    Footer.jsx                 Footer
public/assets/knot-logo.png    Logo (freigestellt aus dem Original-Bild)
vercel.json               Deploy-Konfiguration
```

## Lokal starten

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy auf Vercel

Framework Preset "Vite" wird automatisch erkannt (Build Command
`npm run build`, Output-Verzeichnis `dist`). Einfach das Repo in Vercel
importieren oder:

```bash
npx vercel
```

## Status

Prototyp. Inhalte (Texte, Screenshots, echte App-Store-Links) sind noch
provisorisch und werden ersetzt, sobald der Erlebnisplaner näher an der
Veröffentlichung ist.
