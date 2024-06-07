import Joi from "joi";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Login({ saveUserData }) {
  //////////////////////////////////////////
  const [user, setuser] = useState({
    email: "",
    password: "",
  });
  ////////////////////////////////////

  const [users, setusers] = useState([]);

  let setUsers = () => {
    if (localStorage.length) {
      setusers(JSON.parse(localStorage.getItem("myUsers")));
      // console.log(users);
    }
  };
  ////////////////////////////////////
  const [errormsg, seterrormsg] = useState("");
  const [errorlist, seterrorlist] = useState([]);
  ////////////////////////////////////////
  let getInputVal = (e) => {
    // console.log(myUser);
    // let myUser = user;  // shallow copy
    let myUser = { ...user }; // deep copy
    myUser[e.target.name] = e.target.value;
    // console.log(myUser);
    setuser(myUser);
  };
  ////////////////////////////////////
  let navigat = useNavigate();
  let goToHome = () => {
    navigat("/");
  };

  /////////////////////////////////////////////////
  let submitFormD = (e) => {
    e.preventDefault();
    var validateResponse = vaildteFormData();
    // console.log(validateResponse);
    if (validateResponse.error) {
      seterrorlist(validateResponse.error.details);
    } else {
      // let {data} = async()=> axios.post(user);
      seterrorlist([]);
      if (localStorage.length === 0) {
        // goToRegister();
        seterrormsg("unValid User");
      } else if (localStorage.length > 0) {
        setusers(JSON.parse(localStorage.getItem("myUsers")));
        let found = "";
        users.map((ele) => {
          if (ele.pass === user.pass && ele.email === user.email) {
            localStorage.setItem("currentUser", JSON.stringify(ele));
            saveUserData();
            return (found = true);
          } else {
            return (found = false);
          }
        });

        // console.log(users);
        // console.log(user);

        if (found === true) goToHome();
        else seterrormsg("Unvalid User");
      }
    }
  };

  /////////////////////////////////////////////////

  let vaildteFormData = () => {
    const schema = Joi.object({
      email: Joi.string()
        .required()
        .email({ tlds: { allow: ["com", "net"] } }),
      password: Joi.string()
        .required()
        .pattern(new RegExp(/^[a-z]/)),
    });
    return schema.validate(user, { abortEarly: false });
  };
  /////////////////////////////////////////////
  useEffect(() => {
    setUsers();
  }, []);
  /////////////////////////////////////////////
  return (
    <div className=" w-75 m-auto py-5">
      <h2>LogIN Form</h2>

      {errorlist.map((error, index) => (
        <div key={index} className="alert alert-danger p-2">
          {error.message}
        </div>
      ))}

      {errormsg ? <div className="alert alert-danger p-2">{errormsg}</div> : ""}
      <form onSubmit={submitFormD}>
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
        <button className="btn btn-info my-3 float-end">Login</button>
        <div className="clear-fix"></div>
      </form>
    </div>
  );
}

export default Login;
