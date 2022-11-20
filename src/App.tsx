import { useState, useEffect } from "react"
import { Navbar } from "./components/Navbar/Navbar"
import { Countries } from "./components/Countries/Countries"

import { Routes, Route } from "react-router-dom"
import { Country } from "./components/Country/Country"

function App() {
  const [theme, setTheme] = useState("light")
  const nextTheme = theme === "light" ? "dark" : "light"

  useEffect(() => {
    document.body.dataset.theme = theme
  }, [theme])

  return (
    <>
      <Navbar nextTheme={nextTheme} setTheme={setTheme}></Navbar>
      <Routes>
        <Route path="/" element={<Countries />}></Route>
        <Route path="/country/:cca3" element={<Country />}></Route>
      </Routes>
    </>
  )
}

export default App
