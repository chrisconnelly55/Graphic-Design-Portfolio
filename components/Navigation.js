import styles from "./Navigation.module.css";
import Link from "next/link";

export default function Navigation({}) {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navs}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/work">Work</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
