import styled from "@emotion/styled";
import ReactPlayer from "react-player";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  min-height: 1000px;
  border: 1px solid gray;
  margin: 120px;
  padding: 100px;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const Head = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid lightGray;
  padding: 20px;
  margin-bottom: 20px;
`;

export const Avatar = styled.img`
  margin-right: 10px;
`;

export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Writer = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

export const Body = styled.div`
  width: 100%;
  min-height: 550px;
  margin-bottom: 100px;
`;

export const Title = styled.div`
  font-size: 38px;
  font-weight: 900;
`;

export const Contents = styled.div`
  padding: 20px;
  margin-bottom: 100px;
`;

export const Youtube = styled(ReactPlayer)`
  margin: auto;
`;

export const CreateAt = styled.span`
  font-size: 15px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Button = styled.button`
  width: 179px;
  height: 45px;
  margin: 20px;
  background-color: white;
  border: 2px solid gray;
  cursor: pointer;
`;

export const LikeButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  position: relative:
  top: 800px;
`;

export const LikeButtonSubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LikeButton = styled.img`
  padding: 10px;
  image-color: gray;
  cursor: pointer;
`;

export const LikeCount = styled.div`
  padding: 10px;
`;
