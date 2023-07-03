import { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import { RiPencilFill } from "react-icons/ri";
import IntakeQuestions from "@/components/IntakeQuestions";
import Template from "@/components/Template";
import { IndividualLeadProp } from "@/pages/dash/my-leads/[leadId]";
import { useSupabaseFunctions } from "@/service/supabase";

const IndividualLead: React.FC<IndividualLeadProp> = ({ leadId }) => {
  const { getLeadById } = useSupabaseFunctions();
  const [lead, setLead] = useState<any>(undefined);

  useEffect(() => {
    if (leadId && getLeadById) {
      getLeadById(leadId)
        .then((response) => {
          if (response.error) {
            throw "Error";
          }
          return response.data;
        })
        .then((lead: any) => {
          setLead(lead);
        });
    }
    return () => {
      setLead(undefined);
    };
  }, [getLeadById, leadId]);

  if (!lead) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full h-10 relative">
        <h4 className="text-3xl text-blue-800 text-center">
          {lead.firstname || ""} {lead.lastname || ""}
        </h4>
        <Button
          className={
            "absolute top-1/2 right-0 -translate-y-1/2 bg-blue-800 hover:bg-blue-900"
          }
          color="primary"
          pill
          href="/dash/create-new-client"
        >
          + Create Client
        </Button>
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

          <Template leadId={lead.id} />
        </div>
      </div>
    </div>
  );
};

export default IndividualLead;
