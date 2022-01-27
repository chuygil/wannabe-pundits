import Link from 'next/link';
import { format, parseISO } from 'date-fns';

import styles from './PostList.module.css';

export default function PostList({ posts }) {
  return (
    <ul className={styles.postList}>
      {posts.length > 0 &&
        posts.map(
          ({ _id, title = '', slug = '', publishedAt = '' }) =>
            slug && (
              <li className={styles.postItem} key={_id}>
                <Link href="/blog/[slug]" as={`/blog/${slug.current}`}>
                  <a className={styles.postLink}>{title}</a>
                </Link>
                <span className={styles.postDate}>
                  {format(parseISO(publishedAt), 'MMMM dd, yyyy')}
                </span>
              </li>
            )
        )}
    </ul>
  );
}
