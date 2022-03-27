import React from "react"
import style from "../../../Styles/CalendarComponentsStyle.module.css"
import Dexie from 'dexie'

export default class AddEvent extends React.Component{
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)

        this.day = props.day
        this.month = props.month
        this.year = props.year

        this.events = [{name:"XD",description:"DX"},{name:"XD",description:"DX"}]
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submit(){   
        const initDb = indexedDB.open('Events', 1)

        initDb.onsuccess = event => {
            let db = event.target.initDb
            let objStore = db.createObjectStore("events", { autoIncrement : true })
            objStore.createIndex("date", "date", {unique: false})

            objStore.transaction.oncomplete = event => {
                let eventObjectStore = db.transaction("events", "readwrite").objectStore("events")
            }
       }
    }
    render() {
        return (
            <div>
                <div className={style.groupInputs}>
                    <label>Title:</label>
                    <input onChange={this.handleChange} type="text" name="titleInput"/>
                </div>
                <div className={style.groupInputs}>
                    <label>Description:</label><br/>
                    <textarea onChange={this.handleChange} name="descriptionInput"></textarea>
                </div>
                <button onClick={this.submit}>ADD</button>
            </div>
        );
    }
}