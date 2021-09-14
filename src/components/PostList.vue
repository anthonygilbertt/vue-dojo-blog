<template>
  <div class="post-list">
  <h1>Post List Component</h1>
  <!--Cycle through some posts here-->
  <div v-for="post in posts" :key="post.id">
    <SinglePost :post="post" />
  </div>
  </div>
</template>

<script>
import SinglePost from '@/components/SinglePost.vue'

export default {
    name: 'PostList',
    components: { SinglePost },
    props: ['posts'],
    setup(props) {
        console.log(props.posts);

        
    }
}
</script>

<style>

</style>