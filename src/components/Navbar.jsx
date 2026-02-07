import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  HStack,
  useDisclosure,
  IconButton,
  Hide,
} from "@chakra-ui/react";
import {
  MoonIcon,
  SunIcon,
  HamburgerIcon,
  CloseIcon,
  AddIcon,
} from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/white1.png";
import logo1 from "../assets/white.png"
import logo2 from "../assets/white2.png"

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();

  const isBelow1232 = useMediaQuery("(max-width: 1232px)");
  console.log("isBelow1232:", isBelow1232);

  const onHomeButtonClick = () => {
    navigate("/home");
    //window.open('/contact');
  };
  const onAboutButtonClick = () => {
    navigate("/about");
    //window.open('/contact');
  };
  const onServicesButtonClick = () => {
    navigate("/services");
    //window.open('/contact');
  };
  const onBenefitsButtonClick = () => {
    navigate("/benefits");
    //window.open('/contact');
  };
  const onRoadmapButtonClick = () => {
    navigate("/roadmap");
    //window.open('/contact');
  };
  const onContactButtonClick = () => {
    navigate("/contact");
    //window.open('/contact');
  };

  return (
    <div className="navFix">
      <Box
        bg="white
          "
        px={9}
        width={["100%"]}
      >
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
          <div className="logo">
            <a href="/home">
            <img
              src={logo2} // Replace with the URL of your image
              alt="logo"
            />
            </a>
          </div>
          <HStack w="42%"></HStack>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <HStack spacing={8} alignItems={"center"}>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
                id="myDIV"
              >
                <Button
                  className="btnRes"
                  style={{ backgroundColor: "white" }}
                  onClick={onHomeButtonClick}
                >
                  <b>Home</b>
                </Button>

                <Button
                  className="btnRes"
                  style={{ backgroundColor: "white" }}
                  onClick={onAboutButtonClick}
                >
                  <b>About</b>
                </Button>

                <Button
                  className="btnRes"
                  style={{ backgroundColor: "white" }}
                  onClick={onServicesButtonClick}
                >
                  <b>Services</b>
                </Button>

                <Button
                  className="btnRes"
                  style={{ backgroundColor: "white" }}
                  onClick={onBenefitsButtonClick}
                >
                  <b>Benefits</b>
                </Button>

                <Button
                  className="btnRes"
                  style={{ backgroundColor: "white" }}
                  onClick={onRoadmapButtonClick}
                >
                  <b>Roadmap</b>
                </Button>
              </HStack>
            </HStack>
          </Flex>        
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button
                background="linear-gradient(to right, #5146CA, #6015B2)"
                _hover={{
                  bg: "linear-gradient(to right,blue, blueviolet)",
                  color: "white",
                }}
                color="white"
                variant="solid"
                onClick={onContactButtonClick}
                size={["sm", "md"]}
                id="contactBtn"
              >
                CONTACT US
              </Button>
            </Stack>
          </Flex>
          <IconButton
            className="Hamburger"
            size={"md"}
            // icon={isOpen ? <CloseIcon/> : <HamburgerIcon />}
            icon={<HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          {isOpen && isBelow1232 ? (
            <Box
              className="overlay"
              pb={4}
              pt={40}
              pl={4}
              display="flex"
              textAlign="left"
            >
              <Box // Wrap the CloseIcon inside a Box and apply styling
                as="span"
                color="black"
                fontSize="2xl"
                cursor="pointer"
                onClick={onClose}
                position="absolute"
                top="1rem"
                right="1rem"
              >
                <CloseIcon />
              </Box>
              <Stack as={"nav"} spacing={2} class="overlay-content">
                  <a href="/home">Home</a>
                  <a href="/about">About</a>
                  <a href="/services">Services</a>
                  <a href="/benefits">Benefits</a>
                  <a href="/roadmap">Roadmap</a>
                <Button mt={2}
                  onClick={() => {
                    navigate("/contact"); // Navigate to "/contact" route
                    if (isOpen) {
                      onClose(); // Close the navigation menu
                    }
                  }}
                  background="linear-gradient(to right, #5146CA, #6015B2)"
                  _hover={{
                    bg: "linear-gradient(to right,blue, blueviolet)",
                    color: "white",
                  }}
                  color="white"
                  variant="solid"
                >
                  CONTACT US
                </Button>
              </Stack>
            </Box>
          ) : isOpen ? (
            <Box pb={4} pt={10} pl={4}>
              <Stack as={"nav"} spacing={2}>
                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                  style={{ paddingTop: "10px" }}
                >
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>

                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>
                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>
                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>

                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <a href="#services">
                    <b>Services</b>
                  </a>
                </Button>

                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <a href="#Benefits">
                    {" "}
                    <b>Benefits</b>
                  </a>
                </Button>

                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <a href="#Roadmap">
                    <b>Roadmap</b>
                  </a>
                </Button>
                <Button
                  onClick={isOpen ? onClose : onOpen}
                  background="linear-gradient(to right, #5146CA, #6015B2)"
                  _hover={{
                    bg: "linear-gradient(to right,blue, blueviolet)",
                    color: "white",
                  }}
                  color="white"
                  variant="solid"
                >
                  CONTACT US
                </Button>
              </Stack>
            </Box>
          ) : null}
        </Flex>
      </Box>
    </div>
  );
}
