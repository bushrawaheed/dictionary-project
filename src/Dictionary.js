import React,{useState}from "react";
import axios from "axios"; 
import "./Dictionary.css";
export default function Dictionary(){
    const[searchWord,setSearchword]=useState(null);
    function handleResponse(response){
        console.log(response.data[0]);
    }
    function search(event){
        event.preventDefault();
        //documentation: https://dictionaryapi.dev/
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`;
        axios.get(apiUrl).then(handleResponse); 

    }
    function updateSearch(event){
        setSearchword(event.target.value);
        
    }
    return(
        <div className="Dictionary">
           <form onSubmit={search}>
               <input type="search" placeholder="type a word" onChange={updateSearch}/>
           </form>
        </div>
    );
}