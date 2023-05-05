import { Grid, Button, Typography } from "@mui/material";
import StyledLogo from "./UI/StyledLogo";

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
          <StyledLogo />
        </Grid>
        <Grid item>
          <Button sx={{ color: "white" }}>Home</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NavBar;
