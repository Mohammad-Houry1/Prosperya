import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, test } from "vitest";
import { LocaleProvider, useLocale } from "../../src/i18n/LocaleContext.jsx";
function Probe(){const{locale,t}=useLocale();return <div><span>{locale}</span><span>{t("nav.work")}</span></div>}
describe("LocaleProvider",()=>{test("derives French content from the localized route",()=>{render(<MemoryRouter initialEntries={["/fr/work"]}><Routes><Route path="/:locale/*" element={<LocaleProvider><Probe/></LocaleProvider>}/></Routes></MemoryRouter>);expect(screen.getByText("fr")).toBeInTheDocument();expect(screen.getByText("Projets")).toBeInTheDocument()})});
