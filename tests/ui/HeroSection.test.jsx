import { render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { afterEach, expect, it, vi } from "vitest";
import { LocaleProvider } from "../../src/i18n/LocaleProvider.jsx";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

it.each([
  ["en", /Complexity\.\s*Orchestrated\./, /Scroll to orchestrate/i],
  ["fr", /Complexité\.\s*Orchestrée\./, /Faites défiler pour orchestrer/i],
])(
  "shows the completed story without a scroll requirement in %s with reduced motion",
  async (locale, heading, hint) => {
    vi.stubGlobal("matchMedia", (query) => ({
      matches: query === "(prefers-reduced-motion: reduce)",
      media: query,
      addEventListener() {},
      removeEventListener() {},
    }));
    const { default: HeroSection } = await import(
      "../../src/sections/home/HeroSection.jsx"
    );
    render(
      <MemoryRouter initialEntries={[`/${locale}`]}>
        <Routes>
          <Route
            path="/:locale"
            element={
              <LocaleProvider>
                <HeroSection />
              </LocaleProvider>
            }
          />
        </Routes>
      </MemoryRouter>,
    );
    expect(
      screen.getByRole("heading", { level: 1, name: heading }),
    ).toBeVisible();
    expect(screen.queryByText(hint)).not.toBeInTheDocument();
  },
);
