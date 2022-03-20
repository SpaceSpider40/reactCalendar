import React from "react";
import style from "../../Styles/CalendarComponentsStyle.module.css"
import Event from "../CalendarComponents/daysComponents/event.js"

export default class Days extends React.Component{
    constructor(props) {
        super(props);

        this.dayNumber = props.dayNumber
        this.eventIcon = <span className={style.eventIcon}>&#9733;</span>
    }


    render(){
        return <div className={style.day}>
            <div className={style.dayLabel}><span>{this.dayNumber}</span>{this.eventIcon}</div>
            <div className={style.dayEventHolder}>
                <Event content={"Placehoder"}/>
                <Event content={"Placehoder"}/>
                <Event content={"Placehoder"}/>
                <Event content={"Placehoder"}/>
                <Event content={"Placehoder"}/>
                <Event content={"..."}/>
            </div>
            </div>
    }
}