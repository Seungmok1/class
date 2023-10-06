import type { IUpload01UIProps } from "./Upload01.types";
import * as S from "./Upload01.styles";

export default function Upload01UI(props: IUpload01UIProps) {
  return (
    <>
      {props.fileUrl ? (
        <S.Image
          src={`https://storage.googleapis.com/${props.fileUrl}`}
          onClick={props.handFileBtn}
        />
      ) : (
        <S.UploadButton onClick={props.handFileBtn}>upload</S.UploadButton>
      )}
      <input
        type="file"
        ref={props.fileRef}
        hidden
        onChange={props.onClickFile}
      />
    </>
  );
}
