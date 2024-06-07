import axios from "axios";
import Joi from "joi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [user, setuser] = useState({
    first_name: "",
    last_name: "",
    age: "",
    email: "",
    password: "",
  });
  const [errormsg, seterrormsg] = useState("");
  const [errorlist, seterrorlist] = useState([]);
  let submitFormD = (e) => {
    e.preventDefault();
    var validateResponse = vaildteFormData() ;
    // console.log(validateResponse);
    if (validateResponse.error) {
      seterrorlist(validateResponse.error.details);
    } else {
      // let {data} = async()=> axios.post(user);
      if (localStorage.length === 0) {
        localStorage.setItem("myUsers", JSON.stringify([user]));
        goToLogin();
      } else if (localStorage.length >= 1) {
        let users = JSON.parse(localStorage.getItem("myUsers"));
        let found = "";
        users.forEach((ele) => {
          if (ele.first_name === user.first_name || ele.email === user.email) {
            return (found = true);
          } else {
            return (found = false);
          }
        });

        console.log(found);
        // console.log(users);
        // console.log(user);

        if (found === true) seterrormsg("Unvalid User");
        else {
          users.push(user);
          localStorage.setItem("myUsers", JSON.stringify(users));
          goToLogin();
          seterrormsg("");
        }
      }
    }
  };

  let getInputVal = (e) => {
    // console.log(myUser);
    // let myUser = user;  // shallow copy
    let myUser = { ...user }; // deep copy
    myUser[e.target.name] = e.target.value;
    // console.log(myUser);
    setuser(myUser);
  };

  let vaildteFormData = () => {
    const schema = Joi.object({
      first_name: Joi.string().alphanum().required().min(2).max(25),
      last_name: Joi.string().alphanum().required().min(2).max(25),
      age: Joi.number().required().min(20).max(80),
      email: Joi.string()
        .required()
        .email({ tlds: { allow: ["com", "net"] } }),
      password: Joi.string()
        .required()
        .pattern(new RegExp(/^[a-z]/)),
    });
    return schema.validate(user, { abortEarly: false });
  };

  let navigat = useNavigate();
  let goToLogin = () => {
    navigat("/login");
  };
  return (
    <>
      <div className=" w-75 m-auto py-5">
        <h2>Registeration Form</h2>

        {errorlist.map((error, index) => (
          <div key={index} className="alert alert-danger p-2">
            {error.message}
          </div>
        ))}
        {errormsg ? (
          <div className="alert alert-danger p-2">{errormsg}</div>
        ) : (
          ""
        )}
        <form onSubmit={submitFormD}>
          <div className="input-data my-2">
            <label htmlFor="first_name">First Name</label>
            <input
              onChange={getInputVal}
              type="text"
              className="form-control my-2"
              name="first_name"
            />
          </div>
          <div className="input-data my-2">
            <label htmlFor="last_name">Last Name</label>
            <input
              onChange={getInputVal}
              type="text"
              className="form-control my-2"
              name="last_name"
            />
          </div>
          <div className="input-data my-2">
            <label htmlFor="age">Age</label>
            <input
              onChange={getInputVal}
              type="num"
              className="form-control my-2"
              name="age"
            />
          </div>
          <div className="input-data my-2">
            <label htmlFor="email">Email</label>
            <input
              onChange={getInputVal}
              type="email"
              className="form-control my-2"
              name="email"
            />
          </div>
          <div className="input-data my-2">
            <label htmlFor="password">Password</label>
            <input
              onChange={getInputVal}
              type="password"
              className="form-control my-2"
              name="password"
            />
          </div>
          <button className="btn btn-info my-3 float-end">Register</button>
          <div className="clear-fix"></div>
        </form>
      </div>
    </>
  );
}

export default Register;
