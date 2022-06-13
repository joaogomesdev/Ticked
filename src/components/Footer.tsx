import {
  Box,
  Divider,
  Flex,
  useColorMode,
  Text,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { RiGithubFill, RiTwitterFill } from "react-icons/ri";

interface Props {}

export const Footer = () => {
  const { colorMode } = useColorMode();

  return (
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
              <Text mt="2" fontSize={20} color="text.light" fontWeight="medium">
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
  );
};
