import type { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardDetailUIProps {
  data: Pick<IQuery, "fetchBoard">;
  onClickMove: () => void;
  onClickUpdate: () => void;
  onClickDelete: () => void;
  onClickLike: () => void;
  onClickDislike: () => void;
  onMouseOverAddress: () => void;
  onMouseOutAddress: () => void;
  isAddressOver: boolean;
}
