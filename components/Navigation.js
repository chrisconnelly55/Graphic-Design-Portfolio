import styles from "./Navigation.module.css";
import Link from "next/link";
import { Icon, useBreakpoint, Dropdown } from "@avsync.live/formation";
import { useRouter } from "next/router";

export default function Navigation({}) {
  const router = useRouter();
  const { isMobile } = useBreakpoint();
  return (
    <>
      {isMobile ? (
        <Dropdown
          options={[
            {
              dropDownOptions: [
                {
                  text: "Home",
                  href: "/",
                },
                {
                  text: "Work",
                  href: "/work",
                },
                {
                  text: "About",
                  href: "/about",
                },
              ],
              icon: "bars",
              iconPrefix: "fas",
            },
          ]}
        />
      ) : (
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
      )}
    </>
  );
}
