import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../store/actions/userActions'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';





class _SignUp extends Component {
    state = {
        firstName: null,
        lastName: null,
        email: null,
        password: null
    }

    handleChange = ({ target }) => {
        const field = target.name;
        const value = target.value;
        this.setState(prevState => ({ ...prevState, [field]: value }), () => (console.log(this.state)));
    }

    submitForm = () => {
        this.props.addUser(this.state);
    }


    render() {
        return (
            <main className="sign-up-container">
                <form className="sign-up-form" onsubmit={this.submitForm} noValidate>

                    <TextField onChange={this.handleChange}
                        className="signup-first-name"
                        autoComplete="fname"
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                    />

                    <TextField onChange={this.handleChange}
                        className="signup-last-name"
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="lname"
                    />

                    <TextField onChange={this.handleChange}
                        className="signup-email"
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                    />

                    <TextField onChange={this.handleChange}
                        className="signup-password"
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />

                    {/* <FormControlLabel
                        className="signup-marketing-checkbox"
                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                        label="I want to receive inspiration, marketing promotions and updates via email."
                    /> */}

                    <Button

                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className="sign-up-submit-btn"
                    >
                        Sign Up
                    </Button>


                </form>


                {/* <a  className="sign-in-link">
                    Already have an account? Sign in
                    </a> */}
            </main >
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.trelloUser.userReducer
})

const mapDispatchToProps = {
    addUser
}

export const SignUp = connect(mapStateToProps, mapDispatchToProps)(_SignUp);
