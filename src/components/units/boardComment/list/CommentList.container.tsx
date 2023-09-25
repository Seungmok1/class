import { useMutation, useQuery } from "@apollo/client";
import CommentListUI from "./CommentList.presenter";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./CommentList.queries";
import { useRouter } from "next/router";
import type { MouseEvent } from "react";

export default function CommentList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.id },
  });
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const onClickDelete = (e: MouseEvent<HTMLImageElement>) => {
    const password = prompt("비밀번호를 입력하세요");
    void deleteBoardComment({
      variables: {
        password,
        boardCommentId: e.currentTarget.id,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENTS,
          variables: { boardId: router.query.id },
        },
      ],
    });
  };
  return <CommentListUI data={data} onClickDelete={onClickDelete} />;
}
