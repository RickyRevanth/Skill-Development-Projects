import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './Form.css'
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Username:'',
      Email:'',
      Phone:'',
      Password:''
    }
   this.changeUsername = this.changeUsername.bind(this)
   this.changeEmail = this.changeEmail.bind(this)
   this.changePhone = this.changePhone.bind(this)
   this.changePassword = this.changePassword.bind(this)
   this.onSubmit = this.onSubmit.bind(this)
  }

  changeUsername(event){
        this.setState({
              Username: event.target.value
        })
  }
  changeEmail(event){
        this.setState({
              Email:event.target.value
        })
  }
  changePassword(event){
        this.setState({
              Password:event.target.value
        })
  }
  changePhone(event){
        this.setState({
              Phone:event.target.value
        })
  }
 onSubmit(event){
       event.preventDefault()

      const registered = {
            Username:this.state.Username,
            Email:this.state.Email,
            Phone:this.state.Phone,
            Password:this.state.Password
      }
      axios.post('http://localhost:4000/app/signup',registered)
         .then(response => console.log(response.data))

      this.setState({
        Username:'',
        Email:'',
        Phone:'',
        Password:''
      })
 }
  render() {
    return (
      <center>
      <div className="form-position">
            
      <form autocomplete= "off" onSubmit = {this.onSubmit}>
      <center>
      <p>Username:</p>
      <input
        type='text'
        placeholder='Username'
        onChange={this.changeUsername}
        value={this.state.Username}
      />
      <p>Email:</p>
      <input
        type='text'
        placeholder='Email'
        onChange={this.changeEmail}
        value={this.state.Email}
      />
      <p>Phone:</p>
      <input
        type='number'
        placeholder='Phone'
        onChange={this.changePhone}
        value={this.state.Phone}
      />
      <p>Password:</p>
      <input
        type='Password'
        placeholder='Password'
        onChange={this.changePassword}
        value={this.state.Password}
      />
      </center>
      <div>
      <ul className="button-padding"></ul>
      <button className="button"
      >Submit</button>
      </div>
      </form>
      </div>
      </center>
    );
  }

}
ReactDOM.render(<MyForm />, document.getElementById('root'));
export default MyForm;