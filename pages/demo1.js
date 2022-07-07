import Head from "next/head";
import React from "react";
const shareUrl = "https://demo-next-vuphan07.vercel.app/demo1";
const _twitterUrl = new URL("https://twitter.com/share");
_twitterUrl.searchParams.set("url", shareUrl);
const _lineUrl = new URL("https://social-plugins.line.me/lineit/share");
_lineUrl.searchParams.set("url", shareUrl);
const _metaUrl = new URL("https://www.facebook.com/sharer/sharer.php");
_metaUrl.searchParams.set("u", shareUrl);
export const Demo1 = () => {
  return (
    <>
      <Head>
        <meta name="title" content="title demo 1" />
        <meta name="theme-color" content="#F7F0E9" />
        <meta name="description" content="description page demo 1 xxxxxxxxxxxxxxxxxxxxxxxxx" />
        <meta key="1" name="twitter:card" content="summary_large_image" />
        <meta key="2" name="twitter:title" content="title page demo1" />
        <meta key="3" name="twitter:image" content="https://i.9mobi.vn/cf/Images/tt/2021/8/20/anh-avatar-dep-45.jpg" />
        <meta key="4" property="og:title" content="title page demo 1" />
        <meta key="5"
          property="og:image"
          content="https://i.9mobi.vn/cf/Images/tt/2021/8/20/anh-avatar-dep-45.jpg"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileColor" content="#F7F0E9" />
        <meta name="application-name" content="senkyo" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#F7F0E9" />
        <meta name="apple-mobile-web-app-title" content="senkyo" />
        <link rel="icon" href="/favicons/favicon.svg" type="image/svg+xml" />
        <link
          rel="shortcut icon"
          href="/favicons/favicon.ico"
          type="image/x-icon"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <main>
        <button
          onClick={() => {
            window.open(_twitterUrl.toString(), "_blank");
          }}
        >
          twitter
        </button>
        <button
          onClick={() => {
            window.open(_lineUrl.toString(), "_blank");
          }}
        >
          line
        </button>
        <button
          onClick={() => {
            window.open(_metaUrl.toString(), "_blank");
          }}
        >
          facebook
        </button>
      </main>
    </>
  );
};

export default Demo1;
