import image1 from "./../assets/image1.jpg"
import "./Home.css";
import { useState } from "react";
import axios from "axios";

export function Home() {



  const [person, setPerson] = useState(
    {
      username: "",
      password: "",
    }
  );

  function handleUsernameChange(e) {
    setPerson(

      {
        username: e.target.value,
        password: person.password,
      }
    );
  }

  function handlePasswordChange(e) {
    setPerson({
      username: person.username,
      password: e.target.value
    });
  }

  function handleOnClick() {
    axios
      .post("https://dummyjson.com/auth/login", {
        username: person.username,
        password: person.password
      })
      .then(res => {
        alert("User is valid");
      })
      .catch(error => {
        alert("Invalid credentials");
      });



  }





  return (
    <>
      <div className="body">
        <img src={image1}
          alt="Girl"
          className="bodyLt" />
        <div className="bodyRt">
          <h1 className="heading">Join the millions learning to code with us for free</h1>
          <div className="form">
            <div className="label">Username<input value={person.username} onChange={handleUsernameChange} className="input" type="text" /></div>
            <div className="label">Password<input value={person.password} onChange={handlePasswordChange} className="input" type="password" /></div>
          </div >
          <button onClick={handleOnClick} className="signIn">Sign In</button>
        </div>
      </div>
    </>
  )
}

// username: "hbingley1",
// password: "CQutx25i8r"