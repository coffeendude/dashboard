import { createTheme } from "@mui/material/styles"
import { Box, CssBaseline, ThemeProvider } from "@mui/material"
import { useMemo } from "react"
import { themeSettings } from "./theme"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "@/scenes/navbar"
import Dashboard from "@/scenes/dashboard"
import Predictions from "@/scenes/predictions"


function App() {
  /* we're using useMemo to memoize the theme object so that it doesn't get recreated on every render, 
  also wy have an empty dependency array so that it only gets created once.
  We're using the createTheme function from @mui/material/styles to create the theme object and passing 
  the themeSettings object we created in ./theme as an argument.
  */
  const theme = useMemo(() => createTheme(themeSettings), [])

  return (
    <div className='app'>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* remember, styles work N,E,S,W */}
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/predictions" element={<Predictions />} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
