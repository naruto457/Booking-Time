import React from 'react';
import img from "../imgs/dp.jpeg";
var data = require("../data.json");
var SpeakerDetails  = (props) => {
    var disp = props.disp;
    var sdisp = props.sdisp;
    return(
        <div style={container}>
            <div style={{
                    width : "13vh",
                    height : "13vh",
                    borderRadius : "50%",
                    border : "none",
                    padding : "4px",
                    display : disp,
                    boxShadow: "0px 0px 11px 0px rgba(0, 0, 0, 0.2)"
            }}>
                <img src={img} style={image}/>
            </div>
            <div style={titleDiv}>
                <h1 style={title}>
                    {data[0].speakerName}
                </h1>
                <button style = {{
                    padding : "8px 12px",
                    borderRadius : "8px",
                    backgroundColor : "#0064b7",
                    color : "white",
                    border : "none",
                    marginLeft : "20px",
                    transform : "translateY(-8px)",
                    outline : 'none',
                    cursor : "pointer",
                    display : sdisp
                }}>
                    Subscribe
                </button>
            </div>
        </div>
    );
}

var container = {
    width : "100%"
}
var image = {
    width : "100%",
    height : "100%",
    borderRadius : "50%",
    objectFit : "cover"
}
var titleDiv = {
    width : "100%"
}
var title = {
    display : "inline-block",
    marginTop : "10px",
    fontWeight : "bold",
    color : "#3e3e3e"
}

export default SpeakerDetails;