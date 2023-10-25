import { Link } from "react-router-dom"
import styles from './style.module.css'
const Comment = (props)=> {
    return (
        <div className={styles.wrapper}>
            <label>Напиши комметарий</label>
            <input
             value={props.inputValue}
              onChange={(e) => props.setInputValue(e.target.value)}
              />
            <button onClick={props.sendChat}>Отправить</button>
            <button onClick={() => props.setChatData([])}>Удалить</button>
            {props.showDialogReg && (
                   <div>
                Вы не авторизировались, зарегистрироватся по <Link to="/">ссылке</Link>
            </div>
            )
            }
         
        </div>
    )
}
export default Comment