import React from "react";
import style from "../../Styles/CalendarComponentsStyle.module.css"
import Event from "../CalendarComponents/daysComponents/event.js"

export default class Days extends React.Component{
    constructor(props) {
        super(props);

        this.dayNumber = props.dayNumber
        this.eventIcon = <span className={style.eventIcon}>&#9733;</span>
        this.onClick = props.onClick
    }


    render(){
        return <div className={style.day} onClick={()=>this.onClick(this.dayNumber, 2)}>
            <div className={style.dayLabel}><span>{this.dayNumber}</span>{this.eventIcon}</div>
            <div className={style.dayEventHolder}>
                <Event title={"Placehoder"}/>
                <Event title={"Placehoder"}/>
                <Event title={"Placehoder"}/>
                <Event title={"Placehoder"}/>
                <Event title={"Placehoder"}/>
                <Event title={"..."}/>
            </div>
            </div>
    }
}