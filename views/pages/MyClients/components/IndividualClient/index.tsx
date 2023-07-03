import { Button } from "flowbite-react";
import { RiPencilFill } from "react-icons/ri";
import IntakeQuestions from "./components/IntakeQuestions";
import Template from "./components/Template";
import { IndividualClientProp } from "@/pages/dash/my-clients/[clientId]";

const IndividualClient: React.FC<IndividualClientProp> = ({ clientId }) => {
  console.log({ clientId });
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full relative">
        <h4 className="text-3xl text-blue-800 text-center">name of lead</h4>
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

          <IntakeQuestions />
        </div>

        {/* Template */}
        <div className="relative flex flex-col gap-4 mb-4">
          <h5 className="text-center text-blue-800">Template</h5>
          <div className="absolute top-0 right-0">
            <RiPencilFill className="text-blue-800" size="2rem" />
          </div>

          <Template />
        </div>
      </div>
    </div>
  );
};

export default IndividualClient;
