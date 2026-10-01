import { MantineProvider } from "@mantine/core";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { LocaleProvider } from "../../src/i18n/LocaleProvider.jsx";
import ContactPage from "../../src/pages/Contact/ContactPage.jsx";
import * as repository from "../../src/repositories/projectInquiry.repository.js";
function renderPage(locale = "en") {
  return render(
    <MantineProvider>
      <QueryClientProvider
        client={
          new QueryClient({ defaultOptions: { mutations: { retry: false } } })
        }
      >
        <MemoryRouter initialEntries={[`/${locale}/contact`]}>
          <Routes>
            <Route
              path="/:locale/contact"
              element={
                <LocaleProvider>
                  <ContactPage />
                </LocaleProvider>
              }
            />
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>
    </MantineProvider>,
  );
}
function fillBrief() {
  for (const [label, value] of [
    ["Name", "  Jad  "],
    ["Company", "Example"],
    ["Work email", "jad@example.com"],
    ["Country", "France"],
    ["Project type", "systems_integration"],
    ["Project stage", "planning"],
    ["What needs to change?", "Connect our finance systems"],
  ])
    fireEvent.change(screen.getByLabelText(label), { target: { value } });
}
beforeEach(() => {
  vi.stubGlobal("matchMedia", vi.fn(query => ({ matches:false, media:query, addEventListener:vi.fn(), removeEventListener:vi.fn(), addListener:vi.fn(), removeListener:vi.fn() })));
});
afterEach(() => { vi.restoreAllMocks(); vi.unstubAllGlobals(); });
describe("ContactPage", () => {
  test("validates required fields and focuses the first error without submitting", () => {
    const submit = vi.spyOn(repository, "submitProjectInquiry");
    renderPage();
    fireEvent.click(
      screen.getByRole("button", { name: "Review project brief" }),
    );
    expect(screen.getByLabelText("Name")).toHaveFocus();
    expect(screen.getByLabelText("Name")).toHaveAttribute(
      "aria-invalid",
      "true",
    );
    expect(submit).not.toHaveBeenCalled();
  });
  test("passes a normalized machine-value payload and truthfully confirms local preview", async () => {
    const submit = vi.spyOn(repository, "submitProjectInquiry");
    renderPage();
    fillBrief();
    fireEvent.click(
      screen.getByRole("button", { name: "Review project brief" }),
    );
    expect(await screen.findByRole("status")).toHaveTextContent(
      "has not sent or saved",
    );
    expect(submit.mock.calls[0][0]).toMatchObject({
      name: "Jad",
      locale: "en",
      projectType: "systems_integration",
      projectStage: "planning",
    });
  });
  test("keeps input after failure and allows a retry", async () => {
    vi.spyOn(repository, "submitProjectInquiry")
      .mockRejectedValueOnce(new Error("Unavailable"))
      .mockResolvedValueOnce({ mode: "preview" });
    renderPage();
    fillBrief();
    fireEvent.click(
      screen.getByRole("button", { name: "Review project brief" }),
    );
    expect(await screen.findByRole("alert")).toHaveTextContent(
      "could not be checked",
    );
    expect(screen.getByLabelText("Company")).toHaveValue("Example");
    fireEvent.click(
      screen.getByRole("button", { name: "Review project brief" }),
    );
    await waitFor(() =>
      expect(screen.getByRole("status")).toHaveTextContent(
        "has not sent or saved",
      ),
    );
  });
  test("French labels retain stable project values", () => {
    renderPage("fr");
    expect(
      screen.getByRole("option", { name: "Intégration des systèmes" }),
    ).toHaveValue("systems_integration");
    expect(
      screen.getByRole("button", { name: "Vérifier mon brief" }),
    ).toBeVisible();
  });
});
