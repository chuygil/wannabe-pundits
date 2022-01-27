import Link from 'next/link';
import groq from 'groq';

import sanityClient from '@lib/client';
import BaseLayout from '@components/BaseLayout';
import HeroSection from '@components/HeroSection';
import PostList from '@components/PostList';
import styles from '@styles/Home.module.css';

export default function Home({ posts }) {
  return (
    <BaseLayout title="Home">
      <HeroSection />
      <section>
        <h2>Recent Posts</h2>
        <PostList posts={posts} />
        <Link href="/blog">
          <a className={styles.more_posts_link}>See More Posts</a>
        </Link>
      </section>
    </BaseLayout>
  );
}

export async function getStaticProps() {
  const posts = await sanityClient.fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc) [0...3]
    `);
  return {
    props: {
      posts,
    },
  };
}
