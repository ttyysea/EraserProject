import './App.css';
import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar/Navbar"
import DrawRectangle from './components/DrawRectangle/DrawRectangle';
import ImageCanvas from './pages/ImageCanvas';

function App() {
    
    return (
        <div className='App'>
           <ImageCanvas />
           <DrawRectangle></DrawRectangle>
           
        </div>
    );
}

export default App;