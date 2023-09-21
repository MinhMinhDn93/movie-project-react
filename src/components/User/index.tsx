import React from 'react'
import styles from './User.module.css'
import { Link } from 'react-router-dom'

const User = () => {
  console.log('ok')
  return (
    <div className={styles.userwrapper}>
        <img src="https://movie-site-delta.vercel.app/img/user.png?fbclid=IwAR2fV9fNRVLcxuKnLFk3NYy1XuTuYTqfL5fnsl3qit4AtzDQl2FgZHbet-E" alt="" className={styles.userimage} />
        <div className={styles.link_user}>
          <Link to={`/login`}>Login</Link>
          <Link to={`/register`}>Register</Link>
        </div>
    </div>
  )
}

export default User
