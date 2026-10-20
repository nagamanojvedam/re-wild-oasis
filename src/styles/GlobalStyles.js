import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    &,
    &.light-mode {
      /* Warm Neutral Palette */
      --color-grey-0: #FFFFFF;
      --color-grey-50: #FAF8F3;
      --color-grey-100: #F3F0E8;
      --color-grey-200: #E9E5DC;
      --color-grey-300: #D5D0C5;
      --color-grey-400: #A8A397;
      --color-grey-500: #79776D;
      --color-grey-600: #5C5D54;
      --color-grey-700: #43483F;
      --color-grey-800: #343A35;
      --color-grey-900: #242B26;

      /* Status Colors */
      --color-blue-100: #DBEAFE;
      --color-blue-700: #1D4ED8;

      --color-green-100: #DCFCE7;
      --color-green-700: #166534;

      --color-yellow-100: #FEF3C7;
      --color-yellow-700: #92400E;

      --color-silver-100: #E9E5DC;
      --color-silver-700: #5C5D54;

      --color-indigo-100: #F3E8FF;
      --color-indigo-700: #7E22CE;

      --color-red-100: #FEE2E2;
      --color-red-700: #B91C1C;
      --color-red-800: #991B1B;

      /* Backdrop */
      --backdrop-color: rgba(36, 43, 38, 0.35);

      /* Shadows */
      --shadow-sm: 0 1px 2px rgba(36, 43, 38, 0.05);
      --shadow-md: 0 0.6rem 2.4rem rgba(36, 43, 38, 0.07);
      --shadow-lg: 0 2.4rem 3.2rem rgba(36, 43, 38, 0.12);

      /* Images */
      --image-grayscale: 0;
      --image-opacity: 100%;
    }

    &.dark-mode {
      /* Deep Green-Charcoal Palette */
      --color-grey-0: #222C25;
      --color-grey-50: #171E19;
      --color-grey-100: #28332C;
      --color-grey-200: #39463D;
      --color-grey-300: #526056;
      --color-grey-400: #7D8A7F;
      --color-grey-500: #A3ADA4;
      --color-grey-600: #BEC6BF;
      --color-grey-700: #D5DBD5;
      --color-grey-800: #E7EBE6;
      --color-grey-900: #F5F3EC;

      /* Status Colors */
      --color-blue-100: #1E3A5F;
      --color-blue-700: #93C5FD;

      --color-green-100: #173D2B;
      --color-green-700: #86EFAC;

      --color-yellow-100: #493817;
      --color-yellow-700: #FDE68A;

      --color-silver-100: #39463D;
      --color-silver-700: #E7EBE6;

      --color-indigo-100: #3B2855;
      --color-indigo-700: #D8B4FE;

      --color-red-100: #4C2023;
      --color-red-700: #FCA5A5;
      --color-red-800: #FECACA;

      /* Backdrop */
      --backdrop-color: rgba(0, 0, 0, 0.55);

      /* Shadows */
      --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.25);
      --shadow-md: 0 0.6rem 2.4rem rgba(0, 0, 0, 0.25);
      --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

      /* Images */
      --image-grayscale: 0;
      --image-opacity: 100%;
    }

    /* Brand: Forest Green + Champagne Gold */
    --color-brand-50: #F0F5F1;
    --color-brand-100: #DCE9DF;
    --color-brand-200: #B8D2C0;
    --color-brand-500: #47745D;
    --color-brand-600: #315B46;
    --color-brand-700: #244A3C;
    --color-brand-800: #1D3C30;
    --color-brand-900: #172F26;

    /* Accent: Champagne Gold */
    --color-accent-50: #FBF7EF;
    --color-accent-100: #F0E4C9;
    --color-accent-200: #E4D0A5;
    --color-accent-500: #C5A46D;
    --color-accent-600: #A9854D;
    --color-accent-700: #86683B;

    /* Border Radius */
    --border-radius-tiny: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 7px;
    --border-radius-lg: 9px;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    /* Smooth theme transitions */
    transition:
      background-color 0.2s,
      border-color 0.2s,
      color 0.2s;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Poppins", sans-serif;
    color: var(--color-grey-700);
    background-color: var(--color-grey-50);

    min-height: 100vh;
    line-height: 1.5;
    font-size: 1.6rem;

    transition:
      color 0.3s,
      background-color 0.3s;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  *:disabled {
    cursor: not-allowed;
  }

  select:disabled,
  input:disabled,
  textarea:disabled {
    background-color: var(--color-grey-200);
    color: var(--color-grey-500);
  }

  input:focus-visible,
  button:focus-visible,
  textarea:focus-visible,
  select:focus-visible,
  a:focus-visible {
    outline: 2px solid var(--color-brand-600);
    outline-offset: 2px;
  }

  /* Buttons containing SVG icons */
  button:has(svg) {
    line-height: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }

  img {
    max-width: 100%;
    height: auto;
    filter: grayscale(var(--image-grayscale))
      opacity(var(--image-opacity));
  }

  /* Scrollbars */
  ::-webkit-scrollbar {
    width: 1.1rem;
    height: 1.1rem;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-grey-400);
    border-radius: 999px;
    border: 2px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-grey-500);
  }

  ::-webkit-scrollbar-thumb:active {
    background: var(--color-grey-600);
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: var(--color-grey-400) transparent;
  }

  :root.dark-mode ::-webkit-scrollbar-thumb {
    background: var(--color-grey-400);
  }

  :root.dark-mode ::-webkit-scrollbar-thumb:hover {
    background: var(--color-grey-300);
  }

  :root.dark-mode ::-webkit-scrollbar-thumb:active {
    background: var(--color-grey-200);
  }

  /* Reduced motion accessibility */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default GlobalStyles;
