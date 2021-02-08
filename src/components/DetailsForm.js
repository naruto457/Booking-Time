import React,{useState} from "react";
import {Link} from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

var DetailsForm = (props) => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' });
    var [email, setEmail] = useState("");
    var handleMailChange = (event) => setEmail(event.target.value);

    var handleSubmit = (event) => {
        props.emailCallBack(email);
    }

    return (
        <div style={isTabletOrMobile ? mcontainer : container}>
            <p style={header}>Provide Booking Details</p>
            <form>
                <div style={inputDiv}>
                    <div style={nDiv}>
                        <label style={label} for="firstName">First Name</label>
                        <input id="firstName" autoComplete="off" name="firstName" placeholder="" style={inputn}/> 
                    </div> 
                    <div style={nDiv}>
                        <label style={label} for="lastName">Last Name</label>
                        <input id="lastName" autoComplete="off" name="lastName" placeholder="" style={inputn}/> 
                    </div> 
                </div>
                <div style={inputDiv}>
                    <div style={eDiv}>
                        <label style={label} for="email">Email</label>
                        <input type="email" value={email} id="email" autoComplete="off" name="email" onChange={handleMailChange} style={inputn}/> 
                    </div> 
                </div>
                <div style={inputDiv}>
                    <div style={eDiv}>
                        <label style={label} for="calldet">What would you like the call to be about?</label>
                        <textarea id="calldet" autoComplete="off" name="calldet" placeholder="" style={inpute}/> 
                    </div> 
                </div>
                <div style={inputDiv}>
                    <div style={eDiv}>
                        <label style={label} for="phoneNum">Phone number to recieve notifications (Recommended)</label>
                        <input id="phoneNum" autoComplete="off" name="phoneNum" placeholder="" style={inputn}/> 
                    </div> 
                </div>
                <div style={inputDiv}>
                    <div style={eDiv}>
                        <input id="check" type="checkbox" name="check" placeholder="" style={inputc}/> 
                        <label style={{
                            fontWeight : "bold",
                            color : "#4a4a4a",
                            fontSize : "0.9rem"
                        }} for="check">I agree with SuperPeer <span style={blue}>Terms Of Service</span></label>
                    </div> 
                </div>
                <Link style={inputBDiv} to="/booking/confirmation">
                    <button style = {{
                            padding : "12px 21px",
                            borderRadius : "8px",
                            backgroundColor : "#0064b7",
                            color : "white",
                            border : "none",
                            fontSize : "1.1rem",
                            outline : "none",
                            cursor : "pointer",
                            position : "absolute",
                            right : "0",
                            top : "0"
                        }}
                        type = "submit"
                        onClick = {handleSubmit}
                    >
                        Create Booking
                    </button>
                </Link>
            </form>
        </div>
    );
}

var container = {
    width : "80%",
    height : "100%",
    paddingLeft : "10vw",
    paddingTop : "8vh",
    marginBottom : "10vh"
}
var mcontainer = {
    width : "100%",
    height : "100%",
    paddingLeft : "0",
    paddingTop : "8vh",
    marginBottom : "10vh"
}
var header = {
    fontSize : "1.4rem",
    marginBottom : "3vh"
}
var inputDiv = {
    width : "100%",
    marginBottom : "1vh"
}
var inputBDiv = {
    display : "inline-block",
    width : "100%",
    marginBottom : "1vh",
    textAlign : "right",
    position : "relative"
}
var nDiv = {
    display : "inline-block",
    width : "50%",
    padding : "5px"
}
var inputn = {
    border : "none",
    outline : "none",
    border : "1px solid gainsboro",
    borderRadius : "8px",
    width : "100%",
    height : "6vh",
    padding : "5px 10px"
}
var label = {
    fontWeight : "bold",
    color : "#4a4a4a",
    display : "block",
    fontSize : "0.9rem"
}
var eDiv = {
    display : "inline-block",
    width : "100%",
    padding : "5px"
}
var inpute = {
    border : "none",
    outline : "none",
    border : "1px solid gainsboro",
    borderRadius : "8px",
    width : "100%",
    height : "20vh",
    padding : "5px 10px"
}
var inputc = {
    border : "none",
    outline : "none",
    border : "1px solid gainsboro",
    borderRadius : "8px",
    width : "100%",
    height : "3vh",
    width : "3vh",
    marginRight : "10px",
    transform : "translateY(4px)"
}
var blue = {
    color : "#0064b7"
}

export default DetailsForm;