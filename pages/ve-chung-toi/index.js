import { Container, HStack, Image, VStack, Text } from "@chakra-ui/react";
import react, { useState } from "react";
import MainLayout from "../../Components/Layout/MainLayout";
import Style from "./aboutme.module.css";
import DetailKeyPersonnelCard from "../../Components/Product/DetailKeyPersonnelCard";
import LeftTimeLine from "../../Components/Layout/LeftTimeLine";
import RightTimeLine from "../../Components/Layout/RightTimeLine";

const Index = () => {
  const KeyPersonnel = () => {
    const [card1, setCard1] = useState(1);
    const [card2, setCard2] = useState(1);
    const [card3, setCard3] = useState(1);
    return (
      <Container
        width={"100%"}
        display="flex"
        justifyContent={"center"}
        paddingTop="32px"
        paddingBottom="32px"
      >
        <VStack w={"1170px"}>
          <Text fontSize={"32px"} fontWeight="600" margin={0} color="#16558f">
            NHÂN LỰC CHỦ CHỐT
          </Text>
          <HStack spacing={"64px"} paddingTop="32px">
            <VStack
              spacing="32px"
              className={Style.CardKey1}
              transition="0.5s"
              opacity={card1}
              onMouseEnter={() => {
                setCard2(0);
                setCard3(0);
              }}
              onMouseLeave={() => {
                setCard2(1);
                setCard3(1);
              }}
            >
              <DetailKeyPersonnelCard
                img1={"/img/KeyPersonel/nqv.jpg"}
                img2={"/img/KeyPersonel/nqv2.jpg"}
                name="Nguyễn Quang Vũ"
                position="Giám đốc"
                bio="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
                phone="0905998598"
              />
              <Text>Nguyễn Quang Vũ | Giám đốc</Text>
            </VStack>
            <VStack
              spacing="32px"
              className={Style.CardKey2}
              transition="0.5s"
              opacity={card2}
              onMouseEnter={() => {
                setCard1(0);
                setCard3(0);
              }}
              onMouseLeave={() => {
                setCard1(1);
                setCard3(1);
              }}
            >
              <DetailKeyPersonnelCard
                img1={"/img/KeyPersonel/qt.jpg"}
                img2={"/img/KeyPersonel/nqv2.jpg"}
                name="Quốc Tuấn"
                position="Giám đốc"
                bio="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
                phone="0905998598"
              ></DetailKeyPersonnelCard>
              <Text>Nguyễn Quang Vũ | Giám đốc</Text>
            </VStack>
            <VStack
              spacing="32px"
              className={Style.CardKey3}
              transition="0.5s"
              opacity={card3}
              onMouseEnter={() => {
                setCard2(0);
                setCard1(0);
              }}
              onMouseLeave={() => {
                setCard2(1);
                setCard1(1);
              }}
            >
              <DetailKeyPersonnelCard
                img1={"/img/KeyPersonel/ht.jpg"}
                img2={"/img/KeyPersonel/nqv2.jpg"}
                name="Huỳnh Thông"
                position="Giám đốc"
                bio="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
                phone="0905998598"
              ></DetailKeyPersonnelCard>
              <Text>Nguyễn Quang Vũ | Giám đốc</Text>
            </VStack>
          </HStack>
        </VStack>
      </Container>
    );
  };
  const AUEVN = () => {
    return (
      <Container
        width={"100%"}
        display="flex"
        justifyContent={"center"}
        paddingTop="32px"
        paddingBottom="32px"
      >
        <VStack width={"1170px"} spacing="32px" className={Style.TimeLine}>
          <Text fontSize={"32px"} fontWeight="600" margin={0} color="#16558f">
            AUE
          </Text>
          <RightTimeLine
            time={"2017"}
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
          />
          <LeftTimeLine
            time={"2018"}
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
          />{" "}
          <RightTimeLine
            time={"2019"}
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
          />
          <LeftTimeLine
            time={"2020"}
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
          />{" "}
          <RightTimeLine
            time={"2021"}
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
          />
          <LeftTimeLine
            time={"2022"}
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
          />
        </VStack>
      </Container>
    );
  };
  return (
    <MainLayout>
      <VStack marginTop={"64px"}>
        <Container
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          className={Style.img}
          width={"100%"}
          position={"relative"}
          style={{
            backgroundImage: "url(/img/aueTeam.jpg)",
          }}
        >
          <VStack
            display={"flex"}
            alignItems="flex-start"
            width="1170px"
            position={"absolute"}
            spacing={"8px"}
            paddingLeft="32px"
            paddingRight="32px"
          >
            <Text color={"#FFF"}>AUE VIET NAM COMPANY LIMITED</Text>
            <VStack spacing={"4px"} display={"flex"} alignItems="flex-start">
              <Text color={"#FFF"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </Text>
              <Text color={"#FFF"}>
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment
              </Text>
              <Text color={"#FFF"}>
                ut I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human happiness
              </Text>
            </VStack>
          </VStack>
        </Container>
      </VStack>
      <AUEVN />
      <KeyPersonnel />
    </MainLayout>
  );
};

export default Index;
