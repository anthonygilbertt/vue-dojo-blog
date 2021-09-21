import { ref } from 'vue'
import { projectFirestore } from '@/firebase/config.js'

const getPosts = () => {

  const posts = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      const getCollection = await projectFirestore.collection('posts').get()
      
      console.log(getCollection.docs);

      //this fires a func for each doc
      // inside of the posts array
      posts.value = getCollection.docs.map(doc => {
        // Here we want to return a value that is going
        // to be added to the new array
        // console.log(doc.data()); //this extracts the data from the document

        // here we are going to return an object so each post is an object 
          // this spreads all of our data into a new object
        return { ...doc.data(), id: doc.id }

      }) 


    }
    catch(err) {
      error.value = err.message
    }
  }

  return { posts, error, load }
}

export default getPosts