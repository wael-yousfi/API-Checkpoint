import axios from "axios";
import { useEffect, useState } from "react";


const ListOfUser = () =>{

    const [data, setData] = useState([]);
    useEffect(()=>{
        const getData = async()=>{
            const res = await axios({
                method: "GET",
                url: "https://jsonplaceholder.typicode.com/users"
            })
            setData(res.data)
            
        }
        getData();
    }, [])
    //console.log(data)
            
    return(
        <>
            {data.map((user) => (
                    <div  className="items" key={user.id}>
                        <div className="items__element">
                            <h1>{user.name}</h1>
                            <div>{user.phone}</div>
                            <div>{user.username}</div>
                            <div>{user.website}</div>
                        </div>
                        
                    </div>
                ))
            }
            
        </>
    );
}

export default ListOfUser;