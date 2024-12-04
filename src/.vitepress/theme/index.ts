import DefaultTheme from 'vitepress/theme'
import VersionSwitcher from './components/VersionSwitcher.vue';
import { Theme } from 'vitepress';
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('VersionSwitcher', VersionSwitcher)
  }
} satisfies Theme;