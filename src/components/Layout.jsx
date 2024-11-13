import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "../styles/Layout.module.css";

const Layout = () => (
  <div className={styles.container}>
    <nav className={styles.navbar}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
    <div className={styles.content}>
      <Outlet />
    </div>
  </div>
);

export default Layout;
