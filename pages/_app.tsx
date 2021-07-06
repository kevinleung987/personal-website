import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/open-sans";
import "@fontsource/roboto";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    config: { initialColorMode: "dark" },
    fonts: {
      heading: "Roboto",
      body: "Open Sans",
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
export default MyApp;
