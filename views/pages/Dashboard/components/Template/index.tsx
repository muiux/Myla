import { Button, Label, Textarea } from "flowbite-react";

export default function Template() {
  return (
    <>
      <div className="w-full h-[500px] rounded-xl bg-gray-100"></div>

      <div className="flex gap-4 justify-center">
        <Button href="/dash/assign-to-lawyer" color="primary" pill>
          Assign to Lawyer
        </Button>
        <Button color="primary" pill>
          Upload Docx
        </Button>
      </div>

      <div className="flex flex-col gap-2">
        <div className="text-center">
          <Label htmlFor="notes" value="Notes" />
        </div>
        <Textarea id="notes" placeholder="Leave a notes..." required rows={4} />
      </div>
    </>
  );
}
