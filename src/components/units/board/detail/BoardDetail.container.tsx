import BoardDetailUI from "./BoardDetail.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.id },
  });
  const [deleteBoard] = useMutation(DELETE_BOARD, {
    variables: { boardId: router.query.id },
  });
  const onClickMove = () => {
    router.push(`/boards`);
  };
  const onClickUpdate = () => {
    router.push(`/boards/${data.fetchBoard._id}/edit`);
  };
  const onClickDelete = () => {
    deleteBoard();
    router.push(`/boards`);
  };
  return (
    <>
      <BoardDetailUI
        data={data}
        onClickMove={onClickMove}
        onClickUpdate={onClickUpdate}
        onClickDelete={onClickDelete}
      />
    </>
  );
}
