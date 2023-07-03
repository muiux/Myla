import clxs from "classnames";
import { Label, TextInput, Button, Dropdown, Textarea } from "flowbite-react";
import { RiPencilFill } from "react-icons/ri";

export default function ClientInformation({ lead }: any) {
  return (
    <div className="relative flex flex-col gap-2">
      <div className="absolute top-0.5 right-0">
        <RiPencilFill className="text-blue-800" size="1rem" />
      </div>

      <form className="flex flex-col gap-2">
        {/* Name of Client */}
        <div className="flex flex-col gap-2">
          <div className="text-center">
            <Label htmlFor="firstname" value="Name of Client" />
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
          <div className="text-center">
            <Label htmlFor="email" value="Client Email" />
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
          <div className="text-center">
            <Label htmlFor="phone" value="Client Phone" />
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

        {/* Client Reference No. (optional) */}
        <div className="flex flex-col gap-2">
          <div className="text-center">
            <Label htmlFor="refno" value="Client Reference No. (optional)" />
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
          <div className="text-center">
            <Label htmlFor="" value="Area of Law" />
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
        <div className="flex flex-col gap-2 items-center">
          <div className="text-center">
            <Label htmlFor="" value="Intake Form" />
          </div>
          <Dropdown inline label={lead.intake_form || "Select intake form"}>
            <Dropdown.Item>Link 1</Dropdown.Item>
            <Dropdown.Item>Link 2</Dropdown.Item>
            <Dropdown.Item>Link 3</Dropdown.Item>
          </Dropdown>
        </div>

        <hr className="my-4" />

        {/* Deadline */}
        <div className="flex flex-col gap-2">
          <div className="text-center">
            <Label htmlFor="deadline" value="Deadline" />
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
          <div className="text-center">
            <Label htmlFor="notesforlawyer" value="Notes for lawyer" />
          </div>
          <Textarea
            id="notesforlawyer"
            placeholder="notes..."
            required
            rows={4}
            value={lead.notes}
            readOnly
          />
        </div>

        {/* Toggle Actions */}
        <div className="flex flex-col gap-2">
          <div className="text-center">
            <Label htmlFor="" value="Toggle Actions" />
          </div>
          <div className="flex justify-center gap-2">
            <Button
              color="primary"
              pill
              className={clxs("focus:!ring-4", {
                "ring-4": lead.action === "send_email",
              })}
            >
              Send Email
            </Button>
            <Button
              color="primary"
              pill
              className={clxs("focus:!ring-4", {
                "ring-4": lead.action === "send_docusign",
              })}
            >
              Send Docusign
            </Button>
            <Button
              color="primary"
              pill
              className={clxs("focus:!ring-4", {
                "ring-4": lead.action === "send_notes",
              })}
            >
              Send Lawyer&apos;s Notes
            </Button>
          </div>
        </div>

        {/* Email Preview */}
        <div className="flex flex-col gap-2">
          <div className="text-center">
            <Label htmlFor="" value="Email Preview" />
          </div>
          <div className="flex">
            Insert editable email preview in this div block
          </div>
        </div>
      </form>
    </div>
  );
}
