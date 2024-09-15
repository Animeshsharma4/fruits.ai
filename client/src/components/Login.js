// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Login.css'; // Importing the CSS file

// const Login = () => {
//   const [userId, setUserId] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     if (userId === 'admin' && password === 'password') {
//       navigate('/home');
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Login</h2>
//       <p>By signing in you are agreeing our <a href="/terms">Term and privacy policy</a></p>
      
//       <div className="input-group">
//         <input
//           type="email"
//           placeholder="Email Address"
//           value={userId}
//           onChange={(e) => setUserId(e.target.value)}
//         />
//       </div>

//       <div className="input-group">
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <span className="icon">👁️</span> {/* Add eye icon or similar */}
//       </div>

//       <div className="checkbox">
//         <input type="checkbox" id="remember-me" />
//         <label htmlFor="remember-me">Remember password</label>
//       </div>

//       <p className="forgot-password">
//         <a href="/forgot-password">Forgot password</a>
//       </p>

//       <button onClick={handleLogin}>Login</button>

//       <p className="social-login">or connect with</p>

//       <div className="social-login">
//         <a href="/login-facebook" className="facebook">Facebook</a>
//         <a href="/login-instagram" className="instagram">Instagram</a>
//         <a href="/login-pinterest" className="pinterest">Pinterest</a>
//         <a href="/login-linkedin" className="linkedin">LinkedIn</a>
//       </div>

//       <div className="anonymous-login">
//         <button onClick={()=>navigate("/Home")}>Anonymous</button>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Importing the CSS file

const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (userId === 'admin' && password === 'password') {
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="container">
      <h2 id="title">Login</h2>
      <p>
        By signing in you are agreeing to our{' '}
        <a href="/terms">Terms and Privacy Policy</a>
      </p>

      <div className="input-group" id="emailv">
        <input
          type="email"
          placeholder="Email Address"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>

      <div className="input-group">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="icon">👁️</span> {/* Add eye icon or similar */}
      </div>

      <div className="checkbox">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember password</label>
      </div>

      <p className="forgot-password">
        <a href="/Signup">Forgot password</a>
      </p>

      <button onClick={handleLogin}>Login</button>

      {/* <p className="social-login">or connect with</p>

      <div className="social-login">
        <a href="/login-facebook" className="facebook">
          Facebook
        </a>
        <a href="/login-instagram" className="instagram">
          Instagram
        </a>
        <a href="/login-pinterest" className="pinterest">
          Pinterest
        </a>
        <a href="/login-linkedin" className="linkedin">
          LinkedIn
        </a>
      </div> */}

      

      {/* Add the sign-up option here */}
      <div className="signup-option">
        <p>Don't have an account? <a href='/Signup'>Sign up here</a></p>
      </div>
      <div className="anonymous-login">
        <button onClick={() => navigate('/home')}>Anonymous</button>
      </div>
    </div>
  );
};

export default Login;
