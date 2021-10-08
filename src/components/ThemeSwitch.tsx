import React, { useContext, useCallback } from 'react';
import { store } from '../store/store';
import { SetTheme } from '../store/actions';
import { ToggleButton } from '../components';

export const ThemeSwitch = () => {
  const {
    // state: { id, changeValue },
    dispatch,
  } = useContext(store);

  const changeThemeEvent = useCallback(() => dispatch(SetTheme()), [dispatch]);
  return (
    <ToggleButton
      disabled={false}
      onChange={() => changeThemeEvent}
      // defaultChecked={true}
      icons={{ checked: <Checked />, unchecked: <Unchecked /> }}
    />
  );
};

const Checked = () => <>🌜</>;
const Unchecked = () => <>🌞</>;
