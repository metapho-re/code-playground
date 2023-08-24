import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
import { Theme } from "../types";

interface Props {
  theme: Theme;
}

export const ThemeIcon = ({ theme }: Props) =>
  theme === "dark" ? <MoonIcon /> : <SunIcon />;
