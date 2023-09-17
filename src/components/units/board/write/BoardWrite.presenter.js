import * as S from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
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
            defaultValue={props.isEdit ? props.data?.fetchBoard.writer : ""}
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
          defaultValue={props.isEdit ? props.data?.fetchBoard.title : ""}
        />
        <S.Error>{props.errorTitle}</S.Error>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>내용</S.Label>
        <S.Contents
          type="text"
          placeholder="내용을 작성해주세요"
          onChange={props.onChangeContents}
          defaultValue={props.isEdit ? props.data?.fetchBoard.contents : ""}
        />
        <S.Error>{props.errorContents}</S.Error>
      </S.InputWrapper>
      <S.AddressWrapper>
        <S.Label>주소</S.Label>
        <S.ZipCodeWrapper>
          <S.Zipcode placeholder="07250" readOnly />
          <S.SearchButton>우편번호 검색</S.SearchButton>
        </S.ZipCodeWrapper>
        <S.Address />
        <S.Address />
      </S.AddressWrapper>
      <S.InputWrapper>
        <S.Label>유튜브</S.Label>
        <S.Youtube placeholder="링크를 복사해주세요" />
      </S.InputWrapper>
      <S.ImageWrapper>
        <S.Label>사진 첨부</S.Label>
        <S.UploadButton>upload</S.UploadButton>
        <S.UploadButton>upload</S.UploadButton>
        <S.UploadButton>upload</S.UploadButton>
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
          isActive={props.isActive}
        >
          {props.isEdit ? "수정하기" : "등록하기"}
        </S.SubmitButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
