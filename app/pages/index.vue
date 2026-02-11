<script setup lang="ts">
const { data: posts, pending } = await usePosts()
</script>

<template>
  <div>
    <h1>Posts</h1>
    <ul v-if="posts" class="posts">
      <li v-for="post in posts" :key="post.uri">
        <NuxtLink :to="post.uri">
          <img
            v-if="post.featuredImage?.node"
            :src="post.featuredImage.node.sourceUrl"
            :alt="post.featuredImage.node.altText || post.title"
          >
          <span>{{ post.title }}</span>
          <small v-if="post.excerpt" v-sanitize-html="post.excerpt" />
          <em>Read more &rarr;</em>
        </NuxtLink>
      </li>
    </ul>
    <div v-else-if="pending">
      <p>Loading...</p>
    </div>
    <div v-else>
      <p>No posts found</p>
    </div>
  </div>
</template>
