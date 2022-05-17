import react from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MenuContact from "./MenuContact";
import { Container } from "@chakra-ui/react";

function MainLayout({ children, isHomePage }) {
  return (
    <Container width={"100%"}>
      <Header isHomePage={isHomePage} />
      <MenuContact />
      {children}
      <Footer />
    </Container>
  );
}

export default MainLayout;
