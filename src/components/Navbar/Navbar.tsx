import classes from "./Navbar.module.scss"
import { IconMoon } from "@tabler/icons"
import { IconSunHigh } from "@tabler/icons"

interface Props {
  nextTheme: "light" | "dark"
  setTheme: (nextTheme: "light" | "dark") => void
}

export function Navbar({ nextTheme, setTheme }: Props) {
  return (
    <header className={classes.navbar}>
      <div className="container">
        <div className={classes.navbarContainer}>
          <span className={classes.navbarHeading}>Where in the world?</span>
          <div>
            {nextTheme === "light" && (
              <div className={classes.navbarModeWrapper} onClick={() => setTheme(nextTheme)}>
                <IconSunHigh className={classes.navbarIcon}></IconSunHigh>
                <span>Light Mode</span>
              </div>
            )}
            {nextTheme === "dark" && (
              <div className={classes.navbarModeWrapper} onClick={() => setTheme(nextTheme)}>
                <IconMoon className={classes.navbarIcon}></IconMoon>
                <span>Dark Mode</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
