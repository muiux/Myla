import Layout from "@/components/Layout";
import IndividualLead from "@/views/pages/MyLeads/components/IndividualLead";
import { GetServerSideProps } from "next";
import React from "react";

export interface IndividualLeadProp {
  leadId: string;
}

const IndividualLeadPage: React.FC<IndividualLeadProp> = ({ leadId }) => {
  return (
    <Layout>
      <IndividualLead leadId={leadId} />
    </Layout>
  );
};

export default IndividualLeadPage;

export const getServerSideProps: GetServerSideProps<
  IndividualLeadProp
> = async ({ query }) => {
  const leadId = query.leadId || "";

  if (typeof leadId !== "string") {
    return {
      notFound: true,
    };
  }

  return { props: { leadId } };
};
