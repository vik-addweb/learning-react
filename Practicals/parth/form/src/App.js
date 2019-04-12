import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Inputs from './components/Inputs';
import NativeSelects from './components/NativeSelects';
import RadioButtons from './components/RadioButtons';
import pwd from './components/image/pwd.png';
import Form from './components/Form';

const emailRegex = RegExp( /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

class App extends Component {
  state={
    name:'',
    email:'',
    password:'',
    gender:"male",
    select:'',
    nameError:'',
    emailError:'',
    passwordError:'',
    selectError:'',
    submitError:'',
    hidden:true,
}

  changepwd=()=>{
  	this.setState({hidden: !this.state.hidden})
  }

  changeHandle=(e,type)=>{
    this.setState({[e.target.name]:e.target.value},(e)=>{this.validate(e,type)})
  }

  validate=(e,type)=>{
    const  {name,password} = this.state;
    if(type==="name"){
        this.setState({
            nameError:
            name.length > 3 ? null : 'Name must be longer than 3 characters'
        })
    }
    if(type==="password"){
  	 this.setState({
      passwordError:
      password.length > 5 ? null : 'Password must be longer than 5 characters'
    });}
    if(type==="email"){
        this.setState({
            emailError:
            (emailRegex.test(this.state.email)) ? null : 'Invalid Email'
          });
    }
    
  }

  handleSubmit = (e) =>{ 
   	
  		if(this.state.nameError===null && this.state.emailError===null&& this.state.select!=="" && this.state.passwordError===null){
  		        alert('Name:' +this.state.name  + "\n" +'Email:' +this.state.email+ "\n" +'password:' +this.state.password+"\n" + 'course:'+this.state.select+"\n" + 'Gender:'+this.state.gender);
            this.clearForm(); 
            }
  		 else{
  		 		alert('Fill fields!!!');
  		 }
     
    }
    clearForm=()=>{
      this.setState({
        name:'',
        email:'',
        password:'',
        gender:"male",
        select:'',
        nameError:'',
        emailError:'',
        passwordError:'',
        selectError:'',
        submitError:'',
        hidden:true,
      })
    }

  render() {
    return (
      <div className="App">
      {/* <Form /> */}
      <NavBar />
       <label>Name:</label> &nbsp;
       <Inputs name="name" type="text" value={this.state.name} handlechange={(e)=>this.changeHandle(e,"name")}   />
       {this.state.nameError ? (<div style={{color:"red"}}> {this.state.nameError} </div>) : null }
        <br/>       


       <label>Email:</label> &nbsp;
       <Inputs name="email" type="email" value={this.state.email} handlechange={(e)=>this.changeHandle(e,"email")} />
        
       {this.state.emailError ? (<div style={{color:"red"}}> {this.state.emailError} </div>) : null }
       <br/>

       <label>Password:</label> &nbsp;
       <Inputs name="password" type={this.state.hidden ? "password" : "text"}  handlechange={(e)=>this.changeHandle(e,"password")}/>
       <img width={25} height={25} src={pwd} alt="image" onClick={this.changepwd} />
       {this.state.passwordError ? (<div style={{color:"red"}}> {this.state.passwordError} </div>) : null }
       <br/>

       <label>Gender:</label> &nbsp;
       
       <RadioButtons name="gender" value="male" checked={this.state.gender === "male" ? true : false} handlechange={(e)=>this.changeHandle(e)} />
       
       <RadioButtons name="gender" value="female" checked={this.state.gender ==="female"  ? true : false} handlechange={(e)=>this.changeHandle(e)} />
       <br/>
       
       <NativeSelects name="select" handlechange={(e)=>this.changeHandle(e)} value={this.state.select}/>
      {this.state.selectError ? (<div style={{color:"red"}}> {this.state.selectError} </div>) : null }
       <br/>
       
       
       <button onClick={this.handleSubmit} >submit</button>
       

      </div>
    );
  }
}

export default App;