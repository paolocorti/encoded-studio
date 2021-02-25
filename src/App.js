import { Container, Flex, NavLink, Grid, Card, Image, Text } from "theme-ui";
import stage from "./assets/images/stage_design.png";
import logo from "./assets/images/encoded.png";
import logoText from "./assets/images/text_logo.png";
import experiment from "./assets/images/experiment.png";
import cfl from "./assets/images/cfl.jpg";
import planar from "./assets/images/planar.png";
import lightCube from "./assets/images/light_cube.jpg";
import "./App.css";
import { isMobileWithTablet } from "./utils";
import Hero from "./Hero";

function CharsBar() {
  return (
    <div
      style={{
        fontSize: isMobileWithTablet ? "30px" : "3vw",
        position: "absolute",
        padding: "0 15px",
        textAlign: "center",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 3,
        letterSpacing: "10px",
        display: "flex",
        justifyContent: "space-between",
        height: isMobileWithTablet ? "30px" : "3vw",
        lineHeight: 1,
        opacity: 0.75,
        width: "100%",
        overflow: "hidden",
        initialLetterAlign: "alphabetic",
      }}
    >
      {/* 
       &#x02591;   
      &#x000A8; &#x000B6; &#x000B6; &#x000D7; &#x000E6;  &#x0204F;
      &#x02031; &#x002DA; &#x02253; &#x000C5; &#x000B5; &#x000FF; 
      &#x002DA; &#x02230;  &#x0229B; 
      &#x02640; &#x02ADA; &#x00024; */}
      &#x0002B; &#x02ADA; &#x000D7; &#x000B5; &#x02039; &#x022C6; &#x023B6;
      &#x0226C; &#x000AA; &#x0002B; &#x000AC; &#x00024; &#x000AA; &#x003B4;
      &#x021B6; &#x021C9; &#x0255D; &#x02AEF; &#x02294; &#x000F0; &#x022B7;
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Flex as="nav" px={isMobileWithTablet ? 0 : 0} py={3}>
        {/* <Image sx={{ width: "50px" }} src={logo} alt="Encoded Studio logo" /> */}
        {/* <NavLink href="#!" p={2}>
          Home
        </NavLink> */}
      </Flex>
      <Container
        px={0}
        sx={{
          position: "relative",
        }}
      >
        <Image
          sx={{
            width: "100%",
            maxWidth: "1200px",
            margin: "auto",
            position: "absolute",
            zIndex: 2,
            top: 0,
            bottom: 0,
          }}
          src={logoText}
          alt="Encoded Studio logo"
          className="heroImage"
        />
        <Hero />
      </Container>
      <Container
        px={isMobileWithTablet ? 3 : 5}
        sx={{ position: "relative", height: "50px" }}
      >
        <CharsBar />
      </Container>
      <Container p={isMobileWithTablet ? 3 : 5}>
        <Grid
          gap={4}
          columns={[
            isMobileWithTablet ? 1 : 2,
            isMobileWithTablet ? "1fr 1fr" : "2fr 1fr",
          ]}
        >
          <Container>
            <Text sx={{ fontSize: isMobileWithTablet ? "30px" : "6vw" }}>
              &#x000AC; Encoded.Studio is a research and development space
              &#x02192;
            </Text>
          </Container>
          <Container sx={{ overflow: "hidden" }}>
            <Text
              sx={{
                fontSize: isMobileWithTablet ? "40px" : "5vw",
                writingMode: "vertical-rl",
              }}
            >
              &#x02193; We decode data and complex matters in a creative way
              &#x000A9;
            </Text>
          </Container>
        </Grid>
      </Container>
      <Container p={isMobileWithTablet ? 3 : 5}>
        <Grid gap={4} columns={[isMobileWithTablet ? 1 : 2]}>
          <Card
            className="card"
            mt={isMobileWithTablet ? 3 : 0}
            sx={{ maxWidth: "500px" }}
          >
            <Image
              className="cardImage"
              src={lightCube}
              alt="Experiment: Light cube"
            />
            <Text className="cardText" sx={{ bottom: "164px" }}>
              &#x000AC; Light Cube
            </Text>
          </Card>
          <Card
            className="card"
            mt={isMobileWithTablet ? 3 : 6}
            sx={{ maxWidth: "500px" }}
          >
            <Image
              className="cardImage"
              src={experiment}
              alt="Experiment: Gradient Space"
            />
            <Text className="cardText">&#x000AC; Gradient Space</Text>
          </Card>
          <Card
            className="card"
            mt={isMobileWithTablet ? 3 : 0}
            sx={{ maxWidth: "500px" }}
          >
            <Image className="cardImage" src={planar} alt="Project: Planar" />
            <Text className="cardText" sx={{ bottom: "132px" }}>
              &#x000AC; Planar
            </Text>
          </Card>
          <Card
            className="card"
            mt={isMobileWithTablet ? 3 : 6}
            sx={{ maxWidth: "500px" }}
          >
            <Image
              className="cardImage"
              src={cfl}
              alt="Cross Fertilization Lab Winner"
            />
            <Text className="cardText">
              &#x000AC; Cross Fertilization Lab Winner
            </Text>
          </Card>
          <Card
            className="card"
            mt={isMobileWithTablet ? 3 : 0}
            sx={{ maxWidth: "500px" }}
          >
            <Image className="cardImage" src={stage} alt="Stage Design" />
            <Text className="cardText">
              &#x000AC; Stage Design for Visionnaire
            </Text>
          </Card>
        </Grid>
      </Container>

      <Container
        p={isMobileWithTablet ? 3 : 5}
        bg={"lighten"}
        sx={{ position: "relative" }}
      >
        <Flex sx={{ flexDirection: isMobileWithTablet ? "column" : "row" }}>
          <Flex
            sx={{
              justifyContent: "center",
              alignItems: "center",
              marginRight: "10px",
              flexDirection: isMobileWithTablet ? "column" : "row",
            }}
          >
            <Image
              sx={{ width: "50px" }}
              src={logo}
              alt="Encoded Studio logo"
            />
            <Text
              as="h2"
              sx={{ marginLeft: isMobileWithTablet ? "0" : "15px" }}
            >
              encoded.studio@gmail.com
            </Text>
          </Flex>
          <Flex
            sx={{
              justifyContent: "center",
              alignItems: "center",
              margin: isMobileWithTablet ? "0" : "0 10px",
            }}
          >
            <a
              href="https://www.instagram.com/encoded.studio"
              target="_blank"
              style={{
                color: "white",
                fontSize: "22px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Instagram
            </a>
          </Flex>
          <Flex
            sx={{
              justifyContent: "center",
              alignItems: "center",
              margin: isMobileWithTablet ? "0" : "0 10px",
            }}
          >
            <a
              href="https://www.linkedin.com/company/encoded-studio"
              target="_blank"
              style={{
                color: "white",
                fontSize: "22px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Linkedin
            </a>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
}

export default App;
