import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { expect, test } from "vitest";
import { LocaleProvider } from "../../src/i18n/LocaleProvider.jsx";
import Newsletter from "../../src/components/insight/Newsletter.jsx";

function renderNewsletter(props) {
  render(
    <MemoryRouter initialEntries={["/en"]}>
      <Routes>
        <Route path="/:locale" element={<LocaleProvider><Newsletter {...props} /></LocaleProvider>} />
      </Routes>
    </MemoryRouter>,
  );
}

test("the newsletter Close uses the page's own title when one is given", () => {
  renderNewsletter({ title: "Get the next article first." });
  expect(screen.getByRole("heading", { level: 2, name: "Get the next article first." })).toBeInTheDocument();
  expect(screen.queryByText("Stay informed. Stay ahead.")).not.toBeInTheDocument();
});

test("the newsletter Close falls back to the Insights title", () => {
  renderNewsletter({});
  expect(screen.getByRole("heading", { level: 2, name: "Stay informed. Stay ahead." })).toBeInTheDocument();
});
