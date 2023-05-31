import { Typography, TypographyProps } from "@mui/material";

export interface StyledTypographyProps extends TypographyProps {}

const StyledTypography = (props: StyledTypographyProps) => {
  return <Typography {...props} />;
};

export default StyledTypography;
