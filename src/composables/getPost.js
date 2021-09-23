import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'


const getPost = (id) => {

    const post = ref(null)
    const error = ref(null)

    const load = async() => {
        try {
            let getCollection = await projectFirestore.collection('posts').doc(id)
                .orderBy('createdAt', 'desc')
                .get()

            if (!getCollection.exists) {
                throw Error('That post does not exist');
            }

            post.value = {...getCollection.data(), id: getCollection.id }
            console.log(post.value);


        } catch (err) {
            error.value = err.message
        }
    }

    return { post, error, load }
}

export default getPost