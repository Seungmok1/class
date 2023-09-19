import type { IQuery } from "../../../../commons/types/generated/types";
import type { MouseEvent } from "react";

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  onClickMoveDetail: (e: MouseEvent<HTMLDivElement>) => void;
  onClickMoveWrite: () => void;
  onClickPage: (e: MouseEvent<HTMLDivElement>) => void;
  onClickPrev: () => void;
  onClickNext: () => void;
  startPage: number;
  boardsCount: number;
  activedPage: number;
}
