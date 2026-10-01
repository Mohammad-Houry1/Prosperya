import test from "node:test";
import assert from "node:assert/strict";
import {
  getCompanyStories,
  getFrequentlyAskedQuestions,
} from "../../src/repositories/companyStories.repository.js";
test("sample endorsements retain demo provenance in both locales", async () => {
  const en = await getCompanyStories("en");
  const fr = await getCompanyStories("fr");
  assert.equal(en.isDemo, true);
  assert.equal(fr.isDemo, true);
  assert.equal(en.clients.length, 5);
  assert.equal(fr.testimonials.length, 3);
  assert.notEqual(en.testimonials[0].quote, fr.testimonials[0].quote);
});
test("FAQ topic selection provides only relevant localized answers", async () => {
  const questions = await getFrequentlyAskedQuestions("fr", "contact");
  assert.ok(questions.length > 0);
  assert.ok(
    questions.every(
      (item) =>
        item.topics.includes("contact") && typeof item.answer === "string",
    ),
  );
  assert.deepEqual(await getFrequentlyAskedQuestions("en", "missing"), []);
});
