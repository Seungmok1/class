import CommentWrite from "../../../src/components/units/boardComment/write/CommentWrite.container";
import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
import CommentList from "../../../src/components/units/boardComment/list/CommentList.container";

export default function DetailPage() {
  return (
    <>
      <BoardDetail />
      <CommentWrite />
      <CommentList />
    </>
  );
}
