import { alpha } from '@mui/material';
import Container from '@mui/material/Container';

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
        <div className="panel">
    <div className="container">
      <div className="photo">
        <div className="db">
          <img className="dp" src="nft6.png" alt="" />
        </div>
      </div>
      <div className="about">
        <div className="spand">
          <span className="sp">Debarati</span>
          <span className="sp">chairman, TEAM FUTURE</span>
        </div>
        <div className="patron">
          <span className="patron1">PATRON</span>
          <span className="border">
            <p />
          </span>
        </div>
      </div>
    </div>
  </div>

        </Container>

  )
}

export default ProcessFlow