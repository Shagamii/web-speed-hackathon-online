import React from 'react';
import { Link } from 'react-router-dom';
import formatISO from 'date-fns/formatISO'
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'

export function EntryHeader({ title, publishedAt, location }) {
  const date = parseISO(publishedAt)
  return (
    <div className="entry-EntryHeader">
      <h2 className="entry-EntryHeader__title">
        <Link to={location.pathname} className="entry-EntryHeader__title-link">
          {title}
        </Link>
      </h2>
      <time
        className="entry-EntryHeader__published-at"
              dateTime={formatISO(date)}
              title={formatISO(date)}
      >
        {format(date, 'yyyy-MM-dd')}
      </time>
    </div>
  );
}
