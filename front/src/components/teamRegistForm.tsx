import { useState } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";

/**
 * チームフォーム登録フォームコンポーネント
 */
const TeamRegistForm = () => {
  const [team, setTeam] = useState({
    name: "",
    activeTimeFrom: "22:00",
    activeTimeTo: "24:00",
  });

  /**
   * nameフォームの入力値をセット
   * @param event
   */
  const handleChangeName = (event: any) => {
    setTeam({ ...team, name: event.target.value });
  };

  /**
   * activeTimeFromの入力値をセット
   * @param event
   */
  const handleChangeActiveTimeFrom = (event: any) => {
    setTeam({ ...team, activeTimeFrom: event.target.value });
  };

  /**
   * activeTimeToの入力値をセット
   * @param event
   */
  const handleChangeActiveTimeTo = (event: any) => {
    setTeam({ ...team, activeTimeTo: event.target.value });
  };

  /**
   * 登録ボタン押下時の処理
   */
  const handleClickSubmit = () => {
    axios.post(`http://localhost:3000/teams/create`, { team }).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  return (
    <div>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <TextField
            required
            id="standard-required"
            label="チーム名"
            helperText="64文字以内"
            variant="standard"
            onChange={handleChangeName}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="standard-required"
            label="活動時間(from)"
            defaultValue="22:00"
            variant="standard"
            onChange={handleChangeActiveTimeFrom}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="standard-required"
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
