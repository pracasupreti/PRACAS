import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { svgs } from "../assets/svgs";

const Home = () => {
  return (
    <>
      <Box py={"4rem"}>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          gap={"2rem"}
          direction={{ base: "column-reverse", md: "row" }}
        >
          <Stack justifyContent={"center"} alignItems={"center"} gap={"2rem"}>
            <Text
              fontWeight={{ base: "bold", md: "light" }}
              fontSize={{ base: "24px", md: "54px" }}
              pos={{ base: "absolute", md: "static" }}
              top={"14%"}
            >
              Professional Marketplace
            </Text>
            <Text fontWeight={"regular"} fontSize={"32px"}>
              100K Downloads
            </Text>
            <Stack
              gap={"2.5rem"}
              pt={"3.5rem"}
              direction={{ base: "column", md: "row" }}
            >
              <Image src={svgs.Playstore} />
              <Image src={svgs.Startup} />
            </Stack>
          </Stack>
          <Image src={svgs.MobileHero} />
        </Flex>
      </Box>
    </>
  );
};

export default Home;
