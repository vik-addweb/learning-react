import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Inputs from './components/Inputs';
import NativeSelects from './components/NativeSelects';
import RadioButtons from './components/RadioButtons';
import pwd from './components/image/pwd.png';

const emailRegex = RegExp( /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

class App extends Component {
  state={
    name:'',
    email:'',
    password:'',
    gender:'gender',
    select:'',
    nameError:'',
    emailError:'',
    passwordError:'',
    selectError:'',
    submitError:'',
    hidden:true,
    selectedValue: "",

  }

  validateName = () => {
  	const  {name} = this.state;
  	 this.setState({
      nameError:
      name.length > 3 ? null : 'Name must be longer than 3 characters'
    });
  }

  validateEmail = () => {
  	 this.setState({
      emailError:
      (emailRegex.test(this.state.email)) ? null : 'Invalid Email'
    });
  }


  validatePassword = () => {
  	const  {password} = this.state;
  	 this.setState({
      passwordError:
      password.length > 5 ? null : 'Password must be longer than 5 characters'
    });
  }

  validateSelect = () => {
  	const  {select} = this.state;
  	 this.setState({
      selectError:
      select.length !==""  ? null : 'Must select one'
    });
  }


  handlechangeName = (e) => {
   
        this.setState({name:e.target.value},() =>{this.validateName();
        });

  }

  handlechangeEmail = (e) => {
    this.setState({email:e.target.value},()=>{this.validateEmail();
    });
  }


  handlechangepassword = (e) => {
    this.setState({password:e.target.value},()=>{this.validatePassword();
    });
  }

  handlechangeNative = (e) => {
    this.setState({select:e.target.value},()=>{this.validateSelect();
    });

  }

  changepwd=()=>{
  	this.setState({hidden: !this.state.hidden})
  }

  handlechangeGender = (e) => {
    this.setState({selectedValue:e.target.value})

  }


  handleSubmit = (e) =>{ 
   	
  		if(this.state.nameError===null && this.state.emailError===null && this.state.selectError===null && this.state.passwordError===null){
  		        alert('Name:' +this.state.name  + "\n" +'Email:' +this.state.email+ "\n" +'password:' +this.state.password+"\n" + 'course:'+this.state.select+"\n" + 'Gender:'+this.state.selectedValue);
  		       }
  		 else{
  		 		alert('Fill fields!!!');
  		 }
     
    }

  render() {
    return (
      <div className="App">
      <NavBar />
       <label>Name:</label> &nbsp;
       <Inputs name="name" type="text" value={this.state.name} handlechange={(e)=>this.handlechangeName(e)}   />
       {this.state.nameError ? (<div style={{color:"red"}}> {this.state.nameError} </div>) : null }
        <br/>       


       <label>Email:</label> &nbsp;
       <Inputs name="email" type="email" value={this.state.email} handlechange={(e)=>this.handlechangeEmail(e)} />
        
       {this.state.emailError ? (<div style={{color:"red"}}> {this.state.emailError} </div>) : null }
       <br/>

       <label>Password:</label> &nbsp;
       <Inputs name="password" type={this.state.hidden ? "password" : "text"}  handlechange={(e)=>this.handlechangepassword(e)}/>
       <img width={25} height={25} src={pwd} alt="image" onClick={this.changepwd} />
       {this.state.passwordError ? (<div style={{color:"red"}}> {this.state.passwordError} </div>) : null }
       <br/>

       <label>Gender:</label> &nbsp;
       
       <RadioButtons value="male" checked={this.state.selectedValue === "male" ? true : false} name="gender" handlechange={(e)=>this.handlechangeGender(e)} />
       
       <RadioButtons value="female" checked={this.state.selectedValue ==="female"  ? true : false} name="gender" handlechange={(e)=>this.handlechangeGender(e)} />
       <br/>
       
       <NativeSelects name="course" handlechange={(e)=>this.handlechangeNative(e)} value={this.state.select} onBlur={this.validateSelect} />
      {this.state.selectError ? (<div style={{color:"red"}}> {this.state.selectError} </div>) : null }
       <br/>
       
       
       <button onClick={this.handleSubmit.bind(this)} >submit</button>
       

      </div>
    );
  }
}

export default App;