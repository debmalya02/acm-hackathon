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


export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #aad1fa, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 50%',
        backgroundRepeat: 'no-repeat',
        
      })}
    >
      <Grid container spacing={6}>
        <Grid>
          <Container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left',
              pt: { xs: 14, sm: 30 },
              pb: { xs: 8, sm: 2 },
              pl: { xs: 'none', sm: 30 },
            }}
          >
            <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '100%' }}}>
              <Typography
                variant="h1"
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  align: 'left',
                  textAlign: 'left',
                  fontSize: 'clamp(3rem, 10vw, 4rem)',
                  fontFamily: 'logirent',
                    color: (theme) =>
                      theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                }}
              >
                Hackcrack&nbsp;
                {/* <Typography
                  component="span"
                  variant="h1"
                  sx={{
                    display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  alignSelf: 'center',
                  textAlign: 'center',
                  fontSize: 'clamp(3.5rem, 10vw, 4rem)',
                  fontFamily: 'MyFont',
          
                  }}
                >
                  2024
                </Typography> */}
              </Typography>
              <Typography
                textAlign="left"
                color="text.secondary"
                sx={{ alignSelf: 'left', width: { sm: '100%', md: '50%' }, fontFamily: 'Varela', fontSize: '22px'}}
              >
                Explore our cutting-edge dashboard, delivering high-quality solutions
                tailored to your needs. Elevate your experience with top-tier features
                and services.
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  align: 'left',
                  textAlign: 'left',
                  fontSize: 'clamp(1rem, 2vw, 2rem)',
                  fontFamily: 'roboto',
                    color: (theme) =>
                      theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                }}
              >
                <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              'Code | Create | Concour',
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
                alignSelf="left"
                spacing={1}
                useFlexGap
                sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
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
            {/* <Box
              id="image"
              sx={(theme) => ({
                mt: { xs: 8, sm: 10 },
                alignSelf: 'center',
                height: { xs: 200, sm: 700 },
                width: '100%',
                backgroundImage:
                  theme.palette.mode === 'light'
                    ? 'url("/static/images/templates/templates-images/hero-light.png")'
                    : 'url("/static/images/templates/templates-images/hero-dark.png")',
                backgroundSize: 'cover',
                borderRadius: '10px',
                outline: '1px solid',
                outlineColor:
                  theme.palette.mode === 'light'
                    ? alpha('#BFCCD9', 0.5)
                    : alpha('#9CCCFC', 0.1),
                boxShadow:
                  theme.palette.mode === 'light'
                    ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                    : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
              })}
            /> */}
          </Container>
        </Grid>
        <Grid
        sx={{
        
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 2 },
          
        }}>
          <Container sx={{
                     flexDirection: 'column',
                     alignItems: 'left',
                     display: { xs: 'none', sm: 'flex' },
                  }}>
                    <img
                      src={
                        proImg
                      }
          
                      alt="logo of sitemark"
                      style={ {width: '400px',
                      height: 'auto',
                      cursor: 'pointer'}}
                    />
                  </Container>
        </Grid>
      </Grid>
      
    </Box>
  );
}