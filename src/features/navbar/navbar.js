import redditLogo from '../../images/redditLogo.png';
import styles from './navbar.module.css'


export const Navbar = () => {

    return (
        <div>
            <img src={redditLogo} className={styles.logo} alt="" />
        </div>
    )
}