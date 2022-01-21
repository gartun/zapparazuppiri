import { useState } from "react";

const Login = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  

  const handleLogin = e => {
    e.preventDefault();
    
    if(username === "türmob" && pwd === "medoc1234") {
      sessionStorage.setItem("türmob-token", "urlksjck456")
      
      setToken("urlksjck456");
    } else {
      alert("Yanlış kullanıcı adı veya parola!");
    }
  }
  
  return (
    <div className="form-wrapper">
      <form>
        <div>
          <label>Kullanıcı İsmi: </label>
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </div>

        <div>
          <label>Parola: </label>
          <input type="password" value={pwd} onChange={e => setPwd(e.target.value)} />
        </div>

        <button onClick={handleLogin}>giriş yap</button>
      </form>
    </div>
  );
};

export default Login;
