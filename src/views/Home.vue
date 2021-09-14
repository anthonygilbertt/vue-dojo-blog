<template>
  <div class="home">
    <h1>Home Component </h1>
    <h2>Refs</h2>
    <p>{{ novaOne.name }} - {{ novaOne.age }}</p>
    <button @click="updateNovaOne">Update Nova One</button>

    <h2>Reactive</h2>
    <p>{{ novaTwo.name }} - {{ novaTwo.age }}</p>
    <button @click="updateNovaTwo">Update Nova Two</button>

  </div>
</template>

<script>
import { ref, reactive } from '@vue/reactivity'
// @ is an alias to /src


export default {
  name: 'Home',
  
  setup() {
    const novaOne = ref({ name: 'mario', age: 30 })
    const novaTwo = reactive({ name: 'luigi', age: 35 })

    const updateNovaOne = () => {
      novaOne.value.name = 'nova1'
      novaOne.value.age = 28
    }
    const updateNovaTwo = () => {
      novaTwo.name = 'nova2'
      novaTwo.age = 29
    }

    return { novaOne, updateNovaOne ,novaTwo , updateNovaTwo}

  }
}
</script>
<style>

button {
  cursor: pointer;
}
  
</style>
