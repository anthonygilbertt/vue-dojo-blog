<template>
  <h1>Tag Component</h1>
  <div class="tag">
    
    <div v-if="error">{{error}}</div>
    
    <div v-if="posts.length" class="layout">
      <PostList :posts="postsWithTag" />
      <TagCloud :posts="posts"/>
    </div>
  
    <div v-else>
      <Spinner />
    </div>

  </div>
</template>

<script>
import getPosts from "@/composables/getPosts.js";
import PostList from "@/components/PostList.vue";
import Spinner from "@/components/Spinner.vue";
import TagCloud from "@/components/TagCloud.vue";
import { useRoute } from "vue-router";
import { computed } from '@vue/reactivity';

export default {
  components: {PostList, Spinner, TagCloud},
  setup() {
    const route = useRoute()
    console.log(route);
    const {posts, error, load} = getPosts()

    load() //  This loads the data(starts the fetch() request)

   const postsWithTag = computed(() => {
     //Here we are firing a function which returns an updated value
     return posts.value.filter((p) => p.tags.includes(route.params.tag))// we have to use the 'value' property because 'posts' is a ref()
   })
    
     return { error, posts, postsWithTag}
  }
}

</script>

<style>
  .tag {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }


  .layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }
</style>