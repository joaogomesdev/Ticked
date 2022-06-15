import {
  Flex,
  Heading,
  Text,
  useColorMode,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { LandingShell } from "components/LandingShell";
import React from "react";

interface Props {}

export const Cases = ({}: Props) => {
  const { colorMode } = useColorMode();
  const isSmallScreen = useBreakpointValue({
    xs: true,
    sm: true,
    md: true,
    lg: false,
    xl: false,
  });

  return (
    <LandingShell>
      <Flex flexDir="column" w="full">
        {/* Landing */}
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
              <span style={{ color: "#6558F5", fontWeight: "bold" }}>
                Ticked
              </span>{" "}
              <span style={{ color: "#F7C325" }}>
                is up to all types of events,
              </span>{" "}
              <span style={{ color: "#1AAE9F", fontWeight: "bold" }}>
                give the best for your business.
              </span>
            </Text>
          </Flex>

          <Image
            mr="28"
            src="/cases.svg"
            alt=""
            width=""
            height=""
            hidden={isSmallScreen}
          />
        </Flex>

        {/* Tech */}
        <Flex
          mt={100}
          justifyContent="space-between"
          alignItems="center"
          width="full"
        >
          <Image src="/tech02.png" alt="" w="" h="" />
          <Flex
            flexDir={["column", "column", "column", "row"]}
            justify="space-between"
            w="full"
            marginX="28"
          >
            <Heading fontSize="48" fontWeight="bold" w="full">
              Tech Event
            </Heading>
            <Text
              maxW="2xl"
              fontSize={20}
              color={colorMode === "light" ? "text.light" : "text.main"}
            >
              Registrations can be made through a custom ticket generated with
              Github and can be shared on Twitter, Linkedin, Dev.to and others.
            </Text>
          </Flex>

          <Image src="/tech02.png" alt="" w="" h="" />
        </Flex>

        {/* Academic */}
        <Flex
          mt={100}
          justifyContent="space-between"
          alignItems="center"
          width="full"
        >
          <Image src="/academy01.png" alt="" w="" h="" />
          <Flex
            flexDir={["column", "column", "column", "row"]}
            justify="space-between"
            w="full"
            marginX={["28", "28"]}
          >
            <Heading fontSize="48" fontWeight="bold" maxW="xs">
              Academic Event
            </Heading>
            <Text
              maxW="lg"
              fontSize={20}
              color={colorMode === "light" ? "text.light" : "text.main"}
            >
              Registrations can be made through a custom ticket generated with
              the college Auth system and can be shared on the Academic
              community.
              <br />
              <br />
              The students can also get generated certificates and automatic
              justification of absences.
            </Text>
          </Flex>

          <Image src="/academy02.png" alt="" w="" h="" />
        </Flex>

        {/* Entertainment */}
        <Flex
          mt={100}
          justifyContent="space-between"
          alignItems="center"
          width="full"
        >
          <Image justifySelf="flex-end" src="/enter01.png" alt="" w="" h="" />
          <Flex
            flexDir={["column", "column", "column", "row"]}
            justify="space-between"
            w="full"
            marginX="28"
          >
            <Heading fontSize="48" fontWeight="bold" w="full">
              Entertainment Event
            </Heading>
            <Text
              maxW="2xl"
              fontSize={20}
              color={colorMode === "light" ? "text.light" : "text.main"}
            >
              Registrations can be made through a custom ticket generated with
              the chosen integration system and then can be shared on the social
              media.
              <br />
              <br />
              The ticket will have the most relevant information for show and be
              generated after payment.
            </Text>
          </Flex>

          <Image src="/enter02.png" alt="" w="" h="" />
        </Flex>
      </Flex>
    </LandingShell>
  );
};
export default Cases;
