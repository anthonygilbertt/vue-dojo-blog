<template>
  <div class="home">
    <h1>Home Component </h1>
    <h3>hello, my name is {{name}} and my age is {{age}}</h3>
  </div>
  <button @click="handleClick">Click Me</button>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  setup() {
    let name = 'mario'
    let age = 30


  const handleClick = () => {
    console.log('you clicked me');
  }

    return {
      name,
      age,
      handleClick
    }
  }
}
</script>
