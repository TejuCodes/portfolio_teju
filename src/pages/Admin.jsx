import { useState } from "react";
import "./Admin.css";

function Admin() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showGif, setShowGif] = useState(false);


  const login = () => {

    if (loading) return;


    setLogs([]);
    setLoading(true);
    setShowGif(true);


    const steps = [

      "Initializing secure connection...",
      "Connecting to Security Operations Center...",
      "Verifying credentials...",
      "Checking Active Directory...",
      "Decrypting session...",
      "Running threat analysis...",
      "Checking authorization...",

    ];


    let index = 0;


    const interval = setInterval(() => {


      setLogs((prev) => [
        ...prev,
        steps[index]
      ]);


      index++;


      if(index === steps.length){


        clearInterval(interval);


        setTimeout(() => {


          setShowGif(false);


          if(
            username.toLowerCase() === "admin" &&
            password === "admin123"
          ){


            setLogs((prev)=>[

              ...prev,
              "",
              "😄 Nice try!",
              "This admin panel is an easter egg.",
              "No real login exists here.",
              "System protected successfully."

            ]);


          }
          else{


            setLogs((prev)=>[

              ...prev,
              "",
              "ACCESS DENIED",
              "Unauthorized Attempt Logged.",
              "Security Team Notified.",
              "IP Added To Watchlist."

            ]);


          }


          setLoading(false);


        },1200);


      }


    },700);


  };



  return (

    <section className="admin-page">


      <div className="terminal">


        <div className="terminal-top">


          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>


          <h3>
            Security Control Panel
          </h3>


        </div>




        <div className="terminal-body">


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



          <button

            onClick={login}

            disabled={loading}

          >

            {loading 
              ? "Authenticating..."
              : "LOGIN"
            }


          </button>




          {loading && (

            <>


              <div className="progress">

                <div className="bar"></div>

              </div>





              {showGif && (

                <div className="scan-animation">


                  <img

                    src="https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif"

                    alt="Security Scan"

                  />


                  <p>
                    🔐 Running security verification...
                  </p>



                </div>

              )}



            </>

          )}







          <div className="logs">


            {logs.map((line,index)=>(

              <p key={index}>
                {line}
              </p>

            ))}


          </div>



        </div>


      </div>


    </section>

  );


}


export default Admin;