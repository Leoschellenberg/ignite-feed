import { ThumbsUp, Trash } from "phosphor-react";
import Avatar from "../Avatar";
import * as S from "./styles";

const Comment = () => {
  return (
    <S.Comment>
    <div className="comment">
      <Avatar hasBorder={false} src="https://github.com/diego3g.png" alt="" />

      <div className="commentBox">
        <div className="commentContent">
          <header>
            <div className="authorAndTime">
              <strong>Diego Fernandes</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
    </S.Comment>
  );
};

export default Comment;