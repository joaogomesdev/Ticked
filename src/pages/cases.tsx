import { Flex, Heading, Text, useColorMode, Image } from "@chakra-ui/react";
import { LandingShell } from "components/LandingShell";
import React from "react";

interface Props {}

export const Cases = ({}: Props) => {
  const { colorMode } = useColorMode();

  return (
    <LandingShell>
      <Flex
        mt={100}
        justifyContent="space-between"
        alignItems="center"
        width="full"
      >
        <Flex flexDir="column" marginLeft="28" maxW="lg">
          <Heading fontSize="64" color="brand.purple" fontWeight="bold">
            Cases
          </Heading>
          <Heading fontSize="36" fontWeight="regular">
            Here are some examples of how Ticked can be used.
          </Heading>

          <Text
            mt="2"
            fontSize={24}
            color={colorMode === "light" ? "text.light" : "text.main"}
          >
            <span style={{ color: "#6558F5", fontWeight: "bold" }}>Ticked</span>{" "}
            <span style={{ color: "#F7C325" }}>
              is up to all types of events,
            </span>{" "}
            <span style={{ color: "#1AAE9F", fontWeight: "bold" }}>
              give the best for your business.
            </span>
          </Text>
        </Flex>

        <Image mr="28" src="/cases.svg" alt="" width="" height="" />
      </Flex>
    </LandingShell>
  );
};
export default Cases;
