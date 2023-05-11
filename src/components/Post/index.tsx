import { FormEvent, InvalidEvent, useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { PostProps } from './types';

import Avatar from "../Avatar";
import Comment from "../Comment";

import * as S from "./styles";

const Post = ({ post }: PostProps) => {
  const [newCommentText, setNewCommentText] = useState('');
  const [comments, setComments] = useState([
    'Um comentario legal!'
  ]);

  const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  const handleCreateNewComment = (event: FormEvent) => {
    event.preventDefault();
    setComments([... comments, newCommentText]);
    setNewCommentText('');
  }

  function handleDeleteComment(commentToDeletel: string){
    const commentsWithoutDeletedOne = comments.filter( comment => {
      return comment !== commentToDeletel;
    })

    setComments(commentsWithoutDeletedOne);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <S.Post>
        <article className="post">
            <header>
              <div className="author">
                <Avatar hasBorder={true} src={post.author.avatarUrl}/>
                <div className="authorInfo">
                  <strong>{post.author.name}</strong>
                  <span>{post.author.role}</span>
                </div>
              </div>

              <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>
                {publishedDateRelativeToNow}
              </time>
            </header>

            <div className="content">
            {post.content.map(line => {
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
                onInvalid={handleNewCommentInvalid}
                required
                onChange={(e) => {setNewCommentText(e.target.value)}}
                placeholder="Deixe um comentário"
              />

              <footer>
                <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
              </footer>
            </form>

            <div className="commentList">
              {comments.map((comment, index) =>{
                return <Comment key={index + comment} content={comment} onDeleteComment={handleDeleteComment}/>
              })}
            </div>
        </article>
    </S.Post>
  );
};

export default Post;