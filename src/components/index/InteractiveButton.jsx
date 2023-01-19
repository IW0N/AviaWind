import React, { Component } from 'react';

export default class InteractiveButton extends Component
{
    //properties: imageSrc,maxSize,minSize,width
    animationFps = 240;
    delay = 1000 / this.animationFps;//1000 is milliseconds count in second
    mouseInButton = false;
    animationId = NaN;
    isMaxStop(width, targetSize) {
        return width >= targetSize;
    }
    isMinStop(width, targetSize) {
        return width <= targetSize;
    }
    scaleButton(scalingButton, toMax)
    {
        if (this.animationId != NaN)
            clearInterval(this.animationId);
        const targetSize = toMax ? this.props.maxSize : this.props.minSize;
        const isStop = toMax ? this.isMaxStop : this.isMinStop;
        let deltaSize = targetSize - scalingButton.width;
        let deltaSizePerFrame = deltaSize * this.delay / 1000*this.props.speed;
        let width = scalingButton.width;
        
        this.animationId = setInterval(
            function ()
            {
                if (isStop(width, targetSize))
                {
                    scalingButton.width = targetSize;
                    clearInterval(this.animationId);
                }
                else {
                    width += deltaSizePerFrame;
                    scalingButton.width = width;
                }
            },
            this.delay)
    }
    static scaleToMax(component,event)
    {
        component.scaleButton(event.currentTarget, true);
    }
    static scaleToMin(component, event) {
        component.scaleButton(event.currentTarget, false);
    }
    render()
    {
        let defaultWidth = this.props.width == undefined ? this.props.minSize : this.props.width;
        const positionStyle = {
            position: "absolute",
            top: this.props.y,
            left: this.props.x
        };
        let customStyle = this.props.style;
        customStyle = customStyle == undefined ? {} : customStyle;
        const style = Object.assign(customStyle, positionStyle);
        return (
            <input type="image"
                src={this.props.imageSrc} width={defaultWidth}
                onMouseEnter={(event) => InteractiveButton.scaleToMax(this, event)}
                onMouseLeave={(event) => InteractiveButton.scaleToMin(this, event)}
                style={style}
            />
        )
       
    }
   
}