<script setup lang="ts">
const { data: menu } = await useMenu({ name: 'main' })
</script>

<template>
  <div>
    <nav v-if="menu">
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