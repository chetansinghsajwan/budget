import {
  FloatingButton as Rnui_FloatingButton,
  FloatingButtonProps as Rnui_FloatingButtonProps,
} from "react-native-ui-lib";

export type FloatingButtonProps = Rnui_FloatingButtonProps;

export const FloatingButton = (props: FloatingButtonProps) => {
  const newProps = { ...props };
  newProps.visible = newProps.visible ?? true;

  return <Rnui_FloatingButton {...newProps} />;
};
