import { Container, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import HomePage from "../Components/HomePage/HomePage";
import Intro from "../Components/Intro/Intro";

const Index = () => {
  const [inTroDisplay, setIntroDisplay] = useState(true);
  setTimeout(() => {
    setIntroDisplay(false);
  }, 13530);
  return (
    <>
      {inTroDisplay ? (
        <Intro />
      ) : (
        <Container transition={"3s"}>
          <HomePage />
        </Container>
      )}
    </>
  );
  // return <HomePage />;
};
export default Index;
