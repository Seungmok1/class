import { getDate } from "../../../../commons/library/utils";
import * as S from "./BoardDetail.styles";
import type { IBoardDetailUIProps } from "./BoardDetail.types";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  console.log(props.data?.fetchBoard);
  return (
    <S.Wrapper>
      <S.BoardWrapper>
        <S.Head>
          <S.AvatarWrapper>
            <S.Avatar src="/image/avatar.png" />
            <S.WriterWrapper>
              <S.Writer>{props.data?.fetchBoard.writer}</S.Writer>
              <S.CreateAt>
                Date : {getDate(props.data?.fetchBoard?.createdAt)}
              </S.CreateAt>
            </S.WriterWrapper>
          </S.AvatarWrapper>
          <S.AddressIcon
            src="/image/address.png"
            onMouseOver={props.onMouseOverAddress}
            onMouseOut={props.onMouseOutAddress}
          />
          {props.isAddressOver && (
            <S.AddressWrapper>
              <S.Address>
                {props.data?.fetchBoard.boardAddress?.address}
              </S.Address>
              <S.AddressDetail>
                {props.data?.fetchBoard.boardAddress?.addressDetail}
              </S.AddressDetail>
            </S.AddressWrapper>
          )}
        </S.Head>
        <S.Body>
          <S.Title>{props.data?.fetchBoard?.title}</S.Title>
          <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
          <S.Youtube
            url={props.data?.fetchBoard.youtubeUrl ?? ""}
            width="600px"
            height="350px"
          ></S.Youtube>
        </S.Body>
        <S.LikeButtonWrapper>
          <S.LikeButtonSubWrapper>
            <S.LikeButton src="/image/like.png" onClick={props.onClickLike} />
            <S.LikeCount>{props.data?.fetchBoard.likeCount}</S.LikeCount>
          </S.LikeButtonSubWrapper>
          <S.LikeButtonSubWrapper>
            <S.LikeButton
              src="/image/dislike.png"
              onClick={props.onClickDislike}
            />
            <S.LikeCount>{props.data?.fetchBoard.dislikeCount}</S.LikeCount>
          </S.LikeButtonSubWrapper>
        </S.LikeButtonWrapper>
      </S.BoardWrapper>
      <S.ButtonWrapper>
        <S.Button onClick={props.onClickMove}>목록으로</S.Button>
        <S.Button onClick={props.onClickUpdate}>수정하기</S.Button>
        <S.Button onClick={props.onClickDelete}>삭제하기</S.Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
