/* eslint-disable react/display-name */
import {
  Box,
  chakra,
  Code,
  Divider,
  Heading,
  Image,
  Link,
  ListItem,
  OrderedList,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  UnorderedList,
} from "@chakra-ui/react";

// Components not in MDX spec
const CustomComponents = {};

const VERT_SPACE = "6";

// Table of contents from https://mdxjs.com/table-of-components
const MDXComponents = {
  p: (props: any) => <Text fontSize="lg" my={VERT_SPACE}{...props} />,
  h1: (props: any) => <Heading fontSize="3xl" my={VERT_SPACE}{...props} />,
  h2: (props: any) => <Heading fontSize="2xl" my={VERT_SPACE}{...props} />,
  h3: (props: any) => <Heading fontSize="xl" my={VERT_SPACE}{...props} />,
  h4: (props: any) => <Heading fontSize="lg" my={VERT_SPACE}{...props} />,
  h5: (props: any) => <Heading fontSize="md" my={VERT_SPACE}{...props} />,
  h6: (props: any) => <Heading fontSize="sm" my={VERT_SPACE}{...props} />,
  blockquote: (props: any) => (
    <chakra.blockquote
      borderLeft="4px"
      borderColor="gray"
      p="3"
      my={VERT_SPACE}
      {...props}
    />
  ),
  ul: (props: any) => <UnorderedList fontSize="lg" my={VERT_SPACE}{...props} />,
  ol: (props: any) => <OrderedList fontSize="lg" my={VERT_SPACE}{...props} />,
  li: (props: any) => <ListItem fontSize="lg" my={VERT_SPACE}{...props} />,
  // TODO: Customize table?
  table: (props: any) => <Table variant="simple" {...props} />,
  thead: (props: any) => <Thead {...props} />,
  tbody: (props: any) => <Tbody {...props} />,
  tr: (props: any) => <Tr {...props} />,
  td: (props: any) => <Td isNumeric={props.align === "right"} {...props} />,
  th: (props: any) => <Th isNumeric={props.align === "right"} {...props} />,
  // Handled by the rehype plugin mdx-prism. TODO: Styling for non syntax highlighted code.
  // code:
  // pre:
  inlineCode: (props: any) => <Code fontSize="lg" {...props} />,
  em: (props: any) => <Box as="em" fontWeight="light" {...props} />,
  strong: (props: any) => <Box as="strong" fontWeight="semibold" {...props} />,
  del: (props: any) => <Text as="s" fontSize="lg" my={VERT_SPACE}{...props} />,
  hr: (props: any) => <Divider {...props} />,
  a: (props: any) => <Link fontSize="lg" color="teal.500" my={VERT_SPACE}{...props} />,
  // TODO: Resizable?
  img: (props: any) => <Image {...props} alt="" />,
  ...CustomComponents,
};

export default MDXComponents;
