import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { useRouter } from "next/router";
import { useState } from "react";

export default function BoardList() {
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_BOARDS, { variables: { page: 1 } });
  const [startPage, setStartPage] = useState(1);
  const [activedPage, setActivedPage] = useState(1);
  const { data: boardsCount } = useQuery(FETCH_BOARDS_COUNT);

  const onClickMoveDetail = (e) => {
    router.push(`/boards/${e.currentTarget.id}`);
  };

  const onClickMoveWrite = () => {
    router.push("/boards/new");
  };

  const onClickPage = (e) => {
    const activedPage = Number(e.currentTarget.id);
    setActivedPage(activedPage);
    refetch({ page: Number(e.currentTarget.id) });
  };
  const onClickPrev = () => {
    if (startPage === 1) return;
    setActivedPage(startPage - 10);
    refetch({ page: startPage - 10 });
    setStartPage((prev) => prev - 10);
  };
  const onClickNext = () => {
    if (startPage + 10 > boardsCount.fetchBoardsCount / 10) return;
    setActivedPage(startPage + 10);
    refetch({ page: startPage + 10 });
    setStartPage((prev) => prev + 10);
  };
  return (
    <BoardListUI
      data={data}
      onClickMoveDetail={onClickMoveDetail}
      onClickMoveWrite={onClickMoveWrite}
      onClickPage={onClickPage}
      onClickPrev={onClickPrev}
      onClickNext={onClickNext}
      startPage={startPage}
      boardsCount={boardsCount}
      activedPage={activedPage}
    />
  );
}
