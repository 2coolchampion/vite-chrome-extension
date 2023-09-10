import React from 'react'
import ReactDOM from 'react-dom/client'
import Popout from './Popout.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Popout />
  </React.StrictMode>,
);

chrome.runtime.onMessage.addListener((message, _sender, _sendResponse) => { 
  if (message.message === 'PermissionRequest') {
   // Handle permission request here // For example, display a permission prompt or perform necessary actions // You can use other Chrome Extension APIs to handle permissions if needed 
  } 
});