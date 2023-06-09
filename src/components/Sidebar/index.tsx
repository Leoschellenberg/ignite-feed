import { PencilLine } from 'phosphor-react';

import * as S from "./styles";
import Avatar from '../Avatar';

const Sidebar = () => {
  return (
    <S.Aside>
      <img
        className="cover"
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className="profile">
        <Avatar src="https://github.com/leoschellenberg.png" />
        <strong>Leonardo Schellenberg</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </S.Aside>
  );
};

export default Sidebar;