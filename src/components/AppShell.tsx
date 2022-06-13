import React from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Icon,
  IconButton,
  Link as ChakraLink,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";
import {
  RiGithubFill,
  RiMoonClearFill,
  RiSunFill,
  RiTwitterFill,
} from "react-icons/ri";

interface Props {
  children: React.ReactNode;
}

export const AppShell = ({ children }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex flexDirection="column">
      <Flex
        width="full"
        py={10}
        justifyContent="space-between"
        alignItems="center"
        paddingX={28}
      >
        <Heading textDecoration="underline">Ticked</Heading>
        <Flex alignItems="center" justifyContent="space-between">
          <Stack spacing={6} isInline mr={6}>
            <Link href="/docs">
              <ChakraLink>Docs</ChakraLink>
            </Link>
            <Link href="/cases">
              <ChakraLink>Cases</ChakraLink>
            </Link>
            <Link href="/pricing">
              <ChakraLink>Pricing</ChakraLink>
            </Link>
          </Stack>
          <IconButton
            borderColor={
              colorMode === "light" ? "blackAlpha.900" : "whiteAlpha.900"
            }
            border="2px"
            borderRadius="full"
            onClick={toggleColorMode}
            aria-label="icon"
            icon={colorMode === "light" ? <RiSunFill /> : <RiMoonClearFill />}
            size="md"
            mr={4}
          />
          <Button
            borderColor={
              colorMode === "light" ? "blackAlpha.900" : "whiteAlpha.900"
            }
            border={colorMode === "light" ? "2px" : "none"}
            size="md"
            fontWeight="bold"
            bgColor={colorMode === "light" ? "transparent" : "#FFFFFF"}
            textColor={colorMode === "light" ? "#000000" : "#000000"}
          >
            Dashboard
          </Button>
        </Flex>
      </Flex>
      <Flex width="full" mb="28">
        {children}
      </Flex>
      <Box px="28" mb="20">
        {colorMode === "light" ? (
          <Divider color="text.light" border="2px" />
        ) : (
          <Divider color="whiteAlpha.900" border="2px" />
        )}
        <Flex width="full" height={176} flexDirection="column">
          <Flex justifyContent="space-between" alignItems="flex-start" mt="8">
            <Flex flexDirection="column" alignItems="flex-start">
              <Flex
                justifyContent="flex-start"
                alignItems="flex-start"
                flexDirection="column"
              >
                <Text fontWeight="bold" fontSize={24}>
                  Ticked
                </Text>
                <Text
                  mt="2"
                  fontSize={20}
                  color="text.light"
                  fontWeight="medium"
                >
                  hi@ticked.fun
                </Text>
              </Flex>
              <Text
                mt={8}
                color={colorMode === "light" ? "blackAlpha.900" : "text.main"}
              >
                Copyright @ 2022
              </Text>
            </Flex>
            <Flex flexDirection="column" alignItems="flex-start">
              <Text fontWeight="bold">Follow us</Text>
              <Stack spacing={2} isInline mt="2">
                <RiGithubFill color="#858C92" size={24} />
                <RiTwitterFill color="#858C92" size={24} />
                <RiGithubFill color="#858C92" size={24} />
                <RiGithubFill color="#858C92" size={24} />
              </Stack>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};
