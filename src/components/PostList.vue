<template>
  <div class="post-list">
  <h6>Post List Component</h6>
  <!--Cycle through some posts here-->
  <div v-for="post in posts" :key="post.id">
    <SinglePost :post="post" />
  </div>
  </div>
</template>

<script>
import SinglePost from '@/components/SinglePost.vue'
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core'

export default {
    name: 'PostList',
    components: { SinglePost },
    props: ['posts'],
    setup(props) {
        // console.log(props.posts);
        onMounted(() => console.log('Component Mounted'))
        onUpdated(() => console.log('Component Updated'))
        onUnmounted(() => console.log('Component Unmounted'))
    },
    // mounted() {
    //     // run some code when the component is mounted
    // },
    // updated() {
    //     // run some code when the component is updated
    //     // - for example, if some data changed, and we
    //     //     had to reflect that change in the <template>
    // },
    // unmounted() {
    //     // run some code when the component is unmounted
    // } 
}
</script>

<style>

</style>