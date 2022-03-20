import React from "react";
import style from "../../../Styles/CalendarComponentsStyle.module.css"

export default class event extends React.Component{
    constructor(props) {
        super(props)

        this.content = props.content;
    }
    render(){
        return <div className={style.dayEvent}>{this.content}</div>
    }
}