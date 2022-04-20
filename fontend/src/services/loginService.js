import Axios from "axios"


export function signInUser(data){
    return Axios({
        method:"POST",
        url:"http://localhost:8000/api/login/signin",
        data:data,
    })
}


export function signUpUser(data){
    return Axios({
        method:"POST",
        url:"http://localhost:8000/api/login/signup",
        data:data,
    })
}


export async  function  checkTokenLogin(){
    const res=await Axios({
        method: "GET",
        url: "http://localhost:8000/api/login/checklogin",
  
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      })
    return await res
}