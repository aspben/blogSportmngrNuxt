<template>
  <nuxt-link class="cursor-pointer" :to="`/blog${post.attributes.path}`">
    <div class="rounded overflow-hidden shadow-lg">
      <img
        v-if="post.attributes.image"
        class="w-full"
        src="/img/card-top.jpg"
        alt
      />
      <div v-else class="bg-red-800 h-10 w-full"></div>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ post.attributes.title }}</div>
        <p class="text-gray-700 text-base">{{ post.attributes.summary }}</p>
      </div>
      <div class="px-6 py-4">
        <span
          v-for="tag in post.attributes.tags"
          :key="tag"
          class="m-2 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >{{ tag }}</span
        >
      </div>
      <div class="px-6 py-4">
        <div
          class="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 text-center rounded"
        >
          Read / Lire
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  layout: "default",
  name: "post-preview",
  props: {
    prefix: String,
    slug: String,
    post: Object
  }
};
</script>
