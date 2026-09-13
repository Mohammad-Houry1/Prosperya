import { createContext, useContext, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { messages } from "./messages.js";
import { normalizeLocale } from "./locale.js";
const LocaleContext = createContext(null);
function getByPath(source, path) {
  return path.split(".").reduce((value, key) => value?.[key], source);
}
export function LocaleProvider({ children }) {
  const { locale: routeLocale } = useParams();
  const locale = normalizeLocale(routeLocale);
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  const value = useMemo(
    () => ({
      locale,
      messages: messages[locale],
      t(key) {
        return (
          getByPath(messages[locale], key) ?? getByPath(messages.en, key) ?? key
        );
      },
    }),
    [locale],
  );
  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}
export function useLocale() {
  const value = useContext(LocaleContext);
  if (!value) throw new Error("useLocale must be used inside LocaleProvider");
  return value;
}
