import react from "react";
import {
  Container,
  Grid,
  Image,
  Text,
  GridItem,
  VStack,
  Link,
  Button,
  HStack,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import MainLayout from "../../Components/Layout/MainLayout";
import Css from "./giaiphap.module.css";

const Index = () => {
  return (
    <MainLayout isHomePage={true}>
      <Container width={"100%"} className={Css.bannerContainer}>
        <Container filter={"brightness(50%)"}>
          <Image
            width={"100%"}
            height="500px"
            objectFit={"cover"}
            src="/img/bannerSolutions.jpg"
          />
        </Container>
      </Container>
    </MainLayout>
  );
};

export default Index;
