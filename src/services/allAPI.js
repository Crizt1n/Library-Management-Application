
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
