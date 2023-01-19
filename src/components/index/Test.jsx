import React, { Component } from 'react';
export default class Top extends Component
{
    background =
    {
        backgroundColor: "dodgerBlue",
        margin: "-8px",
        padding: "10px"
    }
    listElementStyle =
        {
            display: "inline",
            fontSize: "25px",
            padding: "10%"
        }
    hrefStyle =
        {
            color: "white",
            textDecoration: "none"
        }
    render() {
        return (
            <div style={this.background} align="center">
                <ul>
                    <li style={this.listElementStyle}>
                        <a href="/getTicket" style={this.hrefStyle}>Заказать билет</a>
                    </li>
                    <li style={this.listElementStyle}>
                        <a href="/about" style={this.hrefStyle}>О нас</a>
                    </li>
                    <li style={this.listElementStyle}>
                        <a href="/contacts" style={this.hrefStyle}>Контакты</a>
                    </li>
                </ul>
            </div>
        );
    }
}