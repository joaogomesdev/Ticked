import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Image,
  Switch,
  Text,
} from "@chakra-ui/react";
import { LandingShell } from "components/LandingShell";
import React from "react";

interface Props {}

export const Pricing = ({}: Props) => {
  return (
    <LandingShell>
      <Flex justify="space-between">
        <Image src="/money01.png" width="300px" height="700" alt="" />
        <Flex flexDir="column" w="full" marginRight="28">
          <Flex align="center" justify="center" flexDir="column">
            <Heading fontSize="64">Pricing</Heading>
            <Flex mt="6" gap="6" justify="center" align="center">
              <Text fontSize="24">Monthly</Text>
              <Switch size="lg" colorScheme="yellow" border="" />
              <Text fontSize="24">Yearly</Text>
            </Flex>
          </Flex>

          <Flex mt="8" w="full" gap="32">
            <Box
              border="4px"
              w="365px"
              h="511"
              borderColor="brand.purple"
              borderRadius="18"
              padding="10"
            >
              <Text fontWeight="regular" fontSize="20" color="gray.500">
                Hobby
              </Text>

              <Heading>Free</Heading>
              <Text fontWeight="regular" fontSize="20" color="gray.400">
                Free plan for all users.
              </Text>

              <Flex flexDir="column" gap="4" mt="6">
                <Checkbox
                  size="lg"
                  borderColor="brand.purple"
                  colorScheme="purple"
                >
                  Plan
                </Checkbox>
                <Checkbox
                  size="lg"
                  borderColor="brand.purple"
                  colorScheme="purple"
                >
                  Plan
                </Checkbox>
                <Checkbox
                  size="lg"
                  borderColor="brand.purple"
                  colorScheme="purple"
                >
                  Plan
                </Checkbox>
                <Checkbox
                  size="lg"
                  borderColor="brand.purple"
                  colorScheme="purple"
                >
                  Plan
                </Checkbox>
              </Flex>

              <Button
                fontSize="20"
                border="2px"
                variant="outline"
                colorScheme="blackAlpha.900"
                mt="20"
                w="full"
                h="14"
              >
                Get started Free
              </Button>
            </Box>

            <Box
              border="4px"
              w="365px"
              h="511"
              borderColor="brand.green"
              borderRadius="18"
              padding="10"
            >
              <Text fontWeight="regular" fontSize="20" color="gray.500">
                Pro
              </Text>

              <Heading>$10</Heading>
              <Text fontWeight="regular" fontSize="20" color="gray.400">
                Ideal for event providers.
              </Text>

              <Flex flexDir="column" gap="4" mt="6">
                <Checkbox
                  size="lg"
                  borderColor="brand.green"
                  colorScheme="green"
                >
                  Plan
                </Checkbox>
                <Checkbox
                  size="lg"
                  borderColor="brand.green"
                  colorScheme="green"
                >
                  Plan
                </Checkbox>
                <Checkbox
                  size="lg"
                  borderColor="brand.green"
                  colorScheme="green"
                >
                  Plan
                </Checkbox>
                <Checkbox
                  size="lg"
                  borderColor="brand.green"
                  colorScheme="green"
                >
                  Plan
                </Checkbox>
              </Flex>

              <Button
                fontSize="20"
                border="2px"
                variant="outline"
                colorScheme="blackAlpha.900"
                mt="20"
                w="full"
                h="14"
              >
                Get Professional
              </Button>
            </Box>
          </Flex>
        </Flex>
        <Image src="/money02.png" width="300px" height="600" alt="" />
      </Flex>
    </LandingShell>
  );
};

export default Pricing;
