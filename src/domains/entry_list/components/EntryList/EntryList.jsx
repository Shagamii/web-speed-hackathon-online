import React from 'react';
import { Link } from 'react-router-dom';
import formatISO from 'date-fns/formatISO'
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'

import { ProportionalImage } from '../../../../foundation/components/ProportionalImage';

export function EntryList({ blogId, list }) {
  return (
    <ul className="entry-list-EntryList">
      {list
        .filter((entry) => entry.publish_flag === 'open')
        .map((entry, i) => {
          return (
            <li key={i} className="entry-list-EntryList__entry">
              <Link
                to={`/${blogId}/entry/${entry.entry_id}`}
                className="entry-list-EntryList__entry-inner"
              >
                <div className="entry-list-EntryList__thumbnail">
                  <ProportionalImage
                    src={entry.thumbnail}
                    alt=""
                    boxAspectRatio={9 / 16}
                  />
                </div>
                <div className="entry-list-EntryList__text">
                  <time
                    className="entry-list-EntryList__published-at"
              dateTime={formatISO(parseISO(entry.published_at))}
              title={formatISO(parseISO(entry.published_at))}
                  >
                    {format(parseISO(entry.published_at), 'yyyy-MM-dd')}
                  </time>
                  <p className="entry-list-EntryList__title">{entry.title}</p>
                </div>
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
