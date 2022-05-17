import {
  Button,
  Container,
  HStack,
  Image,
  VStack,
  Text,
  Link,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import react, { useState, useEffect } from "react";
import MainLayout from "../Layout/MainLayout";
import Css from "./HomePage.module.css";
import CounterNumber from "./CounterNumber.module.css";
import Bulkhead from "../Layout/Bulkhead";

const HomePage = () => {
  const VideoBanner = () => {
    const Solution = [
      {
        Image: "/TypicalProjects/01.jpg",
        Title: "Giaiphap1",
        Decreption:
          "Cung cấp đầy đủ giải pháp liên quan tới các dòng robot công nghiệp, robot để bàn, cartesian, scara, robot tương tác 6 trục.",
        Link: "",
      },
      {
        Image: "/TypicalProjects/02.jpg",
        Title: "Giaiphap1",
        Decreption:
          "Cung cấp đầy đủ giải pháp liên quan tới các dòng robot công nghiệp, robot để bàn, cartesian, scara, robot tương tác 6 trục.",
        Link: "",
      },
      {
        Image: "/TypicalProjects/03.jpg",
        Title: "Giaiphap1",
        Decreption:
          "Cung cấp đầy đủ giải pháp liên quan tới các dòng robot công nghiệp, robot để bàn, cartesian, scara, robot tương tác 6 trục.",
        Link: "",
      },
      {
        Image: "/TypicalProjects/04.jpg",
        Title: "Giaiphap1",
        Decreption:
          "Cung cấp đầy đủ giải pháp liên quan tới các dòng robot công nghiệp, robot để bàn, cartesian, scara, robot tương tác 6 trục.",
        Link: "",
      },
    ];
    const SolutionCard = ({ item }) => {
      return (
        <VStack
          borderRadius={"4px"}
          boxShadow="0 12px 29px 0 rgb(0 0 0 / 7%)"
          width={"264px"}
          bg="#FFF"
          spacing={"16px"}
          paddingBottom={"16px"}
          overflow={"hidden"}
        >
          <Link width={"100%"} href={item.Link}>
            <Image
              objectFit={"cover"}
              height={"176px"}
              width={"100%"}
              src={item.Image}
              transition="0.8s"
              _hover={{
                opacity: ".7",
                transform: "scale(1.1)",
              }}
            />
          </Link>
          <VStack
            spacing={"16px"}
            display="flex"
            alignItems={"flex-start"}
            paddingRight="16px"
            paddingLeft="16px"
            transition="0.8s"
          >
            <Text margin={0} fontWeight="600">
              {item.Title}
            </Text>
            <Text
              fontSize={12}
              letterSpacing={1}
              lineHeight={1.8}
              fontWeight={400}
            >
              {item.Decreption}
            </Text>
            <Link className={Css.UndelineLink} href={item.Link}>
              Tư vấn giải pháp
            </Link>
          </VStack>
        </VStack>
      );
    };
    return (
      <Container width={"100%"} position={"relative"}>
        <Container position={"relative"}>
          <Container filter={"brightness(50%)"}>
            <video autoPlay muted loop id="myVideo" width={"100%"}>
              <source src={"video/bgvideo.mp4"} type="video/mp4" />
            </video>
          </Container>
          <VStack
            position={"absolute"}
            color="#FFF"
            top={"250px"}
            left="200px"
            alignItems={"flex-start"}
            fontWeight="700"
            fontSize={28}
          >
            <Text textTransform={"uppercase"}>
              Chúng tôi cam kết mang lại những điều tốt nhất
            </Text>
            <Text>Công Nghệ | Khoảng Cách | Chất Lượng | Đi Lên</Text>
          </VStack>
        </Container>
        <Container
          position={"relative"}
          width={"100%"}
          height={"250px"}
          display="flex"
          justifyContent={"center"}
        >
          <HStack
            position={"absolute"}
            display="flex"
            justifyContent={"center"}
            width={"1170px"}
            top="-200px"
            spacing={"32px"}
          >
            {Solution.map((item, index) => (
              <SolutionCard key={index} item={item} />
            ))}
          </HStack>
        </Container>
      </Container>
    );
  };

  const Application = () => {
    const AppData = [
      {
        Label: "Dầu khí",
        Image: "/img/homepage/daukhi.jpg",
        Descriptione: "abcde",
      },
      {
        Label: "Năng lượng",
        Image: "/img/homepage/1.jpg",
        Descriptione: "abcde",
      },
      {
        Label: "Đóng tàu",
        Image: "/img/homepage/3.jpg",
        Descriptione: "abcde",
      },
      {
        Label: "Lắp ráp ô tô",
        Image: "/img/homepage/4.jpg",
        Descriptione: "abcde",
      },
      {
        Label: "Thép",
        Image: "/img/homepage/5.jpg",
        Descriptione: "abcde",
      },
      {
        Label: "Xi măng",
        Image: "/img/homepage/6.jpg",
        Descriptione: "abcde",
      },
    ];
    const AppCard = ({ item }) => {
      return (
        <HStack
          position={"relative"}
          className={Css.card}
          width={"full"}
          bg="#fff"
          zIndex={999}
        >
          <VStack position={"absolute"} className={Css.LeftElement}>
            <Link>Thiết bị</Link>
            <Link>Giải pháp</Link>
          </VStack>
          <VStack className={Css.box} display="flex">
            <Image src={item.Image} />
            <Text>{item.Label}</Text>
            <Text>{item.Decreption}</Text>
          </VStack>
        </HStack>
      );
    };
    return (
      <Container
        width={"100%"}
        display={"flex"}
        justifyContent="center"
        bg="#fafafa"
        paddingTop={"32px"}
        paddingBottom={"32px"}
      >
        <VStack alignItems="center" width={"1170px"}>
          <Text fontSize={"32px"} fontWeight="600" margin={0} color="#16558f">
            ỨNG DỤNG
          </Text>
          <Text fontSize={"16px"} fontWeight="500" paddingBottom={"32px"}>
            Chúng tôi cung cấp nhiều sản phẩm được ứng dụng vào các ngành công
            nghiệp khách nhau.
          </Text>
          <HStack spacing={"16px"} display="flex" justifyContent={"center"}>
            {AppData.map((item, index) => (
              <AppCard item={item} key={index} />
            ))}
          </HStack>
        </VStack>
      </Container>
    );
  };

  const MainProduct = () => {
    const MainProductData = [
      {
        Name: "ĐẦU PHUN LECHLER",
        Img: "/img/mainproduct/lechler.jpg",
        Des: "Đầu phun đáp ứng mọi nhu cầu ứng dụng khác nhau của các ngành công nghiệp và sự khác biệt trong từng công đoạn: tẩy rửa, phun hóa chất, bôi trơn",
        link: "",
      },
      {
        Name: "HollySys",
        Img: "/img/mainproduct/hollysys.jpg",
        Des: "HollySys là nhà cung cấp giải pháp tự động hóa và CNTT hàng đầu trong khu vực Đông Nam Á, tập trung vào các lĩnh vực tự động hoá quy trình, nhà máy, vận tải đường sắt, cơ khí và kỹ thuật.",
        link: "",
      },
      {
        Name: "CẢM BIẾN IFM",
        Img: "/img/mainproduct/ifm.jpg",
        Des: "Không những IFM có dải sản phẩm áp dụng trong mọi lĩnh vực yêu cầu của tự động hóa đối với các ngành mà còn cung cấp các sản phẩm công nghệ nhận điện hình ảnh công nghiệp tiên tiến nhất.",
        link: "",
      },
    ];
    const MainProDuctCard = ({ item }) => {
      return (
        <VStack className={Css.MainProCard}>
          <Container className={[Css.face, Css.face1].join(" ")}>
            <Container className={Css.content}>
              <Image className={Css.Image} src={item.Img} />
              <Text className={Css.textName}>{item.Name}</Text>
            </Container>
          </Container>
          <Container className={[Css.face, Css.face2].join(" ")}>
            <Container className={Css.content}>
              <Text className={Css.text}>{item.Des}</Text>
              <Link className={Css.link} href={item.link}>
                Read more
              </Link>
            </Container>
          </Container>
        </VStack>
      );
    };
    return (
      <Container
        width={"100%"}
        display="flex"
        justifyContent={"center"}
        marginTop="32px"
      >
        <VStack alignItems="center" width={"1170px"}>
          <Text fontSize={"32px"} fontWeight="600" margin={0} color="#16558f">
            SẢN PHẨM CHÍNH
          </Text>
          <Text fontSize={"16px"} fontWeight="500" paddingBottom={"16px"}>
            Sản phẩm và giải pháp tốt nhất dành cho bạn.
          </Text>
          <HStack className={Css.Container} spacing="32px">
            {MainProductData.map((item, index) => (
              <MainProDuctCard key={index} item={item} />
            ))}
          </HStack>
        </VStack>
      </Container>
    );
  };

  const Achievement = () => {
    const [CounterNumber1, setCounterNumber1] = useState("");
    const [CounterNumber2, setCounterNumber2] = useState("");
    const [CounterNumber3, setCounterNumber3] = useState("");
    const [CounterNumber4, setCounterNumber4] = useState("");
    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 566) {
          setCounterNumber1(CounterNumber.CounterNumber1);
          setCounterNumber2(CounterNumber.CounterNumber2);
          setCounterNumber3(CounterNumber.CounterNumber3);
          setCounterNumber4(CounterNumber.CounterNumber4);
        }
      });
    }, []);
    return (
      <Container
        width={"100%"}
        position={"relative"}
        justifyContent="center"
        display={"flex"}
        bg="#fafafa"
        marginTop="32px"
        paddingBottom="32px"
      >
        <HStack
          width={"1170px"}
          spacing="120px"
          justifyContent="center"
          paddingTop="64px"
        >
          <Image src="/img/homepage/vietnam.png" width={"250px"} />
          <VStack spacing={"32px"}>
            <HStack
              display={"flex"}
              justifyContent="flex-start"
              padding={"16px"}
              spacing={"32px"}
              bg={"none"}
              minWidth={"400px"}
              backgroundColor={"#63a4ff"}
              backgroundImage={
                "linear-gradient(315deg, #63a4ff 0%, #83eaf1 74%)"
              }
            >
              <HStack minWidth={"75px"} spacing="5px">
                <Container
                  className={CounterNumber1}
                  fontSize={"24px"}
                  margin="0"
                  fontWeight="600"
                  color={"#3498db"}
                ></Container>
                <Text
                  color={"#3498db"}
                  fontSize={"24px"}
                  margin={0}
                  fontWeight="600"
                >
                  +
                </Text>
              </HStack>
              <VStack display={"flex"} alignItems="flex-start">
                <Text
                  color={"#3498db"}
                  fontSize={"16px"}
                  margin="0"
                  fontWeight="600"
                >
                  NĂM HOẠT ĐỘNG
                </Text>
                <Text fontSize={"16px"} margin="0" fontWeight="500">
                  Thành lập từ năm 2017
                </Text>
              </VStack>
            </HStack>
            <HStack
              display={"flex"}
              justifyContent="flex-start"
              padding={"16px"}
              spacing={"32px"}
              bg={"none"}
              minWidth={"400px"}
              backgroundColor={"#63a4ff"}
              backgroundImage={
                "linear-gradient(315deg, #63a4ff 0%, #83eaf1 74%)"
              }
            >
              <HStack minWidth={"75px"} spacing="5px">
                <Container
                  className={CounterNumber2}
                  fontSize={"24px"}
                  margin="0"
                  fontWeight="600"
                  color={"#3498db"}
                ></Container>
                <Text
                  color={"#3498db"}
                  fontSize={"24px"}
                  margin={0}
                  fontWeight="600"
                >
                  +
                </Text>
              </HStack>
              <VStack display={"flex"} alignItems="flex-start">
                <Text
                  color={"#3498db"}
                  fontSize={"16px"}
                  margin="0"
                  fontWeight="600"
                >
                  KHÁCH HÀNG
                </Text>
                <Text fontSize={"16px"} margin="0" fontWeight="500">
                  Hơn 1k khách hàng
                </Text>
              </VStack>
            </HStack>
            <HStack
              display={"flex"}
              justifyContent="flex-start"
              padding={"16px"}
              spacing={"32px"}
              bg={"none"}
              minWidth={"400px"}
              backgroundColor={"#63a4ff"}
              backgroundImage={
                "linear-gradient(315deg, #63a4ff 0%, #83eaf1 74%)"
              }
            >
              <HStack minWidth={"75px"} spacing="5px">
                <Container
                  className={CounterNumber3}
                  fontSize={"24px"}
                  margin="0"
                  fontWeight="600"
                  color={"#3498db"}
                ></Container>
                <Text
                  color={"#3498db"}
                  fontSize={"24px"}
                  margin={0}
                  fontWeight="600"
                >
                  +
                </Text>
              </HStack>
              <VStack display={"flex"} alignItems="flex-start">
                <Text
                  color={"#3498db"}
                  fontSize={"16px"}
                  margin="0"
                  fontWeight="600"
                >
                  DỰ ÁN
                </Text>
                <Text fontSize={"16px"} margin="0" fontWeight="500">
                  Nhiều dự án
                </Text>
              </VStack>
            </HStack>
            <HStack
              display={"flex"}
              justifyContent="flex-start"
              padding={"16px"}
              spacing={"32px"}
              bg={"none"}
              minWidth={"400px"}
              backgroundColor={"#63a4ff"}
              backgroundImage={
                "linear-gradient(315deg, #63a4ff 0%, #83eaf1 74%)"
              }
            >
              <HStack minWidth={"75px"} spacing="5px">
                <Container
                  className={CounterNumber4}
                  fontSize={"24px"}
                  margin="0"
                  fontWeight="600"
                  color={"#3498db"}
                ></Container>
                <Text
                  color={"#3498db"}
                  fontSize={"24px"}
                  margin={0}
                  fontWeight="600"
                >
                  %
                </Text>
              </HStack>
              <VStack display={"flex"} alignItems="flex-start">
                <Text
                  color={"#3498db"}
                  fontSize={"16px"}
                  margin="0"
                  fontWeight="600"
                >
                  DOANH NGHIỆP FDI
                </Text>
                <Text fontSize={"16px"} margin="0" fontWeight="500">
                  FDI
                </Text>
              </VStack>
            </HStack>
          </VStack>
        </HStack>
      </Container>
    );
  };

  const TypicalProjects = () => {
    return (
      <Container
        w={"100%"}
        display="flex"
        justifyContent={"center"}
        paddingTop="32px"
        paddingBottom="32px"
      >
        <VStack w={"1170px"}>
          <Text fontSize={"32px"} fontWeight="600" margin={0} color="#16558f">
            DỰ ÁN TIÊU BIỂU
          </Text>
          <Text fontSize={"16px"} fontWeight="500" paddingBottom={"32px"}>
            Chúng tôi cung cấp và lắp đặt thiết bị theo yêu cầu của khách hàng.
          </Text>
          <Grid
            width={"full"}
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(3, 1fr)"
            gap={4}
          >
            <GridItem rowSpan={1} colSpan={2} className={Css.GridProj}>
              <p className={Css.GridImg} width={"100%"}>
                <Image
                  src="/TypicalProjects/01.jpg"
                  width={"100%"}
                  height={"350px"}
                  objectFit="cover"
                />
              </p>
              <VStack
                alignItems={"flex-start"}
                padding="16px"
                className={Css.GridContent}
              >
                <Text margin={0}>Hệ thống khí nén.</Text>
                <Text>
                  Cung cấp máy khí nén và lắp đặt hệ thống cho nhà máy Flint -
                  Khu công nghiệp phú bài Huế
                </Text>
              </VStack>
            </GridItem>
            <GridItem colSpan={1} className={Css.GridProj}>
              <p className={Css.GridImg} width={"100%"}>
                <Image
                  src="/TypicalProjects/02.jpg"
                  width={"100%"}
                  height={"350px"}
                  objectFit="cover"
                />
              </p>
              <VStack
                alignItems={"flex-start"}
                padding="16px"
                className={Css.GridContent}
              >
                <Text margin={0}>Hệ thống khí nén.</Text>
                <Text>
                  Cung cấp máy khí nén và lắp đặt hệ thống cho nhà máy Flint -
                  Khu công nghiệp phú bài Huế
                </Text>
              </VStack>
            </GridItem>
            <GridItem colSpan={1} className={Css.GridProj}>
              <p className={Css.GridImg} width={"100%"}>
                <Image
                  src="/TypicalProjects/03.jpg"
                  width={"100%"}
                  height={"350px"}
                  objectFit="cover"
                />
              </p>
              <VStack
                alignItems={"flex-start"}
                padding="16px"
                className={Css.GridContent}
              >
                <Text margin={0}>Hệ thống khí nén.</Text>
                <Text>
                  Cung cấp máy khí nén và lắp đặt hệ thống cho nhà máy Flint -
                  Khu công nghiệp phú bài Huế
                </Text>
              </VStack>
            </GridItem>
            <GridItem colSpan={1} className={Css.GridProj}>
              <p className={Css.GridImg} width={"100%"}>
                <Image
                  src="/TypicalProjects/04.jpg"
                  width={"100%"}
                  height={"350px"}
                  objectFit="cover"
                />
              </p>
              <VStack
                alignItems={"flex-start"}
                padding="16px"
                className={Css.GridContent}
              >
                <Text margin={0}>Hệ thống khí nén.</Text>
                <Text>
                  Cung cấp máy khí nén và lắp đặt hệ thống cho nhà máy Flint -
                  Khu công nghiệp phú bài Huế
                </Text>
              </VStack>
            </GridItem>
            <GridItem colSpan={1} className={Css.GridProj}>
              <p className={Css.GridImg} width={"100%"}>
                <Image
                  src="/TypicalProjects/05.jpg"
                  width={"100%"}
                  height={"350px"}
                  objectFit="cover"
                />
              </p>
              <VStack
                alignItems={"flex-start"}
                padding="16px"
                className={Css.GridContent}
              >
                <Text margin={0}>Hệ thống khí nén.</Text>
                <Text>
                  Cung cấp máy khí nén và lắp đặt hệ thống cho nhà máy Flint -
                  Khu công nghiệp phú bài Huế
                </Text>
              </VStack>
            </GridItem>
          </Grid>
        </VStack>
      </Container>
    );
  };

  const Partner = () => {
    return (
      <Container
        display="flex"
        justifyContent={"center"}
        paddingBottom="32px"
        paddingTop="32px"
        bg="#fafafa"
      >
        <VStack width={"1170px"} spacing="32px">
          <Text fontSize={"32px"} fontWeight="600" margin={0} color="#16558F">
            ĐỐI TÁC CỦA CHÚNG TÔI
          </Text>
          <Text textAlign={"center"}>
            Hợp tác với các đối tác về kỹ thuật và công nghệ hàng đầu trên thế
            giới giúp cho AUE có thể cung cấp các giải pháp sáng tạo trong lĩnh
            vực tự động hóa công nghiệp. Cùng với những chuyên gia tự động hoá
            được đào tạo bài bản, chúng tôi tự tin có thể mang lại giá trị gia
            tăng đích thực cho khách hàng.
          </Text>
          <HStack spacing={"64px"}>
            <Image width={"100px"} src="/LogoBrand/msbs.png" />
            <Image width={"100px"} src="/LogoBrand/smc.png" />
          </HStack>
        </VStack>
      </Container>
    );
  };

  return (
    <MainLayout isHomePage={true}>
      <VideoBanner />
      {/* <Bulkhead /> */}
      <Application />
      {/* <Bulkhead /> */}
      <MainProduct />
      {/* <Bulkhead /> */}
      <Achievement />
      {/* <Bulkhead /> */}
      <TypicalProjects />
      {/* <Bulkhead /> */}
      <Partner />
    </MainLayout>
  );
};

export default HomePage;
