import React from "react";
import {
  Heading,
  Text,
  Flex,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { AddEventModal } from "./AddEventModal";

const EmptyEventState = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      border="2px solid #1AAE9F"
      width="100%"
      borderRadius={8}
      p={16}
      height="100%"
    >
      <Heading size="lg" mb={2}>
        You haven`t created any event.
      </Heading>
      <Text mb={4}>Welcome 👋 Lets get started.</Text>
      <AddEventModal>Create your first event</AddEventModal>
    </Flex>
  );
};

export default EmptyEventState;
