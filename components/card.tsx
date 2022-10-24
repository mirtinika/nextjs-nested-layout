import styles from '../styles/Site.module.css';

type CardProps = {
    url?: string;
    title: string;
    description: string;
};

const Card = ({ url, title, description }: CardProps) => (
    <a href={url} className={styles.card}>
        <h2>{title}</h2>
        <p>{description}</p>
    </a>
);

export default Card;
