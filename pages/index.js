import Head from "next/head";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import axios from "axios";
const shareUrl = `https://demo-next-vuphan07.vercel.app/?s=${btoa(
  Math.random().toString().substr(2, 16)
)}&share=1`;
const _twitterUrl = new URL("https://twitter.com/share");
_twitterUrl.searchParams.set("url", shareUrl);
const _lineUrl = new URL("https://social-plugins.line.me/lineit/share");
_lineUrl.searchParams.set("url", shareUrl);
const _metaUrl = new URL("https://www.facebook.com/sharer/sharer.php");
_metaUrl.searchParams.set("u", shareUrl);
export default function Home(props) {
  const route = useRouter();
  const [isRender, setIsRender] = useState(false);
  useEffect(() => {
    if (route?.query?.share) {
      route.replace("https://sp.booking.com/");
    } 
  });


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
  // const number = context.query.id || 2;
  // let data = [];
  // const images = [
  //   {
  //     image:
  //       "https://i.pinimg.com/originals/a2/34/9f/a2349fbe26147b97d2dcfb2f7678b81e.jpg",
  //     title: "anh dep so 1",
  //   },
  //   {
  //     image:
  //       "https://i.pinimg.com/originals/49/6d/c1/496dc1150e51474f49c65598766d96ba.jpg",
  //     title: "anh dep so 2",
  //   },
  //   {
  //     image:
  //       "https://i.pinimg.com/originals/64/d6/83/64d68345a1c9b726fb30959a495e41a3.jpg",
  //     title: "anh dep so 3",
  //   },
  //   {
  //     image:
  //       "https://i.pinimg.com/736x/9f/17/06/9f1706a4882158ec05d828689927a737.jpg",
  //     title: "anh dep so 4",
  //   },
  //   {
  //     image:
  //       "https://i.pinimg.com/originals/29/8f/8c/298f8ce1e4de0dc648de18b639f89625.jpg",
  //     title: "anh dep so 5",
  //   },
  // ];
  // const item = images[Math.floor(Math.random() * images.length)];
  // if (number % 2 === 0) {
  //   data = [
  //     {
  //       name: "description",
  //       content: item.title,
  //     },
  //     {
  //       key: "5",
  //       property: "og:image",
  //       content: item.image,
  //     },
  //     {
  //       key: "4",
  //       property: "og:title",
  //       content: item.title,
  //     },
  //     {
  //       name: "title",
  //       content: item.title,
  //     },
  //     {
  //       key: "1",
  //       name: "twitter:card",
  //       content: "summary_large_image",
  //     },
  //     {
  //       key: "2",
  //       name: "twitter:title",
  //       content: item.title,
  //     },
  //     {
  //       key: "3",
  //       name: "twitter:image",
  //       content: item.image,
  //     },
  //   ];
  // } else {
  //   data = [
  //     {
  //       name: "description",
  //       content: item.title,
  //     },
  //     {
  //       key: "5",
  //       property: "og:image",
  //       content: item.image,
  //     },
  //     {
  //       key: "4",
  //       property: "og:title",
  //       content: item.title,
  //     },
  //     {
  //       name: "title",
  //       content: item.title,
  //     },
  //     {
  //       key: "1",
  //       name: "twitter:card",
  //       content: "summary_large_image",
  //     },
  //     {
  //       key: "2",
  //       name: "twitter:title",
  //       content: item.title,
  //     },
  //     {
  //       name: "twitter:image",
  //       key: "3",
  //       content: item.image,
  //     },
  //   ];
  // }

  const res = await axios.get("https://yummy-call-server-v2.herokuapp.com/api/user/628b22fa49e650a6a684d205");

  const data = [
    {
      name: "description",
      content: res.data.data.username,
    },
    {
      key: "5",
      property: "og:image",
      content: res.data.data.avatar_url,
    },
    {
      key: "4",
      property: "og:title",
      content: res.data.data.username,
    },
    {
      name: "title",
      content: res.data.data.username,
    },
    {
      key: "1",
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      key: "2",
      name: "twitter:title",
      content: res.data.data.username,
    },
    {
      name: "twitter:image",
      key: "3",
      content: res.data.data.avatar_url,
    },
  ];
  console.log("first");
  return { props: { data } };
}
