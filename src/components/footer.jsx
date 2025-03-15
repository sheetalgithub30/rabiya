import React from "react";
import { Text, Flex, Image } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import influcentLogo from "../assets/influcentLogo.svg";
import shield from "../assets/shield.svg";

// Footer
const Footer = () => {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  return (
    <Flex wrap="wrap" w="100%" borderTop="0.5px solid #00000099">
      <Flex
        justifyContent={isLargerThan700 ? "space-between" : "center"}
        mx="auto"
        w={isLargerThan700 ? "85%" : "90%"}
        h="100%"
        textAlign="start"
        position="relative"
        borderRadius="50px"
        overflow="hidden"
        py="40px"
        display={isLargerThan700 ? "flex" : "inline"}
      >
        <Flex
          gap="25px"
          fontSize="14px"
          flexDir={isLargerThan700 ? "column" : "row"}
          justifyContent={"center"}
        >
          <a href={"/privacy-policy"}>
            <Text fontFamily="Montserrat" fontSize="14px" fontWeight="600">
              Privacy Policy
            </Text>
          </a>
          <a href={"/terms-of-use"}>
            <Text fontFamily="Montserrat" fontSize="14px" fontWeight="600">
              Terms of use
            </Text>
          </a>
        </Flex>
        <Flex alignItems="center" justifyContent="center" gap="6px" mt={isLargerThan700?"":"20px"}>
          <Image w="20px" src={shield} />

          <Text fontSize="12px" fontWeight="600" color="#00000099">
            Powered by
          </Text>
          <Image height="15px" src={influcentLogo} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
