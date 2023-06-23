import Layout from "@/components/Layout";
import CreateClient from "@/views/pages/CreateClient";

export default function CreateClientPage() {
  return (
    <Layout sidebar={false}>
      <CreateClient />
    </Layout>
  );
}
