import { ThumbsUp, Trash } from "phosphor-react";
import Avatar from "../Avatar";
import * as S from "./styles";
import { useState } from "react";

import { CommentProps } from './types';


const Comment = ({ content, onDeleteComment }:CommentProps) => {

  const [likeCount, setLikeCount] = useState(0);


  function handleLikeComment(){
    setLikeCount((state) =>{
      return state + 1;
    });
  }

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

            <button 
              onClick={() => {onDeleteComment(content)}} 
              title="Deletar comentário"
              >
                <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
    </S.Comment>
  );
};

export default Comment;