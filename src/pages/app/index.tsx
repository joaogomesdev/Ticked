import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Flex } from "@chakra-ui/react";
import DashboardShell from "components/DashboardShell";
import { EventTableHeader } from "components/EventTableHeader";
import { EventTableSkeleton } from "components/EventTableSkeleton";
import useSWR from "swr";
import EmptyEventState from "components/EmpyEventTable";
import { Event } from "@prisma/client";

interface Props {}

const fetcher = (url: string, token: string) =>
  fetch(url, {
    method: "GET",
    headers: new Headers({ "Content-Type": "application/json", token }),
    credentials: "same-origin",
  }).then((res) => res.json());

const App = ({}: Props) => {
  const { data: session } = useSession();
  const { data } = useSWR(session?.user ? "/api/events" : null, fetcher);
  console.log(data?.events.length);

  if (!data) {
    return (
      <DashboardShell>
        <EventTableHeader />

        <EventTableSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      <EventTableHeader />
      {data?.events.length > 0 ? <EventTableSkeleton /> : <EmptyEventState />}
    </DashboardShell>
  );
};

export default App;
