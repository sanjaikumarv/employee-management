import "../styles/globals.css";
import { useDarkMode } from "storybook-dark-mode";
import { themes } from "@storybook/theming";
import useTheme from "../lib/hooks/useTheme";
import { useEffect } from "react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  darkMode: {
    // Override the default dark theme
    dark: {
      ...themes.dark,
      //  appBg: "#1a1a1a",
      appContentBg: "#1a1a1a",
    },
    light: { ...themes.normal, appBg: "white" },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => {
    const [_, setTheme] = useTheme();
    const mode = useDarkMode() ? "dark" : "light";

    useEffect(() => {
      setTheme(mode);
    }, [mode]);

    return (
      <div className='text-black dark:text-white'>
        <Story />
      </div>
    );
  },
];
