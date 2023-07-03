import { Database } from "@/lib/database.types";
import { useSupabaseFunctions } from "@/service/supabase";
import {
  Button,
  DeepPartial,
  Dropdown,
  FlowbiteButtonTheme,
  FlowbiteLabelTheme,
  Label,
  TextInput,
  Textarea,
} from "flowbite-react";
import { useRouter } from "next/router";
import { useState } from "react";
import clxs from "classnames";

const LabelTheme: DeepPartial<FlowbiteLabelTheme> = {
  root: { base: "text-2xl" },
};

export default function CreateClient() {
  const router = useRouter();
  const { insertLead } = useSupabaseFunctions();
  const [values, setValues] = useState<
    Database["public"]["Tables"]["lead"]["Insert"]
  >({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    ref_no: "",
    area_of_law: "",
    intake_form: "",
    deadline: "",
    notes: "",
    action: "",
  });

  const handleChangeValues = (key: string, value: string) => {
    setValues((values) => ({ ...values, [key]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const { error } = await insertLead(values);
    if (!error) {
      router.push("/dash/my-leads");
    } else {
      console.error("insertLead", error);
    }
  };

  return (
    <div className="flex justify-center mt-2 mb-10">
      <form
        className="max-w-5xl w-full flex flex-col gap-8"
        onSubmit={handleSubmit}
      >
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
            value={values.firstname!}
            onChange={(e) => handleChangeValues("firstname", e.target.value)}
            required
          />
          <TextInput
            id="lastname"
            placeholder="Last name"
            type="text"
            value={values.lastname!}
            onChange={(e) => handleChangeValues("lastname", e.target.value)}
            required
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
            value={values.email!}
            onChange={(e) => handleChangeValues("email", e.target.value)}
            required
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
            value={values.phone!}
            onChange={(e) => handleChangeValues("phone", e.target.value)}
            required
          />
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
            value={values.ref_no!}
            onChange={(e) => handleChangeValues("ref_no", e.target.value)}
            type="text"
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
                "ring-4": values.area_of_law === "family_law",
              })}
              onClick={() => handleChangeValues("area_of_law", "family_law")}
            >
              Family Law
            </Button>
            <Button
              color="primary"
              pill
              className={clxs("focus:!ring-4", {
                "ring-4": values.area_of_law === "commercial_law",
              })}
              onClick={() =>
                handleChangeValues("area_of_law", "commercial_law")
              }
            >
              Commercial Law
            </Button>
            <Button
              color="primary"
              pill
              className={clxs("focus:!ring-4", {
                "ring-4": values.area_of_law === "wills_and_estates",
              })}
              onClick={() =>
                handleChangeValues("area_of_law", "wills_and_estates")
              }
            >
              Wills and Estates
            </Button>
            <Button
              color="primary"
              pill
              className={clxs("focus:!ring-4", {
                "ring-4": values.area_of_law === "real_estate",
              })}
              onClick={() => handleChangeValues("area_of_law", "real_estate")}
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
            <Dropdown
              inline
              label={values.intake_form || "Select intake form"}
              id="intake_form"
            >
              <Dropdown.Item
                onClick={() => handleChangeValues("intake_form", "Link 1")}
              >
                Link 1
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => handleChangeValues("intake_form", "Link 2")}
              >
                Link 2
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => handleChangeValues("intake_form", "Link 3")}
              >
                Link 3
              </Dropdown.Item>
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
            value={values.deadline!}
            onChange={(e) => handleChangeValues("deadline", e.target.value)}
            required
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
            value={values.notes!}
            onChange={(e) => handleChangeValues("notes", e.target.value)}
            rows={4}
          />
        </div>

        {/* Toggle Actions */}
        <div className="flex flex-col gap-2">
          <div className="text-left">
            <Label htmlFor="" value="Toggle Actions" theme={LabelTheme} />
          </div>
          <div className="flex justify-center gap-2">
            <Button
              color="primary"
              pill
              className={clxs("focus:!ring-4", {
                "ring-4": values.action === "send_email",
              })}
              onClick={() => handleChangeValues("action", "send_email")}
            >
              Send Email
            </Button>
            <Button
              color="primary"
              pill
              className={clxs("focus:!ring-4", {
                "ring-4": values.action === "send_docusign",
              })}
              onClick={() => handleChangeValues("action", "send_docusign")}
            >
              Send Docusign
            </Button>
            <Button
              color="primary"
              pill
              className={clxs("focus:!ring-4", {
                "ring-4": values.action === "send_notes",
              })}
              onClick={() => handleChangeValues("action", "send_notes")}
            >
              Send Lawyer&apos;s Notes
            </Button>
          </div>
        </div>

        {/* Email Preview */}
        <div className="flex flex-col gap-2">
          <div className="text-left">
            <Label htmlFor="" value="Email Preview" theme={LabelTheme} />
          </div>
          <div className="flex">
            Insert editable email preview in this div block
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-center">
          <Button type="submit" color="primary" pill>
            + Create Client and Complete Intake Actions
          </Button>
        </div>
      </form>
    </div>
  );
}
