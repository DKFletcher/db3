import React, { useContext, useCallback } from 'react';
import { store } from '../store/store';
import { SetTheme } from '../store/actions';

export const ThemeSwitch = () => {
  const {
    state: { id, changeValue },
    dispatch,
  } = useContext(store);

  const changeThemeEvent = useCallback(() => dispatch(SetTheme()), [dispatch]);
  return (
    <section>
      <button type="button" onClick={changeThemeEvent}>
        theme
      </button>
    </section>
  );
};
