import { FunctionComponent } from "react";
import styles from './EmptyScreen.module.scss';

const EmptyScreen:FunctionComponent = () => {


    return (
        <div className={styles.emptyScreen}>
            <h1>NO DOCUMENT FOUND!</h1>
        </div>
    )
}

export default EmptyScreen;