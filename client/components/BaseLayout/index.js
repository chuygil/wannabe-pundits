import BaseHead from '@components/BaseHead';
import Header from '@components/Header';
import Footer from '@components/Footer';
import styles from './BaseLayout.module.css';

export default function BaseLayout({ children }) {
  return (
    <div>
      <BaseHead />
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
