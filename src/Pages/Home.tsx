import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { svgs } from "../assets/svgs";

const Home = () => {
  return (
    <>
      <Box py={"4rem"}>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          gap={{ base: "1rem", md: "2rem" }}
          direction={{ base: "column-reverse", lg: "row" }}
          mt={{ base: "0rem", md: "2.5rem" }}
        >
          <Stack justifyContent={"center"} alignItems={"center"} gap={"2rem"}>
            <Text
              fontWeight={{ base: "bold", md: "light" }}
              fontSize={{ base: "24px", md: "38px", lg: "48px" }}
              pos={{ base: "absolute", md: "static" }}
              top={"13%"}
            >
              Professional Marketplace
            </Text>

            <Text
              fontWeight={"regular"}
              fontSize={"32px"}
              display={{ base: "none", md: "block" }}
            >
              100K Downloads
            </Text>
            <Text fontWeight={"900"} fontSize={{ base: "16px", md: "24px" }}>
              Proudly Made in Biratnagar
            </Text>
            <Stack
              gap={{ base: "1rem", md: "2.5rem" }}
              mt={{ base: "-0.5rem", lg: "1.5rem" }}
              direction={{ base: "row-reverse", lg: "row" }}
              justifyContent={"center"}
              width={{ base: "180px", md: "250px" }}
            >
              <img
                src={svgs.Playstore}
                style={{ cursor: "pointer", filter: "saturate(0)" }}
                onClick={() =>
                  (window.location.href =
                    "https://play.google.com/store/apps/details?id=com.pracasinfosys.sriyog.com")
                }
              />

              <Image src={svgs.Startup} cursor={"pointer"} />
            </Stack>
          </Stack>
          <Image
            src={svgs.MobileHero}
            width={{ base: "80%", md: "fit-content" }}
          />
        </Flex>
      </Box>
    </>
  );
};

export default Home;
