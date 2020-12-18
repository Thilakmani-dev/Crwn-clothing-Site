import React, { useState } from "react";
import "./SignIn.scss";
import { connect } from "react-redux"
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { AiFillGoogleCircle } from "react-icons/ai";
import { VscSignIn } from "react-icons/vsc";
import { IconContext } from "react-icons";
// import { auth, signInWithGoogle } from "../../firebase/firebase.utility";
import { googleSignInStart, emailSignInStart } from "../../redux/user/user-actions"
const SignIn = ({emailSignInStart,googleSignInStart}) => {
  
const [userCredentials,setCredentials] = useState({email:'',password:''});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCredentials({...userCredentials,[name]:value});
  };
  const { email, password } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   this.setState({ email: "", password: "" });
    // } catch (e) {
    //   console.log(e);
    // }
    emailSignInStart(email, password);
  };

    return (
      <IconContext.Provider value={{ size: "28px" }}>
        <div className="sign-in" style={{ textAlign: "center" }}>
          <h2 className="title">i already have an account</h2>
          <span>Sign up with E-Mail and Password</span>
          <form onSubmit={handleSubmit}>
            <FormInput
              name="email"
              type="email"
              handleChange={handleChange}
              value={email}
              label="Email"
              required
            />
            <FormInput
              name="password"
              type="password"
              value={password}
              required
              label="Password"
              handleChange={handleChange}
            />
            <CustomButton type="submit">
              <VscSignIn className="icon" />
              Sign In
            </CustomButton>
            <CustomButton
              type="button"
              onClick={googleSignInStart}
              color="#4285F4"
            >
              <AiFillGoogleCircle className="icon" />
              Sign in - Google
            </CustomButton>
          </form>
        </div>
      </IconContext.Provider>
    );
  }

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})
export default connect(null, mapDispatchToProps)(SignIn);
