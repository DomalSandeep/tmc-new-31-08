# HomepageSelector

A self-contained, drop-in port of the original vanilla-JS "NCC Homepage
Selector" page. Copy the whole `HomepageSelector/` folder into another
React project — nothing inside it reaches outside the folder.

## Folder contents

```
HomepageSelector/
├── index.js                 barrel export
├── HomepageSelector.jsx      top-level container (the component you import)
├── HomepageSelector.css      all styles, scoped under .ncc-homepage-selector
├── useHomepageSelector.js    state + logic (slider values, palette, PDF check, zoom)
├── QuestionSlider.jsx        one reusable slider block (used x3)
├── PaletteGrid.jsx           palette picker cards
├── PreviewMock.jsx           live homepage preview panel
├── PdfPreview.jsx            PDF existence check + embed + fallback
└── constants.js              copy, labels, help text, palette data, PDF folder default
```

## Install into the other project

1. Copy the `HomepageSelector/` folder into that project's components directory.
2. Import and render it:

```jsx
import { HomepageSelector } from './components/HomepageSelector';

function Page() {
  return <HomepageSelector />;
}
```

No other setup is required — the stylesheet is imported by
`HomepageSelector.jsx` itself (`import './HomepageSelector.css'`), and every
class name is prefixed `ncc-` so it won't collide with the host project's
existing CSS.

## Customizing without editing internals

```jsx
<HomepageSelector
  title="Website Style Finder"
  pdfFolder="/assets/homepage-pdfs/"
  mockContent={{ ...myBrandContent }}
  checkPdfExists={(path) => myApi.fileExists(path)}
/>
```

- `title` — header text (default: "Home Page Selector").
- `pdfFolder` — base path/URL where the pre-generated PDFs live. Files are
  expected at `${pdfFolder}${size}-${photo}-${brightness}-${palette}.pdf`
  (81 combinations total).
- `mockContent` — overrides the live-preview copy (brand name, hero copy,
  stats, nav links, etc). Shape is in `constants.DEFAULT_MOCK_CONTENT`.
- `checkPdfExists(path)` — optional async override for how existence is
  verified. Defaults to a `HEAD` fetch against `pdfFolder`; pass this if the
  host project should check an API or bundled manifest instead.

## What changed vs. the original HTML/JS

- Behavior is unchanged: same 3 sliders → palette choice → live mock
  preview → PDF lookup/download → zoom → "change answers" flow.
- All DOM-querying/event-wiring vanilla JS was replaced by React state (the
  `useHomepageSelector` hook) and props/JSX.
- `:root` CSS variables were moved onto `.ncc-homepage-selector` so they
  don't leak into (or get overridden by) the host project's own tokens.
- Hardcoded "Tata Memorial Hospital" mock content was extracted into a
  `mockContent` prop with the original values as the default, so a future
  project can pass its own brand/copy in.
