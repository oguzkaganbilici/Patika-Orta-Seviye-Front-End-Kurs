import ChatList from "./ChatList"
import ChatForm from "./ChatForm"
import {init,listenMessage,listenInitialMessages} from "../socketAPI";
import { useEffect } from "react";
import { useChat } from "../context/ChatContext";


export default function Container(){
    const {setMessages} = useChat();

    useEffect(()=>{
        init();
        listenInitialMessages((messages)=> setMessages(messages))
        listenMessage((message) => {
            return(
            setMessages(prevState => ([...prevState,{message, fromMe:true} ]))
            );
        });
    }, []);


    return(
        <div className="App">
            <ChatList />
            <ChatForm />
        </div>
    )
}