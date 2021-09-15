import { ref } from '@vue/reactivity'

const getPost = (id) => {

    const post = ref()
    const error = ref(null)

    const load = async () => {
      try {
        let data = await fetch('http://localhost:3000/posts/' + id) 
        if(!data.ok) {
          throw Error('That post does not exist')
        }
        post.value = await data.json()
        console.log(post.value)
      }
      catch(err) {
        error.value = err.message
        console.log(error.value);
      }
    }

    // load() -- We only want to invoke this inside of the component that uses it
    return { post, error, load }

}

export default getPost