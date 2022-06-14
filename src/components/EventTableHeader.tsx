import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { AddEventModal } from "./AddEventModal";

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
        <AddEventModal>New event</AddEventModal>
      </Flex>
    </>
  );
};

export { EventTableHeader };
