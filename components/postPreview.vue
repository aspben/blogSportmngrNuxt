<template>
  <section>
    <div v-for="post in posts">{{post}}</div>
  </section>
</template>

<script>
export default {
  layout: "default",
  name: "post-preview",
  props: {
    prefix: String,
    slug: String,
    posts: Array
  }
};
</script>