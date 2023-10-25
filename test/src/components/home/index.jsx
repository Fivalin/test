import { useState } from 'react';
import styles from './style.module.css'
import { useLocalStorage } from '../../hook/useLocalStorage';


const Home = () => {
   // const [user,setUser] = useState('')
   const [user,setUser] = useLocalStorage('user','')
   const [me,setMe] = useLocalStorage('dataMe',"")

    const [inputValue,setIbputValue] = useState('')
    const [inputValue1,setIbputValue1] = useState('')



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
                placeholder='Расскажите о себе'
                type='text'
                />
               

                <button onClick={() =>  {setUser(inputValue); setMe(inputValue1)}}>Войти на сайт</button>
                <button   onClick={() => {
                    return(
          alert("Добрый день. Это мой начальный сайт. Он небольшой и можно сделать куда больше, но надеюсь он вам понравится)")
        )} }>Нажмите для сообщения</button>
            </div>
        )}
    </div>
    )
};
export default Home;