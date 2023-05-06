import { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import Avatar from "../Avatar";
import Comment from "../Comment";

import * as S from "./styles";

const Post = ({ author, publishedAt, content }) => {
  const [newCommentText, setNewCommentText] = useState('');
  const [comments, setComments] = useState([
    'Um comentario legal!'
  ]);

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  const handleCreateNewComment = () => {
    event.preventDefault();
    setComments([... comments, newCommentText]);
    setNewCommentText('');
  }


  return (
    <S.Post>
        <article className="post">
            <header>
              <div className="author">
                <Avatar hasBorder={true} src={author.avatarUrl}/>
                <div className="authorInfo">
                  <strong>{author.name}</strong>
                  <span>{author.role}</span>
                </div>
              </div>

              <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                {publishedDateRelativeToNow}
              </time>
            </header>

            <div className="content">
            {content.map(line => {
              if (line.type === 'paragraph') {
                return <p key={line.content}>{line.content}</p>;
              } else if (line.type === 'link') {
                return <p key={line.content}><a href="#">{line.content}</a></p>
              }
          })}
            </div>

            <form onSubmit={handleCreateNewComment} className="commentForm">
              <strong>Deixe seu feedback</strong>

              <textarea
                name='comment'
                value={newCommentText}
                required
                onChange={(e) => {setNewCommentText(e.target.value)}}
                placeholder="Deixe um comentário"
              />

              <footer>
                <button type="submit">Publicar</button>
              </footer>
            </form>

            <div className="commentList">
              {comments.map((comment, index) =>{
                return <Comment key={index + comment} content={comment}/>
              })}
            </div>
        </article>
    </S.Post>
  );
};

export default Post;