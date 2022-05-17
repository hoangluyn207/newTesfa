import { Container, Image, VStack, Text, HStack } from "@chakra-ui/react";
import react from "react";

const LeftTimeLine = ({ time, content }) => {
  return (
    <HStack>
      <Container
        width={"400px"}
        height="200px"
        backgroundColor={"#fff"}
        boxShadow="0 12px 29px 0 rgb(0 0 0 / 7%)"
        borderLeft={"4px solid #83eaf1"}
      >
        <Text padding={"16px"} margin="0">
          {content}
        </Text>
      </Container>
      <Container
        width={"500px"}
        height="2px"
        backgroundColor={"#63a4ff"}
        backgroundImage={"linear-gradient(315deg, #63a4ff 0%, #83eaf1 74%)"}
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
      <Text fontSize={"80px"} fontWeight="bold">
        {time}
      </Text>
    </HStack>
  );
};

export default LeftTimeLine;
