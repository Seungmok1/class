import type { ChangeEvent } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardWriteProps {
  data?: Pick<IQuery, "fetchBoard">;
  isEdit: boolean;
}

export interface IBoardWriteUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeYoutubeUrl: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
  onClickUpdate: () => void;
  onClickSearchButton: () => void;
  onClickModalCancel: () => void;
  handleZipcode: (e: any) => void;
  onChangeAddressDetail: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  errorWriter: string;
  errorPassword: string;
  errorTitle: string;
  errorContents: string;
  isActive: boolean;
  isEdit: boolean;
  isZipcodeModalOpen: boolean;
  zipcode: string;
  address: string;
  images: string[];
}
