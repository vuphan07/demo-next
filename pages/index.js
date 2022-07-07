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
        <meta name="description" content="description page demo 1 app main" />
        <meta key="1" name="twitter:card" content="summary_large_image 213213123" />
        <meta key="2" name="twitter:title" content="title page 3123123123" />
        <meta key="3" name="twitter:image" content="https://live.staticflickr.com/1860/43526893585_cc37ec703a_b.jpg" />
        <meta key="4" property="og:title" content="title page demo 12132312312" />
        <meta key="5"
          property="og:image"
          content="https://live.staticflickr.com/1860/43526893585_cc37ec703a_b.jpg"
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
    </div>
  );
}

export async function getServerSideProps() {
  const number = Math.round(Math.random() *100) 
  let data = [];
  if(number%2 === 0) {
     data = [
      {
        name: "description",
        content:
          "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy 123",
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
    ];
  }else {
     data = [
      {
        name: "description",
        content:
          "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy 234",
      },
      {
        name: "og:image",
        content:
          "https://i.9mobi.vn/cf/Images/tt/2021/8/20/anh-avatar-dep-45.jpg",
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
          "https://i.9mobi.vn/cf/Images/tt/2021/8/20/anh-avatar-dep-45.jpg",
      },
    ];
  }
  

  return { props: { data } };
}
