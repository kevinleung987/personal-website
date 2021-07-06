import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = extendTheme({ config: { initialColorMode: "dark" } });
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
export default MyApp;
