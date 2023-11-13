import { ReactElement } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useFileContext } from "@/context";

function FileList(): ReactElement {
  const {
    state: { fileList },
  } = useFileContext();

  // Remember to keep the fileList updated after upload a new file

  return (
    <>
      <h1 className="text-2xl font-bold pt-5 text-green-800">File List</h1>

      <Table>
        <TableCaption>A list of your {`something`}.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">name</TableHead>
            <TableHead>email</TableHead>
            <TableHead>debtAmount</TableHead>
            <TableHead className="text-right">debtDueDate</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Pedro Soares</TableCell>
            <TableCell>pedro@gmail.com</TableCell>
            <TableCell>R$25.000,00</TableCell>
            <TableCell className="text-right">99-99-9999</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}

export { FileList };
