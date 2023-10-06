import { type ChangeEvent, useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import type { IBoardWriteProps } from "./BoardWrite.types";
import type { IUpdateBoardInput } from "../../../../commons/types/generated/types";

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();

  const [writer, setWriter] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const [errorWriter, setErrorWriter] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorTitle, setErrorTitle] = useState("");
  const [errorContents, setErrorContents] = useState("");
  const [isActive, setIsActive] = useState(false);

  const [isZipcodeModalOpen, setIsZipcodeModalOpen] = useState(false);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const [images, setImages] = useState(["", "", ""]);

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  useEffect(() => {
    const temp = props.data?.fetchBoard.images;
    if (temp !== undefined && temp !== null) setImages([...temp]);
    console.log(temp);
  }, [props.data]);

  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>) => {
    setWriter(e.target.value);
    if (e.target.value && password && title && contents) setIsActive(true);
    else setIsActive(false);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (writer && e.target.value && title && contents) setIsActive(true);
    else setIsActive(false);
  };
  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    if (writer && password && e.target.value && contents) setIsActive(true);
    else setIsActive(false);
  };
  const onChangeContents = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(e.target.value);
    if (writer && password && title && e.target.value) setIsActive(true);
    else setIsActive(false);
  };
  const onChangeYoutubeUrl = (e: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(e.target.value);
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
              youtubeUrl,
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
              images,
            },
          },
        });
        void router.push(`/boards/${result.data.createBoard._id}`);
      } catch (e) {
        alert(e);
      }
    }
  };
  const onClickUpdate = async () => {
    if (
      title === "" &&
      contents === "" &&
      youtubeUrl === "" &&
      address === "" &&
      addressDetail === "" &&
      zipcode === ""
    ) {
      alert("수정한 내용이 없습니다.");
      return;
    }

    const updateBoardInput: IUpdateBoardInput = {};
    updateBoardInput.boardAddress = {};
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    if (zipcode) updateBoardInput.boardAddress.zipcode = zipcode;
    if (address) updateBoardInput.boardAddress.address = address;
    if (addressDetail)
      updateBoardInput.boardAddress.addressDetail = addressDetail;
    // if (images !== props.data?.fetchBoard.images)
    //   updateBoardInput.images = images;

    try {
      const result = await updateBoard({
        variables: { updateBoardInput, password, boardId: router.query.id },
      });
      void router.push(`/boards/${result.data.updateBoard._id}`);
    } catch (e) {
      if (e instanceof Error) alert(e.message);
    }
  };
  const onClickSearchButton = () => {
    setIsZipcodeModalOpen(true);
  };
  const onClickModalCancel = () => {
    setIsZipcodeModalOpen(false);
  };
  const handleZipcode = (data: any) => {
    setZipcode(data.zonecode);
    setAddress(data.address);
    setIsZipcodeModalOpen(false);
  };
  const onChangeAddressDetail = (e: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(e.target.value);
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const temp = [...images];
    temp[index] = fileUrl;
    setImages(temp);
  };

  return (
    <BoardWriteUI
      data={props.data}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onClickSearchButton={onClickSearchButton}
      onClickModalCancel={onClickModalCancel}
      handleZipcode={handleZipcode}
      onChangeAddressDetail={onChangeAddressDetail}
      onChangeFileUrls={onChangeFileUrls}
      errorWriter={errorWriter}
      errorPassword={errorPassword}
      errorTitle={errorTitle}
      errorContents={errorContents}
      isActive={isActive}
      isEdit={props.isEdit}
      isZipcodeModalOpen={isZipcodeModalOpen}
      zipcode={zipcode}
      address={address}
      images={images}
    />
  );
}
