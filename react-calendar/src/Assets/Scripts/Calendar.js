import React from "react";
import MonthsView from "./CalendarComponents/monthsView";
import YearsView from "./CalendarComponents/yearsView"
import Label from "./CalendarComponents/label";
import DayView from "./CalendarComponents/dayView"
class calendar extends React.Component{

    render(){
        return <div><Label/><DayView/></div>;
    }
}

export default calendar;