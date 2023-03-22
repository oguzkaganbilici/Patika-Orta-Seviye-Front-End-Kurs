import { useState } from "react";
import styles from "./styles.module.css";
import { sendMessage } from "../socketAPI";
import { useChat } from "../context/ChatContext";

export default function ChatForm(){
    const [message, setMessage] = useState("");
    
    const { setMessages } = useChat();

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessages((prevState) => ([...prevState, {message}]));
        setMessage("")
        sendMessage(message)
    }
    return(<div>
        <form onSubmit={handleSubmit}>
            <input className={styles.textInput} value={message} onChange={(e) => setMessage(e.target.value) } />
        </form>
    </div>)
}