import { Grid } from "@mui/material";

const StyledLogo = () => {
  return (
    <Grid
      container
      sx={{
        height: "50px",
        width: "50px",
        backgroundColor: "#FFFFFF",
        borderRadius: "50%",
      }}
      alignItems="center"
      justifyContent="center"
    >
      <p
        style={{
          textAlign: "center",
          color: "#000000",
          fontSize: "36px",
          margin: "0px",
        }}
      >
        D
      </p>
    </Grid>
  );
};

export default StyledLogo;
