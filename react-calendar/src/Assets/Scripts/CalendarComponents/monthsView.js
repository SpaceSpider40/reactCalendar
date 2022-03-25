import React from "react";
import style from "../../Styles/CalendarComponentsStyle.module.css"
import {label, content} from "./monthsViewComponents/monthsViewComponents.js"

export default class monthsView extends React.Component{
    constructor(props) {
        super(props)

        this.year = props.year

        if(this.year%4===0){
            this.monthsList = [
            {numberOfDays:31, month:"January"},
            {numberOfDays:29, month:"February"},
            {numberOfDays:31, month:"March"},
            {numberOfDays:30, month:"April"},
            {numberOfDays:31, month:"May"},
            {numberOfDays:30, month:"June"},
            {numberOfDays:31, month:"July"},
            {numberOfDays:31, month:"August"},
            {numberOfDays:30, month:"September"},
            {numberOfDays:31, month:"October"},
            {numberOfDays:30, month:"November"},
            {numberOfDays:31, month:"December"}
            ]
        }else{
            this.monthsList = [
                {numberOfDays:31, month:"January"},
                {numberOfDays:28, month:"February"},
                {numberOfDays:31, month:"March"},
                {numberOfDays:30, month:"April"},
                {numberOfDays:31, month:"May"},
                {numberOfDays:30, month:"June"},
                {numberOfDays:31, month:"July"},
                {numberOfDays:31, month:"August"},
                {numberOfDays:30, month:"September"},
                {numberOfDays:31, month:"October"},
                {numberOfDays:30, month:"November"},
                {numberOfDays:31, month:"December"}
                ]
        }

        this.transitionMonths = props.transitionMonths
    }

    render(){
        
        let out = [];
        for(let i=0;i<this.monthsList.length;i++){
            let days = []
            for(let j=0;j<this.monthsList[i].numberOfDays;j++){
                days.push(j+1)
            }
            out.push(<div onClick={()=>this.transitionMonths(this.monthsList[i].month, days)} className={style.monthsViewItem}>{label(this.monthsList[i].month)}{content(days)}</div>);
        }

        return(<div className={style.monthsView}>{out.map(i=>(i))}</div>)
    }
}