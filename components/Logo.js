import styles from "./Logo.module.css";

export default function Header({ title }) {
  return (
    <div className={styles.logoContainer}>
      <img src="MuddLogo.svg" className={styles.logo} />
      {title}
    </div>
  );
}
