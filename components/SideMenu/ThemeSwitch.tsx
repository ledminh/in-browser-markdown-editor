import { FunctionComponent, useContext } from "react";

import styles from './ThemeSwitch.module.scss';

import DarkModeIcon from "./DarkModeIcon";
import LightModeIcon from "./LightModeIcon";


const ThemeSwitch:FunctionComponent<{light:boolean, setLightMode: (mode:boolean) => void}> = ({light, setLightMode}) => {
    
    

    return (
        <div className={styles.themeSwitch}>
            <div className={styles.darkModeIcon}>
                <DarkModeIcon
                    fill={light? '#5A6069': 'white'}
                />
            </div>
            <Switch setLightMode={setLightMode}
                        light={light}/>
            <div className={styles.lightModeIcon}>
                <LightModeIcon
                    fill={light? 'white' : '#5A6069'}
                />
            </div>
        </div>
    )
}

export default ThemeSwitch;


const Switch:FunctionComponent<{light:boolean, setLightMode: (mode:boolean)=> void}> = ({light, setLightMode}) => {
    

    return (
        <div className={styles.switch}
            role="button"
            onClick={() => setLightMode(!light)}  
        />
    )
}