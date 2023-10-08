import { ReactElement } from "react";
import { SingleFileUploader } from "../components";

function Upload(): ReactElement {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
      <SingleFileUploader />
    </div>
  )
}

export { Upload };
