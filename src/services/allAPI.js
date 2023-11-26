<<<<<<< HEAD
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
=======

//api to upload books

import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"



//API for Uploading a book into the server

export const uploadBooks = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/books`,reqBody)
}

//API to get the booklist from the server

export const getAllBooks = async()=>{
    return await commonAPI('GET',`${serverURL}/books`,"")
}

//API for deleting the book from the server

export const deleteBooks = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/books/${id}`,{})
}

//API to update/edit the book in the server

export const updateBookList = async(id,body)=>{
    return await commonAPI('PUT',`${serverURL}/books/${id}`,body)
}
>>>>>>> aab6483d59d85f62f53cde8dc039a5965264d9aa
