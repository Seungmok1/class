import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import type { IBoardComment } from "../../../../commons/types/generated/types";

export interface ICommentWriteUIProps {
  onClickSubmit: () => void;
  onClickUpdate: () => void;
  onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeRating: (e: any) => void;
  onChangeContents: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickUpdateButton: () => void;
  onClickModalCancel: () => void;
  writer: string;
  password: string;
  contents: string;
  isEdit: boolean;
  el: IBoardComment;
  isModalOpen: boolean;
}

export interface ICommentWriteProps {
  isEdits: boolean[];
  setIsEdits: Dispatch<SetStateAction<boolean[]>>;
  el: IBoardComment;
  index: number;
}
