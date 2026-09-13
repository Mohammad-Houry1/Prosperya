import { ActionIcon, Tooltip } from "@mantine/core";
import { Moon, Sun } from "lucide-react";
import { useAppTheme } from "../../theme/ThemeContext.jsx";
import { useLocale } from "../../i18n/LocaleContext.jsx";
export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useAppTheme();
  const { locale } = useLocale();
  const next = theme === "dark" ? "light" : "dark";
  const label =
    locale === "fr"
      ? `Passer en mode ${next === "dark" ? "sombre" : "clair"}`
      : `Switch to ${next} mode`;
  return (
    <Tooltip label={label}>
      <ActionIcon
        variant="subtle"
        color="gray"
        size="lg"
        radius="xl"
        onClick={toggleTheme}
        aria-label={label}
      >
        {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
      </ActionIcon>
    </Tooltip>
  );
}
