import React from "react";
import DashboardShell from "components/DashboardShell";
import { TicketTableHeader } from "components/TicketTableHeader";
import { TicketTableSkeleton } from "components/TicketTableSkeleton";

interface Props {}

const Tickets = ({}: Props) => {
  const data: never[] = [];

  if (data) {
    return (
      <DashboardShell>
        <TicketTableHeader />

        <TicketTableSkeleton />
      </DashboardShell>
    );
  }

  return <DashboardShell>Table</DashboardShell>;
};

export default Tickets;
