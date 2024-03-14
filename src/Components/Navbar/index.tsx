import { Box, Center, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { svgs } from "../../assets/svgs";

const Navbar = () => {
  return (
    <>
      <Flex justifyContent={"space-around"} py={"1rem"}>
        <HStack>
          <Image src={svgs.Logo} height={{ base: "75px", md: "100px" }} />
          <Text
            fontSize={26}
            fontWeight={"bold"}
            display={{ base: "none", md: "block" }}
          >
            | IME Pay
          </Text>
        </HStack>
        <HStack fontSize={24} fontWeight={"bold"} gap={"1rem"}>
          <Text display={{ base: "none", lg: "block" }}>
            Home | About | Blog | Contact
          </Text>
          <Center>
            <Image src={svgs.Arrow} pos={"relative"} />
            <Text pos={"absolute"}>Mail</Text>
          </Center>
        </HStack>
      </Flex>
      <Box
        w="100%"
        h="1px"
        pos="relative"
        boxShadow="0 4px 4px rgba(0, 0, 0, 0.5)"
      />
    </>
  );
};

export default Navbar;
