import { useMutation, useQuery } from "@apollo/client";
import CommentListUI from "./CommentList.presenter.js";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./CommentList.queries.js";
import { useRouter } from "next/router";

export default function CommentList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.id },
  });
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const onClickDelete = (e) => {
    const password = prompt("비밀번호를 입력하세요");
    deleteBoardComment({
      variables: {
        password,
        boardCommentId: e.target.id,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENTS,
          variables: { boardId: router.query.id },
        },
      ],
    });
  };
  console.log(data);
  return <CommentListUI data={data} onClickDelete={onClickDelete} />;
}
