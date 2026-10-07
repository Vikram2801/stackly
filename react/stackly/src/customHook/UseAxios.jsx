import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from "axios"

export default function UseAxios(url) {
    const[data,setData] = useState([]);
    const[loading,setLoading] = useState(false);
    const[error,setError] = useState("");

    useEffect(()=>{
        const fetch = async () =>{
            try{
                setLoading(true);
                setError("");
                const response = await axios.get(url);
                const fetchData = response.data

                setData(fetchData)

                

            }catch(error){
                setError(error.response?.data?.message || error.message || "something went wrong")

            }finally{
                setLoading(false);

            }
        };
        fetch();

    },[url])

  return {data,loading,error}
}
