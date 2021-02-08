import React, { useState } from "react";
import BookTime from "../components/BookTime.js";
import Calender from "../components/Calender";
import { useMediaQuery } from 'react-responsive';

var DateTime = (props) => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' });
    var [dtText,setDtText] = useState("hide");
    var dtTextCallback = (dtText) => {
        setDtText(dtText);
    }
    var timCallback = (time) => {
        props.timeCallBack(time);
        props.dateCallBack(dtText);
    }

    return (
        <div style={container}>
            <h1 style={header}>Select a Date &amp; Time</h1>
            <div style={dateTimeDiv}>
                <div style={isTabletOrMobile ? mcalDiv : calDiv}>
                    <Calender
                        dtTextCallback = {dtTextCallback}
                    />
                </div>
                <div style={isTabletOrMobile ? mtimeDiv : timeDiv}>
                    <BookTime
                        dtText = {dtText}
                        timCallback = {timCallback}
                    />
                </div>
            </div>
        </div>
    );
}

var container = {
    width : "100%"
}
var header = {
    margin : "8vh 3vw",
    marginBottom : "5vh",
    fontWeight : "400",
    fontSize : "1.5rem",
    color : "#3e3e3e"
}
var dateTimeDiv = {
    width : '100%',
    display : "flex",
    flexWrap : "wrap"
}
var calDiv = {
    width : "50%",
    marginLeft : "3vw",
    marginRight : "1vw" 
}
var mcalDiv = {
    width : "90%",
    marginLeft : "3vw",
    marginRight : "1vw" 
}
var mtimeDiv = {
    width : "100%"
}
var timeDiv = {
    width : "30%"
}

export default DateTime;