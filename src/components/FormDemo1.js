import React, {Component} from 'react';

class FormDemo1 extends Component {
    state={UserName:" "}
    onChangeHandler = (event)=>{
        this.setState({UserName:event.target.value})
   }
    render() {
        return (
            <div>
                <form>
                    <h5>UserName</h5>
                    <input onChange={this.onChangeHandler} type="text"/>
                   <h5>UserName is {this.state.UserName}</h5>
                </form>
               
            </div>
        );
    }
}

export default FormDemo1;