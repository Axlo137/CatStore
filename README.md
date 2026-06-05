# CatStore

En React-baserad kattbutik byggd med Vite. Appen hämtar kattdata asynkront från The Cat API, visar kattkort med sökning och pagination, har detaljsidor för varje katt och en kundvagn som hanteras med Context API.

## Funktioner

- Asynkron hämtning av kattdata från Web API
- Sökning och pagination i katalogen
- Flip-kort med knapp till detaljsida
- Detaljsida med ras, ursprung och bild
- Kundvagn med Context API och live uppdatering i menyn
- Responsiv layout för mobil, surfplatta och desktop

## Kom igång

Krav: Node.js och npm.

1. Installera beroenden:

```bash
npm install
```

2. Starta utvecklingsläge:

```bash
npm run dev
```

3. Öppna adressen som visas i terminalen (vanligtvis `http://localhost:5173`).

## Bygg projektet

Skapa en produktionsbuild:

```bash
npm run build
```

Färdiga filer hamnar i `dist/`.

## Förhandsgranska build lokalt

```bash
npm run preview
```
