import type { IQuery } from "../../../../commons/types/generated/types";
import type { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";

export interface ICommentListUIProps {
  data: Pick<IQuery, "fetchBoardComments">;
  password: string;
  isModalOpen: boolean;
  isEdits: boolean[];
  setIsEdits: Dispatch<SetStateAction<boolean[]>>;
  onClickDelete: (e: MouseEvent<HTMLImageElement>) => void;
  onClickModalCancel: () => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickModalOk: (e: any) => void;
  onClickEdit: (e: MouseEvent<HTMLImageElement>) => void;
}
