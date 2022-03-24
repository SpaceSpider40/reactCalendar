import React from "react";
import MonthsView from "./CalendarComponents/monthsView";
import YearsView from "./CalendarComponents/yearsView"
import Label from "./CalendarComponents/label";
import DayView from "./CalendarComponents/dayView"
class calendar extends React.Component{
    constructor(props) {
        super(props)

        this.transitionYears = this.transitionYears.bind(this)
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
                    view: <MonthsView/>,
                    labelControls: "yb"
                })
                break
            case "d":
                this.setState({
                    view: <DayView/>,
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
            view: <MonthsView/>,
            labelControls: "yb"
        })
        console.log(this.state.labelControls)
        console.log(data)
    }

    render(){
        console.log(this.state.labelControls)
        console.log(this.state.view)
        return <div><Label labelControls={this.state.labelControls} handleChange={this.handleChange}/>{this.state.view}</div>;
    }
}

export default calendar;