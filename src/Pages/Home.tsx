import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { svgs } from "../assets/svgs";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box py={"4rem"}>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          gap={"2rem"}
          direction={{ base: "column-reverse", lg: "row" }}
        >
          <Stack justifyContent={"center"} alignItems={"center"} gap={"2rem"}>
            <Text
              fontWeight={{ base: "bold", md: "light" }}
              fontSize={{ base: "24px", md: "38px", lg: "48px" }}
              pos={{ base: "absolute", md: "static" }}
              top={"14%"}
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
            <Text fontWeight={"bold"} fontSize={{ base: "16px" }}>
              Proudly Made in Biratnagar
            </Text>
            <Stack
              gap={"2.5rem"}
              pt={{ base: "0", lg: "3.5rem" }}
              direction={"row"}
              justifyContent={"center"}
              width={{ base: "160px", md: "fit-content" }}
            >
              <Image
                src={svgs.Playstore}
                cursor={"pointer"}
                onClick={() => navigate("/")}
              />

              <Image src={svgs.Startup} cursor={"pointer"} />
            </Stack>
          </Stack>
          <Image src={svgs.MobileHero} />
        </Flex>
      </Box>
    </>
  );
};

export default Home;
