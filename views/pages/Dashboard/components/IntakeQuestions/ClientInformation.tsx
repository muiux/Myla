import { Label, TextInput, Button, Dropdown, Textarea } from "flowbite-react";
import { RiPencilFill } from "react-icons/ri";

export default function ClientInformation() {
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
          />
          <TextInput
            id="lastname"
            placeholder="Last name"
            type="text"
            required
          />
        </div>

        {/* Client Email */}
        <div className="flex flex-col gap-2">
          <div className="text-center">
            <Label htmlFor="email" value="Client Email" />
          </div>
          <TextInput id="email" placeholder="Email" type="email" required />
        </div>

        {/* Client Phone */}
        <div className="flex flex-col gap-2">
          <div className="text-center">
            <Label htmlFor="phone" value="Client Phone" />
          </div>
          <TextInput id="phone" placeholder="Phone" type="tel" required />
        </div>

        {/* Client Reference No. (optional) */}
        <div className="flex flex-col gap-2">
          <div className="text-center">
            <Label htmlFor="refno" value="Client Reference No. (optional)" />
          </div>
          <TextInput id="refno" placeholder="Client ref no." type="number" />
        </div>

        <hr className="my-4" />

        {/* Area of Law */}
        <div className="flex flex-col gap-2">
          <div className="text-center">
            <Label htmlFor="" value="Area of Law" />
          </div>
          <div className="flex justify-center gap-2">
            <Button color="primary" pill>
              Family Law
            </Button>
            <Button color="primary" pill>
              Commercial Law
            </Button>
            <Button color="primary" pill>
              Wills and Estates
            </Button>
            <Button color="primary" pill>
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
          <Dropdown inline label="Select intake form">
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
            placeholder="Leave a notes..."
            required
            rows={4}
          />
        </div>

        {/* Toggle Actions */}
        <div className="flex flex-col gap-2">
          <div className="text-center">
            <Label htmlFor="" value="Toggle Actions" />
          </div>
          <div className="flex justify-center gap-2">
            <Button color="primary" pill>
              Send Email
            </Button>
            <Button color="primary" pill>
              Send Docusign
            </Button>
            <Button color="primary" pill>
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
