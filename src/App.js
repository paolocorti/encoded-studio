import { Container, Flex, NavLink, Grid, Card, Image, Text } from "theme-ui";
import stage from "./assets/images/stage_design.png";
import logo from "./assets/images/encoded.png";
import logoText from "./assets/images/text_logo.png";
import experiment from "./assets/images/experiment.png";
import cfl from "./assets/images/cfl.jpg";
import "./App.css";
import { isMobileWithTablet } from "./utils";
import Hero from "./Hero";
function App() {
  return (
    <div className="app">
      <Flex as="nav" px={isMobileWithTablet ? 3 : 5} py={3}>
        <Image sx={{ width: "50px" }} src={logo} alt="Encoded Studio logo" />
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
        />
        <Hero />
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
            <Text sx={{ fontSize: isMobileWithTablet ? "30px" : "4vw" }}>
              Encoded.Studio is a research and development space, where we try
              to find a way to translate and decode the complexity of the world.
            </Text>
          </Container>
          <Container sx={{ overflow: "hidden" }}>
            <Text
              sx={{
                fontSize: isMobileWithTablet ? "40px" : "5vw",
                writingMode: "vertical-rl",
                textOrientation: "upright",
                letterSpacing: "-25px",
              }}
            >
              Decode data and complex matters in a creative way.
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
              src={stage}
              alt="Experiment: Light cube"
            />
            <Text className="cardText">Light Cube</Text>
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
            <Text className="cardText">Gradient Space</Text>
          </Card>
          <Card
            className="card"
            mt={isMobileWithTablet ? 3 : 0}
            sx={{ maxWidth: "500px" }}
          >
            <Image className="cardImage" src={stage} alt="Project: Planar" />
            <Text className="cardText">Planar</Text>
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
            <Text className="cardText">Cross Fertilization Lab Winner</Text>
          </Card>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
