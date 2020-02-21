<template>
  <div>
    <div v-for="i in 3" :key="i">
      <post-preview prefix="blog" :slug="slug" :posts="posts[i]" />
    </div>
  </div>
</template>

<script>
export default {
  name: "tutorial",
  components: {
    "post-preview": () => import("@/components/postPreview.vue")
  },
  props: ["slug"],
  async asyncData() {
    const resolve = require.context("@/posts/", true, /\.md$/);
    const imports = resolve
      .keys()
      .map(key => {
        const [, slug] = key.match(/\/(.+)\.md$/);
        return Object.assign(resolve(key), { slug });
      })
      .filter(post => post.attributes.category == "tutorial");
    return {
      posts: imports
    };
  }
};
</script>