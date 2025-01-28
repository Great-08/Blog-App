import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../Firebase-config';

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [postText, setPostText] = useState('');
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      setLoading(true);
      const postDoc = doc(db, "All-posts", id);
      const post = await getDoc(postDoc);
      if (post.exists()) {
        setTitle(post.data().title);
        setPostText(post.data().postText);
      }
      setLoading(false);
    };
    getPost();
  }, [id]);

  const editPost = async () => {
    if (title.trim() === '' || postText.trim() === '') {
      alert('Both title and post text are required.');
      return;
    }
    setUpdating(true);
    const postDoc = doc(db, "All-posts", id);
    await updateDoc(postDoc, { title, postText });
    setUpdating(false);
    navigate('/');
  };

  return (
    <div className="editPostPage createpostPage">
      <div className="cpContainer">
        <h1>Edit Post</h1>
        {loading ? (
          <div className="spinner">Loading...</div>
        ) : (
          <>
            <div className="inputGp">
              <label>Title:</label>
              <input
                placeholder="Title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="inputGp">
              <label>Post:</label>
              <textarea
                placeholder="Post..."
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                required
              />
            </div>
            <button onClick={editPost} disabled={updating}>
              {updating ? <div className="spinner">Updating...</div> : 'Update Post'}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default EditPost;