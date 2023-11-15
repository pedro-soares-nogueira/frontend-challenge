import { ReactElement, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useFileContext } from "@/context";
import axios from "axios";
import { FileActionType } from "@/constants";

function FileList(): ReactElement {
  const {
    state: { fileList },
    dispatch,
  } = useFileContext();

  console.log(fileList);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3333/documents");
        const documents = response.data.documents;

        dispatch({
          type: FileActionType.SET_FILE_LIST,
          payload: documents,
        });
      } catch (error) {
        console.error("Ocorreu um erro ao buscar os dados:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="bg-white rounded-lg p-6 space-y-6">
      <h2 className="text-xl font-bold">File List</h2>
      <div className="border border-gray-200 rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">name</TableHead>
              <TableHead>email</TableHead>
              <TableHead>debtAmount</TableHead>
              <TableHead className="text-right">debtDueDate</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fileList?.map((item) => (
              <TableRow key={item.debtID}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>R${item.debtAmount}</TableCell>
                <TableCell className="text-right">{item.debtDueDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export { FileList };
