import type { IQuery } from "../../../../commons/types/generated/types";
import type { MouseEvent } from "react";

export interface ICommentListUIProps {
  data: Pick<IQuery, "fetchBoardComments">;
  onClickDelete: (e: MouseEvent<HTMLImageElement>) => void;
}
