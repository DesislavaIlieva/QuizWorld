import './App.css';
import { Routes, Route } from 'react-router-dom';
import Error from './components/Error';
import Home from './components/Home';
import Catalog from './components/Catalog';
import Profile from './components/Profile';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';

export default function Header(props) {
    return (
        <main className="Main">

            <Routes>
                <Route path='*' element={<Error />} />
                <Route path='/' element={<Home />} />
                <Route path='/catalog' element={<Catalog />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/logout' element={<Logout />} />
            </Routes>
            
        </main>)

}