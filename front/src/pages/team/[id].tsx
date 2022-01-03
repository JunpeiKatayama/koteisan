import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import Header from "../../components/header";

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

// domainを環境変数から取得
const serverDomain: string | undefined = process.env.NEXT_PUBLIC_SERVER_DOMAIN;

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
  console.log(id);
  const res: Response = await fetch(`${serverDomain}/teams/${id}`);
  const json = await res.json();
  return { teamInfo: json.teamInfo };
};

export default TeamPage;
