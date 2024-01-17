import styles from './Navigation.module.css'

const Navigation = () => {
    console.log(styles)
  return (
    <>
      <nav className={`${styles.nav} container`}>
        <div className="nav-logo">
          <img src='images/logo.png' alt="brand-logo" />
        </div>
        <ul className={styles.nav}>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#location">Location</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
