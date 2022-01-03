import type { NextPage } from "next";
import { useState } from "react";
import Header from "../components/header";
import styles from "../styles/Home.module.css";
import TeamUrlForm from "../components/teamurlForm";
import TeamRegistForm from "../components/teamRegistForm";

export type SetPageIdProps = {
  setPageId: Function;
};

export type PageIdProps = {
  pageId: string;
};

/**
 * トップページ
 * @returns
 */
const Home: NextPage = () => {
  const [pageId, setPageId] = useState("");
  return (
    <div className={styles.container}>
      <Header title={""} />
      <main className={styles.main}>
        <div>
          {pageId ? (
            <TeamUrlForm pageId={pageId} />
          ) : (
            <TeamRegistForm setPageId={setPageId} />
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
