import { Button, ButtonProps, useTheme } from "@mui/material";

export interface StyledButtonProps extends ButtonProps {
  variant?: "outlined" | "text";
}

const StyledButton = (props: StyledButtonProps) => {
  const theme = useTheme();
  const { variant, sx, size, ...otherProps } = props;
  let sizeCss = {};
  switch (size) {
    case "small":
      sizeCss = {};
      break;
    case "medium":
      sizeCss = {};
      break;
    case "large":
      sizeCss = {
        width: theme.spacing(22),
        height: theme.spacing(6),
        fontSize: "18px",
      };
      break;
  }
  switch (variant) {
    case "outlined":
      return (
        <Button
          sx={{
            ...sx,
            ...sizeCss,
            borderWidth: "4px",
            "&:hover": {
              borderWidth: "4px",
            },
          }}
          variant="outlined"
          {...otherProps}
        />
      );
    case "text":
      return <Button sx={{ ...sx, ...sizeCss }} />;
    default:
      return <Button {...props} />;
  }
};

export default StyledButton;
