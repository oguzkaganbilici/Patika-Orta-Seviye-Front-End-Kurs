import styles from './styles.module.css'
export default function ChatItem({item}){

    console.log("item:", item)
    return(
        <div className={`${styles.chatItem} ${!item.fromMe ? styles.right: styles.chatItem}`}>
            {item.message}
        </div>
    )
}