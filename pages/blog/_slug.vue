<template>
  <section>
    <div class=" overflow-hidden">
      <div class="px-6 py-4">
        <h1 class="mb-2">{{ post.attributes.title }}</h1>
      </div>
      <div class="px-6 py-4">
        <span
          v-for="tag in post.attributes.tags"
          :key="tag"
          class="m-2 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >{{ tag }}</span
        >
      </div>
      <div class=" markdown px-6 py-4" v-html="post.html"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "blogPostView",

  async asyncData({ params }) {
    const post = await import(`~/posts/${params.slug}.md`);
    return {
      post
    };
  }
};
</script>
