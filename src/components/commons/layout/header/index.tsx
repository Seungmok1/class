import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 40px 140px 20px 140px;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: orange;
`;

const Avatar = styled.img``;

export default function LayoutHeader() {
  const router = useRouter();
  const onClickTitle = () => {
    void router.push("/boards");
  };
  return (
    <>
      <Wrapper>
        <Title onClick={onClickTitle}>FRONTEND-BOARD-PROJECT</Title>
        <Avatar src="/image/avatar.png" />
      </Wrapper>
    </>
  );
}
