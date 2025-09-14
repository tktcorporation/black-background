import type { NextPage } from "next";
import Head from "next/head";
import { useCallback } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  type ScreenInfo = {
    availLeft: number;
    availTop: number;
    availWidth: number;
    availHeight: number;
  };

  const handleDarken = useCallback(async (): Promise<void> => {
    const anyWindow = window as any;
    if (anyWindow.getScreenDetails) {
      const details: { screens: ScreenInfo[] } =
        await anyWindow.getScreenDetails();
      details.screens.forEach((s) => {
        const features = `left=${s.availLeft},top=${s.availTop},width=${s.availWidth},height=${s.availHeight}`;
        window.open("/black", "", features);
      });
    } else {
      window.open("/black", "", "noopener,noreferrer");
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Black</title>
        <meta name="description" content="Black Background App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Black</h1>
        <button className={styles.button} onClick={handleDarken}>
          Darken Screens
        </button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by tktcorporation
        </a>
      </footer>
    </div>
  );
};

export default Home;
