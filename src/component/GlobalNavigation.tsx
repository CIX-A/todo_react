import Link from "next/link";
import styles from "./GlobalNavigation.module.scss";

export default function GlobalNavigation() {
  return (
    <nav className={styles.gnb}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/Practice01">Practice01</Link>
        </li>
      </ul>
    </nav>
  );
}
