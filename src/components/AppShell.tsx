import React from "react";
import { Flex } from "@chakra-ui/react";

import { Header } from "./Headet";
import { Footer } from "./Footer";

interface Props {
  children: React.ReactNode;
}

export const AppShell = ({ children }: Props) => {
  return (
    <Flex flexDirection="column">
      <Header />

      <Flex width="full" mb="28">
        {children}
      </Flex>

      <Footer />
    </Flex>
  );
};
