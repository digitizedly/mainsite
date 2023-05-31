import { Grid, Typography } from "@mui/material";
//import { useEffect, useRef, useState } from "react";
import StyledTypography from "../Components/UI/StyledTypography";
import StyledBox from "../Components/UI/StyledBox";

const HomePage = () => {
  /*
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    setHeight(ref.current.clientHeight);
  }, [ref]);*/

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      //sx={{ height: "1000px", position: "relative" }}
      //ref={ref}
    >
      {/*<Grid
        item
        sx={{ position: "absolute", top: 0, zIndex: -1, width: "100%" }}
      >
        <RainCanvas height={height} />
      </Grid>*/}
      <StyledBox sx={{ width: "75%", marginTop: "100px" }}>
        <StyledTypography color="white">
          At Digitizedly, our mission is to empower businesses to thrive in the
          digital era. We believe that digital transformation is not just a
          trend but a necessity for businesses to stay competitive and relevant
          in today's fast-paced world. With our expertise in cutting-edge
          technologies and innovative strategies, we guide businesses on their
          journey towards digital transformation, helping them harness the full
          potential of digital tools and platforms. Our dedicated team of
          professionals works closely with our clients, understanding their
          unique needs and challenges, to deliver tailored solutions that drive
          growth, efficiency, and customer engagement. We are passionate about
          leveraging the power of technology to transform businesses digitally,
          enabling them to reach new heights of success. Through our
          collaborative approach, industry expertise, and commitment to
          excellence, we strive to be the trusted partner for businesses seeking
          to embark on a transformative digital journey. Together, let's embrace
          the digital age and unlock endless possibilities for your business
          with Digitizedly.
        </StyledTypography>
      </StyledBox>
    </Grid>
  );
};

export default HomePage;
