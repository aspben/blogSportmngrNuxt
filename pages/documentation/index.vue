<template>
  <div class="previewWrapper">
    <div v-for="(post, index) of posts" :key="index">
      <post-preview prefix="documentation" :slug="slug" :post="posts[index]" />
    </div>
  </div>
</template>

<script>
export default {
  name: "blog",
  components: {
    "post-preview": () => import("@/components/postPreview.vue")
  },
  props: ["slug"],

  async asyncData() {
    const context = await require.context("@/posts/", true, /\.md$/);
    const posts = await context
      .keys()
      .map(key => ({
        ...context(key),
        path: `/documentation/${key.replace(".md", "").replace("./", "")}`
      }))
      .filter(post => post.attributes.category === "documentation");

    return {
      posts
    };
  }
};
</script>

<style scoped>
.previewWrapper {
  padding: 16px 16px 16px 16px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 16px;
}
</style>
