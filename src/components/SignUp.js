import React, { useState } from "react";
import { Button, FormGroup, Label, Input, Form } from "reactstrap";
import { Link } from "react-router-dom";
import "../sass/SignUp.scss";
import fire from "../config/Firebase";
const SignUp = () => {
  const [cemail, setcemail] = useState("");
  const [epass, setcpass] = useState("");

  const createacc = (e) => {
    e.preventDefault();
    //alert(cemail + " " + epass);
    fire
      .auth()
      .createUserWithEmailAndPassword(cemail, epass)
      .then(() => {
        alert("created succesfully");
      })
      .catch((error) => {
        alert("cannot create an account", error);
      });
  };
  return (
    <>
      <Form className="login-form" onSubmit={createacc}>
        <h1 className="text-center">Sign Up</h1>
        <FormGroup class="group">
          <Label for="Name">Name</Label>
          <Input type="name" name="name" id="name" placeholder="name" />
        </FormGroup>
        <FormGroup class="group">
          <Label for="Email">Email</Label>
          <Input
            type="email"
            name="email"
            id="Email"
            placeholder="Email"
            onChange={(ev) => setcemail(ev.target.value)}
          />
        </FormGroup>
        <FormGroup class="group">
          <Label for="Password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            onChange={(ev) => setcpass(ev.target.value)}
          />
        </FormGroup>
        <FormGroup tag="fieldset" className="mt-3">
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> Male
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> Female
            </Label>
          </FormGroup>
        </FormGroup>
        <br></br>
        <Button className="btn btn-primary btn-lg btn-full">Sign Up</Button>
        <div className="text-center pt-3">Already Have Account?</div>

        <div className="text-center">
          <a>
            <Link to="/signin">Sign In</Link>
          </a>
        </div>
      </Form>
    </>
  );
};
export default SignUp;
