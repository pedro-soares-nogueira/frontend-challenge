import { ReactElement } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useFileContext } from "@/context";

function FileList(): ReactElement {

  const { state: { fileList } } = useFileContext();

  // Remember to keep the fileList updated after upload a new file

    return (
      <>
        <h1 className="text-2xl font-bold pt-5 text-green-800">File List</h1>

        <Table>
          <TableCaption>A list of your {`something`}.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Something 1</TableHead>
              <TableHead>Something 2</TableHead>
              <TableHead className="text-right">Something 3</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">R$25.000,00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </>
    )
}

export { FileList };
