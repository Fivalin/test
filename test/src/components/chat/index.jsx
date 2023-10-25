import { useState } from 'react';
import styles from './style.module.css'
import { useLocalStorage } from '../../hook/useLocalStorage';
import Comment from './Comment';
import ChatBlock from './Chat-block';

const Chat = () => {

    const [inputValue, setInputValue] = useState('')
    const [chatData,setChatData] = useLocalStorage('CHAT',[])
    const [showDialogReg,setShowDialogReg] = useState(false)
    const [user] = useLocalStorage('user')
    
    const sendChat = () => {
        if (user) {
            setChatData([...chatData,`${user}: ${inputValue}`])
            setInputValue('')
        } else {
            setInputValue('')
            setShowDialogReg(true)
        }
    }
    return (<div>
        <ChatBlock
        chatData={chatData}
        />
        <Comment 
        inputValue={inputValue} 
        setInputValue={setInputValue} 
        showDialogReg={showDialogReg} 
        sendChat={sendChat}
        setChatData={setChatData}
        />

    </div>
    )
};
export default Chat