/* eslint-disable no-underscore-dangle */
import Head from 'next/head';
import React from 'react';
// import { useEffect } from 'react';
import { useRouter } from 'next/router';

// const dynamoClient = new aws.DynamoDB.DocumentClient({
//   region: 'ap-northeast-1',
//   credentials: {
//     accessKeyId: process.env.AWS_QUERY_WEB_ITEMS_API_ACCESS_KEY,
//     secretAccessKey: process.env.AWS_QUERY_WEB_ITEMS_API_SECRET_ACCESS_KEY,
//   }
// });

export default function Home(props) {
  const route = useRouter();
  const { data: dataShare } = props;
  const router = useRouter()
  const { type } = router.query
  switch (type) {
    case "create":
      document.cookie = `SENKYO_PREVIEW_DATA = ${JSON.stringify(router.query)}`
      localStorage.setItem('SENKYO_PREVIEW_DATA', JSON.stringify(router.query))
      break
    case "delete":
      localStorage.removeItem('SENKYO_PREVIEW_DATA')
      break
    default:
  }
  return (
    <div>
      <Head>
        <meta name="theme-color" content="#F7F0E9" />
        <meta name="description" content={dataShare?.body} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={dataShare?.title} />
        <meta property="og:title" content={dataShare?.title} />
        <meta property="og:url" content={route.asPath} />
        <meta property="og:image" content={`${process.env.ASSETS_URL}${dataShare?.thumbnail}`} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileColor" content="#F7F0E9" />
        <meta name="application-name" content="senkyo" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#F7F0E9" />
        <meta name="apple-mobile-web-app-title" content="senkyo" />
        <link rel="icon" href="/favicons/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <h1 style={{ color: "red" }}>demo</h1>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const dataShare = {
//     title: '',
//     thumbnail: '',
//     body: '',
//   };
//   try {
//     const userId = context?.query?.uid;
//     const JSON_PROPERTIES = ['career', 'cover', 'introVideo', 'mainPolicies', 'statusOfVotes', 'contactInfo', 'news', 'career'];
//     const params = {
//       TableName: process.env.DYNAMODB_WEBSITE_ITEMS_TABLE,
//       KeyConditionExpression: '#indexKey = :id',
//       ExpressionAttributeNames: {
//         '#indexKey': 'id',
//       },
//       ExpressionAttributeValues: {
//         ':id': userId,
//       },
//     };
//     let rawData = null;
//     const resGetPoliticalDetail = await dynamoClient.query(params).promise();
//     if (resGetPoliticalDetail?.Items) {
//       rawData = {};
//       resGetPoliticalDetail?.Items?.map((item) => {
//         if (JSON_PROPERTIES.includes(item.itemKey)) {
//           rawData[item.itemKey] = JSON.parse(item.itemValue);
//         } else {
//           rawData[item.itemKey] = item.itemValue;
//         }
//         return item;
//       });
//     }
//     if (rawData.isPublic === 'TRUE') {
//       rawData.news.map((i) => {
//         if (i.itemId === context?.query?.aid) {
//           dataShare?.title = i.title;
//           dataShare?.thumbnail = i.thumbnail;
//           dataShare?.body = i.body;
//         }
//         return i;
//       });
//     }
//     return { props: { data: dataShare } };
//   } catch (error) {
//     console.log(error);
//     return { props: { data: dataShare } };
//   }
// }
