import React, { useContext } from "react";
import { ToggleButton } from "../components";

import { ThemeContext } from "../theme/ThemeContext";
// const Checked = () => <>on</>;
// const UnChecked = () => <>off</>;

const ThemeSwitch = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    
    <ToggleButton
      disabled={false}
      onChange={() => {
        if (darkMode) theme.dispatch({ type: "LIGHTMODE" });
        else theme.dispatch({ type: "DARKMODE" });
      }}
      // icons={{checked: <Checked />, unchecked: <UnChecked />}}
    />
  );
};
export default ThemeSwitch;
