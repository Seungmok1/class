import { getDate } from "@/src/commons/library/utils";
import * as S from "./CommentList.styles";
import { Rate } from "antd";

export default function CommentListUI(props) {
  return (
    <S.TotalWrapper>
      {props.data?.fetchBoardComments.map((el) => (
        <S.Wrapper>
          <S.Avatar src="/image/avatar.png"></S.Avatar>
          <S.CommentWrapper>
            <S.WriterWrapper>
              <S.Writer>{el.writer}</S.Writer>
              <Rate value={el.rating} />
            </S.WriterWrapper>
            <S.Comment>{el.contents}</S.Comment>
            <S.Date>{getDate(el.createdAt)}</S.Date>
          </S.CommentWrapper>
          <S.ButtonWrapper>
            <S.UpdateButton src="/image/pencil.png"></S.UpdateButton>
            <S.DeleteButton
              src="/image/x.png"
              onClick={props.onClickDelete}
              id={el._id}
            ></S.DeleteButton>
          </S.ButtonWrapper>
        </S.Wrapper>
      ))}
    </S.TotalWrapper>
  );
}
