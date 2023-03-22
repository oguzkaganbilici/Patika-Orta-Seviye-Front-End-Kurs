import styles from "./styles.module.css"
import {useChat} from "../context/ChatContext"
import ChatItem from "./ChatItem"

import ScrollableFeed from "react-scrollable-feed";

export default function ChatList(){

    const { messages } = useChat();

    return(
    <div className={styles.chatlist}>
        <ScrollableFeed forceScroll={true}>
            {messages.map((xx, key) =>{
                console.log(xx)
                return(
                    <ChatItem key={key} item={xx}/>
                )
            }  )}
        </ScrollableFeed>
    </div>
    )
}