import { Link } from 'react-router-dom';
import styles from './style.module.css'


const Header = () => {
    return( 
    <div className={styles.container}>
        <nav className={styles.navbar}>
            <Link style={{color: "#7633c4",fontSize: "larger"}} to='/'>Главная страница</Link>
            <Link style={{color: "#7633c4",fontSize: "larger"}} to='/chat'>Чат</Link>
            <Link style={{color: "#7633c4",fontSize: "larger"}} to='/test'>Подгрузка данных</Link>
            <img src='https://espicture.ru/800/600/https/ssoft.su/uploads/posts/2020-10/1603131443_sayt.png'
             style={{width: "60px",height: "60px"}}
             />
        </nav>
        
    </div>
    )
};
export default Header;
