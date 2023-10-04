import { getDate } from "../../../../commons/library/utils";
import * as S from "./CommentList.styles";
import { Rate } from "antd";
import type { ICommentListUIProps } from "./CommentList.types";
import Modal from "antd/es/modal/Modal";
import CommentWrite from "../write/CommentWrite.container";

export default function CommentListUI(props: ICommentListUIProps) {
  return (
    <S.TotalWrapper>
      {props.data?.fetchBoardComments.map((el, index) => (
        <S.Wrapper key={el._id}>
          {props.isEdits[index] || (
            <>
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
                <S.UpdateButton
                  src="/image/pencil.png"
                  onClick={props.onClickEdit}
                  id={String(index)}
                ></S.UpdateButton>
                <S.DeleteButton
                  src="/image/x.png"
                  onClick={props.onClickDelete}
                  id={el._id}
                ></S.DeleteButton>
                <Modal
                  open={props.isModalOpen}
                  onOk={props.onClickModalOk}
                  onCancel={props.onClickModalCancel}
                >
                  비밀번호 :{" "}
                  <S.PasswordInput
                    type="password"
                    onChange={props.onChangePassword}
                    value={props.password}
                  ></S.PasswordInput>
                </Modal>
              </S.ButtonWrapper>
            </>
          )}
          {props.isEdits[index] && (
            <CommentWrite
              isEdits={props.isEdits}
              setIsEdits={props.setIsEdits}
              el={el}
              index={index}
            />
          )}
        </S.Wrapper>
      ))}
    </S.TotalWrapper>
  );
}
