import React from "react";
import {label, content} from "./sideBarComponents/sideBarComponents"
import style from "../../Styles/CalendarComponentsStyle.module.css"
import { EventExtended } from "./daysComponents/event";
import AddEvent from "./sideBarComponents/addEvent";

export default class Sidebar extends React.Component{
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)

        this.day = props.day
        this.month = props.month
        this.year = props.year
        this.active = props.active

        this.state = {view: [<EventExtended title="event1" content="placeholder for event1 contnets"/>]}
    }

    componentWillReceiveProps(props){
        this.active = props.active
        this.day = props.day

        this.setState({view: [<EventExtended title="event1" content="placeholder for event1 contnets"/>]})
    }

    handleClick(){
        this.setState({view: [<AddEvent day={this.day} month={this.month} year={this.year}/>]})
    }

    render() {
        let show
        if(this.active==="active"){
            show = style.sideBar
        }else{
            show = style.sideBarHidden
        }

        return (
             <div className={show}>
                <div className={style.labelholder}>{label(this.month + " " + this.day)}<button onClick={()=>this.handleClick()}>+</button></div>{content(this.state.view)}
             </div>
        );
    }
}