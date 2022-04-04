import React from "react";
import MonthsView from "./CalendarComponents/monthsView";
import YearsView from "./CalendarComponents/yearsView"
import Label from "./CalendarComponents/label";
import DayView from "./CalendarComponents/dayView";
import { IndexedDB } from 'react-indexed-db';

class calendar extends React.Component{
    constructor(props) {
        super(props)

        this.transitionYears = this.transitionYears.bind(this)
        this.transitionMonths = this.transitionMonths.bind(this)
        this.handleChange = this.handleChange.bind(this)


        this.state = {
            view: <YearsView transitionYears={this.transitionYears}/>,
            labelControls: ""
        }
        
    }

    handleChange(type){
        switch(type){
            case "y":
                this.setState({
                    view: <YearsView transitionYears={this.transitionYears}/>,
                    labelControls: ""
                })
                break
            case "m":
                this.setState({
                    view: <MonthsView transitionMonths={this.transitionMonths} year={this.pickedYear}/>,
                    labelControls: "yb"
                })
                break
            case "d":
                this.setState({
                    view: <DayView />,
                    labelControls: "ymb"
                })
                break
            default:
                console.log("err");
                break
        }
    }

    transitionYears(data){
        this.setState({
            view: <MonthsView transitionMonths={this.transitionMonths} year={data}/>,
            labelControls: "yb"
        })
        this.pickedYear = data
    }

    transitionMonths(month, numberOfDays){
        this.setState({
            view: <DayView year={this.pickedYear} month={month} daysArray={numberOfDays}/>,
            labelControls: "ymb"
        })
        this.pickedMonth = month
    }

    render(){

        console.log(this.pickedYear);
        return (
            <div><Label pickedMonth={this.pickedMonth} pickedYear={this.pickedYear} labelControls={this.state.labelControls} handleChange={this.handleChange}/>{this.state.view}</div>
        
        )
    }
}

export default calendar;