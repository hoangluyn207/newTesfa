import {
  Container,
  Image,
  VStack,
  Text,
  HStack,
  color,
} from "@chakra-ui/react";
import react from "react";

const RightTimeLine = ({ time, content }) => {
  return (
    <HStack>
      <Text fontSize={"80px"} fontWeight="bold">
        {time}
      </Text>
      <Container
        width={"500px"}
        height="2px"
        backgroundColor={"#83eaf1"}
        // border={"7px solid #fff"}
        backgroundImage={"linear-gradient(315deg, #83eaf1 0%, #63a4ff 74%)"}
        position="relative"
        _before={{
          position: "absolute",
          content: "''",
          width: "100%",
          height: "12px",
          background: "#fff",
          zIndex: -1,
          top: -5,
        }}
      ></Container>
      <Container
        width={"400px"}
        height="200px"
        backgroundColor={"#fff"}
        boxShadow="0 12px 29px 0 rgb(0 0 0 / 7%)"
        borderRight={"4px solid #83eaf1"}
      >
        <Text padding={"16px"} margin="0">
          {content}
        </Text>
      </Container>
    </HStack>
  );
};

export default RightTimeLine;
