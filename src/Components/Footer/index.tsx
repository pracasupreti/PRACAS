import { Box, Divider, Stack, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      position="fixed"
      bottom="0"
      px={"3.5rem"}
      py={"1rem"}
      w={"100%"}
      bg={"#fff"}
    >
      <Divider mb={"1rem"} border={"1px solid"} />
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Text fontWeight={"bold"} fontSize={{ base: "14px", md: "18px" }}>
          All Rights Reserved. © Sriyog Consulting Pvt. Ltd. D-U-N-S #
        </Text>
        <Text
          fontWeight={"bold"}
          fontSize={"18px"}
          display={{ base: "none", md: "block" }}
        >
          Privacy Policy | Disclaimer | Sitemap
        </Text>
      </Stack>
    </Box>
  );
};

export default Footer;
