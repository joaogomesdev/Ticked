import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Heading,
} from "@chakra-ui/react";

const EventTableHeader = () => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="/app">Events</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex justifyContent="space-between">
        <Heading mb={8}>My events</Heading>
        <Button border="2px" variant="outline">
          New event
        </Button>
      </Flex>
    </>
  );
};

export { EventTableHeader };
