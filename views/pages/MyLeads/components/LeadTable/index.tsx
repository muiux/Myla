import { Table } from "flowbite-react";
import React, { useState } from "react";
import moment from "moment";
import { TableData } from "../..";
import Link from "next/link";
import { BsPencil } from "react-icons/bs";
import EditNoteModal from "../EditNoteModal";

interface Props {
  data: TableData[];
}

const LeadTable: React.FC<Props> = ({ data }) => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [idToEdit, setIdToEdit] = useState("");

  const onEditClick = (id: string) => () => {
    setIdToEdit(id);
    setEditModalOpen(true);
  };

  const handleSaveNotes = (newNotes: string) => {
    console.log("handleSaveNotes", newNotes);
  };

  return (
    <>
      <Table>
        <Table.Head>
          <Table.HeadCell>Date of initial contact</Table.HeadCell>
          <Table.HeadCell>Name of Lead</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>Deadline</Table.HeadCell>
          <Table.HeadCell>Last Contacted by</Table.HeadCell>
          <Table.HeadCell>Last Contacted on</Table.HeadCell>
          <Table.HeadCell>Notes</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {data.map((item, index) => (
            <Table.Row
              key={index}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {moment(item.createdAt).format("MMM DD YYYY")}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-blue-600 dark:text-white">
                <Link href={`/dash/my-leads/${item.id}`}>{item.fullName}</Link>
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {item.areaOfLaw}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {item.status}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {moment(item.deadline).format("MMM DD YYYY")}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {item.lastContactedBy}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {item.lastContactedOn}
              </Table.Cell>
              <Table.Cell className="flex items-center gap-2">
                <span className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {item.notes}
                </span>
                <BsPencil
                  className="cursor-pointer"
                  onClick={onEditClick(item.id)}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <EditNoteModal
        open={editModalOpen}
        notes={data.find((item) => item.id === idToEdit)?.notes || ""}
        onSave={handleSaveNotes}
        onClose={() => setEditModalOpen(false)}
      />
    </>
  );
};

export default LeadTable;
