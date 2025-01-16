import React from 'react'

const Createpost = () => {
  return (
    <div className='createpostPage'>

    <div className="cpContainer">
      <h1>Create New Post</h1>
      <div className="inputGp">
        <label htmlFor="">Title:</label>
        <input type="text"  placeholder='Title...'
        
        />
      </div>
      <div className="inputGp">
        <label htmlFor="">Post:</label>
        <textarea name="" placeholder='Post...' id="" cols="30" rows="10" 
        />
      </div>
      <button onClick={Createpost}>Submit Post</button>
    </div>
    </div>
  )
}

export default Createpost