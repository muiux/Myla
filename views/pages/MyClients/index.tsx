import { useSupabaseFunctions } from "@/service/supabase";
import { useEffect, useState } from "react";
import ClientTable from "./components/ClientTable";

export interface TableData {
  id: string;
  leadName: string;
  refNo: string;
  areaOfLaw: string;
  deadline: string;
  lawyerName: string;
  notes: string;
}

export default function MyClients() {
  const { getClients } = useSupabaseFunctions();
  const [data, setData] = useState<TableData[]>([]);

  useEffect(() => {
    if (!getClients) {
      return;
    }
    getClients()
      .then((response: any) => {
        if (response.error) {
          return [];
        }
        return response.data;
      })
      .then((response) => {
        setData(
          response.map((item: any) => {
            const { id, lawyer, lead } = item;
            return {
              id,
              leadName: `${lead.firstname} ${lead.lastname}`,
              refNo: lead.ref_no,
              areaOfLaw: lead.area_of_law,
              deadline: lead.deadline,
              lawyerName: `${lawyer.firstname} ${lawyer.lastname}`,
              notes: lead.notes,
            };
          })
        );
      });
  }, [getClients]);

  return (
    <div className="flex flex-col gap-4">
      <ClientTable data={data} />
    </div>
  );
}
