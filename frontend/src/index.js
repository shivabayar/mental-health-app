import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';

// Find the root element in your HTML
const rootElement = document.getElementById('root');

// Create the root and render the app
const root = ReactDOM.createRoot(rootElement);
root.render(
  <GoogleOAuthProvider clientId="141374406365-201v2i1b4ngcejusdd9m8odcuqgeft65.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
