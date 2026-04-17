import "./FormHandling.css";
import { useState } from "react";
function FormHandling() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [image, setImage] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    // if(!name || !email || !password){
    //     alert("Please fill all the fields");
    //     return;
    // }
    if (name.length < 3) {
      // alert("Name must be at least 3 characters long");
      setNameError("Name must be at least 3 characters long");
      return;
    }
    if (!email.includes("@")) {
      // alert("Please enter a valid email");
      setEmailError("Please enter a valid email");
      return;
    }
    if (password.length < 6) {
      // alert("Password must be at least 6 characters long");
      setPasswordError("Password must be at least 6 characters long");
      return;
    }
    console.log(name, email, password, image);
    setEmail("");
    setName("");
    setPassword("");
    setImage("");
  };

  return (
    <div>
      <form onSubmit={(e) => submitForm(e)}>
        <div className="name">
          <label htmlFor="">Name</label>
          <br />
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if(e.target.value.length >= 3){
              setNameError("");
              }
            }}
            type="text"
            placeholder="Enter your name"
          />
          {nameError && <p style={{ color: "red" }}>{nameError}</p>}
        </div>
        <div className="email">
          <label htmlFor="">Email</label>
          <br />
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
            type="email"
            placeholder="Enter your email"
          />
          {emailError && <p style={{ color: "red" }}>{emailError}</p>}
        </div>
        <div className="password">
          <label htmlFor="">Password</label>
          <br />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError("");
            }}
            type="password"
            placeholder="Enter your password"
          />
          {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
        </div>
            <div className="file">
          <label htmlFor="file">Image</label>
          <br />
          <input
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            type="file"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormHandling;
