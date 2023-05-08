import * as S from "./styles";

const Avatar = ({ hasBorder = true, src }) => {
  return (
    <>
        <S.Avatar hasBorder={hasBorder} src={src} />
    </>
  );
};

export default Avatar;