import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import Alert from "../../components/alert";
import { getAllPostIds, getPostData } from "../../lib/posts";
import { Date } from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
export default function FirstPost({ postData }) {
  return (
    <Layout>
      <Head>
        <title>Post: {postData.title}</title>
      </Head>
      <h2>
        <Link href="/">
          <a>Back to home.</a>
        </Link>
      </h2>
      <Alert type="success">
        <div>Testing alert.</div>
      </Alert>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>{postData.id}</div>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        {/* <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
      </article>
    </Layout>
  );
}
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
