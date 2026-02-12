<script setup lang="ts">
const route = useRoute()
const uri = computed(() => `/${(route.params.slug as string[]).join('/')}/`)

const { data: node, pending } = await useNodeByUri({ uri: uri.value })
</script>

<template>
  <article v-if="node">
    <h1>{{ node.title }}</h1>
    <WPContent :node="node" />
  </article>
  <div v-else-if="pending">
    <p>Loading...</p>
  </div>
  <div v-else>
    <p>No post found</p>
  </div>
</template>
