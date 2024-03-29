import { Accordion } from "flowbite-react";
import ClientInformation from "./ClientInformation";
import ClientAttachments from "./ClientAttachments";

interface Props {
  lead: any;
}

const IntakeQuestions: React.FC<Props> = ({ lead }) => {
  return (
    <>
      <div className="h-[500px]">Intake Questions here</div>

      <Accordion collapseAll>
        <Accordion.Panel>
          <Accordion.Title>Client Information</Accordion.Title>
          <Accordion.Content>
            <ClientInformation lead={lead} />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Client Attachments</Accordion.Title>
          <Accordion.Content>
            <ClientAttachments />
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </>
  );
};

export default IntakeQuestions;
