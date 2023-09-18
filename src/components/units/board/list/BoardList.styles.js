import styled from "@emotion/styled";

export const Wrapper = styled.div`
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

export const Page = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  font-size: 20px;
  color: ${(props) => (props.isActive ? "orange" : "")};
  font-weight: ${(props) => (props.isActive ? "bold" : "")};
  cursor: ${(props) => (props.isActive ? "default" : "pointer")};
`;

export const WriteButton = styled.button`
  width: 120px;
  height: 50px;
  float: right;
  margin: 30px;
  background-color: white;
  cursor: pointer;
`;
