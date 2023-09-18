// pages/index.js

import Link from "next/link";
import styles from "../styles/Home.module.css"; // Import the CSS module

function Home() {
  return (
    <div className={styles.home_container}>
      <h1 className={styles.welcome_text}>Welcome to School Results</h1>
      <nav>
        <ul className={styles.nav_links}>
          <li className={styles.nav_link}>
            <Link href="/results">Results</Link>
          </li>
          {/* Add more links here */}
        </ul>
      </nav>
    </div>
  );
}

export default Home;
