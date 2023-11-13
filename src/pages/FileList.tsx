import { ReactElement, useEffect, useState } from "react";
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
import axios from "axios";

function FileList(): ReactElement {
  const [data, setData] = useState<File[] | null>(null);

  const {
    state: { fileList },
  } = useFileContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3333/documents");
        setData(response.data.documents);
      } catch (error) {
        console.error("Ocorreu um erro ao buscar os dados:", error);
      }
    };

    fetchData();
  }, []);

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
            {data?.map((item) => (
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
