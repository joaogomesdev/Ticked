import {
  Flex,
  Heading,
  Stack,
  useColorMode,
  Link as ChakraLink,
  IconButton,
  Button,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";

interface Props {}

export const Header = ({}: Props) => {
  const router = useRouter();
  const { data: session } = useSession();
  const { colorMode, toggleColorMode } = useColorMode();

  async function handleDashboard() {
    await router.push("/app");
  }
  return (
    <Flex
      width="full"
      py={10}
      justifyContent="space-between"
      alignItems="center"
      paddingX={28}
    >
      <Link href={"/"}>
        <Heading
          cursor="pointer"
          textDecoration={router.pathname === "/" ? "underline" : "none"}
        >
          Ticked
        </Heading>
      </Link>
      <Flex alignItems="center" justifyContent="space-between">
        <Stack spacing={6} isInline mr={6}>
          <NavLink name="Docs" to="/docs" />
          <NavLink name="Cases" to="/cases" />
          <NavLink name="Pricing" to="/pricing" />
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
          onClick={session?.user ? handleDashboard : () => signIn()}
          borderColor={
            colorMode === "light" ? "blackAlpha.900" : "whiteAlpha.900"
          }
          border={colorMode === "light" ? "2px" : "none"}
          size="md"
          fontWeight="bold"
          bgColor={colorMode === "light" ? "transparent" : "#FFFFFF"}
          textColor={colorMode === "light" ? "#000000" : "#000000"}
        >
          {session?.user ? "Dashboard" : "Sign in"}
        </Button>
      </Flex>
    </Flex>
  );
};
