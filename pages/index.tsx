import { Heading, Link, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Heading size="xl">Hi! I'm Kevin! 🙋‍♂️</Heading>
      <Text fontSize="xl" pt="8">
        My new website is currently under construction, you can find the old
        website{" "}
        <Link color="teal.500" href="https://old.kevs.tech/">
          here.
        </Link>
      </Text>
      <Text fontSize="xl" pt="8">
        Hello! I'm a recent graudate from the University of Toronto where I
        studied Computer Science.
      </Text>
      <Text fontSize="xl" pt="8">
        Currently I'm working as a Software Engineer at Google in the San
        Francisco Bay Area.
      </Text>
    </>
  );
}
