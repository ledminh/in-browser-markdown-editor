import { FunctionComponent } from "react";

import styles from './Title.module.scss';

const Title: FunctionComponent = () => {


    return (
        <div className={styles.title}>
            <h1>MARKDOWN</h1>
        </div>
    );

}

export default Title;