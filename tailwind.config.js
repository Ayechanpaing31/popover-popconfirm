/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#5E27B6",
          secondary: "#F78E5A",
          "text-default": "#0D0815",
          "primary-disabled": "#AC9DBD",
          "text-primary-disabled": "#7260A4",
          "primary-active": "#482384",
          "secondary-disabled": "#F7D5C2",
          "secondary-active": "#AF522A",
          "text-secondary-disabled": "#F04A7A",
          "text-light": "#F8F8F8",
          background: "#FDFCFF",
          "primary-accent": "#DDD2F0",
          "secondary-accent": "#FCF0EE",
          "grey-100": "#F7F7F9",
          "grey-200": "#E4E7EC",
          "grey-300": "#D0D5DD",
          "grey-400": "#98A2B3",
          "grey-500": "#667085",
          "grey-600": "#344054",
          "grey-700": "#1D2939",
          "sys-error": "#ED452E",
          "sys-warn": "#FEC84B",
          "sys-info": "#58A1D4",
          "sys-success": "#58BE62",
          "sys-success-accent": "#ECFBEE",
          "sys-info-accent": "#E2EFF8",
          "sys-warn-accent": "#FFFAEB",
          "sys-error-accent": "#FFF4F3",
        },
      },
    },
    plugins: [],
  };
  