export const COLORS = {
  black: "#1A1A1A",
  grey: "#242424",
  white: "#FCFCFC",
  tintColor: "#723FEB",
  blue: "#97E0F7",
};

/**
 * Premium Fintech Design System - Color Tokens
 * Optimized for OLED displays, WCAG AA accessibility, and a minimalist luxury aesthetic.
 */

export const tokens = {
  // Core brand identity (immutable)
  brand: {
    primaryBase: "#723FEB",
    secondaryBase: "#97E0F7",
  },

  categories: {
    violet: "#723FEB", // Lighter than primary for better chart legibility
    cyan: "#97E0F7", // Deep, trustworthy cyan
    light: "#F3F4F6", // Light gray
    amber: "#F59E0B", // Golden amber (replaces neon yellow)
    rose: "#F43F5E", // Elegant rose (replaces aggressive red)
    slate: "#64748B", // Sophisticated cool gray
  },
  status: {
    success: "#10B981", // Emerald 500
    warning: "#F59E0B", // Amber 500
    error: "#EF4444", // Red 500
    neutral: "#94A3B8", // Slate 400
  },

  // Thematic tokens
  theme: {
    light: {
      surface: {
        core: "#FCFCFC", // Main app background (soft, breathable)
        elevate: "#FFFFFF", // Cards, modals, floating elements
        muted: "#F5F5F7", // Secondary backgrounds, inactive tabs, inputs
      },
      text: {
        primary: "#1A1A1A", // Main headings, balances, crucial data
        secondary: "#737373", // Subtitles, dates, transaction types
        inverse: "#FFFFFF", // Text on primary brand background
      },
      brand: {
        primary: "#723FEB", // Primary CTAs, active states
        secondary: "#12B5CB", // Data viz highlights, secondary actions
        tonal: "rgba(114, 63, 235, 0.1)", // Subtle brand backgrounds
      },
      finance: {
        positive: "#0E9F6E", // Profit, incoming transfers
        negative: "#E02424", // Losses, outgoing expenses
      },
      border: {
        subtle: "rgba(0, 0, 0, 0.06)", // Dividers, card outlines
        focus: "#723FEB", // Input focus states
      },
    },

    dark: {
      surface: {
        core: "#111111", // Main app background (deep, OLED-friendly)
        elevate: "#1A1A1A", // Cards, modals
        muted: "#242424", // Inputs, secondary areas
      },
      text: {
        primary: "#F3F4F6", // Main headings, balances
        secondary: "#9CA3AF", // Subtitles, dates
        inverse: "#111111", // Text on light backgrounds (if needed)
      },
      brand: {
        primary: "#8B5CF6", // Shifted lighter for WCAG contrast on dark
        secondary: "#22D3EE", // Shifted lighter for dark mode visibility
        tonal: "rgba(139, 92, 246, 0.15)", // Subtle brand backgrounds (adjusted opacity)
      },
      finance: {
        positive: "#31C48D", // Profit (brightened for contrast)
        negative: "#F05252", // Losses (brightened for contrast)
      },
      border: {
        subtle: "rgba(255, 255, 255, 0.08)", // Linear-style subtle card borders
        focus: "#8B5CF6", // Input focus states
      },
    },
  },
};

// Define the ColorTheme type based on the token structure
export interface ColorTheme {
  surface: {
    core: string;
    elevate: string;
    muted: string;
  };
  text: {
    primary: string;
    secondary: string;
    inverse: string;
  };
  brand: {
    primary: string;
    secondary: string;
    tonal: string;
  };
  finance: {
    positive: string;
    negative: string;
  };
  border: {
    subtle: string;
    focus: string;
  };
}

/**
 * getThemeTokens with strict return typing
 *
 * @param isDarkMode - Boolean to determine which theme palette to return
 * @returns The semantic color set for the active theme
 */
export const getThemeTokens = (isDarkMode: boolean): ColorTheme => {
  return isDarkMode ? tokens.theme.dark : tokens.theme.light;
};

/**
 * Gets a color from the categories color token based on its sorted index.
 */
export const getCategoryColor = (index: number): string => {
  const colors = Object.values(tokens.categories);
  return colors[index % colors.length];
};

/**
 * Determines if a given hex color is light (useful for calculating contrast).
 */
export const isColorLight = (hexColor: string): boolean => {
  const hex = hexColor.replace("#", "");
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128;
};
