import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  chakra,
  Flex,
  HStack,
  IconButton,
  Link,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function NavBar() {
  const router = useRouter();
  const bg = useColorModeValue(undefined, "gray.700");
  const { colorMode, toggleColorMode } = useColorMode();
  // const mobileNav = useDisclosure();

  return (
    <chakra.header
      w="full"
      px={{ base: "2", sm: "4" }}
      py={"4"}
      shadow="md"
      bg={bg}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        mx="auto"
        maxW="3xl"
      >
        <Flex>
          <NextLink href="/" passHref>
            <Link cursor="pointer" fontSize="xl" fontWeight="medium" ml="2">
              Kevs.tech
            </Link>
          </NextLink>
        </Flex>
        <HStack display="flex" alignItems="center" spacing={1}>
          <HStack
            spacing={"1"}
            mr={"1"}
            color="brand.500"
            display={{ base: "none", md: "inline-flex" }}
          >
            {/* TODO: Make Custom Link Component */}
            <NextLink href="/blog" passHref>
              <Link px={"3"}>Blog</Link>
            </NextLink>
            <NextLink href="/experience" passHref>
              <Link px={"3"}>Experience</Link>
            </NextLink>
            <NextLink href="/projects" passHref>
              <Link px={"3"}>Projects</Link>
            </NextLink>
            <IconButton
              aria-label="Toggle Dark Mode"
              icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
              isRound={true}
            />
          </HStack>
          {/* TODO: Mobile nav */}
          <Box display={{ base: "inline-flex", md: "none" }}>
            <IconButton
              display={{ base: "flex", md: "none" }}
              aria-label="Open menu"
              fontSize="20px"
              color={useColorModeValue("gray.800", "inherit")}
              variant="ghost"
              icon={<HamburgerIcon />}
              // onClick={mobileNav.onOpen}
            />
          </Box>
        </HStack>
      </Flex>
    </chakra.header>
  );
}
