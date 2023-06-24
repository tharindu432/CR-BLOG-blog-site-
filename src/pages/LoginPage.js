import {useContext, useState} from "react";
import {Navigate} from "react-router-dom";
import {UserContext} from "../UserContext";
import { CAlert } from "@coreui/react";
import { FaExclamationCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";


export default function LoginPage() {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [redirect,setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContext);
  const [alert, setAlert] = useState(null);

  async function login(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
    });
    if (response.ok) {
      setAlert(
        <CAlert
          className="my-alert"
          color="success"
          variant="solid"
          style={{
            backgroundColor: "#4CAF50",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <FaCheckCircle
            size={30}
            style={{ marginRight: "5px", color: "#FFFFFF" }}
          />
          <span style={{ fontSize: "1rem", marginLeft: "5px" }}>
            Registration successful
          </span>
        </CAlert>
      );
      response.json().then(userInfo => {
        setUserInfo(userInfo);
        setRedirect(true);
        
      });
     
      
  
    
      
    } else {
      setAlert(
        <CAlert
          className="my-alert"
          color="danger"
          variant="solid"
          style={{
            backgroundColor: "#F44336",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <FaExclamationCircle
            size={30}
            style={{ marginRight: "5px", color: "#FFFFFF" }}
          />
          <span style={{ fontSize: "1rem", marginLeft: "5px" }}>
            Login failed
          </span>
        </CAlert>
      );
    }
    setTimeout(() => {
      setAlert(null);
    }, 2000);

  }

  if (redirect) {
    return <Navigate to={'/'} />
  }
  return (
    <div>
    <form className="login" onSubmit={login}>
      <h1>Login</h1>
      <input type="text"
             placeholder="username"
             value={username}
             onChange={ev => setUsername(ev.target.value)}/>
      <input type="password"
             placeholder="password"
             value={password}
             onChange={ev => setPassword(ev.target.value)}/>
      <button>Login</button>
    </form>
    {alert}
    </div>
  );
}