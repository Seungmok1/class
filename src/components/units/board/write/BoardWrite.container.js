import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite(props) {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [errorWriter, setErrorWriter] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorTitle, setErrorTitle] = useState("");
  const [errorContents, setErrorContents] = useState("");
  const [isActive, setIsActive] = useState(false);

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onChangeWriter = (e) => {
    setWriter(e.target.value);
    if (e.target.value && password && title && contents) setIsActive(true);
    else setIsActive(false);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
    if (writer && e.target.value && title && contents) setIsActive(true);
    else setIsActive(false);
  };
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
    if (writer && password && e.target.value && contents) setIsActive(true);
    else setIsActive(false);
  };
  const onChangeContents = (e) => {
    setContents(e.target.value);
    if (writer && password && title && e.target.value) setIsActive(true);
    else setIsActive(false);
  };
  const onClickSubmit = async () => {
    if (!writer) setErrorWriter("이름이 입력되지 않았습니다.");
    if (!password) setErrorPassword("비밀번호가 입력되지 않았습니다");
    if (!title) setErrorTitle("제목이 입력되지 않았습니다");
    if (!contents) setErrorContents("내용이 입력되지 않았습니다.");
    if (writer && password && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
            },
          },
        });
        console.log(result.data.createBoard);
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (e) {
        alert(e);
      }
    }
  };
  const onClickUpdate = async () => {
    const myVariables = { updateBoardInput: {}, boardId: router.query.id };
    if (writer) myVariables.updateBoardInput.writer = writer;
    if (title) myVariables.updateBoardInput.title = title;
    if (contents) myVariables.updateBoardInput.contents = contents;

    try {
      const result = await updateBoard({
        variables: { ...myVariables, password },
      });
      console.log(result.data.updateBoard);
      router.push(`/boards/${result.data.updateBoard._id}`);
    } catch (e) {
      alert(e);
    }
  };
  return (
    <BoardWriteUI
      data={props.data}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      errorWriter={errorWriter}
      errorPassword={errorPassword}
      errorTitle={errorTitle}
      errorContents={errorContents}
      isActive={isActive}
      isEdit={props.isEdit}
    />
  );
}
