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
  Button,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import MainMenuCss from "./MainMenu.module.css";

const MenuData = [
  {
    id: "01",
    Name: "Sản phẩm",
    Link: "san-pham",
    MenuItem: [
      {
        id: "011",
        Name: "bộ điều khiển",
        link: "san-pham/bo-dieu-khien",
      },
      {
        id: "012",
        Name: "bơm nước",
        link: "san-pham/bom-nuoc",
      },
      {
        id: "013",
        Name: "điện toán biên",
        link: "san-pham/dien-toan-bien",
      },
      {
        id: "014",
        Name: "fasensor",
        link: "san-pham/fasensor",
      },
      {
        id: "015",
        Name: "giám sát điện năng",
        link: "san-pham/giam-sat-dien-nang",
      },
      {
        id: "016",
        Name: "hiển thị trực quan",
        link: "san-pham/hien-thi-truc-quan",
      },
      {
        id: "017",
        Name: "phân phối điện hạ thế",
        link: "san-pham/phan-phoi-dien-ha-the",
      },
      {
        id: "018",
        Name: "phân phối điện trung thế",
        link: "san-pham/phan-phoi-dien-trung-the",
      },
      {
        id: "019",
        Name: "robot công nghiệp",
        link: "san-pham/robot-cong-nghiep",
      },
      {
        id: "0110",
        Name: "sản phẩm dẫn động",
        link: "san-pham/san-pham-dan-dong",
      },
    ],
  },
  {
    id: "02",
    Name: "Giải pháp",
    Link: "giai-phap",
    MenuItem: [
      {
        id: "021",
        Name: "ABzxcvzxvCxyz",
      },
    ],
  },
  {
    id: "03",
    Name: "Đối tác",
    Link: "doi-tac",
  },
  {
    id: "04",
    Name: "Về chúng tôi",
    Link: "ve-chung-toi",
  },
  {
    id: "05",
    Name: "Liên hệ",
    Link: "lien-he",
  },
];

const MainMenu = ({ isChange, isHomePage }) => {
  const MenuDetail = ({ Id, Name, MenuDetailItem, Link }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <Menu key={Id} isOpen={isOpen}>
        <NextLink href={`/${Link}`} passHref>
          <Link _hover={{ textDecoration: "none" }}>
            <MenuButton
              color={isHomePage ? (isChange ? "#3498db" : "#FFF") : "#3498db"}
              className={MainMenuCss.MenuButton}
              onMouseEnter={onOpen}
              onMouseLeave={onClose}
              _hover={{
                color: "#FFF",
              }}
            >
              {Name.toUpperCase()}
            </MenuButton>
          </Link>
        </NextLink>
        <MenuList
          zIndex={9999}
          padding={0}
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          minWidth={"240px"}
          borderRadius={"12px"}
          boxShadow={"0 12px 29px 0 rgb(0 0 0 / 7%)"}
        >
          {MenuDetailItem?.map((value, index) => (
            <NextLink
              key={`${value.id}-itemMenu`}
              href={`/${value.link}`}
              passHref
            >
              <Link>
                <MenuItem cursor="pointer" className={MainMenuCss.MenuList}>
                  {value.Name.toUpperCase()}
                </MenuItem>
              </Link>
            </NextLink>
          ))}
        </MenuList>
      </Menu>
    );
  };
  return (
    <>
      <HStack spacing={"8px"} position="relative">
        {MenuData.map((item, index) => (
          <MenuDetail
            key={index}
            Id={item.id}
            Name={item.Name}
            MenuDetailItem={item.MenuItem}
            Link={item.Link}
          />
        ))}
        <Button
          width="80px"
          className={MainMenuCss.LanguageBtn}
          position="absolute"
          color={isHomePage ? (isChange ? "#000" : null) : "#000"}
          transition="0.8s"
        >
          <span>VN</span>
        </Button>
      </HStack>
    </>
  );
};

export default MainMenu;
