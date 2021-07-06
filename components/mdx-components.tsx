/* eslint-disable react/display-name */
import {
  Heading, Text
} from "@chakra-ui/react";

// Components not in MDX spec
const CustomComponents = {};

// Table of contents from https://mdxjs.com/table-of-components
const MDXComponents = {
  p: (props: any) => <Text fontSize="lg" my={"3"} {...props} />,
  h1: (props: any) => <Heading fontSize="3xl" my={"3"} {...props} />,
  h2: (props: any) => <Heading fontSize="2xl" my={"3"} {...props} />,
  h3: (props: any) => <Heading fontSize="xl" my={"3"} {...props} />,
  h4: (props: any) => <Heading fontSize="lg" my={"3"} {...props} />,
  h5: (props: any) => <Heading fontSize="md" my={"3"} {...props} />,
  h6: (props: any) => <Heading fontSize="sm" my={"3"} {...props} />,
  blockquote: (props: any) => <Text fontSize="lg" my={"3"} > NOT SUPPORTED </Text>,
  ul: (props: any) => <Text fontSize="lg" my={"3"} > NOT SUPPORTED </Text>,
  ol: (props: any) => <Text fontSize="lg" my={"3"} > NOT SUPPORTED </Text>,
  li: (props: any) => <Text fontSize="lg" my={"3"} > NOT SUPPORTED </Text>,
  table: (props: any) => <Text fontSize="lg" my={"3"} > NOT SUPPORTED </Text>,
  thead: (props: any) => <Text fontSize="lg" my={"3"} > NOT SUPPORTED </Text>,
  tbody: (props: any) => <Text fontSize="lg" my={"3"} > NOT SUPPORTED </Text>,
  tr: (props: any) => <Text fontSize="lg" my={"3"} > NOT SUPPORTED </Text>,
  td: (props: any) => <Text fontSize="lg" my={"3"} > NOT SUPPORTED </Text>,
  th: (props: any) => <Text fontSize="lg" my={"3"} > NOT SUPPORTED </Text>,
  code: (props: any) => <Text fontSize="lg" my={"3"} > NOT SUPPORTED </Text>,
  inlineCode: (props: any) => <Text fontSize="lg" my={"3"} > NOT SUPPORTED </Text>,
  pre: (props: any) => <Text fontSize="lg" my={"3"} > NOT SUPPORTED </Text>,
  em: (props: any) => <Text fontSize="lg" my={"3"} > NOT SUPPORTED </Text>,
  strong: (props: any) => <Text fontSize="lg" my={"3"} > NOT SUPPORTED </Text>,
  del: (props: any) => <Text fontSize="lg" my={"3"} > NOT SUPPORTED </Text>,
  hr: (props: any) => <Text fontSize="lg" my={"3"} > NOT SUPPORTED </Text>,
  a: (props: any) => <Text fontSize="lg" my={"3"} > NOT SUPPORTED </Text>,
  img: (props: any) => <Text fontSize="lg" my={"3"} > NOT SUPPORTED </Text>,
  ...CustomComponents,
};

export default MDXComponents;
