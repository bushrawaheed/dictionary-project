import React from "react";
export default function Results(props){
    console.log(props.results);
    if(props.results){
        return(
        <div className="Results">
          <h2>{props.results.word}</h2>
        </div>);
    }else{
        return null;
    }
 }
