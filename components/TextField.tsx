import {
  TextField as Rnui_TextField,
  TextFieldProps as Rnui_TextFieldProps,
} from "react-native-ui-lib";

export type TextFieldProps = Rnui_TextFieldProps;

export const TextField = (props: TextFieldProps) => {
  const newProps = { ...props };

  if (!newProps.floatingPlaceholder) newProps.floatingPlaceholder = true;

  return <Rnui_TextField {...newProps} />;
};
