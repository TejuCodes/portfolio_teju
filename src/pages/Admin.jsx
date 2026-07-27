import { useState } from "react";
import "./Admin.css";
import hacker from "../assets/hacker.jpg";

function Admin() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showGif, setShowGif] = useState(false);


  const login = () => {

    if (!username || !password) return;

    setShowGif(true);

    setTimeout(() => {
      setShowGif(false);
    }, 3000);

  };


  return (

    <section className="admin-page">


      {showGif && (

        <div className="gif-popup">

          <img
            src={hacker}
            alt="Easter Egg"
          />

        </div>

      )}



      <div className="login-box">


        <h2>
          Restricted Access
        </h2>


        <input
          placeholder="Username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />


        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />


        <button onClick={login}>
          LOGIN
        </button>


      </div>


    </section>

  );

}


export default Admin;