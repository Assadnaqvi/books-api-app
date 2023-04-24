"use client";
import React from 'react'
import useSWR from "swr";
  
const url="https://api.quotable.io/random?tags=technology";
const fetcher=(url:string)=> fetch(url).then((res)=>res.json());
  function Client () {
   const{data,error,isLoading}=useSWR(url,fetcher); 
   if(error) return <div>Error</div>
   if(isLoading) return <div>isLoading</div> 
   return (
    <div>
        <h1>Client Page</h1>
      {data.content}
        </div>
  );
}

export default Client