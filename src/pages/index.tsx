import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Image,
  useColorMode,
  useBreakpointValue,
} from "@chakra-ui/react";
import { LandingShell } from "components/LandingShell";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const { colorMode } = useColorMode();
  const isWideScreen = useBreakpointValue({ base: true, md: false, lg: true });

  return (
    <LandingShell>
      <Flex flexDir="column" width="full">
        {/* Landing */}
        <Flex
          height="full"
          flexDirection="row"
          justifyContent="space-between"
          position="relative"
        >
          <Flex mt={200} flexDirection="column" paddingLeft={28}>
            <Heading fontSize="64" color="brand.green" fontWeight="regular">
              Create custom tickets
            </Heading>
            <Heading fontSize="64" color="brand.purple" fontWeight="regular">
              and Generate them
            </Heading>
            <Heading fontSize="64" color="brand.yellow" fontWeight="regular">
              Easily👌
            </Heading>
            <Button
              variant="solid"
              size="md"
              bgColor="brand.orange"
              width={28}
              mt="8"
              fontWeight="bold"
              color="#FFFFFF"
            >
              Get started
            </Button>
          </Flex>
          <Box position="absolute" right="0" top="0">
            <img src="/tickets.svg" alt="" sizes="1" />
          </Box>
        </Flex>

        <Flex mt={280} flexDirection="row" paddingLeft={28}>
          <Heading
            fontSize="48"
            color="whiteAlpha.900"
            fontWeight="medium"
            maxW="lg"
          >
            The <span style={{ color: "#6558F5" }}>best</span> ticket experience
          </Heading>

          <Text
            maxW="md"
            fontSize={20}
            color={colorMode === "light" ? "text.light" : "text.main"}
          >
            Ticked is a management and generation service for events.
            <br />
            <br />
            With Ticked you can create personalised tickets for events and
            generate them with integration from other services.
            <br />
            <br />
            The generated tickets will take a personalised look with the visitor
            information and the visual identity of your event.
          </Text>
        </Flex>

        {/* Create */}
        <Flex
          flexDirection="row"
          width="full"
          justifyContent="space-between"
          alignItems="center"
        >
          <Image
            marginRight={isWideScreen ? "auto" : 28}
            alt=""
            src="/Magic.svg"
            width="134px"
            height="282px"
          />

          <Flex mt={280} flexDirection="row" marginRight="auto">
            <Flex flexDirection="column" gap="10">
              <Heading
                marginRight={100}
                fontSize="48"
                color="whiteAlpha.900"
                fontWeight="medium"
                maxW="lg"
              >
                Create
              </Heading>

              <Text
                maxW="md"
                fontSize={20}
                color={colorMode === "light" ? "text.light" : "text.main"}
              >
                Your can create new custom tickets to you events.
                <br />
                <br />
                <span style={{ color: "#F7C325", fontWeight: "bold" }}>
                  Customise the Information and visual identity. Your event,
                  your rules!
                </span>
              </Text>
            </Flex>
            <Box marginLeft="44">
              <Image
                alt=""
                src="https://i.imgur.com/ZUQ2OKI.png"
                width={isWideScreen ? "571px" : "271"}
                height={isWideScreen ? "295px" : "195"}
              />
            </Box>
          </Flex>
        </Flex>

        {/* Integrate */}
        <Flex
          flexDirection="row"
          width="full"
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex mt={280} flexDirection="row" marginLeft="auto">
            <Box marginRight="20" paddingLeft={28}>
              <Image
                alt=""
                src="https://i.imgur.com/2H64xg1.png"
                width="571px"
                height="295px"
              />
            </Box>

            <Flex flexDirection="column" gap="10">
              <Heading
                marginRight={100}
                fontSize="48"
                color="whiteAlpha.900"
                fontWeight="medium"
                maxW="lg"
              >
                Integrate
              </Heading>

              <Text
                maxW="md"
                fontSize={20}
                color={colorMode === "light" ? "text.light" : "text.main"}
              >
                Integrates in a simple way!
                <br />
                <br />
                Your can integrate the ticket generation with many providers
                such as Github, LinkedIn and many others.
                <br />
                <br />
                <span style={{ color: "#1AAE9F", fontWeight: "bold" }}>
                  Improve your visitors ticket experiences by using what fits
                  best for your business model. Your can create new custom
                  tickets to you events.
                </span>
              </Text>
            </Flex>
          </Flex>
          <Box pt="20" marginLeft={isWideScreen ? 48 : 0}>
            <Image src="/Eletric.png" width="207" height="343px" />
          </Box>
        </Flex>

        {/* Generate and enjoy */}
        <Flex
          mt={100}
          flexDirection="row"
          width="full"
          justifyContent="space-between"
          alignItems="center"
        >
          <Image alt="" src="/PartyLeft.png" width="200" height="600" />

          <Flex
            flexDirection="column"
            width="auto"
            justifyContent="center"
            alignItems="center"
          >
            <Heading fontSize="48" color="whiteAlpha.900" fontWeight="medium">
              {"🎉"} Generate and{" "}
              <span style={{ color: "#F7C325", fontWeight: "bold" }}>
                enjoy
              </span>{" "}
              {"🎉"}
            </Heading>

            <Text
              mt="6"
              textAlign="center"
              maxW="2xl"
              fontSize={20}
              color={colorMode === "light" ? "text.light" : "text.main"}
            >
              Your event visitors can generate their tickets in a simple and
              fast way.
              <br />
              <span style={{ color: "#6558F5", fontWeight: "bold" }}>
                Then enjoy the event and share it with the world. 🌍
              </span>
            </Text>

            <Box marginTop="6" position="relative">
              <Image
                src="https://i.imgur.com/O5hWTb7.png"
                width="571px"
                height="295px"
                alt=""
              />
              <Box
                marginTop="6"
                position="absolute"
                bottom="0"
                right="0"
                border="2px"
                borderColor="brand.purple"
              >
                <Image
                  src="https://media.giphy.com/media/dUx1Arrx9UsIRne4xQ/giphy.gif"
                  width="120px"
                  height="100px"
                  alt=""
                />
              </Box>
            </Box>
          </Flex>
          <Box>
            <Image src="/PartyRight.png" width="200" height="600" alt="" />
          </Box>
        </Flex>
      </Flex>
    </LandingShell>
  );
};

export default Home;
