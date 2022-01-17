import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import cn from 'classnames';

import { useHasMounted } from '@lib/useHasMounted';
import styles from './Header.module.css';

const LINKS = [
  { id: 1, text: 'Home', href: '/' },
  { id: 2, text: 'Blog', href: '/blog' },
  { id: 3, text: 'Podcast', href: '/podcast' },
];

function NavLink({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a className={cn(styles.navLink, isActive ? styles.navLinkActive : '')}>
        {text}
      </a>
    </NextLink>
  );
}

export default function Header() {
  const hasMounted = useHasMounted();
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <header className={styles.header}>
      <div>
        <nav>
          <ul className={styles.navList}>
            {LINKS.map(({ id, ...navLinkProps }) => (
              <li key={id}>
                <NavLink {...navLinkProps} />
              </li>
            ))}
          </ul>
        </nav>
        {hasMounted ? (
          <button
            className={styles.themeButton}
            type="button"
            onClick={() =>
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }
          >
            {resolvedTheme === 'dark' ? (
              <svg
                width={24}
                height={24}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                width={24}
                height={24}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        ) : null}
      </div>
    </header>
  );
}
