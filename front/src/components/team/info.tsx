import React from "react";
import TeamInfo from "../../types/teamInfo";
import Name from "./name";
import TeamCalendar from "./teamCalendar";

type Props = {
  teamInfo?: TeamInfo;
};

const Info: React.FC<Props> = ({ teamInfo }) => {
  return teamInfo ? (
    <div>
      <Name name={teamInfo.name} />
      <pre>{teamInfo.description}</pre>
      <TeamCalendar />
    </div>
  ) : (
    <div></div>
  );
};

export default Info;
