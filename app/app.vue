<script setup lang="ts">
const { data: settings } = await useGeneralSettings()
const { data: menu } = await useMenu({ name: 'main' })

useHead({
  titleTemplate: (title) => title ? `${title} — ${settings.value?.title || 'WPNuxt'}` : settings.value?.title || 'WPNuxt',
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
})
</script>

<template>
  <div>
    <nav>
      <NuxtLink to="/">
        <AppLogo />
      </NuxtLink>
      <NuxtLink
        v-for="item in menu"
        :key="item.uri"
        :to="item.uri"
      >
        {{ item.label }}
      </NuxtLink>
    </nav>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>
