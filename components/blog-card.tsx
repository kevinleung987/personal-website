import {
  Box,
  chakra,
  Flex,
  HStack,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { PostData } from "../lib/blog";

export default function BlogCard(props: PostData) {
  const href = `/blog/${props.slug}`;
  const router = useRouter();
  return (
    <Box
      mx="auto"
      my="6"
      px="8"
      py="4"
      rounded="lg"
      shadow="lg"
      bg={useColorModeValue("white", "gray.900")}
      maxW="3xl"
      cursor="pointer"
      transition="all 0.25s"
      _hover={{ transform: "translateY(-4px)", shadow: "sm" }}
      onClick={() => router.push(href)}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <chakra.span
          fontSize="sm"
          color={useColorModeValue("gray.600", "gray.400")}
        >
          {props.frontMatter.date}
        </chakra.span>
        <HStack display="flex" alignItems="center" spacing="1">
          {props.frontMatter.tags?.map((tag) => (
            <Link
              key={tag}
              px="3"
              py="1"
              bg="gray.600"
              color="gray.100"
              fontSize="sm"
              fontWeight="700"
              rounded="md"
              _hover={{ bg: "gray.500" }}
            >
              {tag}
            </Link>
          ))}
        </HStack>
      </Flex>

      <Box mt="2">
        <NextLink href={href}>
          <Link
            fontSize="2xl"
            color={useColorModeValue("gray.700", "white")}
            fontWeight="700"
            _hover={{
              color: useColorModeValue("gray.600", "gray.200"),
              textDecor: "underline",
            }}
            href={href}
          >
            {props.frontMatter.title}
          </Link>
        </NextLink>

        <chakra.p mt="2" color={useColorModeValue("gray.600", "gray.300")}>
          {props.frontMatter.description}
        </chakra.p>
      </Box>

      <Flex justifyContent="space-between" alignItems="center" mt="4">
        <NextLink href={href}>
          <Link
            color={useColorModeValue("brand.600", "brand.400")}
            _hover={{ textDecor: "underline" }}
            href={href}
          >
            Read more
          </Link>
        </NextLink>
        {props.readingTime}
      </Flex>
    </Box>
  );
}
