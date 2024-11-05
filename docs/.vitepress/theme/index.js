// docs/.vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';
import Footer from './components/Footer.vue';
import { h } from 'vue';

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // Adding the Footer component in the "bottom" slot
      'bottom': () => h(Footer)
    });
  }
};
