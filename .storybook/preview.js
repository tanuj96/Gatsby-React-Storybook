
import { muiTheme } from 'storybook-addon-material-ui'

// import theme1 from './src/theme/theme1'
import { cardStyles } from '../src/components/link-card/styles';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
	muiTheme([cardStyles])
];