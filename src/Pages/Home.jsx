import {useEffect, useState} from 'react'
import {getDocs, collection, deleteDoc, doc} from 'firebase/firestore'
import {db, auth} from '../../Firebase-config'

const Home = () => {

    const [postLists, setPostList ] = useState([]);

    const postCollectionRef = collection(db, "All-posts")

    useEffect(() => {
      const getPosts = async () => {
        const data = await getDocs(postCollectionRef)
        setPostList(data.docs.map((doc) =>({...doc.data(), id:doc.id})))
        console.log(data.docs.map((doc) =>({...doc.data(), id:doc.id})))
      }
      getPosts();
    }, [])




  return (
    <div>
      <h2> home page </h2>
    </div>
  )
}

export default Home;
