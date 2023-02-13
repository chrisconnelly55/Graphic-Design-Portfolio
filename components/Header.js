import styles from "./Header.module.css";
import Logo from "@components/Logo";
import dynamic from "next/dynamic";

const Navigation = dynamic(() => import("@components/Navigation"), {
  ssr: false,
});

export default function Header({ title }) {
  return (
    <div className={styles.header}>
      <Logo title={title} />
      <span className={styles.spacer} />
      <Navigation />
    </div>
  );
}
