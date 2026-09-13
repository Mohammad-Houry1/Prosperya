import { Menu, UnstyledButton } from "@mantine/core";
import { Check, Languages } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLocale } from "../../i18n/LocaleContext.jsx";
import { replaceLocaleInPath } from "../../i18n/locale.js";
import styles from "./LocaleSwitcher.module.css";
export default function LocaleSwitcher() {
  const { locale } = useLocale();
  const location = useLocation();
  const navigate = useNavigate();
  const change = (next) =>
    navigate(
      `${replaceLocaleInPath(location.pathname, next)}${location.search}${location.hash}`,
    );
  return (
    <Menu position="bottom-end" shadow="md" width={160}>
      <Menu.Target>
        <UnstyledButton
          className={styles.trigger}
          aria-label={locale === "fr" ? "Changer de langue" : "Change language"}
        >
          <Languages size={16} />
          <span>{locale.toUpperCase()}</span>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>{locale === "fr" ? "Langue" : "Language"}</Menu.Label>
        {["en", "fr"].map((item) => (
          <Menu.Item
            key={item}
            onClick={() => change(item)}
            rightSection={locale === item ? <Check size={14} /> : null}
          >
            {item === "en" ? "English" : "Français"}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}
