import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "./UserContext";
import 'tachyons';

export default function Header() {
  const {setUserInfo,userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;
  
  return (
    
    <header >
      <Link to="/" className="tc fw-bold shadow-2 grow br3 dib dark-blue f3 no-underline dark-gray flex items-center justify-center" style={{padding:'10px'}}>CR BLOG</Link>



      <nav>
        {username && (
          <>
            <Link to="/create" className="f6 link dim br3 ba bw2 ph3 pv2 mb2 dib dark-blue" >Create new post</Link>
            <a onClick={logout} className="f6 link dim br3 ba bw2 ph3 pv2 mb2 dib dark-blue">Logout ({username})</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login" className="f6 link dim br3 ba bw2 ph3 pv2 mb2 dib dark-blue" >Login</Link>
            <Link to="/register" className="f6 link dim br3 ba bw2 ph3 pv2 mb2 dib dark-blue">Register</Link>
          </>
        )}
      </nav>
    </header>
    
  );
}
