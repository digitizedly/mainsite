import { Grid, Typography } from "@mui/material";
import RainCanvas from "../Components/RainCanvas";
import { useEffect, useRef, useState } from "react";

const HomePage = () => {
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    setHeight(ref.current.clientHeight);
  }, [ref]);
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ height: "1000px", position: "relative" }}
      ref={ref}
    >
      {/*<Grid
        item
        sx={{ position: "absolute", top: 0, zIndex: -1, width: "100%" }}
      >
        <RainCanvas height={height} />
      </Grid>*/}
      <Grid item>
        <Typography color="secondary">CONTENT HERE</Typography>
      </Grid>
    </Grid>
  );
};

export default HomePage;
