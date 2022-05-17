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
import Css from "./lienhe.module.css";
import CallIcon16x16 from "../../icon/CallIcon16x16";
import NextLink from "next/link";
import MailIcon16Black from "../../icon/MailIcon16Black";

const Index = () => {
  const ContactData = [
    {
      partName: "Phòng Kinh Doanh",
      Name: "Mr.Thông",
      Phone: "(+84) 933 603 598",
      Mail: "ngocthong.huynh@auevn.com",
    },
    {
      partName: "Phòng Kỹ Thuật",
      Name: "Mr.Hải",
      Phone: "(+84) 933 606 598",
      Mail: "nhuhai.ho@auevn.com",
    },
    {
      partName: "Phòng Dự Án",
      Name: "Mr.Vũ",
      Phone: "(+84) 933 998 598",
      Mail: "quangvu.nguyen@auevn.com",
    },
    {
      partName: "Phòng Mua Hàng",
      Name: "Mr.Tuấn",
      Phone: "(+84) 979 301 422",
      Mail: "quoctuan.tran@auevn.com",
    },
    {
      partName: "Phòng Kế Toán",
      Name: "Mrs.Phương",
      Phone: "(+84) 905 997 598",
      Mail: "thiphuong.nguyen@auevn.com",
    },
  ];

  const CardContact = ({ partName, Name, Phone, Mail }) => {
    return (
      <VStack
        bg="#fff"
        width={"330px"}
        padding="16px"
        display={"flex"}
        alignItems="flex-start"
        spacing={"8px"}
        boxShadow=" 0 12px 29px 0 #3498db"
      >
        <Text
          fontSize={"18px"}
          color={"#3498db"}
          margin={0}
          paddingBottom="8px"
        >
          {partName}
        </Text>
        <Text paddingLeft="8px">{Name}</Text>
        <Text paddingLeft="8px" display={"flex"} alignItems={"center"}>
          <CallIcon16x16 color={"#000"} /> &nbsp; {Phone}
        </Text>
        <Text paddingLeft="8px" display={"flex"} alignItems={"center"}>
          <MailIcon16Black color={"#000"} /> &nbsp; {Mail}
        </Text>
      </VStack>
    );
  };

  return (
    <MainLayout isHomePage={true}>
      <VStack
        width={"full"}
        display="flex"
        justifyContent={"center"}
        bg={"#fafafa"}
        spacing="32px"
        paddingBottom={"32px"}
      >
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
        <VStack
          width={"1170px"}
          display="flex"
          alignItems={"flex-start"}
          paddingLeft="16px"
          spacing={"16px"}
        >
          <Text fontWeight={700} margin={0} fontSize="32px" color={"#3498db"}>
            Trụ sở chính:
          </Text>
          <Text paddingLeft="16px">
            Lô A4-13 Nguyễn Sinh Sắc, Phường Hoà Minh, Quận Liên Chiểu, Thành
            phố Đà Nẵng, Việt Nam
          </Text>
          <Text paddingLeft="16px" display={"flex"} alignItems={"center"}>
            <CallIcon16x16 color={"#000"} />
            &nbsp; (+84) 905 998 598
          </Text>
          <NextLink href="mailto: vietnamsales@auevn.com" passHref>
            <Text
              cursor={"pointer"}
              paddingLeft="16px"
              display={"flex"}
              alignItems={"center"}
            >
              <MailIcon16Black />
              &nbsp; vietnamsales@auevn.com
            </Text>
          </NextLink>
        </VStack>
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1uoKVckLyakwuXpnwyEB8iqeDCLuah-8D&ehbc=2E312F"
          width="1138"
          height="480"
        ></iframe>
        <Grid
          width={"1170px"}
          templateColumns="repeat(3, 1fr)"
          gap={32}
          margin="auto"
          justifyItems={"center"}
        >
          {ContactData.map((item, index) => (
            <CardContact
              key={index}
              partName={item.partName}
              Name={item.Name}
              Phone={item.Phone}
              Mail={item.Mail}
            />
          ))}
        </Grid>
      </VStack>
    </MainLayout>
  );
};

export default Index;
