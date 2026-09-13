import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, test } from "vitest";
import { LocaleProvider } from "../../src/i18n/LocaleContext.jsx";
import ContactPage from "../../src/pages/Contact/ContactPage.jsx";
function renderPage(path){return render(<MemoryRouter initialEntries={[path]}><Routes><Route path="/:locale/contact" element={<LocaleProvider><ContactPage/></LocaleProvider>}/></Routes></MemoryRouter>)}
describe("ContactPage",()=>{test("keeps V1 submission local and reports a successful demo state",()=>{renderPage("/en/contact");fireEvent.change(screen.getByLabelText("Name"),{target:{value:"Jad"}});fireEvent.change(screen.getByLabelText("Work email"),{target:{value:"jad@example.com"}});fireEvent.change(screen.getByLabelText("What needs to change?"),{target:{value:"ERP integration"}});fireEvent.submit(screen.getByRole("button",{name:"Send project brief"}).closest("form"));expect(screen.getByRole("status")).toHaveTextContent(/V1 demo/i)})});
