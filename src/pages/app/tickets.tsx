import React from "react";
import DashboardShell from "components/DashboardShell";
import { TicketTableHeader } from "components/TicketTableHeader";
import { TicketTableSkeleton } from "components/TicketTableSkeleton";
import { GetServerSideProps } from "next";

interface Props {}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // if (
  //   !context.req.cookies["next-auth.session-token"] ||
  //   !context.req.cookies["__Secure-next-auth.session-token"]
  // ) {
  //   return {
  //     redirect: {
  //       permanent: false,
  //       destination: "/",
  //     },
  //   };
  // }
  return { props: {} };
};

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
