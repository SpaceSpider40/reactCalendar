import React from "react";
import style from "../../../Styles/CalendarComponentsStyle.module.css"

export default class event extends React.Component{
    constructor(props) {
        super(props)

        this.title = props.title;
    }
    render(){
        return <div className={style.dayEvent}>{this.title}</div>
    }
}

export class EventExtended extends React.Component{
    constructor(props) {
        super(props)

        this.title = props.title
        this.content = props.content
    }

    render(){
        return <div className={style.extendedEvent}>
            <div className={style.extendedEventTitle}>{this.title}</div>
            <div className={style.extendedEventContent}>{this.content}</div>
        </div>
    }
}