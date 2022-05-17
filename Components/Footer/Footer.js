import { Container, HStack, Image, Link, VStack, Text } from "@chakra-ui/react";
import react from "react";
import CallIcon24x24 from "../../icon/CallIcon24x24";
import ZaloIcon24x24 from "../../icon/ZaloIcon24x24";
import FacebookIcon24x24 from "../../icon/FacebookIcon24x24";
import MailIcon24x24 from "../../icon/MailIcon24x24";
import Location from "../../icon/Location";
import InfoIcon from "../../icon/InfoIcon";
import NextLink from "next/link";
import Css from "./Footer.module.css";

const ContactData = [
  {
    Label: "Mail",
    Value: "Aue@gmail.com",
    Link: "",
  },
  {
    Label: "Facebook",
    Value: "AUEVN",
    Link: "https://www.facebook.com/auevietnam",
  },
];

const Footer = () => {
  const ContactSocialData = [
    {
      Label:
        "Lô A4-13 Nguyễn Sinh Sắc, Phường Hoà Minh, Quận Liên Chiểu, TP Đà Nẵng",
      icon: <Location />,
      link: "https://www.google.com/search?q=aue+vietnam+co.+ltd&rlz=1C1VDKB_enVN982VN982&tbm=lcl&sxsrf=ALiCzsaco6Pdvxo2sIfXSEwnmrWgHTmVkA%3A1652176053213&ei=tTR6YsTPDPmv2roP25mboAI&oq=aue+&gs_l=psy-ab.3.1.35i39k1j0i512k1l3j0i512i10k1l2j0i10i30k1j0i30k1j0i10i30k1j0i30k1.9638.10836.0.12559.5.5.0.0.0.0.116.405.2j2.5.0....0...1c.1.64.psy-ab..0.5.539.10..35i362i39k1j0i67k1j0i512i433k1j0i433i131k1j0i512i433i131k1j0i433i131i67k1j0i10k1.134.nYncxjfmGGc#rlfi=hd:;si:4639651199313291451,l,ChNhdWUgdmlldG5hbSBjby4gbHRkWhQiEmF1ZSB2aWV0bmFtIGNvIGx0ZJIBHWluZHVzdHJpYWxfZXF1aXBtZW50X3N1cHBsaWVymgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVI1TlU1eU1sZG5FQUU;mv:[[16.07922297731903,108.16513010457611],[16.078863022680974,108.1647554954239]]",
    },
    {
      Label: "AUE",
      icon: <FacebookIcon24x24 />,
      link: "https://www.facebook.com/auevietnam",
    },
    {
      Label: "(+84) 905998598",
      icon: <ZaloIcon24x24 />,
      link: "https://zalo.me/0905998598",
    },
    {
      Label: "vietnamsales@auevn.com",
      icon: <MailIcon24x24 />,
      link: "mailto: vietnamsales@auevn.com",
    },
    {
      Label: "Mã số thuế 0401812217",
      icon: <InfoIcon />,
    },
  ];
  const ContactSocial = ({ item }) => {
    return (
      <Link href={item.link ? item.link : null} color={"#fff"} cursor="pointer">
        <HStack spacing={16}>
          {item.icon}
          <Text
            _hover={{
              textDecoration: "none",
              color: "#add8e6",
            }}
            margin={0}
          >
            {item.Label}
          </Text>
        </HStack>
      </Link>
    );
  };
  const FooterMenu = ({ item, menuItem }) => {
    return (
      <VStack spacing={"10px"} alignItems="flex-start">
        <Text margin={0} fontSize={14} color={"#fff"} fontWeight="bold">
          {item.toUpperCase()}
        </Text>
        <VStack spacing={8}>
          {menuItem?.map((item, index) => (
            <Link
              key={`${item.name}-${index}`}
              href={item?.link}
              cursor="pointer"
            >
              <Text
                margin={0}
                fontSize={14}
                color={"#fff"}
                fontWeight="500"
                key={index}
                _hover={{
                  textDecoration: "none",
                  color: "#add8e6",
                }}
              >
                {item.name}
              </Text>
            </Link>
          ))}
        </VStack>
      </VStack>
    );
  };
  return (
    <>
      <VStack
        paddingBottom={"32px"}
        spacing={0}
        width={"100%"}
        display={"flex"}
        position={"relative"}
      >
        <Container
          width={"100%"}
          filter={"brightness(50%)"}
          position={"absolute"}
          bg="red"
          zIndex={-9}
          height="390px"
        >
          <Image
            width={"100%"}
            height="390px"
            src="/img/aueTeam.jpg"
            objectFit={"cover"}
          />
        </Container>
        <HStack padding={"16px"} width={"1170px"} alignItems="flex-start">
          <VStack width={"50%"} alignItems="flex-start">
            <Text fontSize={14} color={"#fff"} fontWeight="bold">
              BẠN CẦN TƯ VẤN, LIÊN HỆ NGAY ĐỂ ĐƯỢC HỖ TRỢ
            </Text>
            <HStack>
              <CallIcon24x24 color={"#fff"} />
              <Text color={"#fff"}>(+84) 905998598</Text>
            </HStack>
          </VStack>
          <VStack width={"50%"} spacing="8px" alignItems="flex-start">
            {ContactSocialData.map((item, index) => (
              <ContactSocial item={item} key={index} />
            ))}
          </VStack>
        </HStack>
        <HStack
          padding={"16px"}
          width="1170px"
          display={"flex"}
          justifyContent="space-between"
        >
          <FooterMenu
            key={"sanpham"}
            item={"sản phẩm"}
            menuItem={[
              {
                name: "sản phẩm 1",
              },
              {
                name: "sản phẩm 1",
              },
              {
                name: "sản phẩm 1",
              },
              {
                name: "sản phẩm 1",
              },
            ]}
          />
          <FooterMenu
            key={"dichvu"}
            item={"dịch vụ"}
            menuItem={[
              {
                name: "dịch vụ 1",
              },
              {
                name: "dịch vụ 1",
              },
              {
                name: "dịch vụ 1",
              },
              {
                name: "dịch vụ 1",
              },
            ]}
          />
          <FooterMenu
            key={"giaiphap"}
            item={"Giải pháp"}
            menuItem={[
              {
                name: "Giải pháp 1",
              },
              {
                name: "Giải pháp 1",
              },
              {
                name: "Giải pháp 1",
              },
              {
                name: "Giải pháp 1",
              },
            ]}
          />
          <FooterMenu
            key={"doitac"}
            item={"Đối tác"}
            menuItem={[
              {
                name: "Đối tác 1",
              },
              {
                name: "Đối tác 1",
              },
              {
                name: "Đối tác 1",
              },
              {
                name: "Đối tác 1",
              },
            ]}
          />
        </HStack>
      </VStack>
    </>
  );
};

export default Footer;
