import { Link } from 'react-router-dom';

import redditLogo from '../../images/redditLogo.png';
import styles from './navbar.module.css'


export const Navbar = () => {

    return (
        <Link to="/">
            <img src={redditLogo} className={styles.logo} alt="" />
        </Link>
    )
}