import { setContext } from 'svelte';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [{
      light: {
      ...require('daisyui/src/theming/themes')['light'],
      primary: "#a8dadc",
  },
    }, {
      dark: {
      ...require('daisyui/src/theming/themes')['dark'],
      primary: "#a8dadc",
  },
    }
  ],
    


  }
}

