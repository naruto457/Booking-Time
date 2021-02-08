import React, { useState } from 'react'
import DateTime from "../components/DateTime";
import DetailsForm from "../components/DetailsForm";
import {Link,Switch,Route,useRouteMatch} from "react-router-dom";
import SpeakerDetails from "../components/SpeakerDetails";
import EventInfo from "../components/EventInfo";
import BookingDetails from "../components/BookingDetails";
import BookingConfirmation from "../components/BookingConfirmation.js";
import { useMediaQuery } from 'react-responsive';

var Booking = (props) => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' });
    let { path, url } = useRouteMatch();
    var [date, setDate] = useState("hide");
    var [time, setTime] = useState("hide");
    var [email,setEmail] = useState("noreply@gmail.com");

    var dateCallBack = (date) => {
        setDate(date);
    }
    var timeCallBack = (time) => {
        setTime(time);
    }
    var emailCallBack = (mail) => {
        setEmail(mail);
    }

    return(
        <div style={container}>
            <Link style={backIcon} to="/">
                <i class="fas fa-arrow-left fa-md"></i>
            </Link>
            <div style={isTabletOrMobile ? minfoContainer : infoContainer}>
                <div style={infoDiv}>
                    <SpeakerDetails disp="block" sdisp="none"/>
                </div>
                <div style={infoDiv}>
                    <EventInfo />
                </div>
                <div style={infoDiv}>
                    <BookingDetails 
                        bdisp = "none" 
                        pos = "flex-start" 
                        date = {date}
                        time = {time}
                    />
                </div>
            </div>
    
            <Switch>
                <Route exact path={path}>
                    <div style={isTabletOrMobile ? mcalenderDiv : calenderDiv}>
                        <DateTime 
                            dateCallBack = {dateCallBack} 
                            timeCallBack = {timeCallBack}
                        />
                    </div>
                </Route>
                <Route path={`${path}/details`}>
                    <div style={isTabletOrMobile ? mformDiv : formDiv}>
                        <DetailsForm 
                            emailCallBack = {emailCallBack}  
                        />
                    </div>
                </Route>
                <Route path={`${path}/confirmation`}>
                    <div style={cover}>
                        <BookingConfirmation 
                            date = {date}
                            time = {time}
                            email = {email}
                        />
                    </div>
                </Route>
            </Switch>
        </div>
    );
}

var cover = {
    position : "absolute",
    top : "0",
    left : "0",
    width : "100%",
    height : "100vh",
    backgroundColor :  "#f9f9f9"
}

var container = {
    width : "100%",
    padding : '8vh 5vh 5vh 8vh',
    display : "flex",
    flexWrap : "wrap"
}

var infoContainer = {
    padding : "3rem",
    width : "30%",
    display : "flex",
    flexWrap : "wrap",
    justifyContent : "center",
    alignItems : "center",
    alignContent : "center",
    borderRight : "1px solid gainsboro"
}
var minfoContainer = {
    padding : "3rem",
    width : "100%",
    display : "flex",
    flexWrap : "wrap",
    justifyContent : "center",
    alignItems : "center",
    alignContent : "center",
}
var infoDiv = {
    width : "100%"
}
var backIcon = {
    position : "absolute",
    top : "3vh",
    left : "3vh",
    padding : "10px 15px",
    borderRadius : "8px",
    color : "#0064b7",
    textDecoration : "none",
    border : "1px solid #0064b7"
}

var  formDiv = {
    width : "70%",
    height : "100%"
}
var  mformDiv = {
    width : "100%",
    height : "100%"
}
var  calenderDiv = {
    width : "70%"
}
var  mcalenderDiv = {
    width : "100%"
}

export default Booking