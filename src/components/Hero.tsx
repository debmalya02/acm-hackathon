import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { TypeAnimation } from 'react-type-animation';
import './fonts/font.css';
import proImg from './assets/pogramming.png';
import logoImageSecond from './assets/logo1.png';
import Timer from './Timer';




export default function Hero() {
  return (
  
      <Stack alignContent='center'>
        <Grid container spacing={0} sm = 'auto'
        sx={(theme) => ({
          width: '100%',
          backgroundImage:
            theme.palette.mode === 'light'
              ? 'linear-gradient(180deg, #aad1fa, #FFF)'
              : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
          backgroundSize: '100% 50%',
          backgroundRepeat: 'no-repeat',
          pt:{xs: 25, sm:15}, pl: {sm:20}
        
        })}>
          <Grid item sm="auto" sx={{ width: { xs: '100%', sm: '40%' }, pt:{xs: 25, sm:8}}}>
              <Stack spacing={2}>
              <img
                        src={
                          logoImageSecond
                        }
        
                        alt="logo of sitemark"
                        style={ {width: '700px',
                        height: 'auto',
                        cursor: 'pointer'}}
                      />
                <Typography
        
                  color="text.secondary"
                  sx={{ alignSelf: 'left', width: { sm: '100%', md: '100%' }, fontFamily: 'Varela', fontSize: '22px'}}
                >
                  Explore our cutting-edge dashboard, delivering high-quality solutions
                  tailored to your needs. Elevate your experience with top-tier features
                  and services.
                </Typography>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: 'clamp(1rem, 2vw, 2rem)',
                    fontFamily: 'roboto',
                      color: (theme) =>
                        theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                  }}
                >
                  <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                'Code | Create | Conquer',
                1000,
                'Battle of Development',
                1000,
                'Mark the Date',
                1000,
                '15.08.2024',
                1000,
              ]}
              speed={50}
              repeat={Infinity}
            />
        
                </Typography>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={1}
                  useFlexGap
                  sx={{ pt: 2, width: { xs: '100%', sm: '100%' } }}
                >
                  {/* <TextField
                    id="outlined-basic"
                    hiddenLabel
                    size="small"
                    variant="outlined"
                    aria-label="Enter your email address"
                    placeholder="Your email address"
                    inputProps={{
                      autocomplete: 'off',
                      ariaLabel: 'Enter your email address',
                    }}
                  /> */}
                  <Button variant="contained" color="primary">
                    <Typography fontFamily="Varela">Submit using DEVFOLIO</Typography>
                  </Button>
                </Stack>
                {/* <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
                  By clicking &quot;Start now&quot; you agree to our&nbsp;
                  <Link href="#" color="primary">
                    Terms & Conditions
                  </Link>
                  .
                </Typography> */}
              </Stack>
        
          </Grid>
          <Grid item sx={{ pl: {sm:45}}}>
        
                      <img
                        src={
                          proImg
                        }
        
                        alt="logo of sitemark"
                        style={ {width: '400px',
                        height: 'auto',
                        cursor: 'pointer'}}
                      />
                      <Box sx={{pl:{sm:7}}}><Timer/></Box>
                      
          </Grid>
        </Grid>
      </Stack>
      
  );
}