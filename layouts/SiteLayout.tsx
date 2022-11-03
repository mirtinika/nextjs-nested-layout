import styles from '../styles/Site.module.css';
import { ReactElement, ReactNode } from 'react';
import Image from 'next/image';

const SiteLayout = ({ children }: { children: React.ReactNode }) => (
    <>
        <div className={styles.topbar}>LOGO</div>
        <section>{children}</section>

        <footer className={styles.footer}>
            <a
                href="https://dragonball.fandom.com/wiki/Arale_Norimaki"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by <Image src="/arale.png" alt="Arale Logo" width={48} height={48} />
            </a>
        </footer>
    </>
);

export const getLayout = (page: ReactElement): ReactNode => <SiteLayout>{page}</SiteLayout>;

export default SiteLayout;
