import { Grid, useTheme } from "@mui/material";
import StyledButton from "./UI/StyledButton";
import StyledLogo from "./UI/StyledLogo";

const Footer = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      justifyContent="space-between"
      sx={{
        backgroundColor: "black",
        padding: theme.spacing(4),
        height: theme.spacing(50),
        WebkitMask:
          "radial-gradient(192.94px at 50% 265.00px,#000 99%,#0000 101%) calc(50% - 200px) 0/400px 100%,radial-gradient(192.94px at 50% -165px,#0000 99%,#000 101%) 50% 100px/400px 100% repeat-x;",
        mask: "radial-gradient(192.94px at 50% 265.00px,#000 99%,#0000 101%) calc(50% - 200px) 0/400px 100%,radial-gradient(192.94px at 50% -165px,#0000 99%,#000 101%) 50% 100px/400px 100% repeat-x;",
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
