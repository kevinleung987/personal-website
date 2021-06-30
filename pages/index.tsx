import { chakra, Center, Container, Text, Link } from "@chakra-ui/react";
import Head from "next/head";
import SmallWithSocial from "../components/footer";
import WithSubnavigation from "./../components/navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kevins Site</title>
        <meta
          name="description"
          content="Software Engineer with a passion for building great products."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <WithSubnavigation />
      <Container>
        <Text fontSize="3xl">Hi! Im Kevin!</Text>
        <p>
          My new website is currently under construction, you can find the old
          website{" "}
          <Link color="teal.500" href="https://old.kevs.tech/">
            here.
          </Link>
        </p>
      </Container>
      <footer>
        <SmallWithSocial />
      </footer>
    </div>
  );
}
