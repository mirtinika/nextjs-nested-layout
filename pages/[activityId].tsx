import type { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import styles from '../styles/Site.module.css';

type Props = {
    id: string;
    title: string;
    description: string;
    hasPages: boolean;
};

export default function Activity({ title, description }: Props) {
    return (
        <div className={styles.container}>
            <Head>
                <title>{`Arale Norimaki - ${title}`}</title>
                <meta name="description" content="NextJS Playground" />
                <link rel="icon" href="/arale.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    <a> {title}</a>
                </h1>

                <p className={styles.description}>{description}</p>
            </main>
        </div>
    );
}
import fsPromises from 'fs/promises';
import path from 'path';

export async function getServerSideProps() {
    const filePath = path.join(process.cwd(), 'data/activity.json');
    const jsonData = await fsPromises.readFile(filePath);
    const info = JSON.parse(jsonData.toString());
    return {
        props: info,
    };
}
