import React from "react";

export default function tick(props){
    return(
        <div>
        <h1>안녕, 리엑트!</h1>
        <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
        </div>
    )

}