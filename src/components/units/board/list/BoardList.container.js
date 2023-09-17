import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./BoardList.queries";
import { useRouter } from "next/router";

export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);
  console.log(data);

  const onClickMoveDetail = (e) => {
    router.push(`/boards/${e.currentTarget.id}`);
  };

  const onClickMoveWrite = () => {
    router.push("/boards/new");
  };
  return (
    <BoardListUI
      data={data}
      onClickMoveDetail={onClickMoveDetail}
      onClickMoveWrite={onClickMoveWrite}
    />
  );
}
