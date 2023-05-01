import * as S from "./styles";

import igniteLogo from '../../assets/ignite-logo.svg'

const Header = () => {
  return (
    <S.Wrapper>
      <header>
        <img src={igniteLogo} alt="Logo Ignite" />
      </header>
    </S.Wrapper>
  );
};

export default Header;