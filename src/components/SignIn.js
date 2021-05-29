import React, { useState } from "react";
import "../sass/SignIn.scss";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FacebookLoginButton } from "react-social-login-buttons";
import { Link } from "react-router-dom";
import fire from "../config/Firebase";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    //alert(email + " " + password);
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        alert("login sucess");
      })
      .catch((error) => {
        alert("No user exist", error);
      });
  };
  return (
    <>
      <Form className="login-form" onSubmit={handleSubmit}>
        <h1 className="text-center">LOG IN</h1>
        <FormGroup class="group">
          <Label for="Email">Email</Label>
          <Input
            type="email"
            name="email"
            id="Email"
            placeholder="Email"
            onChange={(ev) => setEmail(ev.target.value)}
          />
        </FormGroup>
        <FormGroup class="group">
          <Label for="Password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            onChange={(ev) => setPassword(ev.target.value)}
          />
        </FormGroup>
        <br></br>
        <Button className="btn btn-primary btn-lg btn-full">LOG IN</Button>
        <div className="text-center pt-3">
          Or Login With your social Account
        </div>
        <FacebookLoginButton className="mt-3 mb-3 btn-sm" />
        <div className="text-center">
          <a href="/signUp">
            <Link to="/signup">Sign Up</Link>
          </a>
          <span className="p-2">|</span>
          <a href="/forgotPassword">Forgot Password</a>
        </div>
      </Form>
    </>
  );
};
export default SignIn;
