import test from "node:test";
import assert from "node:assert/strict";
import {
  getCapabilities,
  getCapabilityBySlug,
} from "../../src/repositories/expertise.repository.js";
import {
  getCaseStudies,
  getCaseStudyBySlug,
} from "../../src/repositories/caseStudies.repository.js";
import { getPlatforms } from "../../src/repositories/platforms.repository.js";
import { getInsights, getInsightBySlug } from "../../src/repositories/insights.repository.js";

test("expertise repository returns localized normalized capability models", async () => {
  const capabilities = await getCapabilities("fr");
  assert.equal(capabilities.length, 4);
  assert.equal(capabilities[0].title, "Transformer");
  assert.equal(typeof capabilities[0].description, "string");
  assert.equal("copy" in capabilities[0], false);
});

test("expertise repository resolves a capability by slug", async () => {
  const capability = await getCapabilityBySlug("en", "systems-integration");
  assert.equal(capability?.title, "Connect");
  assert.equal(await getCapabilityBySlug("en", "missing"), null);
});

test("case study repository exposes normalized metrics and relationships", async () => {
  const studies = await getCaseStudies("en");
  assert.ok(studies.length >= 3);
  assert.ok(studies[0].metrics.length >= 2);
  assert.ok(Array.isArray(studies[0].platformIds));
  assert.equal("copy" in studies[0], false);

  const detail = await getCaseStudyBySlug("fr", studies[0].slug);
  assert.equal(typeof detail.title, "string");
});

test("platform and insight repositories localize frontend-ready models", async () => {
  const platforms = await getPlatforms("fr");
  assert.ok(platforms.some((platform) => platform.name === "NetSuite"));

  const insights = await getInsights("en");
  assert.ok(insights.length >= 3);
  const insight = await getInsightBySlug("en", insights[0].slug);
  assert.equal(insight?.id, insights[0].id);
});
