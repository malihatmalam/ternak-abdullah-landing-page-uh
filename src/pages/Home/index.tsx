import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import OutputContent from "../../content/OutputContent.json";
import DeliveyContent from "../../content/DeliveryContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="intro.svg"
        id="intro"
      />
      {/* <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      /> */}
      <ContentBlock
        type="left"
        title={OutputContent.title}
        content={OutputContent.text}
        section={OutputContent.section}
        icon="otherproduct.svg"
        id="about"
      />
      <ContentBlock
        type="right"
        title={DeliveyContent.title}
        content={DeliveyContent.text}
        icon="delivery.svg"
        id="mission"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="kontak"
      />
    </Container>
  );
};

export default Home;
