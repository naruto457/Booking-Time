import React from "react"
var data = require("../data.json");
var EventInfo = (props) =>{
    return (
        <div style={container}>
            <h3 style={tagline}>{data[0].tagLine}</h3>
            <div style={location}><i style={icon} class="fas fa-map-marker-alt fa-sm"></i>{data[0].location}</div>
            <p style={hashtags}>{data[0].hashTags}</p>
        </div>
    );
} 

var container = {
    width : "100%"
}
var tagline = {
    display : "inline-block",
    marginTop : "1vh",
    marginBottom : "2vh",
    fontWeight : "normal",
    paddingBottom : "2vh",
    borderBottom : "1px solid grey"
}
// var line = {
//     borderBottom : "1px solid grey",
//     height : "1px",
//     width : "35%",
//     margin : "2vh 0"
// }
var location = {
    marginBottom : "3vh",
}
var icon = {
    marginRight : "8px",
    transform : "translateY(-1px)"
}
var hashtags = {
    marginBottom : "4vh"
}

export default EventInfo;