import { Link } from 'react-router-dom';

import redditLogo from '../../images/redditLogo.png';
import styles from './navbar.module.css'


export const Navbar = () => {

    return (
        
            <div className={styles.navContainer}>
                <Link to="/" className={styles.navLink}>
                    <h1 className={styles.title}>Reddit<span className={styles.mini}>mini</span></h1>
                    <img src={redditLogo} className={styles.logo} alt="" />
                </Link>
            </div>
        
    )
} 