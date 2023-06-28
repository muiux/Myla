import {
  Button,
  DeepPartial,
  Dropdown,
  FlowbiteLabelTheme,
  Label,
  TextInput,
  Textarea,
} from "flowbite-react";

const LabelTheme: DeepPartial<FlowbiteLabelTheme> = {
  root: { base: "text-2xl" },
};

export default function CreateClient() {
  return (
    <div className="flex justify-center mt-2 mb-10">
      <form className="max-w-5xl w-full flex flex-col gap-8">
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
          <div className="text-left">
            <Label htmlFor="email" value="Client Email" theme={LabelTheme} />
          </div>
          <TextInput id="email" placeholder="Email" type="email" required />
        </div>

        {/* Client Phone */}
        <div className="flex flex-col gap-2">
          <div className="text-left">
            <Label htmlFor="phone" value="Client Phone" theme={LabelTheme} />
          </div>
          <TextInput id="phone" placeholder="Phone" type="tel" required />
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
          <TextInput id="refno" placeholder="Client ref no." type="number" />
        </div>

        <hr className="my-4" />

        {/* Area of Law */}
        <div className="flex flex-col gap-2">
          <div className="text-left">
            <Label htmlFor="" value="Area of Law" theme={LabelTheme} />
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
        <div className="flex flex-col gap-2">
          <div className="text-left">
            <Label htmlFor="" value="Intake Form" theme={LabelTheme} />
          </div>
          <div className="flex justify-center">
            <Dropdown inline label="Select intake form">
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
          />
        </div>

        {/* Toggle Actions */}
        <div className="flex flex-col gap-2">
          <div className="text-left">
            <Label htmlFor="" value="Toggle Actions" theme={LabelTheme} />
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
