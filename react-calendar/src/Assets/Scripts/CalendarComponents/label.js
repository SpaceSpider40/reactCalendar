import React from "react";
import style from "../../Styles/CalendarComponentsStyle.module.css"

export default class Label extends React.Component{
    constructor(props) {
        super(props)

        this.handleChange = props.handleChange
    }

    render(){
        return (<div className={style.label}>
                    <button className={style.yearLabel} onClick={()=>this.handleChange("y")}>2022</button>
                    <button className={style.monthLabel} onClick={()=>this.handleChange("m")}>January</button>
                    <div className={style.buttonHolder}>
                        <button onClick={()=>this.handleChange("add")}>&#5169;</button>
                        <button onClick={()=>this.handleChange("sub")}>&#5167;</button>
                    </div>
                </div>)
    }
}