# lynnekiesling.com Redesign — Spec for Claude Code

## Goal

Replace the current WordPress/Elementor site (lynnekiesling.com) with a streamlined static site hosted on GitHub Pages under a new `lynnekiesling` GitHub organization, with a serious, restrained design (see Design direction; Mar Reguant's page https://mreguant.github.io/ is only a loose content reference). Simpler to maintain, no CMS/plugins, content lives in version control.

## Decisions (confirmed by Lynne)

- **REVISION (supersedes earlier repo-name decision): create a free GitHub organization named `lynnekiesling`** (Lynne as owner) and put the site in `lynnekiesling/lynnekiesling.github.io`. The repo name `lynnekiesling.github.io` only works as a root site if the owning account/org is named `lynnekiesling`; under the personal `lkkinetic` account it would not. `lkkinetic` stays untouched for research-code repos.
- **Keep custom domain** lynnekiesling.com, pointed at the org's user site via a `CNAME` file (see DNS section below). Once that is set, any other repo in the `lynnekiesling` org with Pages enabled (and no custom domain of its own) is served automatically at `lynnekiesling.com/<repo-name>` — this is how future projects get hosted, with no DNS work. Projects that need something else get a subdomain (e.g., `lab.lynnekiesling.com`) pointed at another host via a DNS record.
- **Hosting model: static only on GitHub Pages.** Lynne's anticipated projects are mostly static pages; at most one might someday need a database. If that happens, point a subdomain at a managed host (Cloudflare, Vercel, Render, or similar) rather than running a self-managed server. Do not build for that now. Free GitHub repos are public: nothing confidential goes in the org's repos.
- **Design direction (replaces "model on Mar Reguant's page"):** serious, restrained, typographic scholarly portfolio — see Design section below. Mar's page remains only a loose reference for content sections.
- **Before DNS cutover:** keep the WordPress host running until the new site is verified at its github.io URL, and check lynnekiesling.com's DNS for MX (email) or other records that must be preserved before touching anything.
- **No mailing-list signup** — drop the WPForms embed entirely, no replacement.
- **Site structure: a few separate pages** (Home/Bio, Publications, Leadership & Convening, Teaching/Advisory/Public Policy, CV), not a single scrolling page like Mar Reguant's.
- **DOE Electricity Advisory Committee role ended in 2025** — list as past, not current.
- Publications, bio, and current appointments should be refreshed from Lynne's **updated CV dated 2026-10-13 (`20261013 Kiesling CV.docx`), which supersedes the May 2026 CV** (`Kiesling_CV_20260512.docx`). The extracted content below was taken from the May version and then patched with the October changes (extended grant end dates, DOI for "Quarantining Electric Utilities," new Energy Journal special-issue editor role). Claude Code should treat the October .docx as authoritative and re-check the extracted lists against it. Use the October CV also as the source for the downloadable CV PDF.
- **Working Papers/Current Projects** gets its own standalone section (there's active work in progress, not just a "recent work" afterthought).
- **Teaching / Advisory / Public Policy** is a standalone page/section, not folded into About.
- **Footer** should link to Knowledge Problem at **knowledgeproblem.com** (Lynne has already CNAMEd knowledgeproblem.com to the Substack, so use that address everywhere instead of knowledgeproblem.substack.com).
- **Contact/links** should list both work emails: lynne@knowledgeproblem.com and lynne.kiesling@northwestern.edu.
- **Future task (not part of this build):** migrate the History of Economic Thought video channel (currently on Vimeo) over to GitHub/this site too — flag as a follow-on, don't build it now.

## Current site audit (lynnekiesling.com)

Built on WordPress + Elementor. Nav: Home / About / Research / Public Speaking.

Content found:
- **Bio** (About page): current roles (Director, Institute for Regulatory Law & Economics, Northwestern; Adjunct Professor, MS Energy & Sustainability, Northwestern; Research Professor, CU Denver; External Faculty, Santa Fe Institute; Nonresident Senior Fellow, AEI), advisory roles (DOE Electricity Advisory Committee, NIST Smart Grid Advisory Committee — past, GridWise Architecture Council — emerita), education (B.S. Miami University Ohio, Ph.D. Northwestern), link to CV PDF.
- **Research**: research description (regulation, market design, transactive energy, smart grid economics), a "Recent Work" list (5 items, last updated ~2023), and a long **Publications** list — books (4) plus ~30 articles/chapters/encyclopedia entries, most with links to SSRN/DOI/journal pages.
- **Public Speaking**: topic list, link to YouTube channel, and a long **Selected Presentations** list split into "conference presentations" (~25 items) and "invited talks and speeches" (~35 items), several with video links.
- **Homepage**: hero/carousel copy, "Recent Posts" pointing to stale placeholder posts (Hello World, "Awesome Post 3") — these are cruft, not real content, and should be dropped.
- Footer/global: email (lynne@knowledgeproblem.com), social links (Facebook, Twitter/X @knowledgeprob, LinkedIn, YouTube), a Mailchimp/WPForms email signup embed, copyright line dated 2022.
- Site is stale in places (recent work/posts from 2022-23) and carries WordPress overhead (forms plugin, Elementor markup) not needed for a static academic page.

## Reference model (Mar Reguant, mreguant.github.io)

- Built on Jekyll's Hyde theme, hosted at `<username>.github.io`, single repo.
- Structure: name + title/affiliation line at top, a row of link buttons (CV, Google Scholar, affiliation pages), then content organized as **numbered lists** grouped into sections: "Working papers and work in progress," "Publications," "Policy work and others."
- No images, no carousel, no CMS — just markdown rendered by Jekyll. Very low-maintenance: adding a paper is a one-line edit.

## lkkinetic GitHub account

- 4 existing repos, all research-code repos (Stata, Jupyter notebooks) — no existing Pages site or `lkkinetic.github.io` repo yet. This will be a new repo.

## Proposed structure for the new site

Adapt Mar's pattern but keep Lynne's broader scope (bio + teaching/advisory + speaking, not just publications). Proposed single-page-with-sections or few-page structure:

1. **Header**: name, one-line title (e.g., "Economist — regulation, market design, and digitization of the electricity industry"), affiliation links (Northwestern IRLE, AEI, Santa Fe Institute, CU Denver), links to CV (PDF), Google Scholar/SSRN, LinkedIn, YouTube, and **both** work emails (lynne@knowledgeproblem.com and lynne.kiesling@northwestern.edu).
2. **About/Bio**: short paragraph version of current About content — condensed, current roles only (drop dated advisory roles unless still active — flag for Lynne to confirm which are current in 2026).
3. **Publications**: numbered list, split into "Books" and "Articles & Chapters," each entry linked out (mirrors current Research page content, cleaned up).
4. **Working Papers / Current Projects** (standalone section — there's active work in progress: see CV's working papers/ongoing research and current grants).
5. **Leadership & Convening** (standalone, replaces the old Talks/Public Speaking page): workshops directed + professional leadership roles from the CV, plus links to the YouTube channel and Knowledge Problem substack.
6. **Teaching / Advisory / Public Policy** (standalone section/page): teaching list, policy research/reports, past advisory roles (DOE, NIST, GridWise), and the workshop for utility commissioners. Note: the History of Economic Thought video channel will eventually move here too, but that's a separate follow-on task, not part of this build.
7. **Footer**: both work emails + social links (LinkedIn, YouTube, X/Twitter — confirm Facebook still wanted), plus a link to Knowledge Problem (knowledgeproblem.com). Drop the embedded WPForms mailing-list signup entirely — no replacement.

Content to explicitly drop: WordPress placeholder blog posts, Elementor carousel/hero imagery, embedded WPForms signup (unless Lynne wants a replacement service).

## Content extracted from CV (Kiesling_CV_20260512.docx) — for Claude Code to use directly

**Contact/links:** lynne@knowledgeproblem.com · lynne.kiesling@northwestern.edu · lynnekiesling.com · ORCID 0000-0002-6854-2653 · knowledgeproblem.com (Substack) · SSRN: ssrn.com/author=240214 · Google Scholar: scholar.google.com/citations?user=3QY5AmsAAAAJ&hl=en

**Updated profile paragraph (use to replace current About copy):**
"Lynne Kiesling is an economist specializing in electricity market design, regulatory institutions, and the economics of technological change in network industries. Drawing on the economics of knowledge and information, institutional and transaction cost analysis, mechanism design, and complexity theory, she analyzes how regulatory frameworks adapt—or fail to adapt—when technology changes faster than the institutions governing it. Her empirical and theoretical work spans wholesale power market design and performance, resource adequacy, transactive energy systems, distributed energy resources, and price-based automation at varying scales in power systems.

As Director of Northwestern's Institute for Regulatory Law and Economics, she leads a translational research program connecting academic scholarship to the practice of state utility regulation. As External Faculty at the Santa Fe Institute, she applies complexity economics to the co-evolution of energy technology and regulatory institutions. Her policy work—including analysis for the American Enterprise Institute and (past) the U.S. Department of Energy's Electricity Advisory Committee—bridges academic rigor and regulatory practice, engaging audiences from state commissions to FERC. She publishes regularly at Knowledge Problem."

**Current appointments (as of CV, replaces the stale About-page list):** Director, Institute for Regulatory Law & Economics (IRLE), Northwestern (2023–present); Faculty Affiliate & Adjunct Professor, Trienens Institute for Sustainability and Energy, Northwestern; Research Professor, College of Engineering, Design & Computing, University of Colorado–Denver (2021–present); External Faculty, Santa Fe Institute (2023–present); Nonresident Senior Fellow, American Enterprise Institute (2023–present); Co-Founder, Pacing Energy (2025–present); Fellow, Abundance Institute (2023–present); President, Knowledge Problem LLC (2019–present). DOE Electricity Advisory Committee: 2021–2025 (ended — list under past roles).

**Education:** Ph.D. Economics, Northwestern University (1993); B.S. Economics, Miami University (cum laude, Phi Beta Kappa, 1987).

**Publications (peer-reviewed, since 2018 per CV — this replaces/extends the current Research page list):**
1. Macey, Joshua, and L. Lynne Kiesling. 2026. "Quarantining Electric Utilities." *Energy Journal*. https://doi.org/10.1177/01956574261466886
2. Lee, Yoon-Ho Alex, and L. Lynne Kiesling. 2026. "Epistemic Humility and Adaptive Regulation." *New York University Journal of Law and Liberty*, forthcoming.
3. Kiesling, L. Lynne, Joshua D. Rhodes, and Samantha Zyontz. 2026. "Do Electricity Markets Promote Decarbonization? Evidence From State-Level Data in the United States." *Energy Journal*. https://doi.org/10.1177/01956574251410551
4. Kiesling, Lynne. 2026. "The Promise and Perils of Exclusion: Using Institutional Design Principles and the Theory of Clubs to Analyse Regional Transmission Organization Governance." *Journal of Institutional Economics* 22: e7.
5. McDavid, Brennan, L. Lynne Kiesling, and David P. Chassin. 2026. "Markets, Agency, and Trust: AI Agents and the Knowledge Problem." *Review of Austrian Economics*. https://doi.org/10.1007/s11138-025-00711-4
6. Kiesling, L. Lynne. 2024. "The Pacing Problem: Using the IAD Framework to Model Technological and Institutional Change in a Regulated Industry." *Journal of Political Institutions and Political Economy* 5(4): 523–554.
7. Sovacool, Benjamin K., Sanya Carley, Lynne Kiesling, and Miguel Heleno. 2024. "Energy Justice and Equity: Applying a Critical Perspective to the Electrical Power Grid for a More Just Transition in the United States." *IEEE Power and Energy Magazine* 22(4): 18–25.
8. Sovacool, Benjamin K., Sanya Carley, and Lynne Kiesling. 2024. "Energy Justice Beyond the Wire: Exploring the Multidimensional Inequities of the Electrical Power Grid in the United States." *Energy Research & Social Science* 111: 103474.
9. Sreekumar, Akshay, Adhithyan Sakthivelu, and Lynne Kiesling. 2023. "Auction Theory and Device Bidding Functions for Transactive Energy: A Review." *Current Sustainable/Renewable Energy Reports*. https://doi.org/10.1007/s40518-023-00217-2
10. Sreekumar, Akshay, et al. 2023. "A Real-Time Limit Order Book as a Market Mechanism for Transactive Energy Systems." IEEE PES Conference Paper (best paper selection).
11. Schwidtal, Jan Marc, et al. 2023. "Emerging Business Models in Local Energy Markets..." *Renewable and Sustainable Energy Reviews* 179: 113273.
12. Theisen, Alexander, Lynne Kiesling, and Michael Munger. 2022. "From Airbnb to Solar: Market Platforms as Local Sharing Economies." *Public Choice*. https://doi.org/10.1007/s11127-022-00985-3
13. Burnett, J. Wesley, and L. Lynne Kiesling. 2022. "How Do Machines Predict Energy Use?..." *Energy Research and Social Science*. https://doi.org/10.1016/j.erss.2022.102715
14. Mays, Jacob, et al. 2022. "Private Risk and Social Resilience in Liberalized Electricity Markets." *Joule*. https://doi.org/10.1016/j.joule.2022.01.004
15. Capper, Timothy, et al. 2022. "Peer-to-Peer, Community Self-Consumption, and Transactive Energy..." *Renewable and Sustainable Energy Reviews* 162: 112403.
16. Arlt, Marie-Louise, David P. Chassin, and L. Lynne Kiesling. 2021. "Opening up Transactive Systems..." *Energies* 14(13): 3970–3992.
17. Littlechild, Stephen, and L. Lynne Kiesling. 2021. "Hayek and the Texas Blackout." *Electricity Journal* 34.
18. Kiesling, L. Lynne. 2020. "Plug-and-Play, Mix-and-Match: A Capital Systems Theory of Digital Technology Platforms." *Review of Austrian Economics* 34(1): 13–32.
19. Burnett, J. Wesley, and L. Lynne Kiesling. 2019. "Power Plant Thermal Efficiency as a Regulatory Mechanism..." *Energy Policy* 134: 110980.
20. Kiesling, Lynne. 2018. "Toward a Market Epistemology of the Platform Economy." *Advances in Austrian Economics* 23: 45–70.
21. Kiesling, Lynne, and Bart Wilson. 2007. "An Experimental Analysis of the Effects of Automated Mitigation Procedures..." *Journal of Regulatory Economics* 31: 313–334.
(Earlier selected publications and full list available via SSRN/Google Scholar — CV suggests linking out rather than reproducing everything pre-2018.)

**Books:** *The Essential Ronald Coase* (Fraser Institute, 2021); *Deregulation, Innovation, and Market Liberalization* (Routledge, 2009).
**Edited volumes:** *Institutions, Innovation, and Industrialization* (Princeton UP, 2015, w/ Greif & Nye); *Electricity Restructuring: The Texas Experience* (AEI Press, 2009, w/ Kleit).
**Selected book chapters:** 7 entries 2014–2021 (see CV) — include in a "Chapters" list.

**Working papers / ongoing research:** "Decentralized Coordination in a Dynamic Grid: A Complexity Economics Theory of Transactive Energy" (manuscript, Nov 2025, under review); TESS project (Post Road Foundation/DOE); eVibes (NSF).

**Current grants:** DOE Grid Deployment Office "IMPACT" (Co-PI, 2026–2029, $2M); NSF "eVibes" (Lead PI, 2023–2027, $750K); Sloan Foundation "Integrating Academic Research into State Utility Regulatory Capacity" (PI, 2024–2027, $250K).

**Policy research/reports:** 7 entries 2005–2025 (see CV), most recently *Innovating Future Power Systems: From Vision to Action* (AEI Electricity Working Group, Feb 2025).

**Op-eds/media:** 5 selected entries incl. *Wall Street Journal*, *Dallas Morning News*, *Reason*, *Regulation*. Plus: Owner/Editor, Knowledge Problem (knowledgeproblem.com), since 2002.

**Teaching:** Graduate — Energy Economics (Northwestern MS Energy & Sustainability, Purdue); Environmental Management & Sustainability, Sustainability Lab (Kellogg). Undergraduate — Monopoly/Competition/Public Policy, Environmental & Natural Resource Economics, History of Economic Thought, Intro Microeconomics, Western Economic History (Northwestern); Energy Economics, History of Economic Thought (Purdue); freshman seminars (Economics of Innovation, Complexity and Economics, Adam Smith and the Scottish Enlightenment, Economics of Energy Markets).

**Professional leadership (current/recent, selected):** Member, REFLEX Working Group, LBNL (2026–present); Guest Co-Editor, Journal of Institutional Economics special issue (2024–2026); Committee Member, National Academies Forum on Investment/Technology/Policy Pathways for Electricity (2025–2026); Task Force Member, ESIG Electricity Market Visions (2023–present); Director, AEI Electricity Technology/Regulation/Market Design Working Group (2023–2025); Member, DOE Electricity Advisory Committee (2021–2025, past); President, Public Choice Society (2023–2024).

## Presentations/Talks — decided

No dedicated "selected presentations" list (the old site's ~60-item Public Speaking page is dropped entirely). Replace it with a page/section built from the CV's **"Selected Workshops and Events Directed"** and **"Professional Leadership"** content instead — i.e., convening/service roles rather than invited talks:

- **Workshops and events directed:** IRLE Annual Workshop for State Utility Regulatory Commissioners and Staff (2018–present); Northwestern Electricity Dialogue, Searle Center (co-directed with Edward Garvey, 2015–2017, 2023–present); Research Roundtable "Energy Regulation, Technology, and Transaction Costs," Searle Center (2016–2019); IRLE workshop collaboration with Rocky Mountain Institute (May–June 2022); Energy Research Workshop "Property Rights, Innovation, and the Structures of Energy," PERC (co-directed with Timothy Fitzgerald, Aug 2017); Energy Research Workshop "Innovation, Decentralization, and Regulation in Energy Markets," PERC (July 2016); Research Roundtable "Energy, Technology, and Institutions," Searle Center (June 2009).
- **Professional leadership (current/recent):** Member, REFLEX Working Group, Lawrence Berkeley National Laboratory (2026–present); Guest Co-Editor, Special Issue on IRLE, *Energy Journal* (2025–2026); Guest Co-Editor, Journal of Institutional Economics special issue on Ostromian Analysis of Technology (2024–2026); Committee Member, National Academies Forum on Informed Investment, Technology, and Policy Pathways for the Electricity System (2025–2026); Task Force Member, ESIG Electricity Market Visions to Support a Reliable and Affordable Grid (2023–present); Director, AEI Electricity Technology, Regulation, and Market Design Working Group (2023–2025); Member, DOE Electricity Advisory Committee (2021–2025, past); President, Public Choice Society (2023–2024, Executive Committee 2017–present); other past roles per CV (NIST Smart Grid Advisory Committee, GridWise Architecture Council emerita, IEA Global Observatory on P2P/Transactive Energy, etc.) can be listed under a collapsed "past roles" section if desired.
- Keep links to the YouTube channel and Knowledge Problem substack somewhere on this page or the home page as the "hear/read more" destinations, since the video archive of past talks still exists even without an itemized list.

Rename the nav item from "Talks" to something like **"Leadership & Convening"** or fold it into the CV/Teaching page — Claude Code can propose page titles during the build.

## DNS reminder: pointing lynnekiesling.com at the new repo (Network Solutions)

Once `lynnekiesling.github.io` exists and Pages is enabled:

1. Log into Network Solutions (account manager) → find lynnekiesling.com → **Manage DNS / Advanced DNS Records**.
2. For the **apex domain** (`lynnekiesling.com`), delete any existing A records pointing to the old WordPress host, and add four A records pointing to GitHub Pages' IPs:
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   (Optionally add AAAA records for IPv6: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`.)
3. For the **www subdomain**, add/update a CNAME record: `www` → `lynnekiesling.github.io`.
4. In the repo, add a `CNAME` file containing `lynnekiesling.com` (GitHub Pages settings will also let you set this in the UI, which creates the file automatically).
5. In the repo's Settings → Pages, enter the custom domain and wait for DNS check to pass, then check **Enforce HTTPS**.
6. DNS changes typically propagate within a few hours (can take up to 24–48h) — the old WordPress site will keep serving until propagation completes.

## Design direction

Goal: a serious, uncluttered representation of Lynne's research portfolio — the opposite of the current "flashy" Elementor site.

- **Palette (confirmed by Lynne, replaces the earlier placeholder values).** Define once as CSS variables at the top of `style.css`:

  | Token | Hex | Use |
  | --- | --- | --- |
  | `--kp-logo-green` | `#8FBBAF` | Original logo green. **Decorative only, never for text** (contrast on the off-white background is only ~2.1:1). Use for: the logo mark/lockup, the 4px bar at the top of the header, section-heading rules, favicon (mark on a charcoal square, as in her original logo file), and very light tints (about 12–15% opacity, e.g. `#f0f6f4`) for callouts and hover states. |
  | `--kp-green` | `#167D64` | **Main accent for all text-level green:** links, nav active underline, h2 section labels, buttons (outline, or filled with white text), the home-page logo lockup. Contrast 5.06:1 on white and 4.88:1 on the off-white background: passes WCAG AA. |
  | `--kp-gray` | `#6F6D71` | Original charcoal. **Small secondary accent:** metadata (years, dates, journal names), captions, footer text, the tagline, status tags, thin borders (use a lighter tint of it, about `#d9d8da`, for rules). Contrast 4.94:1 on the off-white background: passes AA for body-size text. Also the background color for any charcoal panel or favicon square. |
  | `--bg` | `#fbfbf9` | Page background (very light warm white). |
  | `--text` | `#1f1e20` | Body text (16:1 on `--bg`). A near-black with a hint of the charcoal's warmth. |

  **Dark mode** (keep it; it follows the visitor's system setting): background about `#1e1d1f` (charcoal-derived), body text `#e8e7e8`, links and green accents use the **original logo green `#8FBBAF`** (7.9:1 on that background; `#167D64` fails on dark at ~3.5:1, so do not reuse it there), gray metadata `#b0aeb2` (7.6:1), rules `#3a393c`. Show the logo mark in `#8FBBAF` in dark mode.
  **Rules:** any new color pairing used for text must reach 4.5:1 (3:1 for large text and graphics); check tints in particular, because `#167D64` text on a heavy green tint drops below 4.5:1. Keep tints very light.
- **Logo and branding (personal, not Knowledge Problem).** This is Lynne's personal site, so the brand is **her name**, built on the mark from her Knowledge Problem logo files (her own artwork). The wordmark reads **"LYNNE" / "Kiesling"**, not "KNOWLEDGE / problem". DONE in the repo (do not redo, only refine if Lynne asks):
  - `src/assets/img/mark.svg`: the mark alone, traced from the high-resolution (4083×1723) banner file into a clean vector with a transparent background, filled with `currentColor` so CSS sets the color.
  - `src/assets/img/lockup.svg`: mark + "LYNNE" (Montserrat Light capitals, wide tracking) + a short rule + "Kiesling" (Rokkitt slab serif), mirroring the structure of the original lockup. Text is converted to outlines, so no web fonts are needed. Also `currentColor`.
  - `src/assets/favicon.svg` and `img/apple-touch-icon.png`: mark in `#8FBBAF` on a `#6F6D71` rounded square; `img/og-image.png` (1200×630): lockup in `#167D64` on the off-white background with a `#8FBBAF` top bar, used for link previews.
  - The original source files (`KP green logo gray.png`, `KP name banner.png`) are **not** committed (the banner is large); keep them outside the repo.
  - **Where the logo appears:** (1) **Home page hero:** the full lockup in `--kp-green` (`#167D64`, or `#8FBBAF` in dark mode), about 11.5rem wide, beside the tagline, CV button, and quick links (the page's `h1` "Lynne Kiesling" is kept as screen-reader-only text so the name is still the page heading); (2) **Header on every page:** the mark only (about 2.1rem tall, `--kp-green`) left of the text "Lynne Kiesling", linking home; (3) **Footer:** the mark only, in `--kp-gray`, above the contact line. The Knowledge Problem link in the footer and hero is now just a text link: the mark no longer represents Knowledge Problem.
  - **Alternative Lynne may want to compare:** a charcoal `#6F6D71` hero panel with the lockup in `#8FBBAF` (her original brand look; lower contrast, 2.4:1, heavier). Default is the light-background version above.
  - **Accessibility:** the home lockup has `aria-label="Lynne Kiesling"`; the header and footer marks are `aria-hidden`.
  - **Possible refinement:** the "Kiesling" slab serif is Rokkitt, the closest match found to the original "problem" lettering. If Lynne prefers a different slab, ask Claude to regenerate `lockup.svg` with that font (the mark path stays the same).
- **Typography:** one readable serif for body text, a clean sans for nav/metadata; generous line height, single comfortable reading column (~65–75 characters).
- **No** carousels, stock photos, full-bleed hero images, animations, or social-media widgets. **Headshot: yes, one, small** — a professional portrait about 160–200 px wide (displayed as a rounded square or circle, whichever matches the logo's geometry best), placed beside the opening paragraph of the bio on the home page (floated right on desktop, above the text on mobile), not in the header or hero. Rationale: for an academic and advisory portfolio it helps regulators, conference organizers, and journalists recognize her, and at this size it doesn't make the page flashy. Requirements: Lynne supplies the photo (a recent, neutral-background portrait); crop square, export at 2× the display size (about 400 px) and compress below 150 KB; real alt text ("Portrait of Lynne Kiesling"); optional second use as the social-sharing image. If no suitable photo is available at build time, build the layout without it and leave a clearly marked slot.
- **Responsive and accessible:** mobile-first, semantic HTML, keyboard navigable; dark mode optional/nice-to-have.
- **Organization by research theme, not just chronology.** Beyond the flat publication lists, group work into 3–4 themes (candidates: transactive energy and market design; regulatory institutions and technological change; resource adequacy and wholesale markets; AI agents and the knowledge problem — Lynne to confirm). Each theme shows related papers, policy reports, and Substack posts together.
- **Current work near the top:** active grants and working papers visible on the home page, not buried.
- **Single source of truth:** publications, working papers, grants, etc. live in data files; the site pages and the downloadable CV PDF (if feasible) are generated from them.
- **Projects area:** a "Projects" index page listing project repos hosted under lynnekiesling.com/<repo-name> (empty or minimal at launch; leave the nav slot out until the first project exists).

## Technical approach

- New GitHub organization **`lynnekiesling`**, repo **`lynnekiesling/lynnekiesling.github.io`** (repo name must match exactly for GitHub Pages to serve it as the org's user site).
- Static site generator: **Eleventy (11ty) or Astro**, deployed via a GitHub Actions workflow to GitHub Pages (more design freedom than Jekyll/Hyde; Claude Code can set up the workflow). Jekyll remains an acceptable fallback if simpler is preferred. Built as **multiple pages** (nav bar), not a single scrolling page.
- Pages: `index.html` (bio/profile + current appointments + both contact emails/links), `publications.html` (books, edited volumes, articles, chapters, working papers/current projects — as data-driven lists), `leadership.html` (workshops directed + professional leadership/convening roles, replacing the old Talks page, plus YouTube/Substack links), `teaching.html` (teaching list, policy research/reports, past advisory roles — with a placeholder/future slot for the History of Economic Thought video channel), `cv.html` or direct CV PDF link.
- Structure content (publications, working papers, chapters, policy reports, grants, workshops, leadership roles) as YAML/JSON data files (`_data/publications.yml`, `_data/working-papers.yml`, `_data/chapters.yml`, etc.) so adding an entry later doesn't require touching layout/HTML.
- Migrate CV as a downloadable PDF (export current CV docx to PDF) and link it from the nav/home page.
- Set up custom domain via `CNAME` file (containing `lynnekiesling.com`) + DNS changes at Network Solutions (see DNS section below).

## Suggested task breakdown for the Claude Code session

0. Lynne creates the free `lynnekiesling` GitHub organization (github.com/organizations/new) and makes `lkkinetic` an owner; Claude Code then works in that org.
1. Scaffold the `lynnekiesling/lynnekiesling.github.io` repo (Eleventy or Astro + GitHub Actions deploy to Pages), custom CSS using the green/gray palette, multi-page nav (Home/Bio, Publications, Leadership & Convening, Teaching/Advisory/Policy, CV).
2. Build `_data/*.yml` files for publications, working papers/current projects, books, chapters, policy reports, grants, workshops directed, and leadership roles from the CV content above.
3. Build page templates for each section listed above, including a standalone Working Papers/Current Projects section on the Publications page (or its own page, Claude Code's call) and a standalone Teaching/Advisory/Public Policy page.
4. Build the Leadership & Convening page from the CV's workshops-directed and professional-leadership content (replacing the old talks list), with links to YouTube and Knowledge Problem substack.
5. Convert CV docx → PDF, add to repo, link from site.
6. Add both work emails (lynne@knowledgeproblem.com, lynne.kiesling@northwestern.edu), social links (LinkedIn, YouTube, X/Twitter — confirm Facebook is still wanted), and a Knowledge Problem link (knowledgeproblem.com); drop the mailing-list form entirely.
7. Do NOT add the custom domain until the site is verified at its github.io address (setting it early makes that address redirect to the old WordPress site). At cutover, set the custom domain in Settings → Pages (the Actions deploy ignores a CNAME file); walk Lynne through the Network Solutions DNS changes (A records + www CNAME) per the reminder below.
8. Remove all WordPress-specific cruft (forms embed, placeholder blog posts, Elementor carousel images) — do not port these over.
9. Review pass: check all outbound links (SSRN/DOI/journal links) still resolve.
10. Deploy, verify via the `lynnekiesling.github.io` preview URL, then cut over DNS and enforce HTTPS.
11. Note as a separate follow-on (not this build): migrating the History of Economic Thought video channel to GitHub. (The knowledgeproblem.com → Substack CNAME change is already done.)
