import { type ChangeEvent, type RefObject } from "react";

export interface IUpload01Props {
  key: number;
  index: number;
  fileUrl: string;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
}

export interface IUpload01UIProps {
  handFileBtn: () => void;
  onClickFile: (e: ChangeEvent<HTMLInputElement>) => void;
  fileRef: RefObject<HTMLInputElement>;
  fileUrl: string;
}
