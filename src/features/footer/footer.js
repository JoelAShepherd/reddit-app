import React from "react";
import styles from './footer.module.css'


export const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <p>Site by J Shepherd as part of the Codecademy Full Stack 
                Developer course. See the repo at <a href="https://github.com/JoelAShepherd/reddit-app">GitHub</a></p>
        </div>
    )
}

