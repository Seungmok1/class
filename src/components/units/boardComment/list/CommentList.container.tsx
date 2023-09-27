import { useMutation, useQuery } from "@apollo/client";
import CommentListUI from "./CommentList.presenter";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./CommentList.queries";
import { useRouter } from "next/router";
import { useState, type ChangeEvent, type MouseEvent } from "react";

export default function CommentList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.id },
  });
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [boardCommentId, setBoardCommentId] = useState("");

  const onClickDelete = (e: MouseEvent<HTMLImageElement>) => {
    setBoardCommentId(e.currentTarget.id);
    setIsModalOpen(true);
  };
  const onClickModalOk = async (e: any) => {
    try {
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.id },
          },
        ],
      });
      setPassword("");
      setIsModalOpen(false);
    } catch (e) {
      if (e instanceof Error) alert(e.message);
    }
  };
  const onClickModalCancel = () => {
    setPassword("");
    setIsModalOpen(false);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <CommentListUI
      data={data}
      password={password}
      isModalOpen={isModalOpen}
      onClickDelete={onClickDelete}
      onClickModalOk={onClickModalOk}
      onClickModalCancel={onClickModalCancel}
      onChangePassword={onChangePassword}
    />
  );
}
