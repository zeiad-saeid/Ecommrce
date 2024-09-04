

import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Hero from "./components/Hero/Hero";
import Header1 from "./components/Header/Header1";
import Header2 from "./components/Header/Header2";
import Header3 from "./components/Header/Header3";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ScrollTopButton from "./components/Scroll/ScrollTopButton";


const App = () => {
  const [theme, colorMode] = useMode();
  return (
  
     <ColorModeContext.Provider 
// @ts-ignore
     value={colorMode}>
     <ThemeProvider 
// @ts-ignore
     theme={theme}> 
     <CssBaseline />
     <Header1/>
    <Header2/>
    <Header3/>

  <Box bgcolor={theme.
// @ts-ignore
  palette.bg.main}>
       <Hero/>
       <Main/>
       <Footer/>

       <ScrollTopButton/>
  </Box>

       </ThemeProvider>
     </ColorModeContext.Provider>


  )
}

export default App