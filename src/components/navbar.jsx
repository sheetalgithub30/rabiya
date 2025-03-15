import React, { useEffect, useState } from "react";
// import {useNavigate} from "react-router-dom"
import {
  Flex,
  Button,
  Text,
  Image,
  IconButton,
  useMediaQuery,
  Select,
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  DrawerFooter,
} from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import { HashLink } from "react-router-hash-link";
import { HamburgerIcon } from "@chakra-ui/icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  //   const navigate = useNavigate()
  const [isGreaterThan1000] = useMediaQuery("(min-width: 1000px)");
  const [isGreaterThan600] = useMediaQuery("(min-width: 600px)");
  const [selected, setSelected] = useState("home"); // Track selected section
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  // This function will set the active section
  const handleSelect = (section) => {
    setSelected(section);
  };

  return (
    <Flex
      w="100%"
      h="80px"
      justify="center"
      position="fixed"
      zIndex={100}
      top={0}
      bgColor="white"
    >
      <Flex
        w={isGreaterThan1000 ? "85%" : "95%"}
        justify="space-between"
        alignItems="center"
      >
        <Flex cursor="pointer">
          <Image src={logo} w="145px" onClick={() => navigate("/")} />
        </Flex>
        {isGreaterThan600 && (
          <Flex alignItems="center" gap="10px" w="100%" justify="end">
            <Box w="35vw">
              <Flex justify="space-around" align="center">
                <Box>
                  <Link to="/">
                    <Text
                      onClick={() => handleSelect("home")}
                      fontWeight="500"
                      fontSize="15px"
                      fontFamily="Satoshi"
                      color={selected === "home" ? "#0B2C3D" : "#0B2C3D99"}
                    >
                      Home
                    </Text>
                  </Link>
                  {selected === "home" ? (
                    <Box
                      width="41px"
                      height="4px"
                      bgColor="#06325E"
                      borderRadius="4px"
                      position="absolute"
                      bottom={4}
                    ></Box>
                  ) : (
                    <Box
                      width="41px"
                      height="4px"
                      borderRadius="4px"
                      position="absolute"
                      bottom={4}
                    ></Box>
                  )}
                </Box>
                <Box>
                  <HashLink smooth to="/#about">
                    <Text
                      onClick={() => handleSelect("about")}
                      fontWeight="500"
                      fontSize="15px"
                      fontFamily="Satoshi"
                      color={selected === "about" ? "#0B2C3D" : "#0B2C3D99"}
                    >
                      About
                    </Text>
                  </HashLink>
                  {selected === "about" ? (
                    <Box
                      width="41px"
                      height="4px"
                      bgColor="#06325E"
                      borderRadius="4px"
                      position="absolute"
                      bottom={4}
                    ></Box>
                  ) : (
                    <Box
                      width="41px"
                      height="4px"
                      borderRadius="4px"
                      position="absolute"
                      bottom={4}
                    ></Box>
                  )}
                </Box>

                <Box>
                  <Link href="/#services" _hover="none">
                    <Text
                      onClick={() => handleSelect("services")}
                      fontWeight="500"
                      fontSize="15px"
                      fontFamily="Satoshi"
                      color={selected === "services" ? "#0B2C3D" : "#0B2C3D99"}
                    >
                      Services
                    </Text>
                  </Link>

                  {selected === "services" ? (
                    <Box
                      width="41px"
                      height="4px"
                      bgColor="#06325E"
                      borderRadius="4px"
                      position="absolute"
                      bottom={4}
                    ></Box>
                  ) : (
                    <Box
                      width="41px"
                      height="4px"
                      borderRadius="4px"
                      position="absolute"
                      bottom={4}
                    ></Box>
                  )}
                </Box>
                <Box>
                  <HashLink smooth to="/#overcome">
                    <Text
                      onClick={() => handleSelect("overcome")}
                      fontWeight="500"
                      fontSize="15px"
                      fontFamily="Satoshi"
                      color={selected === "overcome" ? "#0B2C3D" : "#0B2C3D99"}
                    >
                      We Help Overcome
                    </Text>
                  </HashLink>
                  {selected === "overcome" ? (
                    <Box
                      width="41px"
                      height="4px"
                      bgColor="#06325E"
                      borderRadius="4px"
                      position="absolute"
                      bottom={4}
                    ></Box>
                  ) : (
                    <Box
                      width="41px"
                      height="4px"
                      borderRadius="4px"
                      position="absolute"
                      bottom={4}
                    ></Box>
                  )}
                </Box>
                <Box>
                  <HashLink smooth to="/#testimonial">
                    <Text
                      onClick={() => handleSelect("testimonial")}
                      fontWeight="500"
                      fontSize="15px"
                      fontFamily="Satoshi"
                      color={
                        selected === "testimonial" ? "#0B2C3D" : "#0B2C3D99"
                      }
                    >
                      Testimonial
                    </Text>
                  </HashLink>
                  {selected === "testimonial" ? (
                    <Box
                      width="41px"
                      height="4px"
                      bgColor="#06325E"
                      borderRadius="4px"
                      position="absolute"
                      bottom={4}
                    ></Box>
                  ) : (
                    <Box
                      width="41px"
                      height="4px"
                      borderRadius="4px"
                      position="absolute"
                      bottom={4}
                    ></Box>
                  )}
                </Box>
              </Flex>
            </Box>

            <Button
              bgColor="#F38D43"
              color="white"
              w="117px"
              fontWeight="500"
              fontSize="15px"
              h="40px"
              borderRadius="5px"
              fontFamily="Satoshi"
              ml={8}
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </Button>
          </Flex>
        )}

        {!isGreaterThan600 && (
          <IconButton ref={btnRef} onClick={onOpen}>
            <HamburgerIcon fontSize="35px" />
          </IconButton>
        )}
      </Flex>

      {!isGreaterThan600 && (
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          bg="black"
        >
          <DrawerOverlay />
          <DrawerContent bg="black" color="white">
            <DrawerCloseButton />
            <DrawerHeader className="text-base">Menu</DrawerHeader>

            <DrawerBody>
              <Flex
                w={"100%"}
                gap="18px"
                display="flex"
                flexDir="column"
                justifyContent="start"
                alignItems="start"
              >
                     <Link to="/home">
                    <Text
                      onClick={() => handleSelect("home")}
                      fontWeight="500"
                      fontSize="15px"
                      fontFamily="Satoshi"
                      color="white"
                    >
                      Home
                    </Text>
                  </Link>
                  <HashLink smooth to="/#about">
                    <Text
                      onClick={() => handleSelect("about")}
                      fontWeight="500"
                      fontSize="15px"
                      fontFamily="Satoshi"
                      color="white"
                    >
                      About
                    </Text>
                  </HashLink>
                  <Link smooth to="/services">
                    <Text
                      onClick={() => handleSelect("services")}
                      fontWeight="500"
                      fontSize="15px"
                      fontFamily="Satoshi"
                      color="white"
                    >
                      Services
                    </Text>
                  </Link>

                  <HashLink smooth to="/#overcome">
                    <Text
                      onClick={() => handleSelect("overcome")}
                      fontWeight="500"
                      fontSize="15px"
                      fontFamily="Satoshi"
                      color="white"
                    >
                      We Help Overcome
                    </Text>
                  </HashLink>

                  <HashLink smooth to="/#testimonial">
                    <Text
                      onClick={() => handleSelect("testimonial")}
                      fontWeight="500"
                      fontSize="15px"
                      fontFamily="Satoshi"
                      color="white"
                    >
                      Testimonial
                    </Text>
                  </HashLink>

                  <Button
              bgColor="#F38D43"
              color="white"
              w="117px"
              fontWeight="500"
              fontSize="15px"
              h="40px"
              borderRadius="5px"
              fontFamily="Satoshi"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </Button>

               
              </Flex>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" color="white" mr={3} onClick={onClose}>
                close
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}
    </Flex>
  );
};

export default Navbar;
