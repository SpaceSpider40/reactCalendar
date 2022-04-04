import React from "react";
import {label, content} from "./sideBarComponents/sideBarComponents"
import style from "../../Styles/CalendarComponentsStyle.module.css"
import { EventExtended } from "./daysComponents/event";
import AddEvent from "./sideBarComponents/addEvent";
import { AccessDB } from 'react-indexed-db';

export default class Sidebar extends React.Component{
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)

        this.day = props.day
        this.month = props.month
        this.year = props.year
        this.active = props.active

        this.state = {view:[]}
    }

    componentWillReceiveProps(props){
        this.active = props.active
        this.day = props.day
        this.month = props.month
        this.year = props.year

        this.addingActive = 0;

        this.date = this.day + "-" + this.month + "-" + this.year
this.forceUpdate()
    }

    handleClick(){
        this.addingActive = 1
        
    }

    events(){
        let out = []
        let title;
        for(let i=0;i<localStorage.length;i++){
          console.log(this.date);
          if(localStorage.getItem(this.date)!==null){
            title=JSON.parse(localStorage.getItem(this.date))
            out.push(<EventExtended title={title.contents.title} content={title.contents.descripton}/>);
          }
          
          console.log(out);
        }
        
        return out
      }

    render() {
        
        let show
        if(this.active==="active"){
            show = style.sideBar
        }else{
            show = style.sideBarHidden
        }
        console.log(this.addingActive);
       

        return (
            
        <div className={show}>
            <div className={style.labelholder}>{label(this.month + " " + this.day)}<button onClick={()=>this.handleClick()}>+</button></div>
            {this.events().map(i=>(i))}
        </div>
        );
    }
}