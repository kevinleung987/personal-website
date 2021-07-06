import { Box, Center } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import Footer from "./footer";
import NavBar from "./navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Head>
        <title>Kevs.tech</title>
        <meta name="author" content="Kevin Leung" />
        <meta
          name="description"
          content="Software Engineer with a passion for building great products."
        />
        <meta
          name="keywords"
          content="Kevin Leung, Computer Science, University of Toronto, Software Engineer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Kevin Leung" />
        <meta property="og:image" content="http://kevs.tech/logo.png" />
        <meta name="robots" content="noindex,nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <Center>
        <Box
          w="full"
          mx="auto"
          maxW="3xl"
          minH="100%"
          px={{ base: "6", md: "8" }}
          pt={"12"}
          // TODO: Fix footer and padding.
          pb={"24"}
        >
          {children}
        </Box>
      </Center>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
