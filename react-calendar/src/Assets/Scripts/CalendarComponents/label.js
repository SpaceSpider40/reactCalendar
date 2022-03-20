import React from "react";
import style from "../../Styles/CalendarComponentsStyle.module.css"

export default class Label extends React.Component{
    render(){
        return (<div className={style.label}>
                    <div className={style.yearLabel}>2022</div>
                    <div className={style.monthLabel}>January</div>
                    <div className={style.buttonHolder}>
                        <button>&#5169;</button>
                        <button>&#5167;</button>
                    </div>
                </div>)
    }
}