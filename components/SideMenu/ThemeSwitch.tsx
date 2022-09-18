import { FunctionComponent, useContext } from "react";

import styles from './ThemeSwitch.module.scss';

import Image from 'next/image';
import lightModeIcon from '../../assets/icon-light-mode.svg';
import darkModeIcon from '../../assets/icon-dark-mode.svg';
import { LightMode, ThemeContext } from "../../pages";

const ThemeSwitch:FunctionComponent<{setLightMode: (mode:LightMode) => void}> = ({setLightMode}) => {
    
    

    return (
        <div className={styles.themeSwitch}>
            <div className={styles.darkModeIcon}>
                <Image 
                    src={darkModeIcon}
                    alt="Dark Mode Icon"
                />
            </div>
            <Switch setLightMode={setLightMode}/>
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


const Switch:FunctionComponent<{setLightMode: (mode:LightMode)=> void}> = ({setLightMode}) => {
    
    const lightMode = useContext(ThemeContext);

    return (
        <div className={styles.switch}
            data-light-mode={lightMode}
            role="button"
            onClick={() => {
                if(lightMode==='DARK')
                    setLightMode('LIGHT');
                else {
                    setLightMode('DARK');
                }

            }}  
        />
    )
}