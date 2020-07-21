import React, { useEffect } from 'react';

const TWITTER_SDK = 'https://platform.twitter.com/widgets.js';

export function TwitterShareButton() {
  useEffect(() => {
    document.head.append(`<script id=${TWITTER_SDK} src=${TWITTER_SDK}></script>`)

    return () => {
      const el = document.getElementById(TWITTER_SDK)
      if (el != null) {
        el.remove()
      }
    };
  }, []);

  return (
    <div className="entry-TwitterShareButton">
      <a
        className="twitter-share-button"
        href="https://twitter.com/intent/tweet"
      >
        Tweet
      </a>
    </div>
  );
}
