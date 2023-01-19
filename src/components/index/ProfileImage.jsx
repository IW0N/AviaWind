import React, { Component } from 'react'
export default class ProfileImage extends Component
{
    buttonStyle =
    {
        backgroundColor: "transparent",
        borderColor: "transparent",
        position: "absolute",
        top: "10px"
        
    }
    render()
    {
        const propSrc = this.props.src;
        const src = propSrc == undefined ? "images/default.jpg" : propSrc;
        return (
            <button style={this.buttonStyle}>
                <img src={src} width="50px" style={{ borderRadius:"15px" }} />
            </button>
        )
    }
}