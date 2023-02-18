import {useEffect, useState} from "react";
import axios from "axios";

export default function Users(){
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);
/*
    useEffect(() =>{
        fetch ("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then( data => {
            setUsers(data);
            setLoading(false);
        })
        .catch( e => console.log(e))
        //.finally(setLoading(false))
    },[])*/

    useEffect(() =>{
        axios("https://jsonplaceholder.typicode.com/users")
        .then(data => {
            setUsers(data.data)
            setLoading(false)
        })
        .catch(e => console.log(e)) 
    })
    return(
    <div>
        <h1>Users</h1>
        {isLoading ? <div> Loading </div> : <div /> }
        {users.map(xx=>{return(<div key={xx.id}> {xx.name}</div>)})}
    </div>
    )
}