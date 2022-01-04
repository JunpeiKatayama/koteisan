import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import Header from "../../components/header";
import axios from "axios";

type Props = {
  teamInfo?: TeamInfo;
};
type TeamInfo = {
  id: number;
  page_id: string;
  name: string;
  active_time_from: string;
  active_time_to: string;
  created_at: Date;
  updated_at: Date;
};

// inner_domainを環境変数から取得
const serverDomain: string | undefined =
  process.env.NEXT_PUBLIC_SERVER_INNER_DOMAIN;

const TeamPage: NextPage<Props> = ({ teamInfo }) => {
  return (
    <div className={styles.container}>
      <Header title={teamInfo && teamInfo.name} />
      <main className={styles.main}></main>
    </div>
  );
};

TeamPage.getInitialProps = async ({ query }) => {
  const { id } = query;
  const res = await axios.get(`${serverDomain}/teams/${id}`);
  return { teamInfo: res.data.teamInfo };
};

export default TeamPage;
