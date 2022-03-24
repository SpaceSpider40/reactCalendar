import React from "react";
import Days from "./days";
import style from "../../Styles/CalendarComponentsStyle.module.css"
import Sidebar from "./sidebar"

export default class dayView extends React.Component{
    constructor(props) {
        super(props)

        this.numberOfDays = 31
        this.daysArray = [];
        this.sidebarActive = true;
    }

    handleClick(){
        this.sidebarActive = false
    }

    render(){
        for(let i=0;i<this.numberOfDays;i++){
            this.daysArray.push(<Days onClick={()=>this.handleClick()} dayNumber={i+1}/>)
        }
        return <div className={style.holder}><div className={style.month}>{this.daysArray.map(i=>(i))}</div><Sidebar active={this.sidebarActive}/></div>
    }
}