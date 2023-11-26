<<<<<<< HEAD
import axios from "axios"



export const commonAPI = async (httpmethod, url, reqBody)=>{
    let reqConfig = {
        method: httpmethod,
        url,
        data: reqBody,
        Headers: {
            "Content-Type":"application/json"
        }
    }
    return await axios(reqConfig).then((result)=> {
    return result
    }).catch((err) => {
        return err
    })
=======
const { default: axios } = require("axios")


export const commonAPI = async(httpmethod,url,reqBody)=>{
    let reqConfig={
        
            method: httpmethod,
            url,
            data: reqBody,
            Headers:{
                "Content-Type":"application/json"
            }
        }

        return await axios(reqConfig).then((result)=>{
            return result
        }).catch((err)=>{
            return err
        })
           
>>>>>>> aab6483d59d85f62f53cde8dc039a5965264d9aa
}