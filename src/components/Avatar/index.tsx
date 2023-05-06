import { ImgHTMLAttributes } from 'react';
import * as S from "./styles";


interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
  hasBorder?: boolean
}

const Avatar = ({ hasBorder = true, src, ... props }: AvatarProps) => {
  return (
    <>
        <S.Avatar hasBorder={hasBorder} src={src} {...props} />
    </>
  );
};

export default Avatar;