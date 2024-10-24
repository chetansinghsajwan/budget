import {
  IconProps as Tabler_IconProps,
  IconPlus as Tabler_IconPlus,
} from "@tabler/icons-react-native";

const color = "white";
export type IconsProps = Tabler_IconProps;

export const IconPlus = (props: IconsProps) => (
  <Tabler_IconPlus color={color} />
);
