import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import Login from "./components/Login";
import LoginFormik from "./components/LoginFormik";
import ContactForm from "./components/ContactForm";
import MailForm from "./components/MailForm";
import Home from "./components/Home";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Employee from "./components/Employee";
import EmployeeDetail from "./components/EmployeeDetail";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/*<App />*/}
        {/*  <Login />*/}
        {/*<ContactForm/>*/}
        {/*<MailForm/>*/}
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginFormik/>} />
                {/*<Route path="/home" element={<Home/>} />*/}
                <Route path="/employees">
                    <Route path="" element={<Employee/>}/>
                    <Route path="detail" element={<EmployeeDetail/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
