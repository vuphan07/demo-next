import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
export const Demo1 = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const shareUrl = `https://demo-next-vuphan07.vercel.app/demo/${id}`;
  const _twitterUrl = new URL("https://twitter.com/share");
  _twitterUrl.searchParams.set("url", shareUrl);
  const _lineUrl = new URL("https://social-plugins.line.me/lineit/share");
  _lineUrl.searchParams.set("url", shareUrl);
  const _metaUrl = new URL("https://www.facebook.com/sharer/sharer.php");
  _metaUrl.searchParams.set("u", shareUrl);
  const index = id%2 ===0 ? 0 : 1;
  return (
    <>
      <Head>
      {props?.data[index].map((item, index) => (
          <meta key={index} {...item} />
        ))}
        {/*  */}
        <meta name="theme-color" content="#F7F0E9" />
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

export async function getServerSideProps() {
  let data = [
    [
      {
        name: "description",
        content: "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy 123",
      },
      {
        name: "og:image",
        content:
          "https://live.staticflickr.com/7581/15907563980_6a18386eed_b.jpg",
      },
      {
        name: "og:title",
        content: "title page index",
      },
      {
        name: "title",
        content: "title main",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "title page index",
      },
      {
        name: "twitter:image",
        content:
          "https://live.staticflickr.com/7581/15907563980_6a18386eed_b.jpg",
      },
    ],
    [
      {
        name: "description",
        content: "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy 234",
      },
      {
        name: "og:image",
        content:
          "https://www.f-16.net/g3/var/resizes/f-16-photos/album38/album68/anh.jpg?m=1371916456",
      },
      {
        name: "og:title",
        content: "title page index",
      },
      {
        name: "title",
        content: "title main",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "title page index",
      },
      {
        name: "twitter:image",
        content:
          "https://www.f-16.net/g3/var/resizes/f-16-photos/album38/album68/anh.jpg?m=1371916456",
      },
    ],
  ];

  return { props: { data } };
}

export default Demo1;
