import React,{useState} from "react";
import {Link} from "react-router-dom";

var Time = (props) => {
    var tim = props.tim;
    var [width,setWidth] = useState("100%");
    var [disp,setDisp] = useState("none");

    var toggle = () => {
        if(disp === "inline-block"){
            setDisp("none");
            setWidth("100%");
        }else{
            setDisp("inline-block");
            setWidth("49.5%");
        }
    }

    return (
        <div style={timeDiv}>
            <div style={{
                width : width
            }} onClick={toggle}>
                <button style={{
                    display : "block",
                    width : "100%",
                    padding : "10px 0",
                    borderRadius : "8px",
                    backgroundColor : "rgb(240,247,255)",
                    color : "#0064b7",
                    border : "0.5px solid #0064b7",
                    fontSize : "0.9rem",
                    fontWeight : "400",
                    outline : "none",
                    cursor : "pointer",
                    textAlgin : "center"
                }}>{tim}</button>
            </div>
            <Link style={{
                    width : "49.5%",
                    display : disp,
                    color : "white",
                    textDecoration : "none"
                }} 
                to="/booking/details" 
                onClick = {() => props.timCallback(tim)}
            >
                <button style={primaryBtn}>Confirm</button>
            </Link>
        </div>
    );
}

var timeDiv = {
    width : "100%",
    marginBottom : "1vh",
    display : "flex",
    justifyContent : "space-between"
}
var primaryBtn = {
    display : "block",
    width : "100%",
    padding : "10px 0",
    borderRadius : "8px",
    backgroundColor : "#0064b7",
    color : "white",
    border : "none",
    fontSize : "0.9rem",
    outline : "none",
    cursor : "pointer",
    textAlgin : "center"
}

export default Time;