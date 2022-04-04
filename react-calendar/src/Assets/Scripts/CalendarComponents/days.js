import React from "react";
import style from "../../Styles/CalendarComponentsStyle.module.css"
import Event, { EventExtended } from "../CalendarComponents/daysComponents/event.js"
import { AccessDB } from 'react-indexed-db';


export default class Days extends React.Component {
  constructor(props) {
    super(props);

    this.dayNumber = props.dayNumber
    this.date = props.date
    this.eventIcon = <span className={style.eventIcon}>&#9733;</span>
    this.onClick = props.onClick
    }

  events(){
    let out = []
    let title;
    for(let i=0;i<localStorage.length;i++){
      if(localStorage.getItem(this.date)!==null){
        title=JSON.parse(localStorage.getItem(this.date))
        out.push(<Event title={title.contents.title}/>);
      }
    }
    
    return Array.from(new Set(out));
  }

  render() {
    return (
      <div className={style.day} onClick={()=>this.onClick(this.dayNumber, this.eventsNumber)}>
        <div className={style.dayLabel}><span>{this.dayNumber}</span>{this.eventIcon}</div>
        <div className={style.dayEventHolder}>
          {this.events().map(i=>(i))}
        </div>
      </div>

    )

  }
}