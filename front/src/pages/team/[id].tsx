import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import Header from "../../components/header";
import TeamInfo from "../../types/teamInfo";
import Info from "../../components/team/info";
import axios from "axios";

type Props = {
  teamInfo?: TeamInfo;
};

// inner_domainを環境変数から取得
const serverDomain: string | undefined =
  process.env.NEXT_PUBLIC_SERVER_INNER_DOMAIN;

const TeamPage: NextPage<Props> = ({ teamInfo }) => {
  return (
    <div className={styles.container}>
      <Header title={teamInfo && teamInfo.name} />
      <main>
        <Info teamInfo={teamInfo} />
      </main>
    </div>
  );
};

TeamPage.getInitialProps = async ({ query }) => {
  const { id } = query;
  const res = await axios.get(`${serverDomain}/teams/${id}`);
  return { teamInfo: res.data.teamInfo };
};

export default TeamPage;
