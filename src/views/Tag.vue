<template>
  <h1>Tag Component</h1>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
        <PostList :posts="postsWithTag" />
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
import { useRoute } from "vue-router";
import { computed } from '@vue/reactivity';

/*
User Story:
------------
Whenever the user clicks on one of the tags, 
it will take them to the tag view and show them
all of the blogs that have that tagbundleRenderer.renderToStream

- Create a tag route, which the tag is a route param (/tags/:tag)
    - I can probably use 'useRoute' to get the param details
- 


*/
export default {
//   name: "Tag",
//   components: {
//     PostList,
//     Spinner,
//   },
//   setup() {
//     const route = useRoute();
//     const { posts, error, load } = getPosts()
    
//     load();

//     const postsWithTag = computed(() => {
//         return posts.value.filter((currentPost) => {
//             //  Here we are filtering through the posts array
//             // and checking if the tags inside of each post is equal
//             // to the tag in the route. 
//             // - If the tag that is inside of the route matches(is true)
//             // - Then it stays in the array
//             currentPost.tags.includes(route.params.tag) // get the tags prop from the post object
//         })
//     })

//     return { posts, error, postsWithTag };
//   },

  components: { PostList, Spinner },
  setup() {
    const route = useRoute()
    const { posts, error, load } = getPosts()
    load()
    const postsWithTag = computed(() => {
      return posts.value.filter(p => p.tags.includes(route.params.tag))
    })
    return { error, posts, postsWithTag }
  }
};
</script>

<style scoped>
</style>