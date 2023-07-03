import { Button } from "flowbite-react";
import { RiPencilFill } from "react-icons/ri";
import IntakeQuestions from "@/components/IntakeQuestions";
import Template from "@/components/Template";
import { IndividualClientProp } from "@/pages/dash/my-clients/[clientId]";
import { useSupabaseFunctions } from "@/service/supabase";
import { useEffect, useState } from "react";

const IndividualClient: React.FC<IndividualClientProp> = ({ clientId }) => {
  const { getClientById } = useSupabaseFunctions();
  const [lead, setLead] = useState<any>(undefined);

  useEffect(() => {
    if (clientId) {
      getClientById(clientId).then((response) => {
        if (!response.error) {
          const { lead } = response.data as any;
          setLead(lead);
        }
      });
    }
  }, [getClientById, clientId]);

  if (!lead) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full relative">
        <h4 className="text-3xl text-blue-800 text-center">
          {lead.firstname} {lead.lastname} - {lead.ref_no}
        </h4>
      </div>

      <hr />

      <div
        className="grid grid-cols-2 gap-4"
        style={{
          background:
            "linear-gradient(#E5E7EB, #E5E7EB) center/1px 100% no-repeat",
        }}
      >
        {/* Intake Questions */}
        <div className="relative flex flex-col gap-4 mb-4">
          <h5 className="text-center text-blue-800">Intake Questions</h5>
          <div className="absolute top-0 right-0">
            <RiPencilFill className="text-blue-800" size="2rem" />
          </div>

          <IntakeQuestions lead={lead} />
        </div>

        {/* Template */}
        <div className="relative flex flex-col gap-4 mb-4">
          <h5 className="text-center text-blue-800">Template</h5>
          <div className="absolute top-0 right-0">
            <RiPencilFill className="text-blue-800" size="2rem" />
          </div>

          <Template leadId={lead.id} noAssign />
        </div>
      </div>
    </div>
  );
};

export default IndividualClient;
