# Wheat Microbiome Explorer — Demo

An interactive demonstration of how wheat leaf surface microbial communities can be explored alongside weather and historical climate references.

**[Open the live demo](https://graham-thomas.github.io/wheat-microbiome-demo/)** · **[Report an issue](https://github.com/graham-thomas/wheat-microbiome-demo/issues)**

## What this demo contains

**All biological values are synthetic.** Community proportions, prevalence, ASV records and differential-abundance examples are generated illustrations, not observations or fitted results from the research project. Real genus names support background links to Wikipedia. Seasonal profiles are designed to illustrate plausible patterns, including a spring peak in Zymoseptoria; they are not estimates of measured abundance.

**Weather and historical climate references are real public HadUK-Grid data.** Site names identify the weather locations. Their inclusion does not make the biological values real. Dates identify weather reference windows rather than evidence of sampling the synthetic communities. Map positions are rounded regional locators.

The Fones Lab at the University of Exeter investigates the bacteria and fungi living on wheat leaf surfaces and their relationships with the crop, its environment and Septoria tritici blotch (STB).

## Explore

- **Top 15 & prevalence:** illustrative genus composition and detection frequency.
- **Seasonal patterns:** winter, spring and summer community profiles alongside weather context.
- **Site comparisons:** illustrative differences among six locations in Southern Britain.
- **ASV drill-down:** synthetic records demonstrating how individual amplicon sequence variants can be explored.
- **Differential abundance:** illustrative effect sizes and sensitivity displays.
- **About:** project background, contact information and photograph credit.

Relative sequence-read abundance is a compositional measure, not a direct count of organisms. Side-by-side weather and community displays do not establish causation. Synthetic statistical examples must not be interpreted as research evidence or used for agronomic decisions.

## Run locally

This repository contains the prepared static website: HTML, CSS, JavaScript, JSON and images. No compilation is required.

From the repository directory, run:

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080/ . Use an HTTP server because the app loads JSON files through browser requests.

The published site is hosted by GitHub Pages. The Python server is needed only for local viewing.

## Repository contents

| Files | Purpose |
|---|---|
| `index.html`, `style.css` | Page structure and appearance |
| `app.js`, `microbes.js`, `seasons.js`, `da.js`, `climate.js`, `about.js`, `taxon-links.js` | Interface, views and external genus links |
| `data/` | Real public weather context and synthetic biological fixtures |
| `images/` | About-page photograph |
| `LICENSE`, `DATA_LICENSE.md`, `THIRD_PARTY_NOTICES.md` | Licence scope, data terms and credits |
| `CITATION.cff` | Machine-readable citation information |

This repository distributes the prepared demo. The synthetic-data generator and underlying research analysis pipelines are not included here. The biological fixtures were generated with random seed `20261102`.

## Data source and provenance

HadUK-Grid v1.3.2.ceda provides gridded UK climate observations at 1 km resolution. The demo includes extracted weather context and historical reference values for the displayed locations, including a 1991–2020 reference period. Derived summaries and plotted references should be distinguished from the original gridded archive.

Please cite the weather dataset separately:

Met Office; Hollis, D.; Carlisle, E.; Kendon, M.; Packman, S.; Doherty, A. (2026): *HadUK-Grid Gridded Climate Observations on a 1km grid over the UK, v1.3.2.ceda (1836–2025).* NERC EDS Centre for Environmental Data Analysis, 23 June 2026. https://doi.org/10.5285/789b3065d74a4c948ab05d33556c86d0

## Licences and attribution

| Component | Terms |
|---|---|
| App code | [MIT License](LICENSE) |
| Synthetic biological fixtures and original documentation | [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/), as scoped in [DATA_LICENSE.md](DATA_LICENSE.md) |
| HadUK-Grid weather, references and derived weather products | [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/); retain source attribution and dataset citation |
| Photograph | © Helen N. Fones; excluded from the code and data licences. Further reuse requires the photographer’s permission unless separately licensed. |

Contains public sector information licensed under the Open Government Licence v3.0. See [third-party notices](THIRD_PARTY_NOTICES.md) for the full attribution context. No endorsement by the Met Office, CEDA or other linked organisations is implied.

Use [CITATION.cff](CITATION.cff) to cite the demo. No archival DOI has been assigned to this demo; the DOI above identifies the HadUK-Grid source dataset.

## Contact and feedback

- **Research enquiries and field sampling:** Helen Fones (Eyles) — [H.N.Eyles@exeter.ac.uk](mailto:H.N.Eyles@exeter.ac.uk)
- **Tool maintenance and feedback:** Graham Thomas — [g.thomas2@exeter.ac.uk](mailto:g.thomas2@exeter.ac.uk)
- **Bugs and suggestions:** [GitHub Issues](https://github.com/graham-thomas/wheat-microbiome-demo/issues)
