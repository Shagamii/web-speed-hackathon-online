import React from 'react';
import { Link } from 'react-router-dom';
import formatISO from 'date-fns/formatISO'
import parseISO from 'date-fns/parseISO'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import { ProportionalImage } from '../../../../foundation/components/ProportionalImage';

export function CommentListItem({ comment }) {
  return (
    <article
      id={`comment-${comment.comment_id}`}
      className="comment-CommentListItem"
    >
      <div className="comment-CommentListItem__avatar">
        <ProportionalImage src={comment.commenter.image} boxAspectRatio={1} />
      </div>
      <div className="comment-CommentListItem__body">
        <h3 className="comment-CommentListItem__commenter">
          {comment.commenter.user_name}
        </h3>
        <p className="comment-CommentListItem__comment">{comment.comment}</p>
        <footer className="comment-CommentListItem__footer">
          <Link to={`#comment-${comment.comment_id}`}>
            <time
              dateTime={formatISO(parseISO(comment.posted_at))}
              title={formatISO(parseISO(comment.posted_at))}
            >
              {`${formatDistanceToNow(parseISO(comment.posted_at))} ago`}
            </time>
          </Link>
        </footer>
      </div>
    </article>
  );
}
