# Files in source/ by role

## Structured content (collections, already behind repositories)

- `src/data/caseStudies.data.js`
- `src/data/caseStudyDetails.data.js`
- `src/data/company.data.js`
- `src/data/companyStories.data.js`
- `src/data/expertise.data.js`
- `src/data/expertiseDetails.data.js`
- `src/data/home.data.js`
- `src/data/insights.data.js`
- `src/data/legal.data.js`
- `src/data/platforms.data.js`
- `src/data/projectInquiry.data.js`
- `src/data/solutions.data.js`

## Page copy files (page text kept beside the page)

- `src/sections/home/heroStory.copy.js`
- `src/pages/About/about.copy.js`
- `src/pages/Approach/approach.copy.js`

## Interface text (nav, footer, common labels)

- `src/i18n/messages.js`
- `src/i18n/legalRoutes.js` (translated legal page slugs)

## Components that carry their own EN/FR labels

- `src/sections/home/NetSuiteFoundation.jsx`
- `src/components/visuals/ArchitectureFlowDiagram.jsx`
- `src/components/visuals/AutomationLanes.jsx`
- `src/components/visuals/LayeredArchitecture.jsx`
- `src/components/visuals/SolutionMetaphor.jsx`
- `src/components/visuals/NetSuiteCoreDiagram.jsx`
- `src/pages/Expertise/CapabilityStory.jsx`
- `src/components/layout/SiteFooter.jsx`
- `src/components/feedback/EmptyState.jsx`
- `src/components/feedback/ErrorState.jsx`
- `src/three/systemScene.data.js`

## Data contract (what each page reads; the CMS API must produce these shapes)

- `src/api/mappers/normalizeCmsEntity.js`
- `src/api/client.js`
- `src/api/endpoints.js`
- `src/repositories/caseStudies.repository.js`
- `src/repositories/company.repository.js`
- `src/repositories/companyStories.repository.js`
- `src/repositories/expertise.repository.js`
- `src/repositories/insights.repository.js`
- `src/repositories/legal.repository.js`
- `src/repositories/localize.js`
- `src/repositories/platforms.repository.js`
- `src/repositories/projectInquiry.repository.js`
- `src/repositories/solutions.repository.js`

## Images in use

- `public/images/enterprise-warehouse.webp`
- `public/images/paris-editorial.webp`
- Social preview: `public/og-default.png`
