import * as S from "./styles";

import { AvatarProps } from './types';

const Avatar = ({ hasBorder = true, src, ... props }: AvatarProps) => {
  return (
    <>
        <S.Avatar hasBorder={hasBorder} src={src} {...props} />
    </>
  );
};

export default Avatar;