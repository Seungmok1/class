import Modal from "antd/es/modal/Modal";
import * as S from "./BoardWrite.styles";
import type { IBoardWriteUIProps } from "./BoardWrite.types";
import DaumPostcodeEmbed from "react-daum-postcode";
import Upload01 from "../../../commons/upload/01/Upload01.container";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <S.Wrapper>
      <S.Title>{props.isEdit ? "게시물 수정" : "게시물 등록"}</S.Title>
      <S.WriterWrapper>
        <S.InputWrapper>
          <S.Label>작성자</S.Label>
          <S.Writer
            type="text"
            placeholder="이름을 적어주세요"
            onChange={props.onChangeWriter}
            defaultValue={props.data?.fetchBoard.writer ?? ""}
            readOnly={props.isEdit}
          />
          <S.Error>{props.errorWriter}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>비밀번호</S.Label>
          <S.Password
            type="password"
            placeholder="비밀번호를 입력하세요"
            onChange={props.onChangePassword}
          />
          <S.Error>{props.errorPassword}</S.Error>
        </S.InputWrapper>
      </S.WriterWrapper>
      <S.InputWrapper>
        <S.Label>제목</S.Label>
        <S.Subject
          type="text"
          placeholder="제목을 작성해주세요"
          onChange={props.onChangeTitle}
          defaultValue={props.data?.fetchBoard.title ?? ""}
        />
        <S.Error>{props.errorTitle}</S.Error>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>내용</S.Label>
        <S.Contents
          placeholder="내용을 작성해주세요"
          onChange={props.onChangeContents}
          defaultValue={props.data?.fetchBoard.contents ?? ""}
        />
        <S.Error>{props.errorContents}</S.Error>
      </S.InputWrapper>
      <S.AddressWrapper>
        <S.Label>주소</S.Label>
        <S.ZipCodeWrapper>
          {props.isZipcodeModalOpen && (
            <Modal open={true} onCancel={props.onClickModalCancel}>
              <DaumPostcodeEmbed onComplete={props.handleZipcode} />
            </Modal>
          )}
          <S.Zipcode
            placeholder="07250"
            readOnly
            value={
              props.zipcode !== ""
                ? props.zipcode
                : props.data?.fetchBoard.boardAddress?.zipcode ?? ""
            }
          />
          <S.SearchButton onClick={props.onClickSearchButton}>
            우편번호 검색
          </S.SearchButton>
        </S.ZipCodeWrapper>
        <S.Address
          readOnly
          value={
            props.address !== ""
              ? props.address
              : props.data?.fetchBoard.boardAddress?.address ?? ""
          }
        />
        <S.Address
          onChange={props.onChangeAddressDetail}
          defaultValue={
            props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
          }
        />
      </S.AddressWrapper>
      <S.InputWrapper>
        <S.Label>유튜브</S.Label>
        <S.Youtube
          placeholder="링크를 복사해주세요"
          onChange={props.onChangeYoutubeUrl}
          defaultValue={props.data?.fetchBoard.youtubeUrl ?? ""}
        />
      </S.InputWrapper>
      <S.ImageWrapper>
        <S.Label>사진 첨부</S.Label>
        <S.ImageSubWrapper>
          {props.images.map((el, index) => (
            <Upload01
              key={index}
              index={index}
              fileUrl={el}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))}
        </S.ImageSubWrapper>
      </S.ImageWrapper>
      <S.OptionWrapper>
        <S.Label>메인 설정</S.Label>
        <S.OptionButton type="radio" id="youtube" name="radio-button" />
        <S.OptionLabel htmlFor="youtube">유튜브</S.OptionLabel>
        <S.OptionButton type="radio" id="image" name="radio-button" />
        <S.OptionLabel htmlFor="image">사진</S.OptionLabel>
      </S.OptionWrapper>
      <S.ButtonWrapper>
        <S.SubmitButton
          onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
          isActive={props.isEdit ? true : props.isActive}
        >
          {props.isEdit ? "수정하기" : "등록하기"}
        </S.SubmitButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
