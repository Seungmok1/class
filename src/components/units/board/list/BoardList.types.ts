import type { IQuery } from "../../../../commons/types/generated/types";
import type { ChangeEvent, MouseEvent } from "react";

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  onChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEnterKey: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onClickSearchButton: () => void;
  onClickMoveDetail: (e: MouseEvent<HTMLDivElement>) => void;
  onClickMoveWrite: () => void;
  onClickPage: (e: MouseEvent<HTMLDivElement>) => void;
  onClickPrev: () => void;
  onClickNext: () => void;
  startPage: number;
  boardsCount: number;
  activedPage: number;
}
