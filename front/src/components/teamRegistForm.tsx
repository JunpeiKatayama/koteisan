import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const TeamRegistForm = () => {
    return(
			<div>
				<Grid container spacing={2} justifyContent="center" alignItems="center">
					<Grid item xs={12}>
						<TextField
							required
							id="standard-required"
							label="チーム名"
							helperText="64文字以内"
							variant="standard"
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							required
							id="standard-required"
							label="活動時間(from)"
							defaultValue="22:00"
							variant="standard"
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							required
							id="standard-required"
							label="活動時間(to)"
							defaultValue="24:00"
							variant="standard"
						/>
					</Grid>
				</Grid>
				<Stack mt={2} direction="row" justifyContent="end">
					<Button variant="outlined">登録</Button>
				</Stack>
			</div>
    );
}

export default TeamRegistForm;