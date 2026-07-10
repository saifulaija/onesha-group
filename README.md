# Onesha Group

**Live site:** [onesha-group.vercel.app](https://onesha-group.vercel.app/)

Marketing website for Onesha Group, a Japan-to-Bangladesh export holding company operating across four verticals: **Motors**, **Tech**, **Textile**, and **Leather**.

## Tech stack

- **React** — component architecture
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — scroll-triggered animation (fade-up, staggered grids, card reveals)
- **Lucide React** — icon set
- Deployed on **Vercel**

## Design system

- **Colors**
  - Navy `#0B1B2B` / `#12203A` — primary dark surfaces and text
  - Gold `#B8874F` — accent, CTAs, highlights
  - Supporting tints: `#f2c879` (light gold), `#5A7BA6` (steel blue), `#9db8e0` (pale blue)
- **Typography**
  - `Fraunces` (serif) — headings
  - Default sans — body copy
  - `JetBrains Mono` — eyebrows, tags, labels, mono data
- **Motion pattern** — consistent `fadeUp` / staggered-grid variants reused across sections for scroll-in reveals

## Sections / components

| Component | Purpose |
|---|---|
| `Hero` | Landing slider / intro |
| `About` | Company overview |
| `Market` | Market thesis — why textiles, why now (comparison cards, forecast chart, segment donut chart, route map) |
| `Global Perspective` | Cross-border positioning |
| `Thesis` | Strategic argument |
| `Services` | Service / vertical breakdown |
| `Cta` | Closing call-to-action + site footer (shared across pages) |

## Notes for contributors

- Anchor links inside `Cta`/footer (e.g. `#thesis`, `#roadmap`) point to sections on the **home page**. When this component is reused on other pages, links are routed as `/#section-id` so navigation works from anywhere on the site, not just the homepage.
- Keep new sections consistent with the existing navy/gold system and the shared `fadeUp` motion variant for visual continuity.

## Status

Working draft — actively under design and content iteration (July 2026).