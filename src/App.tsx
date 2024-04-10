// import * as React from 'react';
// import ReactDOM from 'react-dom/client'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from './components/AppAppBar'
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ProcessFlow from './components/ProcessFlow';
import Theme from './components/Theme';
import Team from './components/team/Team';
import Footer from './components/Footer';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'



// function ToggleCustomTheme({
//   showCustomTheme,
//   toggleCustomTheme,
// }: ToggleCustomThemeProps) {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         width: '100dvw',
//         position: 'fixed',
//         bottom: 24,
//       }}
//     >
//       <ToggleButtonGroup
//         color="primary"
//         exclusive
//         value={showCustomTheme}
//         onChange={toggleCustomTheme}
//         aria-label="Platform"
//         sx={{
//           backgroundColor: 'background.default',
//           '& .Mui-selected': {
//             pointerEvents: 'none',
//           },
//         }}
//       >
//         <ToggleButton value>
//           <AutoAwesomeRoundedIcon sx={{ fontSize: '20px', mr: 1 }} />
//           Custom theme
//         </ToggleButton>
//         <ToggleButton value={false}>Material Design 2</ToggleButton>
//       </ToggleButtonGroup>
//     </Box>
//   );
// }




function App() {


  const mode = 'dark';
  const defaultTheme = createTheme({ palette: { mode } });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Box sx={{
        width: '100%',
        backgroundImage: 'linear-gradient(to left, #3533CD, #000000)',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
      
      }}><AppAppBar /><Hero/><AboutUs/><ProcessFlow/><Theme/><Footer/>
      </Box>
    },
    {
      path: "team",
      element: <Box sx={{
        width: '100%',
        backgroundImage: 'linear-gradient(to left, #3533CD, #000000)',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
      
      }}><AppAppBar/><Team/><Footer/></Box>
    },
    
  ]);
  
 

  // const toggleCustomTheme = () => {
  //   setShowCustomTheme((prev) => !prev);
  // };

  return (
    
    <ThemeProvider theme={defaultTheme}>
      
      <CssBaseline />
      <RouterProvider router={router} />
      {/* <Box sx={{
        width: '100%',
        backgroundImage: 'linear-gradient(to left, #3533CD, #000000)',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
      
      }}>
        <AppAppBar />
        <Hero />
        <AboutUs />
        <ProcessFlow />
        <Theme />
        <Footer />
      </Box> */}
    </ThemeProvider>
  )
}

export default App
