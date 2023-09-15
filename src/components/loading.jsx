import React from "react";
import styles from "../styles/loading.module.css";
// import { useSelector, } from "react-redux";

const Loading = () => {
    // const { auth, books } = useSelector(state => state)
    // const dispatch = useDispatch();
    // dispatch(action handler)
    return (
        <React.Fragment>
            <div className={styles.container}>
                <div className={styles.loader} />
            </div>
        </React.Fragment>
    );
};

export default Loading;
