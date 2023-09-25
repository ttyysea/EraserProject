import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Home from './pages/Home';
import Eraser from './pages/Eraser';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<Home />} />
                    <Route path='/Eraser' element={<Eraser />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
