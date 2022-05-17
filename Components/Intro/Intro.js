import { Container, HStack, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import IntroStyle from "./Intro.module.css";
const Intro = () => {
  const [container, setContainer] = useState(IntroStyle.Container);
  const [msbsImage, setMsbsImage] = useState(IntroStyle.MsbsImage);
  const [smcImage, setSmcImage] = useState(IntroStyle.SmcImage);
  const [aueImage, setAueImage] = useState(IntroStyle.AueImage);
  const [slideImage1, setSlideImage1] = useState(IntroStyle.SlideImage1);
  const [slideImage2, setSlideImage2] = useState(IntroStyle.SlideImage1);
  const [slideImage3, setSlideImage3] = useState(IntroStyle.SlideImage1);
  const [slideImage4, setSlideImage4] = useState(IntroStyle.SlideImage1);
  const [slideImage5, setSlideImage5] = useState(IntroStyle.SlideImage1);
  useEffect(() => {
    setTimeout(() => {
      setContainer([container, IntroStyle.ContainerAppear].join(" "));
    }, 30);
    setTimeout(() => {
      setMsbsImage([msbsImage, IntroStyle.MsbsImageAppear].join(" "));
      setSmcImage([smcImage, IntroStyle.SmcImageAppear].join(" "));
      setAueImage([aueImage, IntroStyle.AueImageAppear].join(" "));
    }, 2030);
    setTimeout(() => {
      setSlideImage1([slideImage1, IntroStyle.SlideImage1Appear].join(" "));
      setTimeout(() => {
        setSlideImage1(
          [slideImage1, IntroStyle.SlideImage1Disappear].join(" ")
        );
      }, 1500);
    }, 4030);
    setTimeout(() => {
      setSlideImage2([slideImage2, IntroStyle.SlideImage1Appear].join(" "));
      setTimeout(() => {
        setSlideImage2(
          [slideImage2, IntroStyle.SlideImage1Disappear].join(" ")
        );
      }, 1500);
    }, 5530);
    setTimeout(() => {
      setSlideImage3([slideImage3, IntroStyle.SlideImage1Appear].join(" "));
      setTimeout(() => {
        setSlideImage3(
          [slideImage3, IntroStyle.SlideImage1Disappear].join(" ")
        );
      }, 1500);
    }, 7030);
    setTimeout(() => {
      setSlideImage4([slideImage4, IntroStyle.SlideImage1Appear].join(" "));
      setTimeout(() => {
        setSlideImage4(
          [slideImage4, IntroStyle.SlideImage1Disappear].join(" ")
        );
      }, 1500);
    }, 8530);
    setTimeout(() => {
      setSlideImage5([slideImage5, IntroStyle.SlideImage1Appear].join(" "));
      setTimeout(() => {
        setContainer([container, IntroStyle.ContainerDisappear].join(" "));
      }, 1500);
    }, 10030);
  }, []);
  return (
    <Container className={container}>
      <Image
        className={msbsImage}
        height={"200px"}
        width={"200px"}
        src="/LogoBrand/msbs.png"
        alt="mitsubishi"
      />
      <Image
        className={smcImage}
        width={"200px"}
        height={"64px"}
        src="/LogoBrand/smc.png"
        alt="smc"
      />
      <Image
        className={aueImage}
        width={"200px"}
        height={"68px"}
        src="/LogoBrand/aue.png"
        alt="aue"
      />
      <Image
        className={slideImage1}
        height={"500px"}
        width={"500px"}
        src="/LogoBrand/msbs.png"
      />
      <Image
        className={slideImage2}
        height={"500px"}
        width={"500px"}
        src="/LogoBrand/msbs.png"
      />
      <Image
        className={slideImage3}
        height={"500px"}
        width={"500px"}
        src="/LogoBrand/msbs.png"
      />
      <Image
        className={slideImage4}
        height={"500px"}
        width={"500px"}
        src="/LogoBrand/msbs.png"
      />
      <Image
        className={slideImage5}
        height={"500px"}
        width={"500px"}
        src="/LogoBrand/msbs.png"
      />
    </Container>
  );
};

export default Intro;
