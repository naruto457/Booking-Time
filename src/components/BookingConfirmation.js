import React,{useEffect} from "react";
import BookingDetails from "./BookingDetails";
import SpeakerDetails from "./SpeakerDetails";
import { useMediaQuery } from 'react-responsive';

var BookingConfirmed = (props) => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' });
    var email = props.email
    useEffect(() => {
        document.querySelector("body").style.overflow = "hidden";
        window.scrollTo(0,0);
        return () => {
            document.querySelector("body").style.overflowY = "scroll";
            document.querySelector("body").style.overflowX = "hidden";
        }
    })
    return (
        <div style={isTabletOrMobile ? mcontainer : container}>
            <h1 style={header}>Booking Confirmed!</h1>
            <div style={infoContainer}>
                <div style={infoDiv}>
                    <SpeakerDetails sdisp="none" disp="inline-block"/>
                </div>
                <div style={infoDiv}>
                    <BookingDetails
                        bdisp="none" 
                        pos="center"
                        date = {props.date}
                        time = {props.time}
                    />
                </div>
                <div style={infoDiv}>
                    <p style={text}>
                        We sent a confirmation and a calender invitation with a link to join the video call to <b>{email}</b>
                    </p>
                </div>
            </div>
            <div style={footer}>
                <p style={normal}>Need Help ?</p>
                <p style={blue}>hello@superpeer.com</p>
            </div>
        </div>
    );
}

var container = {
    width : "50%",
    margin : "0 auto"
}
var mcontainer = {
    width : "95%",
    margin : "0 auto"
}
var header = {
    textAlign : "center",
    marginTop : "12vh",
    fontSize : "2.4rem",
    fontWeight : "600",
    color : "#3e3e3e"
}
var infoContainer = {
    marginTop : "4vh",
    width : "100%",
    border : "1px solid gainsboro",
    padding : "3vh"
}
var infoDiv = {
    marginBottom : "2vh",
    textAlign : "center"
}
var footer  = {
    marginTop : "6vh",
    textAlign : "center"
}
var normal = {
    marginBottom : "2vh"
}
var blue = {
    color : "blue",
    fontWeight : "bold"
}
var text = {
    color : "#4e4e4e",
    fontSize : "0.8rem",
    marginTop : "5vh"
}
export default BookingConfirmed;