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

export default function AssignToLawyer() {
  return (
    <div className="flex justify-center mt-2 mb-10">
      <form className="max-w-5xl w-full flex flex-col gap-8">
        {/* Primary Lawyer */}
        <div className="flex flex-col gap-2">
          <div className="text-left">
            <Label htmlFor="" value="Primary Lawyer" theme={LabelTheme} />
          </div>
          <div className="flex">
            <Dropdown inline label="Dropdown">
              <Dropdown.Item>Link 1</Dropdown.Item>
              <Dropdown.Item>Link 2</Dropdown.Item>
              <Dropdown.Item>Link 3</Dropdown.Item>
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
            <Dropdown inline label="Dropdown">
              <Dropdown.Item>Link 1</Dropdown.Item>
              <Dropdown.Item>Link 2</Dropdown.Item>
              <Dropdown.Item>Link 3</Dropdown.Item>
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
            required
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
            required
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
}
