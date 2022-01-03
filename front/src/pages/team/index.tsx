import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import Header from "../../components/header";

const Team: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header name={""} />
      <main className={styles.main}></main>
    </div>
  );
};

export default Team;
