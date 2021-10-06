import { useState, useContext, ReactNode } from 'react';
import ThemeContext, { ThemeState } from '../state/themeStore';
// function ConsumerComponent() {
//   const theme = useContext<ThemeState>(ThemeContext);
//   return (
//     <div>
//       <div>First: {theme.darkMode}</div>
//     </div>
//   );
// }

function UseThemeContextComponent() {
  const [theme, themeSet] = useState<ThemeState>({
    darkMode: false,
  });
  // console.log('theme: ', theme);
  return (
    <div>
      <button
        onClick={() =>
          themeSet({
            darkMode: !theme.darkMode,
          })
        }
      >
        Change Context
      </button>
      ß
    </div>
  );
}
export default UseThemeContextComponent;
