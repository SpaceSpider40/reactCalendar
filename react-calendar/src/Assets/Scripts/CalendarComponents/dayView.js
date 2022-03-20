import React from "react";
import Days from "./days";
import style from "../../Styles/CalendarComponentsStyle.module.css"

export default class dayView extends React.Component{
    constructor(props) {
        super(props)

        this.numberOfDays = 31
        this.daysArray = [];
    }

    render(){
        for(let i=0;i<this.numberOfDays;i++){
            this.daysArray.push(<Days dayNumber={i+1}/>)
        }
        return <div className={style.month}>{this.daysArray.map(i=>(i))}</div>
    }
}