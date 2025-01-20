import { useState, useEffect } from "react"
import { addDoc, collection } from 'firebase/firestore'
import { db, auth } from '../../Firebase-config'
import { useNavigate } from "react-router-dom";

  const Createpost = ({isAuth}) => {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [postText, seetPostText] = useState("");

    const postCollectionRef = collection(db, "All-posts");

    const Createpost = async () => {
      await addDoc(postCollectionRef, {
        author: { name: auth.currentUser.displayName, id: auth.currentUser.uid, email: auth.currentUser.email},
        title,
        postText
      })
      navigate('/');
    }



    useEffect(() => {
      if (!isAuth) {
        navigate('/login')
      }
    }, [isAuth]);
  return (
    <div className='createpostPage'>

    <div className="cpContainer">
      <h1>Create New Post</h1>
      <div className="inputGp">
        <label htmlFor="">Title:</label>
        <input
         type="text" 
         placeholder='Title...'
         onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="inputGp">
        <label htmlFor="">Post:</label>
        <textarea name=""
         placeholder='Post...' 
         onChange={(e) => seetPostText(e.target.value)}
         id=""
         cols="30" 
         rows="10" 
        />
      </div>
      <button onClick={Createpost}>Submit Post</button>
    </div>
    </div>
  )
}
 

export default Createpost