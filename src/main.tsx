import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import './index.css';
import {Register} from "./pages/Register";


const root = createRoot(document.getElementsByTagName('main')[0]);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    </BrowserRouter>,
);
