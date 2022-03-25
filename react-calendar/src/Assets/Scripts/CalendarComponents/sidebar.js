import React from "react";
import {label, content} from "./sideBarComponents/sideBarComponents"
import style from "../../Styles/CalendarComponentsStyle.module.css"
import { EventExtended } from "./daysComponents/event";

export default class Sidebar extends React.Component{
    constructor(props) {
        super(props)
        this.day = props.day
        this.month = props.month
        this.active = props.active
    }

    componentWillReceiveProps(props){
        this.active = props.active
        this.day = props.day
    }

    render() {
        let out = [<EventExtended title="event1" content="placeholder for event1 contnets"/>,<EventExtended title="event2" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac lacus eu neque eleifend semper vitae vel felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque ac elit a urna placerat lobortis sit amet at massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis purus elit, rutrum vel dui hendrerit, ultrices ultricies libero. Nullam molestie eleifend orci, a scelerisque erat lacinia ut. Phasellus ac lectus pretium, ultricies felis sed, imperdiet ante. Fusce vel enim feugiat, mattis dolor a, faucibus justo. Sed maximus libero est, non vestibulum urna dapibus sit amet. Curabitur feugiat turpis hendrerit luctus pulvinar. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec justo eros, varius a risus nec, mollis luctus nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut ac mauris sit amet metus feugiat hendrerit ac et diam. Sed nec felis vel magna rhoncus tincidunt."/>]
        let show
        if(this.active==="active"){
            show = style.sideBar
        }else{
            show = style.sideBarHidden
        }

        return (
             <div className={show}>
                <div className={style.labelholder}>{label(this.month + " " + this.day)}<button>+</button></div>{content(out)}
             </div>
        );
    }
}