import react from "react";
import {
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Link,
  Button,
  Text,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import ShakeCss from "../../styles/Shake.module.css";
import CallIcon from "../../icon/CallIcon";
import MailIcon from "../../icon/MailIcon";
import FacebookIcon from "../../icon/FacebookIcon";
import ZaloIcon from "../../icon/ZaloIcon";
import ContactIcon from "../../icon/ContactIcon";

const ContactItem = [
  {
    id: "01",
    Name: "Email",
    Icon: <MailIcon color={"#FFF"} />,
    Link: "mailto: vietnamsales@auevn.com",
  },
  {
    id: "02",
    Name: "Facebook",
    Icon: <FacebookIcon color={"#FFF"} />,
    Link: "https://www.facebook.com/auevietnam",
  },
  {
    id: "03",
    Name: "Zalo",
    Icon: <ZaloIcon color={"#FFF"} />,
    Link: "https://zalo.me/0905998598",
  },
  // {
  //   id: "04",
  //   Name: "Hotline",
  //   Icon: <CallIcon color={"#FFF"} />,
  //   Link: "",
  // },
];

const MenuContact = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        boxSize="70px"
        aria-label="Options"
        alignItems={"center"}
        icon={<ContactIcon color={"#FFF"} />}
        variant="outline"
        borderRadius={"100%"}
        position="fixed"
        right={"50px"}
        bottom={"50px"}
        borderWidth="0"
        backgroundColor={"#3498db"}
        cursor="pointer"
        _hover={{
          boxShadow: "0px 6px 20px rgba(255, 255, 255, 1)",
        }}
        zIndex={9999}
        className={ShakeCss.ShakeAnimation}
      />
      <MenuList zIndex={9999}>
        {ContactItem.map((item, index) => (
          <Link key={index} href={item.Link}>
            <MenuItem
              key={index}
              boxSize="70px"
              aria-label="Options"
              variant="outline"
              borderRadius={"100%"}
              borderWidth="0"
              backgroundColor={"#3498db"}
              cursor="pointer"
              marginTop={"8px"}
              display="flex"
              justifyContent={"center"}
              _hover={{
                boxShadow: "0px 6px 20px rgba(255, 255, 255, 1)",
              }}
              className={ShakeCss.ShakeAnimation}
            >
              {item.Icon}
            </MenuItem>
          </Link>
        ))}
      </MenuList>
    </Menu>
  );
};

export default MenuContact;
