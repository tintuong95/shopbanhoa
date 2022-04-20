import Axios from "axios"


export function getAllCategory(){
    return Axios({
        method:"GET",
        url:"http://localhost:8000/api/categorys",
        
    })
}