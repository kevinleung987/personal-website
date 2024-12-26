import "@fontsource/open-sans";
import "@fontsource/roboto";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { Provider } from "../components/ui/provider";
import "../styles/code.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  // TODO: Figure out font loading issue.
  // const theme = extendTheme({
  //   config: { initialColorMode: "dark" },
  //   fonts: {
  //     heading: "Roboto",
  //     body: "Open Sans",
  //   },
  // });
  // const { colorMode } = useColorMode();
  return (
    <Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
export default MyApp;
