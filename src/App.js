import './App.css';
import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar/Navbar"
import DrawRectangle from './components/DrawRectangle/DrawRectangle';
import ImageCanvas from './pages/ImageCanvas';
import App2 from './pages/App2';

function App() {
    
    return (
        <div className='App'>
           {/* <ImageCanvas />
           <DrawRectangle></DrawRectangle> */}
           <App2 />
        </div>
    );
}

export default App;