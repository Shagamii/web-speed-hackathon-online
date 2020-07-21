import React, { useEffect } from 'react';

const HATENA_SDK = 'https://b.st-hatena.com/js/bookmark_button.js';

export function HatenaBookmarkButton() {
  useEffect(() => {
    document.head.appendChild(`<script id=${HATENA_SDK} src=${HATENA_SDK}></script>`)
    return () => {
      const el = document.getElementById(HATENA_SDK)
      if (el != null) {
        el.remove()
      }
    };
  }, []);

  return (
    <div className="entry-HatenaBookmarkButton">
      <a
        href="https://b.hatena.ne.jp/entry/"
        className="hatena-bookmark-button"
        data-hatena-bookmark-layout="basic-label-counter"
        data-hatena-bookmark-lang="ja"
        title="このエントリーをはてなブックマークに追加"
      >
        <img
          src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png"
          alt="このエントリーをはてなブックマークに追加"
          width="20"
          height="20"
          style={{ border: 'none' }}
        />
      </a>
    </div>
  );
}
