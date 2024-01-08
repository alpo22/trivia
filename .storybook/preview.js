/** @type { import('@storybook/react').Preview } */
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/app/App.scss";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
