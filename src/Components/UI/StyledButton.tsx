import { Button, ButtonBase, ButtonProps, useTheme } from "@mui/material";
import { CSSProperties } from "react";

export interface StyledButtonProps extends ButtonProps {
  variant?: "outlined";
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
            border: "4px solid white",
            color: "white",
          }}
          {...otherProps}
        />
      );
    default:
      return <Button {...otherProps} />;
  }
};

export default StyledButton;
