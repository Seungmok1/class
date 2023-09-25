import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  height: 100px;
  background-color: orange;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
`;
const Label = styled.div`
  font-size: 20px;
  font-weight: 800;
  color: white;
  cursor: pointer;
  margin-right: 300px;
`;

const Git = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export default function LayoutFooter() {
  const router = useRouter();
  const onClickLabel = () => {
    void router.push("/boards");
  };
  const onClickGit = () => {
    void router.push("https://github.com/Seungmok1");
  };
  return (
    <Wrapper>
      <Label onClick={onClickLabel}>FRONTEND-BOARD-PROJECT</Label>
      <Git src="/image/github_logo.png" onClick={onClickGit} />
    </Wrapper>
  );
}
