<template>
  <div class="home">
    <h1>Home Component </h1>
    <PostList v-if="showPosts" :posts="posts"/>
    <button @click="showPosts = !showPosts">Toggle Posts</button>
    <button @click="posts.pop()">Delete Post</button>

    
<!--
    <input type="text" v-model="search">
    <p>search term - {{ search }}</p>
-->

  </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity'
// import { watch, watchEffect } from '@vue/runtime-core'
import PostList from '@/components/PostList.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: { 
    PostList
  },
  setup() {
    
    
    const posts = ref([
      {title: 'Welcome to the blog', body: 'some text some text some text some text some text', id: 1},
      {title: 'How to dockerize your vue', body: 'some text', id: 2}
    ])

    const showPosts = ref(true)

    return { posts, showPosts }
  }
}
</script>
<style>

button {
  cursor: pointer;
}
  
</style>
