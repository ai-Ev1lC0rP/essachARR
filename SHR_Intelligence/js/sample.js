import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo">
            {/* Insert your logo image here */}
          </div>
          <ul>
            <li><a href="#helpers">Helpers</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#support">Support</a></li>
          </ul>
          <div className="auth-buttons">
            <a href="#get-help" className="get-help">Get Help</a>
            <a href="#login" className="login">Log in</a>
          </div>
        </nav>
      </header>

      {/* Rest of your HTML code */}
    </div>
  );
}

export default App;