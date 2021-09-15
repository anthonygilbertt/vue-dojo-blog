<template>
  <div class="home">
    <h1>Home Component</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts"/>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import getPosts from '@/composables/getPosts.js'
import Spinner from '@/components/Spinner.vue'
// import { watch, watchEffect } from '@vue/runtime-core'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    PostList,
    Spinner
  },
  setup() {
    const { posts, error, load } = getPosts()

    load()

    return { posts, error }
  }
}
</script>

<style>
button {
  cursor: pointer;
}  
</style>
