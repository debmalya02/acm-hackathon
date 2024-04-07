import { alpha } from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

function ProcessFlow() {
  return (
        <Container
        id="processflow"
        sx={(theme) => ({
          mt: { xs: 8, sm: 10 },
          alignSelf: 'center',
          alignContent: 'centre ',
          height: { xs: 200, sm: 500 },
          [theme.breakpoints.up('xs')]: {
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
          },
        })}
        >
        <Container
          sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: { xs: 14, sm: 10 },
        pb: { xs: 8, sm: 12 },
          }}
        >
          <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
        <Typography
          variant="h1"
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignSelf: 'center',
            textAlign: 'center',
            fontSize: 'clamp(3.5rem, 10vw, 4rem)',
            fontFamily: 'logirent'
          }}
        >
          What is&nbsp;
          <Typography
            component="span"
            variant="h1"
            sx={{
              fontSize: 'clamp(3rem, 10vw, 4rem)',
              fontFamily: 'logirent',
              color: (theme) =>
                theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
            }}
          >
            hackspire
          </Typography>
        </Typography>
        <Typography
          textAlign="center"
          color="text.secondary"
          sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' }, fontFamily: 'Varela', fontSize: '20px',}}
        >
          Hackspire is a statewide initiative to provide engineering students to solve some of the common problems we face in our daily life, and thus inculcate a culture of product innovation and a mindset of real time problem solving.
        </Typography>
        </Stack>
        {/* <Stack
          direction={{ xs: 'column', sm: 'row' }}
          alignSelf="center"
          spacing={1}
          useFlexGap
          sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
        >
          <TextField
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
          />
          <Button variant="contained" color="primary">
            Start now
          </Button>
        </Stack>
        <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
          By clicking &quot;Start now&quot; you agree to our&nbsp;
          <Link href="#" color="primary">
            Terms & Conditions
          </Link>
          .
        </Typography>
          </Stack> */}
        </Container>
        </Container>

  )
}

export default ProcessFlow