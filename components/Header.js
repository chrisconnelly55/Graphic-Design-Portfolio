import styles from "./Header.module.css";
import Logo from "@components/Logo";
import Navigation from "@components/Navigation";
export default function Header({ title }) {
  return (
    <div className={styles.header}>
      <Logo title={title} />
      <span className={styles.spacer} />
      <Navigation />
    </div>
  );
}
