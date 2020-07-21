import React, { useEffect } from 'react';

const TWITTER_SDK = 'https://platform.twitter.com/widgets.js';

export function TwitterShareButton() {
  useEffect(() => {
    const el = document.createElement("script")
    el.id = TWITTER_SDK
    el.src = TWITTER_SDK
    document.head.appendChild(el)

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
