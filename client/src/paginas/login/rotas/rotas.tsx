import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import  Login from '../log/Login';
import Cadastro from '../cadastre/Cadastro';



export const LoginRouter = () => {
    return(
        <Router>
            <Routes>
                <Route path='/Login'  element={<Login />} />

                <Route path='/Cadastro'  element={<Cadastro/>} />
            </Routes>
        </Router>
    );
}