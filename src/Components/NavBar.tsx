import { Grid, Button, ButtonProps, useTheme } from "@mui/material";
import StyledLogo from "./UI/StyledLogo";
import { useNavigate } from "react-router-dom";
import StyledButton from "./UI/StyledButton";

const NavButton = (
  props: ButtonProps & { to: string; isPrimary?: boolean }
) => {
  const { to, isPrimary, ...buttonProps } = props;
  const navigate = useNavigate();
  return (
    <StyledButton
      {...buttonProps}
      onClick={() => navigate(to)}
      variant={isPrimary ? "outlined" : undefined}
    />
  );
};

const VerticalDivider = () => {
  const theme = useTheme();
  return (
    <Grid item sx={{ height: "36px" }}>
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
        padding: 2,
      }}
    >
      <Grid container sx={{ width: "fit-content" }}>
        <Grid item>
          <StyledLogo />
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
