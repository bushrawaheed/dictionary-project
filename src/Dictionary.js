import React,{useState}from "react";
import "./Dictionary.css";
export default function Dictionary(){
    const[searchWord,setSearchword]=useState(null);
    function search(event){
        event.preventDefault();
        alert(`searching for ${searchWord}`);
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