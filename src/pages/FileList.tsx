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
import { Link } from "react-router-dom";

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
        {fileList.length !== 0 && (
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
                  <TableCell className="text-right">
                    {item.debtDueDate}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}

        {fileList.length === 0 && (
          <div className="flex items-center justify-center flex-col gap-6 md:p-10 p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-20 h-20 text-yellow-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
            <div className="flex items-center justify-center flex-col">
              <p className="text-gray-800 text-lg">
                You don't seem to have any data yet
              </p>
              <Link
                to={"/upload"}
                className="inline-flex gap-2 text-gray-800 text-lg"
              >
                Go to
                <span className="text-blue-600">upload</span> session
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mt-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export { FileList };
