import { useState } from 'react';
import styles from './style.module.css'
import { useLocalStorage } from '../../hook/useLocalStorage';


const Home = () => {
   // const [user,setUser] = useState('')
   const [user,setUser] = useLocalStorage('user','')
   const [me,setMe] = useLocalStorage('dataMe',"")

    const [inputValue,setIbputValue] = useState('')
    const [inputValue1,setIbputValue1] = useState('')
    const [inputValue2,setIbputValue2] = useState('')



    return (<div>
       {user && (
            <div style={{color: "white"}}>
                <div> Приветствую вас {user}.Теперь вы можете продолжить работу на сайте</div>
                <button onClick={() => {setUser('') ; setMe('')}}>Выйти</button>
            </div>
        )}
        {!user && (
            <div className={styles.container}>
                <input
                value={inputValue}
                onChange={(e) => setIbputValue(e.target.value)}
                placeholder='Введите свой никнейм'
                type='text '
                />
                 <input
                value={inputValue1}
                onChange={(e) => setIbputValue1(e.target.value)}
                placeholder='Введите пароль'
                type='password'
                />
                 <input
                value={inputValue2}
                onChange={(e) => setIbputValue2(e.target.value)}
                placeholder='Повторите пароль'
                type='password'
                />
                
                <button onClick={() =>  {setUser(inputValue); setMe(inputValue1)}}>Войти на сайт</button>
            </div>
        )}
    </div>
    )
};
export default Home;