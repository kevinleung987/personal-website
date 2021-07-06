import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  chakra,
  Flex,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";

export default function NavBar() {
  const router = useRouter();
  const bg = useColorModeValue("gray.200", "gray.700");
  const { colorMode, toggleColorMode } = useColorMode();
  // const mobileNav = useDisclosure();

  return (
    <chakra.header w="full" px={{ base: 2, sm: 4 }} py={4} shadow="md" bg={bg}>
      <Flex alignItems="center" justifyContent="space-between" mx="auto">
        <Flex>
          <Link href="/" passHref>
            <chakra.h1 cursor="pointer" fontSize="xl" fontWeight="medium" ml="2">
              Kevs.tech
            </chakra.h1>
          </Link>
        </Flex>
        <HStack display="flex" alignItems="center" spacing={1}>
          <HStack
            spacing={1}
            mr={1}
            color="brand.500"
            display={{ base: "none", md: "inline-flex" }}
          >
            <Button variant="ghost" onClick={() => router.push("blog")}>
              Blog
            </Button>
            <Button variant="ghost" onClick={() => router.push("experience")}>Experience</Button>
            <Button variant="ghost" onClick={() => router.push("projects")}>Projects</Button>
            <Button
              leftIcon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
            >
              Toggle Dark Mode
            </Button>
          </HStack>
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
