import React from 'react'
import { Link, useLocation } from "react-router-dom";
import styles from './NavItems.module.css'

type NavItemType ={
    label : string,
    icon?: React.ReactNode,
};
function NavItem ({label,icon}: NavItemType) {
  return (
    <li className={styles.navitem}>
        <div className={styles.icon}>{icon}</div>
        <div>{label}</div>
    </li>
  )
}

export default NavItem