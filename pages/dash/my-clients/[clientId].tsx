import Layout from "@/components/Layout";
import IndividualClient from "@/views/pages/MyClients/components/IndividualClient";
import { GetServerSideProps } from "next";
import React from "react";

export interface IndividualClientProp {
  clientId: string;
}

const IndividualClientPage: React.FC<IndividualClientProp> = ({ clientId }) => {
  return (
    <Layout>
      <IndividualClient clientId={clientId} />
    </Layout>
  );
};

export default IndividualClientPage;

export const getServerSideProps: GetServerSideProps<
  IndividualClientProp
> = async ({ query }) => {
  const clientId = query.clientId || "";

  if (typeof clientId !== "string") {
    return {
      notFound: true,
    };
  }

  return { props: { clientId } };
};
