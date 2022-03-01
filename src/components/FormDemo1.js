import React, {Component} from 'react';

class FormDemo1 extends Component {
    state={UserName:" ",Surname:" "}
    onChangeHandler = (event)=>{
        // this.setState({UserName:event.target.value})
        let name = event.target.name;
        let value = event.target.value;

        this.setState({[name]:value})
   }

   onSubmitHandler = (event) =>{
        event.preventDefault();
        alert( this.state.UserName);
   }
    render() {
        return (
            <div>
                <form  onSubmit={this.onSubmitHandler}>
                    <h5>UserName</h5>
                    <input name="UserName" onChange={this.onChangeHandler} type="text"/>
                    <h5>UserName is :  {this.state.UserName}</h5>

                    <h5>Surname</h5>
                    <input name="Surname" onChange={this.onChangeHandler} type="text"/>
                    <h5>Surname is :  {this.state.Surname}</h5>
                    <input type="submit" value="Save"/>
                </form>
               
            </div>
        );
    }
}

export default FormDemo1;