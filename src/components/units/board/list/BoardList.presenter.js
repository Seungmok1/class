import { getDate } from "../../../../commons/library/utils";
import * as S from "./BoardList.styles";

export default function BoardListUI(props) {
  return (
    <>
      <S.Wrapper>
        <S.Row>
          <S.ColumnHeader>ID</S.ColumnHeader>
          <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
          <S.ColumnHeader>작성자</S.ColumnHeader>
          <S.ColumnHeader>날짜</S.ColumnHeader>
        </S.Row>
        {props.data?.fetchBoards.map((el) => (
          <S.Row onClick={props.onClickMoveDetail} id={el._id}>
            <S.Column>{String(el._id).slice(-4).toUpperCase()}</S.Column>
            <S.ColumnTitle>{el.title}</S.ColumnTitle>
            <S.Column>{el.writer}</S.Column>
            <S.Column>{getDate(el.createdAt)}</S.Column>
          </S.Row>
        ))}
      </S.Wrapper>
      <S.PageWrapper>
        <S.PageMoveButton onClick={props.onClickPrev}>prev</S.PageMoveButton>
        {new Array(10).fill(1).map((_, index) =>
          props.startPage + index <=
          Math.ceil(props.boardsCount?.fetchBoardsCount / 10) ? (
            <S.Page
              id={props.startPage + index}
              onClick={props.onClickPage}
              isActive={
                props.activedPage === props.startPage + index ? true : false
              }
            >
              {props.startPage + index}
            </S.Page>
          ) : (
            ""
          )
        )}

        <S.PageMoveButton onClick={props.onClickNext}>next</S.PageMoveButton>
      </S.PageWrapper>
      <S.WriteButton onClick={props.onClickMoveWrite}>
        게시물 등록하기
      </S.WriteButton>
    </>
  );
}
