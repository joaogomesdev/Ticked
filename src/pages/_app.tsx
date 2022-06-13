// pages/_app.js
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "../styles/theme";
import { AppShell } from "../components/AppShell";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </ChakraProvider>
  );
}

export default MyApp;
