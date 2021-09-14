<template>
  <div class="home">
    <h1>Home Component </h1>
    <h3 ref="h3">hello, my name is {{name}} and my age is {{age}}</h3>
  </div>
  <button @click="handleClick">Click Me</button>
  <button @click="age++">Add 1 to age</button>
  <input type="text" v-model="name">
</template>

<script>
import { ref } from '@vue/reactivity'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  setup() {
    console.log(this);

    const h3 = ref(null)
    console.log(h3, h3.value);

    let name = ref('mario')
    let age = ref(30)

    // name.value
    // age.value

  const handleClick = () => {
    name.value = 'luigi'
    age.value = 35

  }

    return {
      name,
      age,
      handleClick
    }
  }
}
</script>
