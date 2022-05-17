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
import NextLink from "next/link";
import Css from "./sanpham.module.css";
import MenuIcon from "../../icon/MenuIcon";
import { useRouter } from "next/router";

const Index = () => {
  const TypeProductCardData = [
    {
      img: "/img/typeProduct/bodieukhien.png",
      alt: "bộ điều khiển",
      link: "san-pham/bo-dieu-khien",
      listProduct: [
        {
          label: "Bộ điều khiển khả trình MELSEC (PLC)",
          link: "https://www.mitsubishielectric.com/fa/products/cnt/plc/index.html",
        },
        {
          label: "Bộ điều khiển chuyển động",
          link: "https://www.mitsubishielectric.com/fa/products/cnt/ssc/index.html",
        },
        {
          label:
            "Bộ điều khiển số bằng máy tính (Computerized Numerical Controller - CNC)",
          link: "https://www.mitsubishielectric.com/fa/products/cnt/cnc/index.html",
        },
        {
          label: "Phần mềm phân tích dữ liệu-MELQIC",
          link: "https://www.mitsubishielectric.com/fa/products/cnt/melqic/index.html",
        },
      ],
    },
    {
      img: "/img/typeProduct/bomnuoc.png",
      alt: "bơm nước",
      link: "san-pham/bom-nuoc",
      listProduct: [
        {
          label: "Bơm ly tâm",
          link: "https://www.mitsubishi-electric.vn/lien-he?t=factoryAutomation",
        },
        {
          label: "Bơm chìm",
          link: "https://www.mitsubishi-electric.vn/lien-he?t=factoryAutomation",
        },
        {
          label: "Bơm tăng áp",
          link: "https://www.mitsubishielectric.com/fa/products/cnt/cnc/index.html",
        },
      ],
    },
    {
      img: "/img/typeProduct/dientoanbien.png",
      alt: "điện toán biên",
      link: "san-pham/dien-toan-bien",
      listProduct: [
        {
          label: "Máy tính công nghiệp",
          link: "https://www.mitsubishielectric.com/fa/products/edge/melipc/index.html",
        },
        {
          label: "Phần mềm Điện toán Biên",
          link: "https://www.mitsubishielectric.com/fa/products/edge/edgsw/index.html",
        },
      ],
    },
    {
      img: "/img/typeProduct/fasensor.png",
      alt: "fasensor",
      link: "san-pham/fasensor",
      listProduct: [
        {
          label: "MELSENSOR",
          link: "https://www.mitsubishielectric.com/fa/products/snsr/sensor/index.html",
        },
      ],
    },
    {
      img: "/img/typeProduct/giamsatdiennang.png",
      alt: "giám sát điện năng",
      link: "san-pham/giam-sat-dien-nang",
      listProduct: [
        {
          label: "Đồng hồ đo quản lý điện năng",
          link: "https://www.mitsubishielectric.com/fa/products/pmng/pmd/index.html",
        },
        {
          label: "Thiết bị hỗ trợ tiết kiệm năng lượng",
          link: "https://www.mitsubishielectric.com/fa/products/pmng/ems/index.html",
        },
      ],
    },
    {
      img: "/img/typeProduct/hienthitrucquan.png",
      alt: "hiển thị trực quan",
      link: "san-pham/hien-thi-truc-quan",
      listProduct: [
        {
          label: "Giao diện Người-Máy (HMI)-GOT",
          link: "https://www.mitsubishielectric.com/fa/products/hmi/got/index.html",
        },
        {
          label: "Phần mềm SCADA - MC Works64",
          link: "https://www.mitsubishielectric.com/fa/products/hmi/scada/index.html",
        },
      ],
    },
    {
      img: "/img/typeProduct/phanphoidienhathe.png",
      alt: "phân phối điện hạ thế",
      link: "san-pham/phan-phoi-dien-ha-the",
      listProduct: [
        {
          label: "Cầu dao điện hạ thế",
          link: "https://www.mitsubishielectric.com/fa/products/lvd/lvcb/index.html",
        },
        {
          label: "Công-tắc-tơ và Bộ khởi động động cơ",
          link: "https://www.mitsubishielectric.com/fa/products/lvd/lvsw/index.html",
        },
      ],
    },
    {
      img: "/img/typeProduct/phanphoidientrungthe.png",
      alt: "phân phối điện trung thế",
      link: "san-pham/phan-phoi-dien-trung-the",
      listProduct: [
        {
          label: "Máy cắt chân không trung thế (VCB) và Công-tắc-tơ trung thế",
          link: "https://www.mitsubishielectric.com/fa/vn_en/products/mv_distri/vc-breakers_vem-contactors/index.html",
        },
        {
          label: "Rơ le bảo vệ",
          link: "https://www.mitsubishielectric.com/fa/vn_en/products/mv_distri/protection-relays/index.html",
        },
      ],
    },
    {
      img: "/img/typeProduct/robotcongnghiep.png",
      alt: "robot công nghiệp",
      link: "san-pham/robot-cong-nghiep",
      listProduct: [
        {
          label: "Robots công nghiệp-MELFA",
          link: "https://www.mitsubishielectric.com/fa/products/rbt/robot/index.html",
        },
      ],
    },
    {
      img: "/img/typeProduct/sanphamdandong.png",
      alt: "sản phẩm dẫn động",
      link: "san-pham/san-pham-dan-dong",
      listProduct: [
        {
          label: "Động cơ Servos-MELSERVO",
          link: "https://www.mitsubishielectric.com/fa/products/drv/servo/index.html",
        },
        {
          label: "Bộ biến tần - FREQROL",
          link: "https://www.mitsubishielectric.com/fa/products/drv/inv/index.html",
        },
        {
          label: "Động cơ hộp số",
          link: "https://www.mitsubishielectric.com/fa/products/drv/gear/index.html",
        },
      ],
    },
  ];
  const TypeProductCard = ({ img, alt, link, listProduct }) => {
    return (
      <VStack>
        <Container className={Css.card}>
          <Container className={Css.imgBx}>
            <Image className={Css.img} src={img} alt={alt} />
          </Container>
          <Container
            className={Css.contentBx}
            width="100%"
            position={"relative"}
          >
            <Container className={Css.content} height="100%" width="100%">
              <VStack
                className={Css.text}
                display="flex"
                alignItems={"flex-start"}
                spacing="0px"
              >
                {listProduct.slice(0, 3).map((item, index) => (
                  <NextLink key={index} href={item.link} passHref>
                    <Link
                      target="_blank"
                      _hover={{
                        textDecoration: "none",
                      }}
                    >
                      <Text
                        _hover={{
                          color: "#3498db",
                        }}
                        textAlign={"left"}
                        margin={0}
                      >
                        &bull; {item.label}
                      </Text>
                    </Link>
                  </NextLink>
                ))}
                {listProduct.length > 3 ? <Text>...</Text> : null}
              </VStack>
              <Link
                cursor={"pointer"}
                position={"absolute"}
                bottom="16px"
                left={"16px"}
                padding="4px 8px"
                border={"none"}
                fontSize="12px"
                className={Css.ButtonHoverLightContainer}
              >
                <Container className={Css.Ligh1}></Container>
                <Container className={Css.Ligh2}></Container>
                <Container className={Css.Ligh3}></Container>
                <Container className={Css.Ligh4}></Container>
                Xem thêm
              </Link>
            </Container>
          </Container>
        </Container>
        <NextLink href={`/${link}`} passHref>
          <Link
            width={"268px"}
            textAlign="center"
            _hover={{ textDecoration: "none" }}
            cursor="pointer"
          >
            <Text
              as="h1"
              fontSize={"16px"}
              _hover={{
                color: "#3498db",
              }}
            >
              {alt.toUpperCase()}
            </Text>
          </Link>
        </NextLink>
      </VStack>
    );
  };
  return (
    <MainLayout isHomePage={true}>
      {/* <Modal /> */}
      <Container width={"100%"} className={Css.bannerContainer}>
        <Image
          width={"100%"}
          height="500px"
          objectFit={"cover"}
          src="/img/bannerProduct.jpg"
        />
      </Container>
      <VStack
        width={"100%"}
        display="flex"
        justifyContent="center"
        paddingTop="32px"
        paddingBottom="32px"
        bg="#fafafa"
      >
        {/* <HStack overflowX={"scroll"} width={"600px"}>
          {TypeProductCardData.map((item, index) => (
            <NextLink key={index} href={`/${item.link}`} passHref>
              <Container
                padding={"8px 16px"}
                boxShadow="0 12px 29px 0 rgb(0 0 0 / 7%)"
                bg={"#fff"}
                minHeight="80px"
                display={"flex"}
                justifyContent="center"
                alignContent={"center"}
                borderRadius="4px"
                cursor={"pointer"}
                transition="0.5s"
                _hover={{
                  bg: "#3498db",
                }}
              >
                <Text
                  textAlign={"center"}
                  margin={"auto"}
                  fontSize={"14px"}
                  width={"100px"}
                >
                  {item.alt.toUpperCase()}
                </Text>
              </Container>
            </NextLink>
          ))}
        </HStack> */}
        <HStack
          width={"1170px"}
          display="flex"
          justifyContent={"space-around"}
          alignItems="flex-start"
          paddingLeft={"16px"}
        >
          <VStack w={"250PX"} display="flex" alignItems={"flex-start"}>
            <Text
              fontSize={"32px"}
              width="100%"
              textAlign="left"
              fontWeight={700}
              color="#16558F"
            >
              DANH MỤC
            </Text>
            <VStack
              w={"280PX"}
              display="flex"
              alignItems={"flex-start"}
              spacing="0"
            >
              <NextLink href={`/san-pham`} passHref>
                <Link
                  paddingLeft={"16px"}
                  display={"flex"}
                  alignItems={"center"}
                  minHeight={"42px"}
                  width="100%"
                  borderBottom={"1px solid #3498db"}
                  backgroundColor={"#3498db"}
                  color="#FFF"
                  _hover={{
                    textDecoration: "none",
                    bg: "#fff",
                    color: "#16558F",
                  }}
                >
                  <Text justifyContent="center" margin={0}>
                    TẤT CẢ
                  </Text>
                </Link>
              </NextLink>
              {TypeProductCardData.map((item, index) => (
                <NextLink key={index} href={`/${item.link}`} passHref>
                  <Link
                    paddingLeft={"16px"}
                    display={"flex"}
                    alignItems={"center"}
                    minHeight={"42px"}
                    width="100%"
                    borderTop={index == 0 ? null : "1px solid #3498db"}
                    borderBottom={
                      index == TypeProductCardData.length - 1
                        ? "1px solid #3498db"
                        : null
                    }
                    _hover={{
                      textDecoration: "none",
                      bg: "#fff",
                      color: "#16558F",
                    }}
                  >
                    <Text justifyContent="center" margin={0}>
                      {item.alt.toUpperCase()}
                    </Text>
                  </Link>
                </NextLink>
              ))}
            </VStack>
          </VStack>
          <VStack>
            <HStack paddingBottom="32px">
              <Text
                fontSize={"32px"}
                fontWeight="600"
                margin={0}
                color="#16558f"
              >
                CÁC NHÓM SẢN PHẨM CHÍNH
              </Text>
              {/* <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              border={"none"}
              icon={<MenuIcon color={"#000"} />}
              variant="outline"
            />
            <MenuList
              borderRadius={"12px"}
              boxShadow={"0 12px 29px 0 rgb(0 0 0 / 7%)"}
              zIndex={2}
            >
              <MenuItem
                padding="8px 16px"
                border={"none"}
                fontSize={" 12px"}
                fontWeight={"400"}
                cursor="pointer"
                backgroundColor={"#3498db"}
                transition={" 0.6s"}
                _hover={{
                  backgroundColor: "#3498db",
                }}
              >
                TẤT CẢ
              </MenuItem>
              {TypeProductCardData.map((item, index) => (
                <MenuItem
                  padding="8px 16px"
                  border={"none"}
                  key={index}
                  fontSize={" 12px"}
                  fontWeight={"400"}
                  cursor="pointer"
                  backgroundColor={"white"}
                  transition={" 0.6s"}
                  _hover={{
                    backgroundColor: "#3498db",
                  }}
                >
                  {item.alt.toUpperCase()}
                </MenuItem>
              ))}
            </MenuList>
          </Menu> */}
            </HStack>
            <Grid
              templateRows="repeat(3, 1fr)"
              templateColumns="repeat(3, 1fr)"
              gap={4}
            >
              {TypeProductCardData.map((item, index) => (
                <GridItem key={index} rowSpan={1} colSpan={1}>
                  <TypeProductCard
                    listProduct={item.listProduct}
                    img={item.img}
                    alt={item.alt}
                    link={item.link}
                  />
                </GridItem>
              ))}
            </Grid>
          </VStack>
        </HStack>
      </VStack>
    </MainLayout>
  );
};

export default Index;
