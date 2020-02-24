<template>
  <section>
    <div class="rounded overflow-hidden shadow-lg">
      <img v-if="attributes.image" class="w-full" src="/img/card-top.jpg" alt />
      <div v-else class="bg-red-800 h-10 w-full"></div>
      <div class="px-6 py-4">
        <h1 class="font-bold text-xl mb-2">{{attributes.title}}</h1>
      </div>
      <div class="px-6 py-4">
        <span
          v-for="tag in attributes.tags "
          :key="tag"
          class="m-2 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
        >{{tag}}</span>
      </div>
      <div class="px-6 py-4">
        {{dynamicComponent}}
        <component v-bind:is="dynamicComponent" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "blogPostView",

  data() {
    return {
      attributes: null,
      title: null,
      dynamicComponent: null
    };
  },

  created() {
    const markdown = require(`~/posts/${this.$route.params.slug}.md`);
    console.log(markdown);
    this.attributes = markdown.attributes;
    this.title = markdown.attributes.title;
    this.dynamicComponent = markdown.vue.component;

    // Use Async Components for the benefit of code splitting
    // https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components
    // this.dynamicComponent = () => import(`~/articles/${this.fileName}.md`).then(({ vue }) => vue.component
  }
};
</script>