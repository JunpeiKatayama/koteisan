import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { PageIdProps } from "../pages/index.js";

const TeamUrlForm = (props: PageIdProps) => {
  // domainを環境変数から取得
  const frontDomain: string | undefined = process.env.NEXT_PUBLIC_FRONT_DOMAIN;

  const teamPageUrl = frontDomain + "/team/" + props.pageId;

  const handleClickCopy = () => {
    navigator.clipboard.writeText(teamPageUrl);
  };

  return (
    <Stack direction="column" alignItems="flex-end" spacing={0.3}>
      <TextField
        id="standard"
        label="専用URL"
        defaultValue={teamPageUrl}
        variant="standard"
        style={{ width: 260 }}
      />
      <Stack direction="row">
        <IconButton aria-label="delete" href={teamPageUrl}>
          <OpenInNewIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={handleClickCopy}>
          <ContentCopyIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};
export default TeamUrlForm;
