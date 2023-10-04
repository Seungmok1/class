import * as S from "./CommentWrite.styles";
import { Rate } from "antd";
import type { ICommentWriteUIProps } from "./CommentWrite.types";

export default function CommentWriteUI(props: ICommentWriteUIProps) {
  return (
    <S.Wrapper>
      <S.LabelWrapper>
        <S.Image src="/image/comment.png"></S.Image>
        <S.Label>댓글</S.Label>
      </S.LabelWrapper>
      <S.WriterWrapper>
        <S.Writer
          placeholder="작성자"
          type="text"
          onChange={props.onChangeWriter}
          value={props.isEdit ? String(props.el?.writer) : ""}
          readOnly={props.isEdit}
        />
        <S.Password
          placeholder="비밀번호"
          type="password"
          onChange={props.onChangePassword}
          value={props.password}
        />
        <Rate defaultValue={3} onChange={props.onChangeRating} />
      </S.WriterWrapper>
      <S.InputWrapper>
        <S.CommentInput
          maxLength={100}
          onChange={props.onChangeContents}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          defaultValue={props.isEdit ? String(props.el?.contents) : ""}
        ></S.CommentInput>
        <S.InputSubmitWrapper>
          <S.CommentCount>{props.contents.length}/100</S.CommentCount>
          <S.SubmitButton
            onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.SubmitButton>
        </S.InputSubmitWrapper>
      </S.InputWrapper>
    </S.Wrapper>
  );
}
