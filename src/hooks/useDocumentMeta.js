import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { replaceLocaleInPath } from "../i18n/locale.js";

function publicOrigin() {
  try {
    const configured = import.meta.env.VITE_PUBLIC_ORIGIN;
    if (!configured) return null;
    const url = new URL(configured);
    return ["https:", "http:"].includes(url.protocol) ? url.origin : null;
  } catch {
    return null;
  }
}

export function useDocumentMeta({
  title,
  description,
  canonicalPath,
  ogTitle,
  ogDescription,
  ogImage = "/og-default.png",
  robots = "index, follow",
}) {
  const { pathname } = useLocation();
  const locale = pathname.split("/")[1] === "fr" ? "fr" : "en";
  useEffect(() => {
    const managed = [];
    const meta = (attribute, key, value) => {
      if (!value) return;
      let element = document.querySelector(`meta[${attribute}="${key}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
        managed.push(element);
      }
      element.content = value;
    };
    const link = (rel, href, language) => {
      const element = document.createElement("link");
      element.rel = rel;
      element.href = href;
      if (language) element.hreflang = language;
      document.head.appendChild(element);
      managed.push(element);
    };
    const pageTitle = title || "Prosperya";
    const pageDescription =
      description ||
      (locale === "fr"
        ? "Architecture et transformation des systèmes d’entreprise."
        : "Enterprise systems architecture and transformation.");
    document.title = pageTitle;
    document.documentElement.lang = locale;
    meta("name", "description", pageDescription);
    meta("name", "robots", robots);
    meta("property", "og:title", ogTitle || pageTitle);
    meta("property", "og:description", ogDescription || pageDescription);
    meta("property", "og:type", "website");
    meta("property", "og:site_name", "Prosperya");
    meta("property", "og:locale", locale === "fr" ? "fr_FR" : "en_GB");
    const origin = publicOrigin();
    const path = (canonicalPath || pathname).split(/[?#]/)[0];
    if (origin) {
      const canonical = new URL(path, origin).href;
      link("canonical", canonical);
      meta("property", "og:url", canonical);
      meta("property", "og:image", new URL(ogImage, origin).href);
      for (const language of ["en", "fr"])
        link(
          "alternate",
          new URL(replaceLocaleInPath(path, language), origin).href,
          language,
        );
    }
    return () => managed.forEach((element) => element.remove());
  }, [
    title,
    description,
    canonicalPath,
    ogTitle,
    ogDescription,
    ogImage,
    robots,
    pathname,
    locale,
  ]);
}
