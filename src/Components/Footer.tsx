import { Button, Grid } from "@mui/material";

const Footer = () => {
  return (
    <Grid
      container
      justifyContent="space-between"
      sx={{ backgroundColor: "blue" }}
    >
      <Grid container direction="column">
        <Grid item>LOGO</Grid>
        <Grid item>
          <Button>Contact Us</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
