import ImageCanvas from '../../pages/ImageCanvas';
// import Navbar from '../Navbar/Navbar';
import './DrawRectangle.css';
import {useEffect, useRef, useState} from 'react';

const DrawRectangle = () => {
    const [brushSize, setBrushSize] = useState(50);
    const [brushColor, setBrushColor] = useState('rgba(255,199,122)');
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = 500;
        canvas.height = 500;
        const context = canvas.getContext("2d");
        context.lineCap = "round";
        context.strokeStyle = "black";
        context.lineWidth = brushSize ;
        context.strokeStyle = brushColor;
        contextRef.current = context;
    }, [brushSize, brushColor]);

    const startDrawing = ({nativeEvent}) => {
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
        setIsDrawing(true);
        nativeEvent.preventDefault();
    };

    const draw = ({nativeEvent}) => {
        if(!isDrawing) {
            return;
        }
        
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
        nativeEvent.preventDefault();
    };

    const stopDrawing = () => {
        setIsDrawing(false);
    };

    const setToDraw = () => {
        contextRef.current.globalCompositeOperation = 'source-over';
    };
    
    const handleBrushSizeChange = (event) => {
        const newSize = parseInt(event.target.value);
        setBrushSize(newSize);
      };

    const setToErase = () => {
        contextRef.current.globalCompositeOperation = 'destination-out';
    };

    const saveImageToLocal = (event) => {
        let link = event.currentTarget;
        link.setAttribute('download', 'canvas.png');
        let image = canvasRef.current.toDataURL('image/png');
        link.setAttribute('href', image);
    };
    
    return (
        <div>
            <canvas className="canvas-container"
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}>
                    <ImageCanvas />
                
            </canvas>
            <div className='menuBar'>
                <button className='button' onClick={setToDraw}>
                    <i class="fa-solid fa-pencil"></i>
                </button>
            {/* <label htmlFor="brushSize">Brush Size: {brushSize}</label> */}
            {/* <input color={brushSize}
                type="range"
                id="brushSize"
                name="brushSize"
                min="1"
                max="100" 
                value={brushSize}
                onChange={handleBrushSizeChange}
            />
            <input
                type="color"
                value={brushColor}
                onChange={(e) => setBrushColor(e.target.value)}
            /> */}
                <button className='button' onClick={setToErase}>
                    <i class="fa-solid fa-eraser"></i>
                </button>
                <button className='buttonEraser' onClick={setToErase}>
                    Eraser Object  
                </button>
            
                <a className='button' id="download_image_link" href="download_link" onClick={saveImageToLocal}>Download Image</a>
             
            </div>
        </div>
    )
}

export default DrawRectangle;