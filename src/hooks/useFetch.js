import { useState } from "react"
import axios from "axios" 


const useFetch = (baseUrl, setCloseForm) => {

    const [infoApi, setInfoApi] = useState()
//GET
    const getApi = (path) => {
        const url = `${baseUrl}${path}/`
        console.log('me ejecute')
        axios.get(url)
        .then(resp => setInfoApi(resp.data))
        .catch(err => console.error(err))
        /*
        fetch (url)
        .then(resp => resp.json())
        .then(dara => setInfoApi(data)
        .catch(err => console.error(err))
        */

    }

    //POST

    const postApi = (path, data) => {
        const url = `${baseUrl}${path}/`
        axios
        .post(url, data)
        .then(resp => {
            console.log (resp.data)
            setInfoApi([...infoApi, resp.data])
            setCloseForm(true)
        })
        .catch(err => console.error(err))
    }

    //DELETE

    const deleteApi = (path, id) => {
        const url = `${baseUrl}${path}/${id}/`
        axios.delete (url)
        .then(resp => {
            console.log (resp.data)
            const infoApiFiltered = infoApi.filter(e => e.id !== id)
            setInfoApi(infoApiFiltered)
        })
        .catch(err => console.error(err))

    }

    //UPDATE

    const updateApi = (path, id, data) => {
        const url = `${baseUrl}${path}/${id}/`
        axios.put(url, data)
        .then(resp => {
            console.log(resp.data)
            const infoApiMapped = infoApi.map(e => e.id === id ? resp.data : e)
            setInfoApi(infoApiMapped)
        })
        .catch(err => console.error(err))
    }

    return [infoApi, getApi, postApi, deleteApi, updateApi]
  
}

export default useFetch