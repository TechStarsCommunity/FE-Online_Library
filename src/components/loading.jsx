import styles from "../styles/loading.module.css";

const Loading = () => {
    return (
        <div className={styles.container}>
            <div className={styles.loader} />
        </div>
    );
};

export default Loading;
