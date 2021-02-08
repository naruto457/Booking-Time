import React from "react";
import {
    Link
} from "react-router-dom";
var data = require("../data.json");
var BookingDetails = (props) => {
    var bdisp = props.bdisp, durDisp,width;
    var pos =  props.pos;
    var tdisp;
    var date = props.date;
    var time = props.time;

    if(date === "hide" && time === "hide"){
        tdisp = "none"
    }else{
        tdisp = "inline-block"
    }

    if(pos === "flex-start"){
        durDisp = "inline-block"
        width = "100%"
    }else{
        durDisp = "none";
        width = "auto"
    }



    return (
        <div style={{
            width : "100%",
            display : "flex",
            flexWrap : "wrap",
            justifyContent : pos,
            alignItems : "center",
            alignContent : "center"
        }}>
            <div style={{
                width : width,
                textAlign : "left",
                padding : "10px 15px 0 0"
            }}>
                <p style={tag}>Rate</p>
                <h2 style={{
                        display : "inline-block",
                        marginRight : "3px",
                        color : "#3e3e3e"
                }}>
                {data[0].rate}</h2>
                <p style={{display : durDisp}}>(15 min)</p>
            </div>

            <div style={{
                display : tdisp,
                width : width,
                textAlign : "left",
                padding : "10px 15px 0 0"
            }}>
                <p style={tag}>Date</p>
                <h2 style={{
                        display : tdisp,
                        marginRight : "3px",
                        color : "#3e3e3e"
                }}>
                {date}</h2>
            </div>

            <div style={{
                display : tdisp,
                width : width,
                textAlign : "left",
                padding : "10px 15px 0 0"
            }}>
                <p style={tag}>Time</p>
                <h2 style={{
                        display : tdisp,
                        marginRight : "3px",
                        color : "#3e3e3e"
                }}>
                {time}</h2>
            </div>
            
            <Link to="/booking" style={{color : "white", textDecoration : "none", width : "100%"}}>
                <button style={{
                    padding : "12px 21px",
                    borderRadius : "8px",
                    backgroundColor : "#0064b7",
                    color : "white",
                    border : "none",
                    marginTop : "4vh",
                    display : bdisp,
                    fontSize : "1.1rem",
                    outline : "none",
                    cursor : "pointer"
                }}>
                    Book Now
                </button>
            </Link>
        </div>
    );
}
var tag = {
    fontSize : "0.9rem"
}

export default BookingDetails;