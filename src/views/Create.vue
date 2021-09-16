<template>
  <h5>Create Component</h5>

  <div class="create">
    <form @submit.prevent="handleSubmit">
      <label>Title:</label>
      <!-- I want to do a v-model for this-->
      <input type="text" required />

      <label>Content:</label>
      <!--I want to do a v-model for this-->
      <textarea required></textarea>

      <label>Tags (Hit enter to add a tag)</label>
      <!--I want to do a v-model for this-->
      <input type="text" v-model="tag" @keydown.enter.prevent="handleKeydown" />

      <div v-for="tag in tags" :key="tag" class="pill">#{{tag}}</div>
      <button>Add Post</button>
    </form>
  </div>

  <!-- <Spinner /> -->
</template>

<script>
// Challenge
//  - Add a submit event handler to the form
//  - Inside of the handler. make a POST request to add a new post to db.json
//  - Try using async & await to make the request
//  - The endpoint is /posts to add a new post

import { ref } from "vue";
import Spinner from "@/components/Spinner.vue";

export default {
  name: "Create",
  components: { Spinner },
  setup() {
    const title = ref("");
    const body = ref("");
    const tag = ref("");
    const tags = ref([]);

    const handleKeydown = () => {
      if (!tags.value.includes(tag.value)) {
        //remove white spaces
        tag.value = tag.value.replace(/\s/, "");
        tags.value.push(tag.value);
      }
      tag.value = "";
    };

    const handleSubmit = async () => {
      const post = {
        // id: Math.floor(Math.random() * 10000),
        title: title.value,
        body: body.value,
        tags: tags.value
      }
      await fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(post)
      })
    }
    return { body, title, tags, tag, handleKeydown, handleSubmit }
  },
};
</script>

<style>
  form {
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
  }
  input, textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid rgb(224, 224, 224);
  }
  textarea {
    height: 160px;
  }
  label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
  }
  label::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #00ff55;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1.5deg);
  }
  button {
    display: block;
    margin-top: 30px;
    background: #00ff55;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px
  }
  .pill {
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
  }
</style>