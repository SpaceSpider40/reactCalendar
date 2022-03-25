import React from "react";
import Days from "./days";
import style from "../../Styles/CalendarComponentsStyle.module.css"
import Sidebar from "./sidebar"

export default class dayView extends React.Component{
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)

        this.numberOfDaysArr = props.daysArray
        this.numberOfDays=0
        for(let i = 0;i<this.numberOfDaysArr.length;i++){
            this.numberOfDays++;
        }
        this.daysArray = [];

        this.state = {sidebarStatus: "hidden", sidebarDayInfo: ""}
        
        for(let i=0;i<this.numberOfDays;i++){
            this.daysArray.push(<Days onClick={this.handleClick} dayNumber={i+1}/>)
        }

        this.month = props.month
    }

    handleClick(day, numberOfEvents){
        if(this.state.sidebarStatus!=="active"){
            this.setState({
                sidebarStatus: "active",
                sidebarDayInfo: day
            })
        }
        
        this.setState({
            sidebarDayInfo: day
        })
   
    }

    render(){
        return <div className={style.holder}><div className={style.month}>{this.daysArray.map(i=>(i))}</div><Sidebar month={this.month} day={this.state.sidebarDayInfo} active={this.state.sidebarStatus}/></div>
    }
}