import { Box, BoxProps, useTheme } from "@mui/material";

export interface StyledBoxProps extends BoxProps {}

const StyledBox = (props: StyledBoxProps) => {
  const { sx, children, ...otherProps } = props;
  const theme = useTheme();
  return (
    <Box
      {...otherProps}
      sx={{
        ...sx,
        padding: 4,
        backgroundColor: theme.palette.secondary.main,
        borderRadius: theme.spacing(4),
      }}
    >
      {children}
    </Box>
  );
};

export default StyledBox;
