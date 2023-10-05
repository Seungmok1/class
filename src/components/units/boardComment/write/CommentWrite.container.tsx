import { useMutation } from "@apollo/client";
import CommentWriteUI from "./CommentWrite.presenter";
import { useRouter } from "next/router";
import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
  UPDATE_BOARD_COMMENT,
} from "./CommentWrite.queries";
import { type ChangeEvent, useState } from "react";
import type { ICommentWriteProps } from "./CommentWrite.types";

export default function CommentWrite(props: ICommentWriteProps) {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [rating, setRating] = useState(3);
  const [contents, setContents] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

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

  const onClickUpdateButton = () => {
    setIsModalOpen(true);
  };
  const onClickModalCancel = () => {
    setIsModalOpen(false);
  };

  const onClickUpdate = async () => {
    if (!contents) {
      alert("내용이 변경되지 않았습니다");
      return;
    }
    try {
      await updateBoardComment({
        variables: {
          updateBoardCommentInput: {
            contents,
            rating,
          },
          password,
          boardCommentId: props.el._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.id },
          },
        ],
      });
      const tmp = props.isEdits;
      tmp[props.index] = false;
      props.setIsEdits([...tmp]);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <CommentWriteUI
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeRating={onChangeRating}
      onChangeContents={onChangeContents}
      onClickUpdateButton={onClickUpdateButton}
      onClickModalCancel={onClickModalCancel}
      writer={writer}
      password={password}
      contents={contents}
      isEdit={props.isEdits?.[props.index]}
      el={props.el}
      isModalOpen={isModalOpen}
    />
  );
}
