import * as S from "./styles";

const Avatar = ({ hasBorder = true, src }) => {
  return (
    <>
      { hasBorder ? <S.AvatarBorder src={src}/> : <S.AvatarNoBorder  src={src}/>}
    </>
  );
};

export default Avatar;