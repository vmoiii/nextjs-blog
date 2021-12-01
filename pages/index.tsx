import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { Date } from "../components/date";
import Example from "../components/heroSections";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";
export default function Home({
  allPostsData,
}: {
  allPostsData: { date: string; title: string; id: string }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your self Introduction]</p>
        <p>
          (This is a sample website or{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <Link href="/posts/first-post">To First Post</Link>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <Example />
    </Layout>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  // console.log(JSON.stringify(allPostsData));
  return {
    props: {
      allPostsData,
    },
  };
};
// export async function getServerSideProps(context) {
//   return {
//     props: {},
//   };
// }
