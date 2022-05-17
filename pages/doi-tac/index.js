import { Container, Image, VStack, Text, HStack } from "@chakra-ui/react";
import react from "react";
import MailLayout from "../../Components/Layout/MainLayout";
import Css from "./doitac.module.css";
import RightTimeLine from "../../Components/Layout/RightTimeLine";
import LeftTimeLine from "../../Components/Layout/LeftTimeLine";

const Index = () => {
  return (
    <MailLayout isHomePage={true}>
      <VStack width={"100%"} display="flex" justifyContent={"center"}>
        <Container className={Css.bannerContainer} width={"100%"}>
          <Container width={"100%"} filter="brightness(50%)">
            <Image width={"100%"} src="/img/partner/banner.jpg" />
          </Container>
        </Container>
        <VStack width={"1170px"} spacing={"32px"} padding="32px 16px">
          <Text fontSize={"32px"} fontWeight="600" margin={0} color="#16558f">
            MITSUBISHI
          </Text>
          <RightTimeLine
            time={"2021"}
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
          />
          <Text
            paddingTop={"32px"}
            fontSize={"32px"}
            fontWeight="600"
            margin={0}
            color="#16558f"
          >
            SMC
          </Text>
          <LeftTimeLine
            time={"2022"}
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
          />
          <HStack spacing={"50px"}>
            <Image w={"500px"} src="img/partner/msbs.jpg" />
            <Image w={"500px"} src="img/partner/smc.jpg" />
          </HStack>
        </VStack>
      </VStack>
    </MailLayout>
  );
};

export default Index;
