import { ref } from 'vue'

/* 
-  TODO Take in an array of posts so we can cycle through them
-  TODO Create a new tag set( so no dupes )
-  TODO Add the tags of each post to the new tag set
-  TODO Return a new single array of tags based on the set
 */

const useTags = (posts) => {
    const tags = ref([])
    const tagSet = new Set()

    posts.forEach(item => {
       item.tags.forEach(tag => tagSet.add(tag)) 
    });

    tags.value = [...tagSet] //here we are setting the value to a new array
    //  and we are spreading the new data set into the newly created array
    // and setting it equal to the new tags.value

    return {tags}
}


export default useTags