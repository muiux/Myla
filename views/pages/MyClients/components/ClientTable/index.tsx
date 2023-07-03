import { Table } from "flowbite-react";
import React, { useState } from "react";
import moment from "moment";
import { TableData } from "../..";
import Link from "next/link";

interface Props {
  data: TableData[];
}

const ClientTable: React.FC<Props> = ({ data }) => {
  return (
    <Table>
      <Table.Head>
        <Table.HeadCell>Name of Lead</Table.HeadCell>
        <Table.HeadCell>Client Ref number</Table.HeadCell>
        <Table.HeadCell>Category</Table.HeadCell>
        <Table.HeadCell>Deadline</Table.HeadCell>
        <Table.HeadCell>Assigned Lawyer(s)</Table.HeadCell>
        <Table.HeadCell>Notes</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {data.map((item, index) => (
          <Table.Row
            key={index}
            className="bg-white dark:border-gray-700 dark:bg-gray-800"
          >
            <Table.Cell className="whitespace-nowrap font-medium text-blue-600 dark:text-white">
              <Link href={`/dash/my-clients/${item.id}`}>{item.leadName}</Link>
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {item.refNo}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {item.areaOfLaw}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {moment(item.deadline).format("MMM DD YYYY")}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {item.lawyerName}
            </Table.Cell>
            <Table.Cell className="flex items-center gap-2">
              <span className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {item.notes}
              </span>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default ClientTable;
