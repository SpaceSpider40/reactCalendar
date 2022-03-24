import React from "react";
import style from "../../Styles/CalendarComponentsStyle.module.css"

export default class Label extends React.Component{
    constructor(props) {
        super(props)

        this.handleChange = props.handleChange
        this.labelControls = props.labelControls
    }

    componentWillReceiveProps(props){
        this.labelControls = props.labelControls
    }

    render(){
        console.log(this.labelControls)
        let yearVis = style.yearLabelHidden, monthVis = style.monthLabelHidden, buttonVis = style.buttonHolderHidden;

        switch(this.labelControls){
            case "yb":
                yearVis = style.yearLabel
                buttonVis = style.buttonHolder
                break;
            case "ymb":
                yearVis = style.yearLabel
                monthVis = style.monthLabel
                buttonVis = style.buttonHolder
                break;
        }

        return (<div className={style.label}>
                    <button className={yearVis} onClick={()=>this.handleChange("y")}>2022</button>
                    <button className={monthVis} onClick={()=>this.handleChange("m")}>January</button>
                    <div className={buttonVis}>
                        <button onClick={()=>this.handleChange("add")}>&#5169;</button>
                        <button onClick={()=>this.handleChange("sub")}>&#5167;</button>
                    </div>
                </div>)
    }
}