import react from "react";
import { Container, HStack, Image, Text, VStack, Link } from "@chakra-ui/react";
import Css from "./DetailProductCard.module.css";
import CallIcon24x24 from "../../icon/CallIcon24x24";
import FacebookIcon24x24 from "../../icon/FacebookIcon24x24";
import ZaloIcon24x24 from "../../icon/ZaloIcon24x24";
import MailIcon from "../../icon/MailIcon24x24";
import NextLink from "next/link";

const DetailProductCard = ({
  children,
  img1,
  img2,
  name,
  position,
  bio,
  phone,
  fbLink,
  mailLink,
  zaloLink,
}) => {
  return (
    <Container className={Css.card}>
      <Container className={Css.imgBox}>
        <Image className={Css.img} src={img1} />
        <Image className={Css.img2} src={img2} />
      </Container>
      <Container className={Css.details}>
        <VStack className={Css.content}>
          <Text margin={0} color={"#3498db"} fontSize="24px">
            {name}
          </Text>
          <Text>{position}</Text>
          <Text>{bio}</Text>
          <Text
            margin={0}
            display="flex"
            alignItems="center"
            alignSelf={"flex-start"}
          >
            <CallIcon24x24 color={"#000"} />
            &ensp;
            {phone}
          </Text>
          <HStack spacing={"24px"}>
            <NextLink href={`/${fbLink}`} passHref>
              <Link _hover={{ textDecoration: "none" }}>
                <FacebookIcon24x24 color={"#3498db"} />
              </Link>
            </NextLink>
            <NextLink href={`/${mailLink}`} passHref>
              <Link _hover={{ textDecoration: "none" }}>
                <MailIcon color={"#3498db"} />
              </Link>
            </NextLink>
            <NextLink href={`/${zaloLink}`} passHref>
              <Link _hover={{ textDecoration: "none" }}>
                <ZaloIcon24x24 color={"#3498db"} />
              </Link>
            </NextLink>
          </HStack>
        </VStack>
      </Container>
    </Container>
  );
};

export default DetailProductCard;
