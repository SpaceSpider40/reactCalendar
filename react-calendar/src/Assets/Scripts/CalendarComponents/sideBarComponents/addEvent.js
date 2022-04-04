import React from "react"
import style from "../../../Styles/CalendarComponentsStyle.module.css"
import { AccessDB } from 'react-indexed-db';

export default class AddEvent extends React.Component{
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)

        this.day = props.day
        this.month = props.month
        this.year = props.year

        
    }

    componentWillReceiveProps(props){
      this.day = props.day
        this.month = props.month
        this.year = props.year
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleClick(){
      localStorage.setItem(this.day+"-"+this.month+"-"+this.year, JSON.stringify({contents:{title:this.state.titleInput,descripton:this.state.descriptionInput}}));
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
                <button onClick={()=>this.handleClick()}>ADD</button>
            </div>
        );
    
    
        
    
    }
}
 
/*<AccessDB objectStore="people">
  {({ add }) => {
    const handleClick = () => {
      add({ name: 'name', event: 'event' }).then(
        event => {
          console.log('ID Generated: ', event.target.result);
        },
        error => {
          console.log(error);
        }
      );
    };
 
    
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
                <button onClick={()=>handleClick()}>ADD</button>
            </div>
        );
    
  }}
</AccessDB>;
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
                <button onClick={()=>this.submit()}>ADD</button>
            </div>
        );*/