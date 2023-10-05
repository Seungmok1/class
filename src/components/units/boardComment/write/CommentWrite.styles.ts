import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
`;

export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  left: -550px;
`;

export const Image = styled.img``;

export const Label = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-left: 10px;
`;

export const WriterWrapper = styled.div`
  margin: 20px 0;
  position: relative;
  left: -300px;
`;

export const Writer = styled.input`
  width: 200px;
  height: 52px;
  margin-right: 30px;
  padding-left: 15px;
`;

export const Password = styled.input`
  width: 200px;
  height: 52px;
  margin-right: 30px;
  padding-left: 15px;
`;

export const InputWrapper = styled.div`
  width: 1200px;
  height: 161px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
`;

export const CommentInput = styled.textarea`
  width: 98.5%;
  height: 80%;
  padding: 10px;
  border-bottom: 1px solid lightGray;
  resize: none;
  border: none;
  border-bottom: 1px solid lightGray;
`;

export const InputSubmitWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const CommentCount = styled.div`
  color: gray;
  padding-left: 20px;
`;

export const SubmitButton = styled.button`
  background-color: black;
  color: white;
  width: 91px;
  height: 52px;
  cursor: pointer;
`;
