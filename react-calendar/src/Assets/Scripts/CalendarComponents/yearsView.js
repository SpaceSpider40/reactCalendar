import React from "react"
import style from "../../Styles/CalendarComponentsStyle.module.css"
import {label, content} from "./yearViewComponents/yearViewComponents.js"

export default class yearView extends React.Component{
    constructor(props) {
        super(props)

        this.transitionYears = props.transitionYears
    }

    render() {
        let yearsList = [];

        let monthsList = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ]

        for(let i=0;i<50;i++){
            yearsList.push(<div onClick={()=>this.transitionYears(2032-i)} className={style.yearViewItem}>{label(2032-i)}{content(monthsList)}</div>);
        }

        return (
            <div className={style.yearView}>{yearsList.map(i=>(i))}</div>
        );
    }
}