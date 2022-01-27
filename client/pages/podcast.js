import Image from 'next/image';
import { useTheme } from 'next-themes';

import BaseLayout from '@components/BaseLayout';
import styles from '@styles/Podcast.module.css';

export default function Podcast() {
  const { resolvedTheme } = useTheme();
  return (
    <BaseLayout title="Podcast">
      <section>
        <Image
          src="/wannabepundits.png"
          alt="Wannabe Pundits logo"
          width={175}
          height={175}
        />
        <p className={styles.text}>
          You can listen, and watch us on any of the following platforms:
        </p>
        <ul className={styles.list}>
          <li>
            <a
              href="https://open.spotify.com/show/738ARhlH2fyOGKT26X9ukl?si=e364fdedaf2a4244"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                src="/spotify-podcasts-badge.svg"
                alt="Listen on Spotify badge"
                width={165}
                height={40}
                layout="fixed"
              />
            </a>
          </li>
          <li>
            <a
              href="https://podcasts.apple.com/us/podcast/wannabe-pundits/id1559433275"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                src="/apple-podcasts-badge.svg"
                alt="Listen on Apple Podcasts badge"
                width={165}
                height={40}
                layout="fixed"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCueiUwSd3Y62Gbn5XpR-ikA"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                src={`/${
                  resolvedTheme === 'dark'
                    ? 'youtube-logo-dark.png'
                    : 'youtube-logo-light.png'
                }`}
                alt="Listen on Youtube badge"
                width={165}
                height={40}
                layout="fixed"
              />
            </a>
          </li>
        </ul>
      </section>
    </BaseLayout>
  );
}
