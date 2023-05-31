import { Grid, useTheme } from "@mui/material";
import StyledButton from "./UI/StyledButton";
import StyledLogo from "./UI/StyledLogo";

const BOX_SHADOW_LENGTH = -1;

const Footer = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      justifyContent="space-between"
      sx={{
        backgroundColor: theme.palette.secondary.main,
        padding: theme.spacing(2),
        height: theme.spacing(25),
        bottom: 0,
        position: "absolute",
        " -webkit-box-shadow": `0px ${BOX_SHADOW_LENGTH}px 20px 10px rgba(0,0,0,0.4)`,
        "-moz-box-shadow": `0px ${BOX_SHADOW_LENGTH}px 20px 10px rgba(0,0,0,0.4)`,
        "box-shadow": `0px ${BOX_SHADOW_LENGTH}px 20px 10px rgba(0,0,0,0.4)`,
      }}
    >
      <Grid
        container
        direction="column"
        sx={{ width: "fit-content" }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item sx={{ marginBottom: theme.spacing(2) }}>
          <StyledLogo />
        </Grid>
        <Grid item>
          <StyledButton variant="outlined" size="large">
            Contact Us
          </StyledButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
