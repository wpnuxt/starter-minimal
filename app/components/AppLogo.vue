<script setup lang="ts">
const props = defineProps<{
  wpColor?: string
}>()
const wpLight = computed(() => props.wpColor ?? 'black')
const wpDark = computed(() => props.wpColor ?? 'white')
</script>

<template>
  <div class="wpnuxt-logo">
    <span class="wpnuxt-logo-wp">WP</span><span class="wpnuxt-logo-nuxt">Nuxt</span>
  </div>
</template>

<style scoped>
.wpnuxt-logo {
  display: inline-flex;
  font-weight: 700;
  font-size: 2rem;
  line-height: 2rem;
  margin-top: -15px;
}
.wpnuxt-logo-wp {
  color: v-bind(wpLight);
  font-family: ui-serif, Times, serif;
}
html.dark .wpnuxt-logo-wp {
  color: v-bind(wpDark);
  font-family: ui-serif, Times, serif;
}
.wpnuxt-logo-nuxt {
  color: var(--color-wpnuxt);
}
</style>
