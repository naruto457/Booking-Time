import React from "react";
import Time from "./Time.js";
var BookTime = (props) => {
    var disp, dtText = props.dtText;
    if(dtText === "hide") disp = "none";
    else disp = "inline-block"
    return (
        <div style={{
            width : "100%",
            padding : "10px",
            display : disp
        }}>
            <p style={text}>{dtText}</p>
            <div style={line}></div>
            <div style={allTimes}>
                <Time tim="09:30 PM" timCallback = {props.timCallback}/>
                <Time tim="09:45 PM" timCallback = {props.timCallback}/>
                <Time tim="10:00 PM" timCallback = {props.timCallback}/>
                <Time tim="10:15 PM" timCallback = {props.timCallback}/>
            </div>
        </div>
    );
}

var container = {
    width : "100%",
    padding : "10px"
}
var text = {
    color : "#3e3e3e"
}
var line = {
    height : "1px",
    borderBottom : "1px solid gainsboro",
    width : "100%",
    margin : "10px 0"
}
var allTimes = {
    display : "flex",
    flexDirection : "column",
    justifyContent : "center"
}

export default BookTime;