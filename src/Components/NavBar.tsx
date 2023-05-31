import { Grid, useTheme, ButtonBase, ButtonProps } from "@mui/material";
//import StyledLogo from "./UI/StyledLogo";
import { useNavigate } from "react-router-dom";
import StyledButton from "./UI/StyledButton";

const BOX_SHADOW_LENGTH = 1;

const NavButton = (
  props: ButtonProps & { to: string; isPrimary?: boolean }
) => {
  const { to, isPrimary, ...buttonProps } = props;
  const theme = useTheme();
  const navigate = useNavigate();
  if (isPrimary) {
    return (
      <StyledButton
        {...buttonProps}
        variant="outlined"
        onClick={() => navigate(to)}
      />
    );
  } else {
    return (
      <ButtonBase
        {...buttonProps}
        sx={{
          color: theme.palette.primary.main,
          padding: theme.spacing(1),
          fontSize: 16,
        }}
        onClick={() => navigate(to)}
      />
    );
  }
};

const VerticalDivider = () => {
  const theme = useTheme();
  return (
    <Grid item sx={{ height: "36px", marginLeft: 1, marginRight: 1 }}>
      <div
        style={{
          width: "1px",
          backgroundColor: ` ${theme.palette.primary.main}`,
          height: "100%",
        }}
      />
    </Grid>
  );
};

const NavBar = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      justifyContent="space-between"
      sx={{
        backgroundColor: theme.palette.secondary.main,
        height: 100,
        padding: 1,
        " -webkit-box-shadow": `0px ${BOX_SHADOW_LENGTH}px 20px 10px rgba(0,0,0,0.4)`,
        "-moz-box-shadow": `0px ${BOX_SHADOW_LENGTH}px 20px 10px rgba(0,0,0,0.4)`,
        "box-shadow": `0px ${BOX_SHADOW_LENGTH}px 20px 10px rgba(0,0,0,0.4)`,
      }}
    >
      <Grid container sx={{ width: "fit-content" }}>
        <Grid item>
          {/*<StyledLogo />*/}
          <span style={{ color: "white", fontSize: 24, letterSpacing: 3 }}>
            𝐃𝐢𝐠𝐢𝐭𝐢𝐳𝐞𝐝𝐥𝐲
          </span>
        </Grid>
        <Grid
          container
          alignItems="center"
          sx={{ width: "fit-content", height: "fit-content", marginLeft: 2 }}
        >
          <Grid item>
            <NavButton to="/">Home</NavButton>
          </Grid>
          <VerticalDivider />
          <Grid item>
            <NavButton to="/work">Work</NavButton>
          </Grid>
          <VerticalDivider />
          <Grid item>
            <NavButton to="/about-us">About Us</NavButton>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <NavButton isPrimary to="/contact-us">
          Contact Us
        </NavButton>
      </Grid>
    </Grid>
  );
};

export default NavBar;
