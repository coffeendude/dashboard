import { createTheme } from "@mui/material/styles"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { useMemo } from "react"
import { themeSettings } from "./theme"


function App() {
  /* we're using useMemo to memoize the theme object so that it doesn't get recreated on every render, 
  also wy have an empty dependency array so that it only gets created once.
  We're using the createTheme function from @mui/material/styles to create the theme object and passing 
  the themeSettings object we created in ./theme as an argument.
  */
  const theme = useMemo(() => createTheme(themeSettings), [])

  return (
    <div className='app'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <h1 className="">Hello, dude!</h1>
      </ThemeProvider>
    </div>
  )
}

export default App
