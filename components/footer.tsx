import { Box, chakra, Container, Flex, Stack, Text, VisuallyHidden } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useColorMode, useColorModeValue } from "../components/ui/color-mode";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const SocialButton = ({ children, label, href }: { children: ReactNode; label: string; href: string }) => {
  return (
    // @ts-ignore
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded="full"
      w={8}
      h={8}
      cursor="pointer"
      as="a"
      href={href}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      transition="background 0.3s ease"
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      as="footer"
      color={useColorModeValue("gray.700", "gray.200")}
      mt="24"
      left="0"
      bottom="0"
      width="100%"
    >
      <Container as={Stack} maxW="3xl" px="0">
        {/* <Divider /> */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text display={{ base: "none", md: "flex" }}>Kevin Leung - Built with NextJS.</Text>
          <Stack direction="row">
            <SocialButton label="LinkedIn" href="https://www.linkedin.com/in/kevinleung987/">
              <FaLinkedin />
            </SocialButton>
            <SocialButton label="GitHub" href="https://github.com/kevinleung987">
              <FaGithub />
            </SocialButton>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
}
