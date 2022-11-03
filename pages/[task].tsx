import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Site.module.css';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import { StoreContext } from '../store';

type Props = {
    id: string;
    title: string;
    description: string;
    hasPages: boolean;
};

export default function Activity({ title, description }: Props) {
    const store = useContext(StoreContext);
    const router = useRouter();
    const { tasks } = store.state;

    const task = tasks.find((task) => task.slug === router.query.task);

    return (
        <div className={styles.container}>
            <Head>
                <title>{`Arale Norimaki - ${title}`}</title>
                <meta name="description" content="NextJS Playground" />
                <link rel="icon" href="/arale.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Hi</h1>
                <p className={styles.description}>{task?.description}</p>
                <Link href="/">
                    <a>Back</a>
                </Link>
            </main>
        </div>
    );
}
