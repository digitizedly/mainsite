import { Grid, Button, Typography } from "@mui/material";

const NavBar = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      sx={{ backgroundColor: "black" }}
    >
      <Grid container sx={{ width: "fit-content" }}>
        <Grid item>
          <Typography>LOGO</Typography>
        </Grid>
        <Grid item>
          <Button sx={{ color: "white" }}>Home</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NavBar;
