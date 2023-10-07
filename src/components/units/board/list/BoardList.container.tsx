import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { useRouter } from "next/router";
import { useState, type MouseEvent, type ChangeEvent } from "react";

export default function BoardList() {
  const router = useRouter();

  const [startPage, setStartPage] = useState(1);
  const [activedPage, setActivedPage] = useState(1);
  const [search, setSearch] = useState("");

  const { data, refetch } = useQuery(FETCH_BOARDS, { variables: { page: 1 } });
  const { data: dataBoardsCount, refetch: refetchBoardsCount } =
    useQuery(FETCH_BOARDS_COUNT);

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onClickSearchButton();
  };

  const onClickSearchButton = () => {
    void refetch({ page: 1, search });
    void refetchBoardsCount({ search });
    setActivedPage(1);
    setStartPage(1);
  };

  const onClickMoveDetail = (e: MouseEvent<HTMLDivElement>) => {
    void router.push(`/boards/${e.currentTarget.id}`);
  };

  const onClickMoveWrite = () => {
    void router.push("/boards/new");
  };

  const onClickPage = (e: MouseEvent<HTMLDivElement>) => {
    const activedPage = Number(e.currentTarget.id);
    setActivedPage(activedPage);
    void refetch({ page: Number(e.currentTarget.id) });
  };
  const onClickPrev = () => {
    if (startPage === 1) return;
    setActivedPage(startPage - 10);
    void refetch({ page: startPage - 10 });
    setStartPage((prev) => prev - 10);
  };
  const onClickNext = () => {
    if (startPage + 10 > dataBoardsCount?.fetchBoardsCount / 10) return;
    setActivedPage(startPage + 10);
    void refetch({ page: startPage + 10 });
    setStartPage((prev) => prev + 10);
  };
  return (
    <BoardListUI
      data={data}
      onChangeSearch={onChangeSearch}
      handleEnterKey={handleEnterKey}
      onClickSearchButton={onClickSearchButton}
      onClickMoveDetail={onClickMoveDetail}
      onClickMoveWrite={onClickMoveWrite}
      onClickPage={onClickPage}
      onClickPrev={onClickPrev}
      onClickNext={onClickNext}
      startPage={startPage}
      boardsCount={dataBoardsCount?.fetchBoardsCount}
      activedPage={activedPage}
    />
  );
}
