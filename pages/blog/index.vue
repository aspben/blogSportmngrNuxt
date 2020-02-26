<template>
  <div class="fluidGrid">
    <div v-for="(post, index) of posts" :key="index">
      <post-preview prefix="blog" :slug="slug" :post="posts[index]" />
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
        path: `/blog/${key.replace(".md", "").replace("./", "")}`
      }))
      .filter(post => post.attributes.category === "blog");
    return {
      posts
    };
  }
};
</script>

<style scoped></style>
