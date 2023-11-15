import { ReactNode } from "react";

import { FileActionType } from "@/constants";

export type ReducerAction<T, P> = {
  type: T;
  payload?: Partial<P>;
};

export type FileItem = {
  debtID: string;
  name: string;
  email: string;
  debtAmount: number;
  debtDueDate: string;
}[];

export type FileContextState = {
  isLoading: boolean;
  file: File | null;
  fileList: FileItem;
};

// const FileContextInitialValues: FileContextState = {};

export type FileAction = ReducerAction<
  FileActionType,
  Partial<FileContextState>
>;

export type FileDispatch = ({ type, payload }: FileAction) => void;

export type FileContextType = {
  state: FileContextState;
  dispatch: FileDispatch;
};

export type FileProviderProps = { children: ReactNode };
