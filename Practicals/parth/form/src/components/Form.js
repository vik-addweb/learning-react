import React, { Component } from 'react'
import Navbar from './NavBar';
import {Input,FormGroup,Label,Button } from 'reactstrap';

const emailRegex = RegExp( /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            email:'',
            password:'',
            gender:'male',
            select:'',
            errusername:'',
            erremail:'',
            errpassword:'',
            errgender:'',
            errselect:''
        }
    }

    handlechange=(e,type)=>{    
        this.setState({[e.target.name]:e.target.value},(e)=>{this.validate(e,type)})
    }

    validate=(e,type)=>{
    const  {username,password} = this.state;
    if(type=="username"){
        this.setState({
            errusername:
            username.length > 3 ? null : 'Name must be longer than 3 characters'
        })
    }
    if(type=="password"){
  	 this.setState({
      errpassword:
      password.length > 5 ? null : 'Password must be longer than 5 characters'
    });}
    if(type=="email"){
        this.setState({
            erremail:
            (emailRegex.test(this.state.email)) ? null : 'Invalid Email'
          });
    }
    
    }
    
    submit=()=>{
      if(this.state.errusername===null && this.state.erremail===null&& this.state.select!=="" && this.state.errpassword===null){
        alert('Name:' +this.state.name  + "\n" +'Email:' +this.state.email+ "\n" +'password:' +this.state.password+"\n" + 'course:'+this.state.select+"\n" + 'Gender:'+this.state.gender);
        this.clearForm();
      }
 else{
     alert('Fill fields!!!');
 }
      
    }
  clearForm=()=>{
    this.setState({
      username:'',
      email:'',
      password:'',
      gender:'male',
      select:'',
      errusername:'',
      erremail:'',
      errpassword:'',
      errgender:'',
      errselect:''
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="col-sm-6" style={{margin:'0 auto',display:'table'}}>
        <FormGroup style={{marginTop:10}} >
		  <Input type="text" name="username" placeholder="Username" value={this.state.username} onChange={e=>this.handlechange(e,"username")}
			/>{this.state.errusername===""?"": (<div style={{color:"red"}}> {this.state.errusername} </div>)}
        </FormGroup>
        <FormGroup >
		  <Input type="email" name="email" placeholder="Email" value={this.state.email} onChange={e=>this.handlechange(e,"email")}
			/>{this.state.erremail===""?"": (<div style={{color:"red"}}> {this.state.erremail} </div>)}
        </FormGroup>
        <FormGroup >
		  <Input type="password" name="password" placeholder="Password" value={this.state.password} onChange={e=>this.handlechange(e,"password")}
			/>{this.state.errpassword===""?"": (<div style={{color:"red"}}> {this.state.errpassword} </div>)}
        </FormGroup>
        <FormGroup check>
            <Label check>Gender:
              <Input type="radio" name="gender" value="male" checked={this.state.gender=="male"?true:false} onChange={e=>this.handlechange(e,"gender")} />{' '}
                Male
                <Input type="radio" name="gender" value="female" checked={this.state.gender=="female"?true:false}  onChange={e=>this.handlechange(e,"gender")} />{' '}
                Female
            </Label>
          </FormGroup>
          <FormGroup>
          <Label >Select Course:</Label>
          <Input type="select" name="select" onChange={e=>this.handlechange(e)} value={this.state.select}>
            <option value="" disabled>Select Course</option>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            
          </Input>
        </FormGroup>
     
        <Button color="success" onClick={this.submit}>submit</Button>
     
      <br />
      </div>
      </div>
    )
  }
}
