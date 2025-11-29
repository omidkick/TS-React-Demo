/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: withOpacity("--color-primary"),
          dark: withOpacity("--color-primary-dark"),
          light: withOpacity("--color-primary-light"),
        },
        secondary: {
          DEFAULT: withOpacity("--color-secondary"),
          dark: withOpacity("--color-secondary-dark"),
          light: withOpacity("--color-secondary-light"),
        },
        success: {
          DEFAULT: withOpacity("--color-success"),
          dark: withOpacity("--color-success-dark"),
        },
        danger: {
          DEFAULT: withOpacity("--color-danger"),
          dark: withOpacity("--color-danger-dark"),
        },
        warning: {
          DEFAULT: withOpacity("--color-warning"),
          dark: withOpacity("--color-warning-dark"),
        },
        info: {
          DEFAULT: withOpacity("--color-info"),
          dark: withOpacity("--color-info-dark"),
        },
        bg: withOpacity("--color-bg"),
        surface: withOpacity("--color-surface"),
        border: withOpacity("--color-border"),
        text: withOpacity("--color-text"),
        "text-light": withOpacity("--color-text-light"),
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
}