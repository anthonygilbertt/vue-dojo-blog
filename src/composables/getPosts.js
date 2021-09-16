import { ref } from '@vue/reactivity'

const getPosts = () => {
  const posts = ref([])
  const error = ref(null)

  const load = async () => {
    try {

      // simulate delay
      // await new Promise(resolve => {
      //   setTimeout(resolve, 2000) // after 2 seconds, we call the resolve function
      // })


      let data = await fetch('http://localhost:3000/posts')
      if (!data.ok) {
        throw Error('no data available')
      }
      posts.value = await data.json()
      console.log(posts.value)
    }
    catch (err) {
      error.value = err.message
      console.log(error.value);
    }
  }

  // load() -- We only want to invoke this inside of the component that uses it
  return { posts, error, load }

}

export default getPosts