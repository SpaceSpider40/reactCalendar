import React from "react";
import MonthsView from "./CalendarComponents/monthsView";
import YearsView from "./CalendarComponents/yearsView"
import Label from "./CalendarComponents/label";
import DayView from "./CalendarComponents/dayView"
class calendar extends React.Component{
    constructor(props) {
        super(props)

        this.View = <YearsView/>
    }

    handleChange(type){
        console.log(type)
        switch(type){
            case "y":
                this.View = <YearsView/>
                break;
            case "m":
                this.View = <MonthsView/>
                break
            case "d":
                this.View = <DayView/>
                break
        }
    }

    render(){
        console.log(this.View)
        return <div><Label handleChange={this.handleChange}/>{this.View}</div>;
    }
}

export default calendar;