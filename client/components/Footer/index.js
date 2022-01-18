import styles from './Footer.module.css';

const SOCIAL = [
  { id: 1, text: 'Twitter', href: 'https://twitter.com/wannabe_pundits' },
  {
    id: 2,
    text: 'Instagram',
    href: 'https://instagram.com/wannabepundits1219',
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
