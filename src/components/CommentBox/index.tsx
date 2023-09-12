import React, { useState } from 'react';
import styles from './CommentBox.module.css'
import ButtonRanks from './ButtonRanks';
const CommentBox = () => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (event:any) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    // Do something with the comment, such as sending it to a server
    console.log('Comment:', comment);
    setComment('');
  };

  return (
    <div className={styles.boxcomment_wrapper}>
      <h4>Give your feed back :</h4>
      <div className={styles.buttonrank}>
        <ButtonRanks/>
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Enter your comment..."
          rows={4}
          cols={50}
          className={styles.boxcomment}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentBox;