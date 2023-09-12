import React from 'react'
import styles from './User.module.css'

const User = () => {
  console.log('ok')
  return (
    <div>
        <img src="https://movie-site-delta.vercel.app/img/user.png?fbclid=IwAR2fV9fNRVLcxuKnLFk3NYy1XuTuYTqfL5fnsl3qit4AtzDQl2FgZHbet-E" alt="" className={styles.userimage} />
    </div>
  )
}

export default User
