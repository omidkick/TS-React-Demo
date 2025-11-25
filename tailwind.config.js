/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Map your CSS variables to Tailwind classes
        primary: 'var(--color-primary)',
        'primary-dark': 'var(--color-primary-dark)',
        'primary-light': 'var(--color-primary-light)',
        secondary: 'var(--color-secondary)',
        'secondary-dark': 'var(--color-secondary-dark)',
        'secondary-light': 'var(--color-secondary-light)',
        success: 'var(--color-success)',
        'success-dark': 'var(--color-success-dark)',
        danger: 'var(--color-danger)',
        'danger-dark': 'var(--color-danger-dark)',
        warning: 'var(--color-warning)',
        'warning-dark': 'var(--color-warning-dark)',
        info: 'var(--color-info)',
        'info-dark': 'var(--color-info-dark)',
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        border: 'var(--color-border)',
        text: 'var(--color-text)',
        'text-light': 'var(--color-text-light)',
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
      transitionProperty: {
        'all': 'all',
      },
    },
  },
  plugins: [],
}