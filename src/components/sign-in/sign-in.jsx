import { Component } from 'react'

export default class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            email: "",
            password: ""
        })
    }

    handleChange = (event) =>{
        const {name, value} = event.target;

        this.setState({[name]: value})
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <input type="email" name="email" id="email" value={this.state.email} onChange={this.handleChange} required />
                    <label htmlFor="email">Email</label>
                    <input type="password" name="password" id="password" value={this.state.password}  onChange={this.handleChange} required />
                    <label htmlFor="password">Password</label>

                    <input type="submit" value="Submit form" />
                </form>
            </div>
        )
    }
}
