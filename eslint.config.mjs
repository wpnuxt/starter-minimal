// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  name: 'vue-typescript',
  files: ['**/*.vue'],
  languageOptions: {
    parserOptions: {
      parser: await import('@typescript-eslint/parser')
    }
  }
})
