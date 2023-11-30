import React, { useState, useRef } from "react";
import Container from "@mui/material/Container";
import logo1 from "../pictures/logo1.png";
import Button from "react-bootstrap/Button";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import slide1 from "../pictures/slide1.png";
import slide2 from "../pictures/slide2.png";
import slide3 from "../pictures/slide3.png";
import slide4 from "../pictures/slide4.png";
import news from "../pictures/news.png";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TextField from "@mui/material/TextField";
import 'react-slideshow-image/dist/styles.css';

function Home() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const specificSectionRef = useRef(null);
  const otherSectionRef = useRef(null);

  const handleButtonClick = () => {
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);

    // Clear the input fields
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  const spanStyle = {
    padding: "20px",
    background: "transparent",
    color: "#000000",
  };

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "37.4rem",
  };

  const slideImages = [slide3, slide2, slide1, slide4];

  const handleClick1 = () => {
    specificSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleOtherButtonClick = () => {
    otherSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick2 = () => {
    window.location.href = `/password`;
  };
  const handleClick3 = () => {
    window.location.href = `/signup`;
  };
  const handleClick4 = () => {
    window.location.href = `/authentication`;
  };
  const handleClick5 = () => {
    window.location.href = `/home`;
  };

  return (
    <>
      <header>
        <Container
          fluid="true"
          className="p-3"
          style={{
            height: "6rem",
            maxWidth: "100rem",
            backgroundColor: "#4B5320",
            padding: "1.1rem",
          }}
        >
          <img
            src={logo1}
            alt="Logo"
            className="rounded-circle"
            style={{
              border: "1px solid white",
              borderRadius: "50rem",
              height: "9rem",
              width: "9rem",
              marginLeft: "2%",
              marginBottom: "-8rem",
              marginTop: "-2rem",
              position: "relative",
              zIndex: "2",
            }}
          />
          <p
            style={{
              fontFamily: "Quicksand",
              marginTop: "-1rem",
              color: "white",
              paddingLeft: "0rem",
              fontWeight: "800",
              fontSize: "3rem",
              paddingRight: "0rem",
              paddingBottom: "0rem",
              marginLeft: "12rem",
              marginBottom: "-5.3rem",
            }}
          >
            Palestine Unveiled
          </p>
          <Button
            onClick={handleClick5}
            style={{
              cursor: "pointer",
              marginTop: "1.6rem",
              marginLeft: "39rem",
              width: "6rem",
              height: "3rem",
              backgroundColor: "white",
              borderColor: "white",
              borderRadius: "10rem",
              fontFamily: "Lato",
              fontWeight: "bold",
              fontSize: "0.9rem",
              color: "#4B5320",
            }}
          >
            Home
          </Button>
          <Button
            onClick={handleClick2}
            style={{
              cursor: "pointer",
              marginTop: "0.7rem",
              marginLeft: "1rem",
              width: "6rem",
              height: "3rem",
              backgroundColor: "white",
              borderColor: "white",
              borderRadius: "10rem",
              fontFamily: "Lato",
              fontWeight: "bold",
              fontSize: "0.9rem",
              color: "#4B5320",
            }}
          >
            Donate
          </Button>
          <Button
            onClick={handleClick1}
            style={{
              cursor: "pointer",
              marginTop: "0.7rem",
              marginLeft: "1rem",
              width: "6rem",
              height: "3rem",
              backgroundColor: "white",
              borderColor: "white",
              borderRadius: "10rem",
              fontFamily: "Lato",
              fontWeight: "bold",
              fontSize: "0.9rem",
              color: "#4B5320",
            }}
          >
            {" "}
            About us
          </Button>
          <Button
            onClick={handleClick4}
            style={{
              cursor: "pointer",
              marginTop: "0.7rem",
              marginLeft: "1rem",
              width: "6rem",
              height: "3rem",
              backgroundColor: "white",
              borderColor: "white",
              borderRadius: "10rem",
              fontFamily: "Lato",
              fontWeight: "bold",
              fontSize: "0.9rem",
              color: "#4B5320",
            }}
          >
            Sign in
          </Button>
          <Button
            onClick={handleClick3}
            style={{
              cursor: "pointer",
              marginTop: "0.7rem",
              marginLeft: "1rem",
              width: "6rem",
              height: "3rem",
              backgroundColor: "white",
              borderColor: "white",
              borderRadius: "10rem",
              fontFamily: "Lato",
              fontWeight: "bold",
              fontSize: "0.9rem",
              color: "#4B5320",
            }}
          >
            Sign up
          </Button>
        </Container>
      </header>
      <div className="slide-container">
        <Slide autoplay={true} duration={3000}>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage})`,
                  height: "38.5rem",
                }}
              >
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))}
        </Slide>
      </div>
      <div id="specificSectionRef" ref={specificSectionRef}>
        <Container
          fluid="true"
          className="p-3"
          style={{
            height: "41rem",
            maxWidth: "100rem",
            backgroundColor: "#4B5320",
            padding: "1.1rem",
          }}
        >
          <p
            style={{
              color: "white",
              paddingLeft: "5rem",
              margin: "0",
              paddingTop: "1.2rem",
              fontWeight: "800",
              fontSize: "3rem",
              marginBottom: "2.5rem",
              paddingRight: "5rem",
            }}
          >
            MISSION AND VISION
          </p>
          <div>
            <p
              style={{
                color: "white",
                paddingLeft: "5rem",
                margin: "0",
                paddingTop: "-4rem",
                fontWeight: "800",
                fontSize: "2rem",
                marginBottom: "1rem",
                paddingRight: "5rem",
              }}
            >
              MISSION
            </p>
            <p
              style={{
                color: "white",
                paddingLeft: "5rem",
                margin: "0",
                paddingTop: "-4rem",
                fontWeight: "800",
                fontSize: "1.2rem",
                marginBottom: "3rem",
                paddingRight: "5rem",
              }}
            >
              Our mission is to foster global awareness about the ongoing 
              challenges faced by the Palestinians. We provide 
              a platform that transcends biases, serving as a hub for Palestinians to 
              share their stories, events, and perspectives with the world. By facilitating 
              the exchange of ideas and information, we aim to break down 
              barriers and promote a deeper understanding of the Palestinian cause. 
              Additionally, we recognize the urgent need for aid and support in 
              the region. Our platform serves as a catalyst for individuals and organizations 
              to collaborate on initiatives that provide assistance 
              and relief to Palestine. Through unbiased reporting  
              and a commitment to human rights, we seek to inspire positive action and solidarity 
              in the pursuit of justice, peace, and a brighter future for Palestine.
            </p>
          </div>
          <div>
            <p
              style={{
                color: "white",
                paddingLeft: "5rem",
                margin: "0",
                paddingTop: "-4rem",
                fontWeight: "800",
                fontSize: "2rem",
                marginBottom: "1rem",
                paddingRight: "5rem",
              }}
            >
              VISION
            </p>
            <p
              style={{
                color: "white",
                paddingLeft: "5rem",
                margin: "0",
                paddingTop: "-4rem",
                fontWeight: "800",
                fontSize: "1.2rem",
                marginBottom: "8rem",
                paddingRight: "5rem",
              }}
            >
              A world where the global community stands with the people of Palestine and the 
              Palestinian cause and where Palestinian voices are heard and recognized. By 
              prioritizing unbiased reporting, community engagement, and upholding human rights, 
              we strive to inspire positive action. Through unwavering commitment to these principles, 
              we seek to drive positive change, foster international collaboration, and contribute to 
              the creation of a more just and equitable world.
            </p>
          </div>
        </Container>
      </div>
      <footer>
        <div id="other-section" ref={otherSectionRef}>
          <Container
            fluid="true"
            className="p-3"
            style={{
              height: "12rem",
              maxWidth: "100rem",
              backgroundColor: "#21292d",
              padding: "0.5rem",
            }}
          >
            <div onClick={handleOtherButtonClick}>
              <img
                src={news}
                alt="Logo"
                className="rounded-circle"
                style={{
                  cursor: "pointer",
                  borderRadius: "50rem",
                  height: "10rem",
                  width: "10rem",
                  marginLeft: "44%",
                  marginBottom: "-3.4rem",
                  marginTop: "-6rem",
                  position: "relative",
                  zIndex: "2",
                }}
              />
              <MailOutlineIcon
                style={{
                  cursor: "pointer",
                  height: "5rem",
                  width: "3.5rem",
                  color: "white",
                  marginLeft: "-6.8rem",
                  marginTop: "-8rem",
                  position: "relative",
                  zIndex: "2",
                  marginBottom: "1.4rem",
                }}
              >
                {" "}
              </MailOutlineIcon>
            </div>
            <p
              style={{
                color: "white",
                paddingLeft: "20rem",
                margin: "0",
                paddingTop: "-4rem",
                fontWeight: "800",
                fontSize: "1.5rem",
                marginBottom: "1.5rem",
                paddingRight: "5rem",
                position: "relative",
                zIndex: "2",
              }}
            >
              Subscribe to our newsletter to get the latest updates
            </p>
            <TextField
              id="standard-required"
              label="   FIRST NAME"
              variant="standard"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              InputLabelProps={{
                style: { color: "white", fontSize: "0.9rem" },
              }}
              InputProps={{
                style: {
                  color: "white",
                  borderBottom: "2px solid white", // Change the color and style of the line here
                },
              }}
              style={{ marginLeft: "14rem" }}
            />
            <TextField
              id="standard-required"
              label="LAST NAME"
              variant="standard"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              InputLabelProps={{
                style: { color: "white", fontSize: "0.9rem" },
              }}
              InputProps={{
                style: {
                  color: "white",
                  borderBottom: "2px solid white", // Change the color and style of the line here
                },
              }}
              style={{ marginLeft: "5rem" }}
            />
            <TextField
              id="standard-required"
              label=" EMAIL ADDRESS"
              variant="standard"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputLabelProps={{
                style: { color: "white", fontSize: "0.9rem" },
              }}
              InputProps={{
                style: {
                  color: "white",
                  borderBottom: "2px solid white", // Change the color and style of the line here
                },
              }}
              style={{ marginLeft: "5rem" }}
            />
            <Button
              onClick={handleButtonClick}
              type="submit"
              style={{
                cursor: "pointer",
                marginTop: "0.5rem",
                width: "5rem",
                height: "3rem",
                borderRadius: "2.3rem",
                fontFamily: "Lato",
                fontSize: "0.9rem",
                marginLeft: "2rem",
              }}
            >
              Submit
            </Button>
          </Container>
        </div>
      </footer>
    </>
  );
}

export default Home;
