import { Suspense } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import SiteHeader from "../components/layout/SiteHeader.jsx";
import SiteFooter from "../components/layout/SiteFooter.jsx";
import PageLoader from "../components/feedback/PageLoader.jsx";
import { useLocale } from "../i18n/LocaleContext.jsx";
export default function SiteLayout() {
  const { locale } = useLocale();
  return (
    <>
      <a className="skipLink" href="#main-content">
        {locale === "fr" ? "Aller au contenu" : "Skip to content"}
      </a>
      <SiteHeader />
      <main id="main-content">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <SiteFooter />
      <ScrollRestoration />
    </>
  );
}
