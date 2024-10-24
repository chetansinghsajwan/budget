import {
  Button as Rnui_Button,
  ButtonProps as Rnui_ButtonProps,
} from "react-native-ui-lib";

export type ButtonProps = Rnui_ButtonProps;

export const Button = (props: ButtonProps) => {
  return <Rnui_Button {...props} />;
};
