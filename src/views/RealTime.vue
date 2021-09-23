<template>
  <h1>Real-time data</h1>
  <div v-for="post in posts" :key="post.id">
    <div>{{ post.title }}</div>
  </div>
</template>

<script>
import { ref } from "vue";
import { projectFirestore } from "@/firebase/config";

export default {
  setup() {
    const posts = ref([]);

    projectFirestore
      .collection("posts")
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        console.log(snap);
        // First thing we need to do is update the posts array
        // every time that there is a change/snapshot
        let docs = snap.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        // Now we take the new docs value and assign it to the posts array
        console.log("documents:", docs);
        posts.value = docs;
      });

    return { posts };
  },
};
</script>

<style lang="scss" scoped>
</style>