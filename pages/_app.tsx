import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/open-sans";
import "@fontsource/roboto";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import '../styles/code.css';

function MyApp({ Component, pageProps }: AppProps) {
  // TODO: Figure out font loading issue.
  const theme = extendTheme({
    config: { initialColorMode: "dark" },
    fonts: {
      heading: "Roboto",
      body: "Open Sans",
    },
  });
  // const { colorMode } = useColorMode();
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
export default MyApp;
