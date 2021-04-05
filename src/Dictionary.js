import React,{useState}from "react";
import axios from "axios"; 
import "./Dictionary.css";
import Results from "./Results";
export default function Dictionary(props){
    let[searchWord,setSearchword]=useState(props.defaultKeyword);
    let [results,setResults]=useState(null);
    let [loaded,setLoaded]=useState(false);
    
    function handleResponse(response){
        setResults(response.data[0]);
    }
    function search(){
  //documentation: https://dictionaryapi.dev/
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`;
        axios.get(apiUrl).then(handleResponse); 
    }
    function handleSubmit(event){
        event.preventDefault();
        search();
}
    function updateSearch(event){
        setSearchword(event.target.value);
     }
     function load(){
         setLoaded(true);
         search();
     }
     if(loaded){
     return(
        <div className="Dictionary">
            <section>
           <form onSubmit={handleSubmit}>
               <input type="search" placeholder="Type a word" onChange={updateSearch}/>
           </form>
           <div className="hint">
               suggested words: sunset, yoga, cola, chocolate ...
           </div>
           </section>
           <Results results={results}/>
        </div>
    );
 }else{
     load();
     return"Loading";
 }
}
  