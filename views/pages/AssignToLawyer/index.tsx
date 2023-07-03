import clxs from "classnames";
import { useSupabaseFunctions } from "@/service/supabase";
import {
  Button,
  DeepPartial,
  Dropdown,
  FlowbiteLabelTheme,
  Label,
  TextInput,
  Textarea,
} from "flowbite-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const LabelTheme: DeepPartial<FlowbiteLabelTheme> = {
  root: { base: "text-2xl" },
};

interface Props {
  leadId: string;
}

const AssignToLawyer: React.FC<Props> = ({ leadId }) => {
  const router = useRouter();
  const { getLawyers, getLeadById, insertClient } = useSupabaseFunctions();
  const [lawyers, setLawyers] = useState<{ id: string; lawyerName: string }[]>(
    []
  );
  const [lead, setLead] = useState<any>(undefined);
  const [primaryLawyer, setPrimaryLawyer] = useState("");
  const [secondaryLawyer, setSecondaryLawyer] = useState("");

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

  useEffect(() => {
    if (!getLawyers) {
      return;
    }
    getLawyers().then((response) => {
      if (!response.error) {
        setLawyers(
          response.data.map((item) => ({
            id: item.id,
            lawyerName: `${item.firstname} ${item.lastname}`,
          }))
        );
      }
    });
  }, [getLawyers]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!insertClient) {
      return;
    }
    const { error } = await insertClient({
      lawyer_id: primaryLawyer,
      lead_id: leadId,
    });
    if (!error) {
      router.push("/dash/my-clients");
    } else {
      console.error("insertClient", error);
    }
  };

  if (!lead) {
    return null;
  }

  return (
    <div className="flex justify-center mt-2 mb-10">
      <form
        className="max-w-5xl w-full flex flex-col gap-8"
        onSubmit={handleSubmit}
      >
        {/* Primary Lawyer */}
        <div className="flex flex-col gap-2">
          <div className="text-left">
            <Label htmlFor="" value="Primary Lawyer" theme={LabelTheme} />
          </div>
          <div className="flex">
            <Dropdown
              inline
              label={
                lawyers.find(({ id }) => id === primaryLawyer)?.lawyerName ||
                "Dropdown"
              }
            >
              {lawyers
                .filter(({ id }) => id !== secondaryLawyer)
                .map(({ id, lawyerName }) => (
                  <Dropdown.Item key={id} onClick={() => setPrimaryLawyer(id)}>
                    {lawyerName}
                  </Dropdown.Item>
                ))}
            </Dropdown>
          </div>
        </div>

        {/* Secondary Lawyer/Legal Assistant */}
        <div className="flex flex-col gap-2">
          <div className="text-left">
            <Label
              htmlFor=""
              value="Secondary Lawyer/Legal Assistant"
              theme={LabelTheme}
            />
          </div>
          <div className="flex">
            <Dropdown
              inline
              label={
                lawyers.find(({ id }) => id === secondaryLawyer)?.lawyerName ||
                "Dropdown"
              }
            >
              {lawyers
                .filter(({ id }) => id !== primaryLawyer)
                .map(({ id, lawyerName }) => (
                  <Dropdown.Item
                    key={id}
                    onClick={() => setSecondaryLawyer(id)}
                  >
                    {lawyerName}
                  </Dropdown.Item>
                ))}
            </Dropdown>
          </div>
        </div>

        {/* + Add Lawyer to File */}
        <div className="flex flex-col gap-2 items-center">
          <Button color={"primary"} pill>
            + Add Lawyer to File
          </Button>
        </div>

        {/* Add Client Reference No. (optional) */}
        <div className="flex flex-col gap-2">
          <div className="text-left">
            <Label
              htmlFor="clientrefno"
              value="Add Client Reference No. (optional)"
              theme={LabelTheme}
            />
          </div>
          <TextInput
            id="clientrefno"
            placeholder="Client ref no."
            type="text"
          />
        </div>

        <hr className="my-4" />

        <h5 className="text-2xl font-bold text-blue-800">
          Review Client Information:
        </h5>

        {/* Name of Client */}
        <div className="flex flex-col gap-2">
          <div className="text-left">
            <Label
              htmlFor="firstname"
              value="Name of Client"
              theme={LabelTheme}
            />
          </div>
          <TextInput
            id="firstname"
            placeholder="First name"
            type="text"
            required
            value={lead.firstname}
            readOnly
          />
          <TextInput
            id="lastname"
            placeholder="Last name"
            type="text"
            required
            value={lead.lastname}
            readOnly
          />
        </div>

        {/* Client Email */}
        <div className="flex flex-col gap-2">
          <div className="text-left">
            <Label htmlFor="email" value="Client Email" theme={LabelTheme} />
          </div>
          <TextInput
            id="email"
            placeholder="Email"
            type="email"
            required
            value={lead.email}
            readOnly
          />
        </div>

        {/* Client Phone */}
        <div className="flex flex-col gap-2">
          <div className="text-left">
            <Label htmlFor="phone" value="Client Phone" theme={LabelTheme} />
          </div>
          <TextInput
            id="phone"
            placeholder="Phone"
            type="tel"
            required
            value={lead.phone}
            readOnly
          />
        </div>

        {/* + Add Client to File */}
        <div className="flex flex-col gap-2 items-center">
          <Button color={"primary"} pill>
            + Add Client to File
          </Button>
        </div>

        {/* Client Reference No. (optional) */}
        <div className="flex flex-col gap-2">
          <div className="text-left">
            <Label
              htmlFor="refno"
              value="Client Reference No. (optional)"
              theme={LabelTheme}
            />
          </div>
          <TextInput
            id="refno"
            placeholder="Client ref no."
            type="number"
            value={lead.ref_no}
            readOnly
          />
        </div>

        <hr className="my-4" />

        {/* Area of Law */}
        <div className="flex flex-col gap-2">
          <div className="text-left">
            <Label htmlFor="" value="Area of Law" theme={LabelTheme} />
          </div>
          <div className="flex justify-center gap-2">
            <Button
              color="primary"
              pill
              className={clxs("focus:!ring-4", {
                "ring-4": lead.area_of_law === "family_law",
              })}
            >
              Family Law
            </Button>
            <Button
              color="primary"
              pill
              className={clxs("focus:!ring-4", {
                "ring-4": lead.area_of_law === "commercial_law",
              })}
            >
              Commercial Law
            </Button>
            <Button
              color="primary"
              pill
              className={clxs("focus:!ring-4", {
                "ring-4": lead.area_of_law === "wills_and_estates",
              })}
            >
              Wills and Estates
            </Button>
            <Button
              color="primary"
              pill
              className={clxs("focus:!ring-4", {
                "ring-4": lead.area_of_law === "real_estate",
              })}
            >
              Real Estate
            </Button>
          </div>
        </div>

        <hr className="my-4" />

        {/* Intake Form */}
        <div className="flex flex-col gap-2">
          <div className="text-left">
            <Label htmlFor="" value="Intake Form" theme={LabelTheme} />
          </div>
          <div className="flex justify-center">
            <Dropdown inline label={lead.intake_form || "Select intake form"}>
              <Dropdown.Item>Link 1</Dropdown.Item>
              <Dropdown.Item>Link 2</Dropdown.Item>
              <Dropdown.Item>Link 3</Dropdown.Item>
            </Dropdown>
          </div>
        </div>

        <hr className="my-4" />

        {/* Deadline */}
        <div className="flex flex-col gap-2">
          <div className="text-left">
            <Label htmlFor="deadline" value="Deadline" theme={LabelTheme} />
          </div>
          <TextInput
            id="deadline"
            placeholder="dd/mm/yyyy or estimate"
            type="text"
            required
            value={lead.deadline}
            readOnly
          />
        </div>

        <hr className="my-4" />

        {/* Notes for lawyer */}
        <div className="flex flex-col gap-2">
          <div className="text-left">
            <Label
              htmlFor="notesforlawyer"
              value="Notes for lawyer"
              theme={LabelTheme}
            />
          </div>
          <Textarea
            id="notesforlawyer"
            placeholder="Leave a notes..."
            required
            rows={4}
            value={lead.notes}
            readOnly
          />
        </div>

        <hr className="my-4" />

        {/* Review First Draft and Notes */}
        <div className="flex flex-col gap-2">
          <div className="text-left">
            <Label
              htmlFor=""
              value="Review First Draft and Notes"
              theme={LabelTheme}
            />
          </div>
          <div className="flex h-[300px]">
            This is where we embed the word doc.
          </div>
        </div>

        {/* Additional Notes for Lawyer */}
        <div className="flex flex-col gap-2">
          <div className="text-left">
            <Label
              htmlFor="plusnotesforlawyer"
              value="Additional Notes for Lawyer"
              theme={LabelTheme}
            />
          </div>
          <Textarea
            id="plusnotesforlawyer"
            placeholder="Leave a notes..."
            rows={4}
          />
        </div>

        {/* Submit */}
        <div className="flex justify-center">
          <Button type="submit" color="primary" pill>
            Create Client File and Assign to Lawyer
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AssignToLawyer;
