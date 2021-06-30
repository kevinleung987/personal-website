import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = extendTheme({ config: { initialColorMode: "dark" } });
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;