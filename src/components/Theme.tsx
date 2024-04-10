import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Slider from "react-slick";
// import {SliderWrapper} from "./_SlickSliderStyle";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Health from "./assets/health.png";
import Fitness from "./assets/fitness.png";
import Education from "./assets/education.png";
import Greentech from "./assets/greentech.png";
import Retail from "./assets/retail.png";
import Cybersecurity from "./assets/cybersecurity.png";
import Agriculture from "./assets/agricultural.png";
import Bio from "./assets/bio.png";
import Automation from "./assets/automation.png";
import Innovation from "./assets/innovation.png";

function ProcessFlow() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
  };

  return (
    <Container id="theme" sx={{ mt: { xs: 20 }, maxWidth: { xs: "1400px" } }}>
      <Box
        sx={{
          alignSelf: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "clamp(3.5rem, 10vw, 4rem)",
            fontFamily: "blanka",
            color: "#AAE6FF",
          }}
        >
          THEMES
        </Typography>
        <Typography
          sx={{
            alignSelf: "left",
            width: { sm: "100%", md: "100%" },
            mt: { xs: 5 },
            fontFamily: "Varela",
            fontSize: "22px",
            color: "white",
          }}
        >
          No problem is too big... No idea is too small
        </Typography>
      </Box>
      <div className="slider-container">
          <Slider {...settings}>
            <motion.div
              className="box"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="card w-96 bg-gradient-to-r from-[#3F80FF] to-[#5CE1E6] shadow-xl">
                <figure>
                  <img
                    src={Health}
                    alt="Shoes"
                    className="rounded-xl"
                    style={{ maxWidth: 390 }}
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h1 className="card-title" style={{fontFamily: "popBold", fontSize:"24px"}}>HEALTH CARE</h1>
                  <div className="card-actions">
                    <button className="btn btn-primary">Read More</button>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="box"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <div className="card w-96 bg-gradient-to-r from-[#3F80FF] to-[#5CE1E6] shadow-xl">
                <figure>
                  <img
                    src={Fitness}
                    alt="Shoes"
                    className="rounded-xl"
                    style={{ maxWidth: 390 }}
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h1 className="card-title" style={{fontFamily: "popBold", fontSize:"24px"}}>FITNESS AND SPORTS</h1>
                  <div className="card-actions">
                    <button className="btn btn-primary">Read More</button>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="box"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <div className="card w-96 bg-gradient-to-r from-[#3F80FF] to-[#5CE1E6] shadow-xl">
                <figure>
                  <img
                    src={Education}
                    alt="Shoes"
                    className="rounded-xl"
                    style={{ maxWidth: 390 }}
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h1 className="card-title" style={{fontFamily: "popBold", fontSize:"24px"}}>SMART EDUCATION</h1>
                  <div className="card-actions">
                    <button className="btn btn-primary">Read More</button>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="box"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <div className="card w-96 bg-gradient-to-r from-[#3F80FF] to-[#5CE1E6] shadow-xl">
                <figure>
                  <img
                    src={Greentech}
                    alt="Shoes"
                    className="rounded-xl"
                    style={{ maxWidth: 390 }}
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h1 className="card-title" style={{fontFamily: "popBold", fontSize:"24px"}}>GREEN TECH</h1>
                  <div className="card-actions">
                    <button className="btn btn-primary">Read More</button>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="box"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <div className="card w-96 bg-gradient-to-r from-[#3F80FF] to-[#5CE1E6] shadow-xl">
                <figure>
                  <img
                    src={Retail}
                    alt="Shoes"
                    className="rounded-xl"
                    style={{ maxWidth: 390 }}
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h1 className="card-title" style={{fontFamily: "popBold", fontSize:"24px"}}>SMART RETAIL</h1>
                  <div className="card-actions">
                    <button className="btn btn-primary">Read More</button>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="box"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <div className="card w-96 bg-gradient-to-r from-[#3F80FF] to-[#5CE1E6] shadow-xl">
                <figure>
                  <img
                    src={Cybersecurity}
                    alt="Shoes"
                    className="rounded-xl"
                    style={{ maxWidth: 390 }}
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h1 className="card-title" style={{fontFamily: "popBold", fontSize:"24px"}}>CYBERSECURITY</h1>
                  <div className="card-actions">
                    <button className="btn btn-primary">Read More</button>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="box"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <div className="card w-96 bg-gradient-to-r from-[#3F80FF] to-[#5CE1E6] shadow-xl">
                <figure>
                  <img
                    src={Agriculture}
                    alt="Shoes"
                    className="rounded-xl"
                    style={{ maxWidth: 390 }}
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h1 className="card-title" style={{fontFamily: "popBold", fontSize:"24px"}}>AGRICULTURE</h1>
                  <div className="card-actions">
                    <button className="btn btn-primary">Read More</button>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="box"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <div className="card w-96 bg-gradient-to-r from-[#3F80FF] to-[#5CE1E6] shadow-xl">
                <figure>
                  <img
                    src={Bio}
                    alt="Shoes"
                    className="rounded-xl"
                    style={{ maxWidth: 390 }}
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h1 className="card-title" style={{fontFamily: "popBold", fontSize:"24px"}}>BIO-INFORMATICS</h1>
                  <div className="card-actions">
                    <button className="btn btn-primary">Read More</button>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="box"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <div className="card w-96 bg-gradient-to-r from-[#3F80FF] to-[#5CE1E6] shadow-xl">
                <figure>
                  <img
                    src={Automation}
                    alt="Shoes"
                    className="rounded-xl"
                    style={{ maxWidth: 390 }}
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h1 className="card-title" style={{fontFamily: "popBold", fontSize:"24px"}}>SMART AUTOMATION</h1>
                  <div className="card-actions">
                    <button className="btn btn-primary">Read More</button>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="box"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <div className="card w-96 bg-gradient-to-r from-[#3F80FF] to-[#5CE1E6] shadow-xl">
                <figure>
                  <img
                    src={Innovation}
                    alt="Shoes"
                    className="rounded-xl"
                    style={{ maxWidth: 390 }}
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h1 className="card-title" style={{fontFamily: "popBold", fontSize:"24px"}}>OPEN INNOVATION</h1>
                  <div className="card-actions">
                    <button className="btn btn-primary">Read More</button>
                  </div>
                </div>
              </div>
            </motion.div>
          
          </Slider>
      </div>
      <Box
        sx={{
          alignSelf: "center",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            alignSelf: "left",
            width: { sm: "100%", md: "100%" },
            mt: { xs: 3 },
            fontFamily: "Varela",
            fontSize: "22px",
            color: "white",
          }}
        >
          Participants can submit their innovative ideas according to their
          choice of concerned theme irrespective of the already present problem
          statements.
        </Typography>
      </Box>
    </Container>
  );
}

export default ProcessFlow;
