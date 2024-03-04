import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Amplify} from 'aws-amplify';
import config from './aws-exports';
import { BrowserRouter } from "react-router-dom";
import "@aws-amplify/ui-react/styles.css";
import { ThemeProvider, createTheme } from "@aws-amplify/ui-react";
import { studioTheme } from './ui-components';
import { defaultStorage } from 'aws-amplify/utils';
import { cognitoUserPoolsTokenProvider } from 'aws-amplify/auth/cognito';


// const authConfig = {
//     Cognito: {
//       userPoolId: 'us-east-1_01FttlucE',
//       userPoolClientId: 'd3c0rktuijxvux'
//     }
//   };

const updatedTheme = createTheme({
    name: "my-theme-updates", 
    tokens: {
        components: {
            button: {
                primary: {
                    backgroundColor: {
                        value: "#b71c1c"
                    },
                },
            },
        },
    },
}, studioTheme)
Amplify.configure(config);
// Amplify.configure({
//     Auth: authConfig
//   });
//   cognitoUserPoolsTokenProvider.setKeyValueStorage(defaultStorage);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider theme={updatedTheme}>
        <App />
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();