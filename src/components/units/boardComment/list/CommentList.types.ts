import type { IQuery } from "../../../../commons/types/generated/types";
import type { ChangeEvent, MouseEvent } from "react";

export interface ICommentListUIProps {
  data: Pick<IQuery, "fetchBoardComments">;
  password: string;
  isModalOpen: boolean;
  onClickDelete: (e: MouseEvent<HTMLImageElement>) => void;
  onClickModalCancel: () => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickModalOk: (e: any) => void;
}
