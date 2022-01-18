import { format, parseISO } from 'date-fns';
import BlockContent from '@sanity/block-content-to-react';

import sanityClient from '@lib/client';
import BaseLayout from '@components/BaseLayout';
import styles from '@styles/Post.module.css';

export default function Post({ post }) {
  return (
    <BaseLayout>
      <article className={styles.post}>
        <div className={styles.postHeading}>
          <h1>{post?.title}</h1>
          <span className={styles.postDate}>{`${post?.author} / ${format(
            parseISO(post?.publishedAt),
            'MMMM dd, yyyy'
          )}`}</span>
        </div>
        <BlockContent blocks={post?.body} {...sanityClient.config()} />
      </article>
    </BaseLayout>
  );
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { slug = '' } = context.params;
  const post = await sanityClient.fetch(
    `
    *[_type == "post" && slug.current == $slug][0]
    `,
    { slug }
  );

  return {
    props: {
      post,
    },
  };
}
