import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  border: 1px solid gray;
  margin: 120px;
  padding: 120px;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const Error = styled.div`
  color: red;
  padding-top: 5px;
  padding-left: 5px;
  font-size: 13px;
`;

export const Title = styled.div`
  font-size: 34px;
  font-weight: 800;
`;

export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const InputWrapper = styled.div`
  padding-top: 40px;
`;

export const Writer = styled.input`
  border: 1px solid gray;
  width: 486px;
  height: 52px;
  padding-left: 16px;
  margin-right: 30px;
`;

export const Password = styled.input`
  border: 1px solid gray;
  width: 486px;
  height: 52px;
  padding-left: 16px;
`;

export const Subject = styled.input`
  border: 1px solid gray;
  width: 996px;
  height: 52px;
  padding-left: 16px;
`;

export const Contents = styled.textarea`
  border: 1px solid gray;
  width: 996px;
  height: 480px;
  padding-left: 16px;
`;

export const Label = styled.div`
  font-weight: 700;
  font-size: 16px;
  padding: 10px;
`;

export const AddressWrapper = styled.div`
  padding-top: 40px;
`;

export const Zipcode = styled.input`
  border: 1px solid gray;
  width: 77px;
  height: 52px;
  text-align: center;
`;

export const SearchButton = styled.button`
  background-color: black;
  color: white;
  font-size: 15px;
  width: 124px;
  height: 52px;
  margin-left: 16px;
`;

export const Address = styled.input`
  border: 1px solid gray;
  width: 996px;
  height: 52px;
  margin-top: 16px;
  padding-left: 16px;
`;

export const ZipCodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Youtube = styled.input`
  border: 1px solid gray;
  width: 996px;
  height: 52px;
  margin-top: 10px;
  padding-left: 16px;
`;

export const ImageWrapper = styled.div`
  margin-top: 30px;
  position: relative;
  left: -365px;
`;

export const UploadButton = styled.button`
  width: 78px;
  height: 78px;
  background-color: gray;
  border: none;
  margin-right: 10px;
`;

export const OptionWrapper = styled.div`
  position: relative;
  left: -410px;
  margin-top: 30px;
`;

export const OptionButton = styled.input`
  cursor: pointer;
`;

export const OptionLabel = styled.label`
  padding-left: 10px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  margin-top: 80px;
`;
export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  background-color: ${(props) => (props.isActive ? "yellow" : "gray")};
  border: none;
`;
