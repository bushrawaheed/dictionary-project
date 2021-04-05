import React,{useState}from "react";
import axios from "axios"; 
import "./Dictionary.css";
import Photos from "./Photos";
import Results from "./Results";
export default function Dictionary(props){
    let[searchWord,setSearchword]=useState(props.defaultKeyword);
    let [results,setResults]=useState(null);
    let [loaded,setLoaded]=useState(false);
    let [photos,setPhotos]=useState(null);
    function handlePexelsResponse(response){
        setPhotos(response.data.photos);
    }
    function handleResponse(response){
        setResults(response.data[0]);
    }
    function search(){
  //documentation: https://dictionaryapi.dev/
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`;
        axios.get(apiUrl).then(handleResponse); 
        let pexelsApiKey="563492ad6f91700001000001cf51ba6ff09048dd8317f759fbbdce76";
        let pexelsApiUrl=`https://api.pexels.com/v1/search?query=${searchWord}&per_page=50`;
        let headers={"Authorization" : `Bearer ${pexelsApiKey}`}
        axios.get(pexelsApiUrl,{ headers: headers}).then(handlePexelsResponse); 
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
           <Photos photos={photos}/>
        </div>
    );
 }else{
     load();
     return"Loading";
 }
}
  