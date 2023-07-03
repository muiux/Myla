import { Button, Tabs } from "flowbite-react";
import { useSupabaseFunctions } from "@/service/supabase";
import { useEffect, useState } from "react";
import LeadTable from "./components/LeadTable";

export interface TableData {
  id: string;
  createdAt: string;
  fullName: string;
  areaOfLaw: string;
  status: "pending intake" | "follow up required" | "done";
  deadline: string;
  lastContactedBy: string;
  lastContactedOn: string;
  notes: string;
}

export default function MyLeads() {
  const { getLeads } = useSupabaseFunctions();
  const [data, setData] = useState<TableData[]>([]);

  useEffect(() => {
    if (!getLeads) {
      return;
    }
    getLeads()
      .then((response: any) => {
        if (response.error) {
          return [];
        }
        return response.data;
      })
      .then((response: any) => {
        setData(
          response.map((item: any) => {
            const id = item.id;
            const createdAt = item.created_at;
            const fullName = `${item.firstname} ${item.lastname}`;
            const areaOfLaw = item.area_of_law;
            const deadline = item.deadline;
            const lastContactedBy = "";
            const lastContactedOn = "";
            const notes = item.notes;

            let status = "pending intake";
            const noResponseTime =
              new Date().getTime() - new Date(createdAt).getTime();
            if (item.paid_at) {
              status = "done";
            } else if (noResponseTime > 1000 * 60 * 60 * 24 * 3) {
              status = "follow up required";
            } else {
              status = "pending intake";
            }
            return {
              id,
              createdAt,
              fullName,
              areaOfLaw,
              status,
              deadline,
              lastContactedBy,
              lastContactedOn,
              notes,
            };
          })
        );
      });
  }, [getLeads]);

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full flex justify-end">
        <Button
          className={"bg-blue-800 hover:bg-blue-900"}
          color="primary"
          pill
          href="/dash/create-new-client"
        >
          + Create Client
        </Button>
      </div>

      <Tabs.Group aria-label="Tabs with underline" style="underline">
        <Tabs.Item active title="Pending">
          <LeadTable
            data={data.filter((item) => item.status === "pending intake")}
          />
        </Tabs.Item>
        <Tabs.Item title="Action Required">
          <LeadTable
            data={data.filter((item) => item.status === "follow up required")}
          />
        </Tabs.Item>
        <Tabs.Item title="Historic">
          <LeadTable data={data.filter((item) => item.status === "done")} />
        </Tabs.Item>
      </Tabs.Group>
    </div>
  );
}
