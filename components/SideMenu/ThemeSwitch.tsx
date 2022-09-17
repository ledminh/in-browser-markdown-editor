import { FunctionComponent } from "react";

import styles from './ThemeSwitch.module.scss';

import Image from 'next/image';
import lightModeIcon from '../../assets/icon-light-mode.svg';
import darkModeIcon from '../../assets/icon-dark-mode.svg';

const ThemeSwitch:FunctionComponent = () => {


    return (
        <div className={styles.themeSwitch}>
            <div className={styles.darkModeIcon}>
                <Image 
                    src={darkModeIcon}
                    alt="Dark Mode Icon"
                />
            </div>
            <Switch />
            <div className={styles.lightModeIcon}>
                <Image 
                    src={lightModeIcon}
                    alt="Light Mode Icon"
                />
            </div>
        </div>
    )
}

export default ThemeSwitch;


const Switch:FunctionComponent = () => {

    return (
        <div className={styles.switch}/>
    )
}