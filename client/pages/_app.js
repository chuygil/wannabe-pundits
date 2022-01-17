import { ThemeProvider } from 'next-themes';

import '@styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system" enableSystem disableTransitionOnChange>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
