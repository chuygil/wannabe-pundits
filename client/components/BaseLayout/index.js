import BaseHead from '@components/BaseHead';
import Header from '@components/Header';

export default function BaseLayout({ children }) {
  return (
    <div>
      <BaseHead />
      <Header />
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}
