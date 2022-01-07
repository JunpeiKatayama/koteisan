import { useState } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { SetPageIdProps } from "../pages/index.js";

/**
 * チームフォーム登録フォームコンポーネント
 */
const TeamRegistForm = (props: SetPageIdProps) => {
  // domainを環境変数から取得
  const serverDomain: string | undefined =
    process.env.NEXT_PUBLIC_SERVER_DOMAIN;

  const [team, setTeam] = useState({
    id: null,
    page_id: null,
    name: "",
    description: "",
    active_time_from: "22:00",
    active_time_to: "24:00",
    created_at: null,
    updated_at: null,
  });

  /**
   * nameフォームの入力値をセット
   * @param event
   */
  const handleChangeName = (event: any) => {
    setTeam({ ...team, name: event.target.value });
  };

  /**
   * descriptionフォームの入力値をセット
   * @param event
   */
  const handleChangeDescription = (event: any) => {
    setTeam({ ...team, description: event.target.value });
  };

  /**
   * activeTimeFromの入力値をセット
   * @param event
   */
  const handleChangeActiveTimeFrom = (event: any) => {
    setTeam({ ...team, active_time_from: event.target.value });
  };

  /**
   * activeTimeToの入力値をセット
   * @param event
   */
  const handleChangeActiveTimeTo = (event: any) => {
    setTeam({ ...team, active_time_to: event.target.value });
  };

  /**
   * 登録ボタン押下時の処理
   */
  const handleClickSubmit = async () => {
    console.log(serverDomain);
    const res = await axios.post(`${serverDomain}/teams/create`, {
      team,
    });
    if (res.data.page_id) {
      props.setPageId(res.data.page_id);
    }
  };

  return (
    <div>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <TextField
            required
            id="name"
            label="チーム名"
            helperText="64文字以内"
            variant="standard"
            onChange={handleChangeName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            placeholder="例)週2基本22時〜！土日はやる気によりけり"
            multiline
            rows={4}
            id="description"
            label="説明"
            variant="standard"
            onChange={handleChangeDescription}
            style={{ width: 280 }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="activeTimeFrom"
            label="活動時間(from)"
            defaultValue="22:00"
            variant="standard"
            onChange={handleChangeActiveTimeFrom}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="activeTimeTo"
            label="活動時間(to)"
            defaultValue="24:00"
            variant="standard"
            onChange={handleChangeActiveTimeTo}
          />
        </Grid>
      </Grid>
      <Stack mt={2} direction="row" justifyContent="end">
        <Button variant="outlined" onClick={handleClickSubmit}>
          登録
        </Button>
      </Stack>
    </div>
  );
};

export default TeamRegistForm;
