import { Container, HStack, Image, Link, Text } from "@chakra-ui/react";
import react, { useEffect, useState } from "react";
import MainMenu from "./MainMenu";
import CallIcon16x16 from "../../icon/CallIcon16x16";
import Mail16 from "../../icon/Mail16";

const Header = ({ isHomePage }) => {
  const [changeMenu, setChangeMenu] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setChangeMenu(true);
      } else {
        setChangeMenu(false);
      }
    });
  }, []);
  return (
    <Container
      width={"100%"}
      display="flex"
      justifyContent={"center"}
      position="fixed"
      top={0}
      backgroundColor={isHomePage ? (changeMenu ? "#FFF" : "none") : "#FFF"}
      zIndex={9999}
      transition="0.8s"
      borderBottom={"1px solid rgba(255, 255, 255, 0.5)"}
      boxShadow={"0 12px 29px 0 rgb(0 0 0 / 7%)"}
    >
      <Container
        paddingLeft={"16px"}
        paddingRight={"16px"}
        height={"64px"}
        width="1170px"
        display={"flex"}
        justifyContent="space-between"
        alignItems={"center"}
        position="relative"
      >
        <HStack
          spacing={"5px"}
          position="absolute"
          top={"5px"}
          right={"350px"}
          zIndex={99999}
        >
          <CallIcon16x16 color={"black"} />
          <Text fontSize={"12px"}>(+84) 905 998 598 &emsp; | &emsp;</Text>
          <Mail16 color={"black"} />
          <Text fontSize={"12px"}>vietnamsales@auevn.com</Text>
        </HStack>
        <Image src="/img/tophead.png" position={"absolute"} top="0" />
        <Link href="/">
          <Image
            width={"100px"}
            height={isHomePage ? (changeMenu ? "34.2px" : "15.8px") : "34.2px"}
            src={
              isHomePage
                ? changeMenu
                  ? "/LogoBrand/aue.png"
                  : "/LogoBrand/auetext.png"
                : "/LogoBrand/aue.png"
            }
          />
        </Link>
        <MainMenu isChange={changeMenu} isHomePage={isHomePage} />
      </Container>
    </Container>
  );
};

export default Header;
