<template>
  <div class="home">
    <h1>Home Component </h1>
    <h3 ref="h3">hello, my name is {{name}} and my age is {{age}}</h3>
  </div>
  <button @click="handleClick">Click Me</button>
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

    let name = 'mario'
    let age = 30


  const handleClick = () => {
    console.log('you clicked me');
    console.log(h3, h3.value);
    h3.value.classList.add('test')
    h3.value.textContent = 'hello'
  }

    return {
      name,
      age,
      handleClick,
      h3
    }
  }
}
</script>
