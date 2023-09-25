import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  height: 60px;
  margin-top: 30px;
  padding: 0 500px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: orange;
`;

interface IProps {
  isActive: boolean;
}

const Button = styled.button`
  width: 80px;
  height: 30px;
  background-color: orange;
  border: none;
  margin: 0 30px;
  color: ${(props: IProps) => (props.isActive ? "black" : "gray")};
  font-weight: ${(props: IProps) => (props.isActive ? 900 : 600)};
  cursor: pointer;
`;

const Line = styled.div`
  border: 1px solid white;
  height: 30px;
`;

export default function LayoutNavigation() {
  const router = useRouter();
  const onClickBoard = () => {
    void router.push("/boards");
  };
  return (
    <>
      <Wrapper>
        <Button isActive={router.asPath === ""}>마켓</Button>
        <Line />
        <Button
          isActive={router.asPath.includes("/boards")}
          onClick={onClickBoard}
        >
          자유게시판
        </Button>
        <Line />
        <Button isActive={router.asPath === ""}>마이페이지</Button>
      </Wrapper>
    </>
  );
}
