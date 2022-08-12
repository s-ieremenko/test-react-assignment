import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import App from './App'
import Task1 from './components/Task1/Task1'
import Task2 from './components/Task2/Task2'
import Task3 from './components/Task3/Task3'
import ErrorPage from './components/ErrorPage/ErrorPage'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<App />}></Route>
            <Route path="/task1" element={<Task1 />} />
            <Route path="/task2" element={<Task2 />} />
            <Route path="/task3" element={<Task3 />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    </BrowserRouter>
)
