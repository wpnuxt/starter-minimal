<script setup lang="ts">
useSeoMeta({
  title: 'Posts',
  ogTitle: 'All Posts',
  description: 'Browse all posts from WordPress'
})

const { data, pending, loadMore, pageInfo } = await usePostsWithPagination({ first: 6 })
</script>

<template>
  <div>
    <h1>Posts</h1>
    <ul v-if="data" class="posts">
      <li v-for="post in data" :key="post.uri">
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
    <button
      v-if="pageInfo?.hasNextPage"
      class="mt-8 px-4 py-2 bg-(--color-wpnuxt) text-white border-none rounded-md cursor-pointer font-medium disabled:opacity-60 disabled:cursor-not-allowed"
      :disabled="pending"
      @click="loadMore"
    >
      {{ pending ? 'Loading...' : 'Load More' }}
    </button>
  </div>
</template>
