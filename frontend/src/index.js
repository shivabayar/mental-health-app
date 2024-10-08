import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';

// Find the root element in your HTML
const rootElement = document.getElementById('root');
const apiKey= process.env.REACT_APP_GOOGLE_API_KEY;

// Create the root and render the app
const root = ReactDOM.createRoot(rootElement);
root.render(
  <GoogleOAuthProvider clientId={apiKey}>
    <App />
  </GoogleOAuthProvider>
);
