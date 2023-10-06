import { useMutation } from "@apollo/client";
import Upload01UI from "./Upload01.presenter";
import type { IUpload01Props } from "./Upload01.types";
import { UPLOAD_FILE } from "./Upload01.query";
import { type ChangeEvent, useRef } from "react";

export default function Upload01(props: IUpload01Props) {
  const fileRef = useRef<HTMLInputElement>(null);

  const [uploadFile] = useMutation(UPLOAD_FILE);

  const handFileBtn = () => {
    fileRef.current?.click();
  };
  const onClickFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    } catch (e) {
      alert(e);
    }
  };
  return (
    <Upload01UI
      handFileBtn={handFileBtn}
      onClickFile={onClickFile}
      fileRef={fileRef}
      fileUrl={props.fileUrl}
    />
  );
}
