// @ts-nocheck
import React from "react";
import styles from "../styles/loading.module.css";

const Loading = () => {
    return (
        <React.Fragment>
            <div className={styles.container}>
                <div className={styles.loader} />
            </div>
        </React.Fragment>
    );
};

export default Loading;
