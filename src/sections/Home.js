import React from "react";
import img from "../imgs/person.jpeg";
import SpeakerDetails from "../components/SpeakerDetails";
import EventInfo from "../components/EventInfo";
import BookingDetails from "../components/BookingDetails";
import { useMediaQuery } from 'react-responsive';

var Home = (props) => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' });
    return(
        <div style={isTabletOrMobile ? mhomeContainer : homeContainer}>
            <div style={isTabletOrMobile ? mimgContainer : imgContainer}>
                <img src={img} style={image}/>
            </div>
            <div style={isTabletOrMobile ? minfoContainer : infoContainer}>
                <div style={infoDiv}>
                    <SpeakerDetails disp="none" sdisp="inline-block"/>
                </div>
                <div style={infoDiv}>
                    <EventInfo />
                </div>
                <div style={infoDiv}>
                    <BookingDetails 
                        bdisp = "block" 
                        pos = "flex-start" 
                        date = "hide"
                        time = "hide"
                    />
                </div>
            </div>
        </div>
    );
}

var homeContainer = {
    width : "70%",
    display : "flex",
    justifyContent : "center",
    padding : "rem",
    margin : "5vh auto"
}
var mhomeContainer = {
    width : "95%",
    display : "flex",
    flexWrap : "wrap",
    justifyContent : "center",
    padding : "rem",
    margin : "5vh auto"
}
var imgContainer = {
    width : "40%"
}
var mimgContainer = {
    width : "75%"
}
var image = {
    width : "100%",
    objectFit : "contain",
    borderRadius : "10px"
}
var infoContainer = {
    padding : "3rem",
    width : "60%",
    display : "flex",
    flexWrap : "wrap",
    justifyContent : "center",
    alignItems : "center",
    alignContent : "center"
}
var minfoContainer = {
    padding : "3rem",
    width : "100%",
    display : "flex",
    flexWrap : "wrap",
    justifyContent : "center",
    alignItems : "center",
    alignContent : "center"
}
var infoDiv = {
    width : "100%"
}

export default Home;