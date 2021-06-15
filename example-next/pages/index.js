import Head from "next/head";
import Link from "next/link";
import { getDatabase } from "../lib/notion";
import { StyledText } from '@9gustin/react-notion-render';
import styles from "./index.module.css";
import Header from '../components/Header';

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Notion Next.js blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <Header title="Next.js blog powered by Notion API">
          <p>
              This is an example of a Next.js blog with data fetched with Notions
              API. The data comes from{" "}
              <a href={`https://www.notion.so/${databaseId}`}>this table</a>. Get
              the source code on{" "}
              <a href="https://github.com/samuelkraft/notion-blog-nextjs">
                Github
              </a>
              .
            </p>
        </Header>

        <h2 className={styles.heading}>All Posts</h2>
        <ol className={styles.posts}>
          {posts.map((post) => {
            const date = new Date(post.last_edited_time).toLocaleString(
              "en-US",
              {
                month: "short",
                day: "2-digit",
                year: "numeric",
              }
            );
            return (
              <li key={post.id} className={styles.post}>
                <h3 className={styles.postTitle}>
                  <Link href={`/${post.id}`}>
                    <a>
                      {post.properties.Name.title.map(({text, annotations}, index) => (<StyledText key={index} text={text} annotations={annotations} />))}
                    </a>
                  </Link>
                </h3>

                <p className={styles.postDescription}>{date}</p>
                <Link href={`/${post.id}`}>
                  <a> Read post →</a>
                </Link>
              </li>
            );
          })}
        </ol>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
