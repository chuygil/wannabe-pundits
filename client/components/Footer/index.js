import styles from './Footer.module.css';

const SOCIAL = [
  { id: 1, text: 'Twitter', href: 'https://twitter.com/wannabe_pundits' },
  {
    id: 2,
    text: 'Instagram',
    href: 'https://instagram.com/wannabepundits1219',
  },
  {
    id: 3,
    text: 'Spotify',
    href: 'https://open.spotify.com/show/738ARhlH2fyOGKT26X9ukl?si=e364fdedaf2a4244',
  },
  {
    id: 4,
    text: 'Apple Podcasts',
    href: 'https://podcasts.apple.com/us/podcast/wannabe-pundits/id1559433275',
  },
  {
    id: 5,
    text: 'Youtube',
    href: 'https://www.youtube.com/channel/UCueiUwSd3Y62Gbn5XpR-ikA',
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p>&copy; {year} Wannabe Pundits</p>
      <ul className={styles.list}>
        {SOCIAL.map(({ id, text, href }) => (
          <li key={id}>
            <a
              className={styles.link}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
