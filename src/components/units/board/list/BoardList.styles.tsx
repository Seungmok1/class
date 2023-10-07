import styled from "@emotion/styled";

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`;

export const SearchBar = styled.input`
  width: 726px;
  height: 52px;
  background-color: lightgray;
  border-radius: 5px;
  border: none;
  margin-right: 50px;
  padding-left: 20px;
`;

export const SearchButton = styled.button`
  width: 94px;
  height: 52px;
  background-color: black;
  color: white;
  border-radius: 5px;
`;

export const HeadWrapper = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  margin: 20px;
  padding-bottom: 10px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid gray;
`;

export const ColumnHeader = styled.div`
  width: 15%;
  text-align: center;
  margin: 10px 0;
  font-weight: 700;
`;

export const ColumnHeaderTitle = styled.div`
  width: 55%;
  text-align: center;
  margin: 10px 0;
  font-weight: 700;
`;

export const Column = styled.div`
  width: 15%;
  text-align: center;
  margin: 10px 0;
  cursor: pointer;
`;

export const ColumnTitle = styled.div`
  width: 55%;
  text-align: center;
  margin: 10px 0;
  cursor: pointer;
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const PageMoveButton = styled.button`
  font-size: 20px;
  background-color: white;
  border: none;
  color: orange;
  cursor: pointer;
`;

interface IProps {
  isActive: boolean;
}

export const Page = styled.div`
  margin: 10px 10px;
  font-size: 20px;
  color: ${(props: IProps) => (props.isActive ? "orange" : "")};
  font-weight: ${(props: IProps) => (props.isActive ? "bold" : "")};
  cursor: ${(props: IProps) => (props.isActive ? "default" : "pointer")};
`;

export const WriteButton = styled.button`
  width: 120px;
  height: 50px;
  // float: right;
  // margin: 30px;
  position: relative;
  left: 450px;
  background-color: white;
  cursor: pointer;
`;
