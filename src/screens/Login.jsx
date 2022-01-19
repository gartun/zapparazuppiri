import { useState } from "react";

import useAuthCtx from "../context/Context";

const Login = () => {
  const { LogUser } = useAuthCtx();
    
  
  return (
    <div>
      <form>
        <div>
          <label>Kullanıcı İsmi: </label>
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </div>

        <div>
          <label>Parola: </label>
          <input type="password" value={pwd} onChange={e => setPwd(e.target.value)} />
        </div>

        <button onClick={handleLogin}>login</button>
      </form>
    </div>
  );
};

export default Login;
