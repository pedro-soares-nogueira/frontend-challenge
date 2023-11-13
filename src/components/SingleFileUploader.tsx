import { useFileContext } from "@/context";
import { ChangeEvent, useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const SingleFileUploader = () => {
  const [arquive, setArquive] = useState<File>();
  const [bytesAmount, setBytesAmount] = useState(arquive ? arquive.size : 0);

  const {
    state: { file },
  } = useFileContext();

  console.log(file);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileElements = e.target.files;

    if (fileElements && fileElements.length > 0) {
      const file = fileElements[0];

      console.log(file.size);
      setArquive(file);
      setBytesAmount(file.size);
    }
  };

  const handleUpload = async () => {
    // Do your upload logic here. Remember to use the FileContext
  };

  const formatFileBytes = (bytes: number, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  // const interval = setInterval(() => {
  //   console.count();
  //   const result = bytesAmount - 5e6;
  //   setBytesAmount(result < 0 ? 0 : result);
  //   if (bytesAmount === 0) clearInterval(interval);
  // }, 50);

  return (
    <>
      <div className="flex flex-col gap-6 bg-white p-6 rounded-lg">
        <h2 className="text-xl font-bold">Upload</h2>

        <div className="w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pb-6">
              <svg
                className="w-8 h-8 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 uppercase">text / csv</p>
            </div>

            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,text/csv"
              onChange={handleFileChange}
            />
          </label>
        </div>
      </div>

      <section className="bg-white p-6 rounded-lg space-y-4">
        <h2 className="text-xl font-bold">File details:</h2>
        {arquive && (
          <div className="border border-gray-200 rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="">Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead>#</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-white">
                  <TableCell className="font-medium">{arquive.name}</TableCell>
                  <TableCell>{arquive.type}</TableCell>
                  <TableCell>{formatFileBytes(bytesAmount)} bytes</TableCell>
                  <TableCell className="max-w-[1rem]">
                    <button
                      className="rounded-lg hover:bg-green-200 transition-all bg-green-100 text-green-800 p-4 border-none font-semibold w-full flex items-center justify-center"
                      onClick={handleUpload}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-green-800"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                        />
                      </svg>
                    </button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        )}

        {!arquive && (
          <p className="text-base text-red-500 ">
            Your table will be available here
          </p>
        )}
      </section>
    </>
  );
};

export { SingleFileUploader };
