import BaseHead from '@components/BaseHead';
import Header from '@components/Header';
import Footer from '@components/Footer';
import styles from './BaseLayout.module.css';

export default function BaseLayout({ children, title }) {
  return (
    <div>
      <BaseHead title={title} />
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
