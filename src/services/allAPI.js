
import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"
export const Update = async (id, reqBody) => {
   return  await commonAPI('PUT', `${serverURL}books/`+id, reqBody)
}
export const Delete = async (id) => {
    return await commonAPI('DELETE', `${serverURL}books/`+id)
}
export const Get = async (id) => {
    return await commonAPI('GET', `${serverURL}books/`+id);
}

export const GetAll = async () => {
    return await commonAPI('GET', `${serverURL}books`);
}

export const uploadNewBook = async(id,reqBody)=>{
return await commonAPI('POST',`${serverURL}books`,reqBody)
}