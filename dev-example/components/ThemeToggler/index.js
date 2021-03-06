import React, { useEffect, useState } from 'react'
import { THEMES, THEME_KEY, THEMES_LABELS } from './constants'
import isNavigatorDarkTheme from '../../utils/isNavigatorDarkTheme'

import styles from './styles.module.css'

function ThemeToggler() {
  const [selectedTheme, setTheme] = useState()

  const handleChangeTheme = () =>
    setTheme(
      THEMES[
        Object.keys(THEMES).find((theme) => THEMES[theme] !== selectedTheme)
      ]
    )

  const actualTheme = () => window.localStorage.getItem(THEME_KEY)

  useEffect(() => {
    setTheme(
      actualTheme() || (isNavigatorDarkTheme() ? THEMES.DARK : THEMES.LIGHT)
    )
  }, [])

  useEffect(() => {
    if (selectedTheme) {
      window.localStorage.setItem(THEME_KEY, selectedTheme)
      if (selectedTheme === THEMES.DARK) {
        document.body.classList.add(THEMES.DARK)
      } else {
        document.body.classList.remove(THEMES.DARK)
      }
    }
  }, [selectedTheme])

  return (
    <button onClick={handleChangeTheme} className={styles.button}>
      {THEMES_LABELS[selectedTheme]}
    </button>
  )
}

export default ThemeToggler
