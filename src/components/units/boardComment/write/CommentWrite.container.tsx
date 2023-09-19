import { useMutation } from "@apollo/client";
import CommentWriteUI from "./CommentWrite.presenter";
import { useRouter } from "next/router";
import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./CommentWrite.queries";
import { type ChangeEvent, useState } from "react";

export default function CommentWrite() {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [rating, setRating] = useState(3);
  const [contents, setContents] = useState("");

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>) => {
    setWriter(e.target.value);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const onChangeRating = (e: any) => {
    setRating(e);
  };
  const onChangeContents = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(e.target.value);
  };

  const onClickSubmit = async () => {
    if (!writer) {
      alert("작성자가 입력되지 않았습니다.");
    }
    if (!password) {
      alert("비밀번호가 입력되지 않았습니다.");
    }
    if (!contents) {
      alert("내용이 입력되지 않았습니다.");
    }
    if (writer && password && contents) {
      try {
        await createBoardComment({
          variables: {
            createBoardCommentInput: {
              writer,
              password,
              contents,
              rating,
            },
            boardId: router.query.id,
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: router.query.id },
            },
          ],
        });
        setWriter("");
        setPassword("");
        setRating(3);
        setContents("");
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <CommentWriteUI
      onClickSubmit={onClickSubmit}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeRating={onChangeRating}
      onChangeContents={onChangeContents}
      writer={writer}
      password={password}
      contents={contents}
    />
  );
}
