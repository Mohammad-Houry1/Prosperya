import { MantineProvider, createTheme } from "@mantine/core";
import { ThemeProvider, useAppTheme } from "../../theme/ThemeContext.jsx";
import { AppQueryProvider } from "./QueryProvider.jsx";

const mantineTheme = createTheme({
  fontFamily:
    "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
  primaryColor: "teal",
  defaultRadius: "md",
});

function MantineBridge({ children }) {
  const { theme } = useAppTheme();
  return (
    <MantineProvider theme={mantineTheme} forceColorScheme={theme}>
      {children}
    </MantineProvider>
  );
}

export function AppProviders({ children }) {
  return (
    <AppQueryProvider>
      <ThemeProvider>
        <MantineBridge>{children}</MantineBridge>
      </ThemeProvider>
    </AppQueryProvider>
  );
}
