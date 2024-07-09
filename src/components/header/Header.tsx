// components/Header.js
import React from "react";
import {
  FaBars,
  FaSearch,
  FaShoppingCart,
  FaMapMarkerAlt,
} from "react-icons/fa";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <button className={styles.sidebarToggle}>
          <FaBars />
        </button>
        <div className={styles.logo}>Medicine</div>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search Your medicine / ঔষধ ও পণ্য সার্চ করুন"
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>
            <FaSearch />
          </button>
        </div>
        <div className={styles.location}>
          <FaMapMarkerAlt /> Sirajganj
        </div>
        <div className={styles.cart}>
          <FaShoppingCart />
          <span className={styles.cartCount}>1</span>
        </div>
        <button className={styles.authButton}>Login / Sign up</button>
      </div>
    </header>
  );
};

export default Header;
