import groq from 'groq';

import sanityClient from '@lib/client';
import BaseLayout from '@components/BaseLayout';
import PostList from '@components/PostList';

export default function Blog({ posts }) {
  return (
    <BaseLayout title="Blog">
      <section>
        <PostList posts={posts} />
      </section>
    </BaseLayout>
  );
}

export async function getStaticProps() {
  const posts = await sanityClient.fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
    `);
  return {
    props: {
      posts,
    },
  };
}
