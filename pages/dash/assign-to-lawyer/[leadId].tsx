import Layout from "@/components/Layout";
import AssignToLawyer from "@/views/pages/AssignToLawyer";
import { GetServerSideProps } from "next";

interface Props {
  leadId: string;
}

const AssignToLawyerPage: React.FC<Props> = ({ leadId }) => {
  return (
    <Layout sidebar={false}>
      <AssignToLawyer leadId={leadId} />
    </Layout>
  );
};

export default AssignToLawyerPage;

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  const leadId = query.leadId || "";

  if (typeof leadId !== "string") {
    return {
      notFound: true,
    };
  }

  return { props: { leadId } };
};
