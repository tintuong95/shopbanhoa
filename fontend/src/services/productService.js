import Axios from "axios"


export const getAllProduct=(category,offset,limit,name)=>{
    let url=""
   if(category==undefined && name==undefined){
    url=`http://localhost:8000/api/products?offset=${offset}&limit=${limit}`
   }else if(category){
    url=`http://localhost:8000/api/products?category=${category}&offset=${offset}&limit=${limit}`
   }else if(name){
    url=`http://localhost:8000/api/products?name=${name}&offset=${offset}&limit=${limit}`
   }
    return  Axios({
        method:"GET",
        url,
        
    })


}


export const getSizeProduct=(category,name)=>{
    let url=""
   if(category==undefined && name==undefined){
    url=`http://localhost:8000/api/products/size`
   }else if(category){
    url=`http://localhost:8000/api/products/size?category=${category}`
   }else if(name){
    url=`http://localhost:8000/api/products/size?name=${name}`
   }
    return  Axios({
        method:"GET",
        url,
       
    })


}


export const getAllProductType=(id,offset,limit)=>{
    return  Axios({
        method:"GET",
        url:`http://localhost:8000/products/bycategory?category=${id}&offset=${offset}&limit=${limit}`
    })


}


export const getProductById= async (id)=>{
    let res=await Axios({
        method:"GET",
        url:`http://localhost:8000/api/products/${id}`
    })

    return await res
}

export const removeProductById=async (id)=>{
    let res =await Axios({
        method:"DELETE",
        url:`http://localhost:8000/api/products/${id}`
    })
}

export const updateProductById=async (id,data)=>{
    let res =await Axios({
        method:"PUT",
        url:`http://localhost:8000/api/products/${id}`
    })
}


export const createProductById=async (data)=>{
    console.log("dsafdsa",data)
    let res =await Axios({
        method:"POST",
        url:`http://localhost:8000/api/products`,
        data:data,
    })
}


