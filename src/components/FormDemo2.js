import React, {Component} from 'react';
import {Button,FormGroup,Form,Label,Input} from 'reactstrap';
import alertify from "alertifyjs";
class FormDemo2 extends Component {
    state = {email:"",password:"",city:"",description:""}
    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({[name]:value})
    }

    onSubmit = (event) => {
        event.preventDefault();
        alertify.success(this.state.email + "added to database")
        alertify.success(this.state.password + "added to database")
        alertify.success(this.state.city + "added to database")
        alertify.success(this.state.description + "added to database")
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input placeholder="Enter your email address" name="email" id="email" onChange={this.handleChange} type="text"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input placeholder="Enter your password" name="password" id="password" onChange={this.handleChange} type="password"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input name="city" id="city" onChange={this.handleChange} type="select">
                        <option>Baku</option>
                        <option>Ganja</option>
                        <option>Venesiya</option>
                        <option>Istanbul</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input  placeholder="Enter your Description" name="description" id="description" onChange={this.handleChange} type="textarea"/>
                    </FormGroup>
                    <Button type="submit" color="outline-success" >Save</Button>
                </Form>
            </div>
        );
    }
}

export default FormDemo2;