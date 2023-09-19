import type { ChangeEvent } from "react";

export interface ICommentWriteUIProps {
  onClickSubmit: () => void;
  onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeRating: (e: any) => void;
  onChangeContents: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  writer: string;
  password: string;
  contents: string;
}
