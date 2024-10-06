import React, { useState } from 'react';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import DailyLogForm from './components/DailyLogForm';
// import TrendChart from './components/TrendChart';

function App() {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (response) => {
    const decoded = jwtDecode(response.credential);
    setUser(decoded);
  };

  const handleLogout = () => {
    googleLogout();
    setUser(null);
  };

  return (
    <div>
      <h1>Mental Health Tracker</h1>
      {user ? (
        <>
          <button onClick={handleLogout}>Logout</button>
          <DailyLogForm userId={user.sub} />
          {/* <TrendChart userId={user.sub} /> */}
        </>
      ) : (
        <GoogleLogin onSuccess={handleLoginSuccess} onError={() => console.log('Login Failed')} />
      )}
    </div>
  );
}

export default App;
