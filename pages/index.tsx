import { chakra, Center, Container, Text, Link, Flex } from "@chakra-ui/react";
import Head from "next/head";
import SmallWithSocial from "../components/footer";
import Layout from "../components/layout";
import NavBar from "./../components/navbar";

export default function Home() {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Text fontSize="3xl">Hi! Im Kevin!</Text>
      <p>
        My new website is currently under construction, you can find the old
        website{" "}
        <Link color="teal.500" href="https://old.kevs.tech/">
          here.
        </Link>
      </p>
    </Flex>
  );
}
