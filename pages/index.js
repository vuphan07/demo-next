import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
const shareUrl = "https://demo-next-vuphan07.vercel.app/";
const _twitterUrl = new URL("https://twitter.com/share");
_twitterUrl.searchParams.set("url", shareUrl);
const _lineUrl = new URL("https://social-plugins.line.me/lineit/share");
_lineUrl.searchParams.set("url", shareUrl);
const _metaUrl = new URL("https://www.facebook.com/sharer/sharer.php");
_metaUrl.searchParams.set("u", shareUrl);

// const data = [
//   {
//     name: "description",
//     content:
//       "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
//   },
//   {
//     name: "og:image",
//     content:
//       "https://i.9mobi.vn/cf/Images/tt/2021/8/20/anh-avatar-dep-45.jpg",
//   },
//   {
//     name: "og:title",
//     content: "title page index",
//   },
//   {
//     name: "title",
//     content: "title main",
//   },
//   {
//     name: "twitter:card",
//     content: "summary_large_image",
//   },
//   {
//     name: "twitter:title",
//     content: "title page index",
//   },
//   {
//     name: "twitter:image",
//     content:
//       "https://i.9mobi.vn/cf/Images/tt/2021/8/20/anh-avatar-dep-45.jpg",
//   },
// ];

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="title" content="title demo 1" />
        <meta name="theme-color" content="#F7F0E9" />
        <meta
          name="description"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
        />
        {props.data.map((prop, index) => (
          <meta key={index} {...prop} />
        ))}
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
    </div>
  );
}

export async function getServerSideProps(context) {
  const number = context.query.id || 2;
  let data = [];
  if (number % 2 === 0) {
    data = [
      {
        name: "description",
        content: "description cua id chan",
      },
      {
        key: "5",
        property: "og:image",
        content:
          "https://live.staticflickr.com/7581/15907563980_6a18386eed_b.jpg",
      },
      {
        key: "4",
        property: "og:title",
        content: "title cau id chan",
      },
      {
        name: "title",
        content: "title cau id chan",
      },
      {
        key: "1",
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        key: "2",
        name: "twitter:title",
        content: "title cau id chan",
      },
      {
        key: "3",
        name: "twitter:image",
        content:
          "https://live.staticflickr.com/7581/15907563980_6a18386eed_b.jpg",
      },
    ];
  } else {
    data = [
      {
        name: "description",
        content: "description cua id le",
      },
      {
        key: "5",
        property: "og:image",
        content:
          "https://i.9mobi.vn/cf/Images/tt/2021/8/20/anh-avatar-dep-45.jpg",
      },
      {
        key: "4",
        property: "og:title",
        content: "title page index",
      },
      {
        name: "title",
        content: "title cau id le",
      },
      {
        key: "1",
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        key: "2",
        name: "twitter:title",
        content: "title cau id le",
      },
      {
        name: "twitter:image",
        key: "3",
        content:
          "https://i.9mobi.vn/cf/Images/tt/2021/8/20/anh-avatar-dep-45.jpg",
      },
    ];
  }

  return { props: { data } };
}
