import BoardDetailUI from "./BoardDetail.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";
import { useState } from "react";

export default function BoardDetail() {
  const router = useRouter();

  const [isAddressOver, setIsAddressOver] = useState(false);

  const { data, refetch } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.id },
  });
  const [deleteBoard] = useMutation(DELETE_BOARD, {
    variables: { boardId: router.query.id },
  });
  const [likeBoard] = useMutation(LIKE_BOARD, {
    variables: { boardId: router.query.id },
  });
  const [dislikeBoard] = useMutation(DISLIKE_BOARD, {
    variables: { boardId: router.query.id },
  });

  const onClickMove = () => {
    void router.push(`/boards`);
  };
  const onClickUpdate = () => {
    void router.push(`/boards/${data.fetchBoard._id}/edit`);
  };
  const onClickDelete = () => {
    void deleteBoard();
    void router.push(`/boards`);
  };
  const onClickLike = () => {
    void likeBoard();
    void refetch();
  };
  const onClickDislike = () => {
    void dislikeBoard();
    void refetch();
  };

  const onMouseOverAddress = () => {
    setIsAddressOver(true);
  };
  const onMouseOutAddress = () => {
    setIsAddressOver(false);
  };
  return (
    <>
      <BoardDetailUI
        data={data}
        onClickMove={onClickMove}
        onClickUpdate={onClickUpdate}
        onClickDelete={onClickDelete}
        onClickLike={onClickLike}
        onClickDislike={onClickDislike}
        onMouseOverAddress={onMouseOverAddress}
        onMouseOutAddress={onMouseOutAddress}
        isAddressOver={isAddressOver}
      />
    </>
  );
}
