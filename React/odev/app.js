import axios from "axios";

async function getAllData(number){
    const users = await axios("https://jsonplaceholder.typicode.com/users/"+number);
    const posts = await axios("https://jsonplaceholder.typicode.com/posts/"+number);

    return( users, posts);
}


export default getAllData;
