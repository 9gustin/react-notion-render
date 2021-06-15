import React, { useEffect, useLayoutEffect, useState } from 'react';
import { THEMES, THEME_KEY, THEMES_LABELS } from './constants';
import isNavigatorDarkTheme from '../../utils/isNavigatorDarkTheme';

import styles from './styles.module.css';

function ThemeToggler() {
  const [selectedTheme, setTheme] = useState();

  const handleChangeTheme = () => setTheme(THEMES[Object.keys(THEMES).find(theme => THEMES[theme] !== selectedTheme)])

  const actualTheme = () => localStorage.getItem(THEME_KEY);

  useLayoutEffect(() => {
    setTheme(actualTheme() || (isNavigatorDarkTheme() ? THEMES.DARK : THEMES.LIGHT));
  }, [])

  useEffect(() => {
    if (selectedTheme) {
      localStorage.setItem(THEME_KEY, selectedTheme);
      if (selectedTheme === THEMES.DARK) {
        document.body.classList.add(THEMES.DARK);
      } else {
        document.body.classList.remove(THEMES.DARK);
      }
    }
  }, [selectedTheme])

  return (
    <button onClick={handleChangeTheme} className={styles.button}>
      {THEMES_LABELS[selectedTheme]}
    </button>
  )
}

export default ThemeToggler;
