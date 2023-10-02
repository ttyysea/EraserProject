import ImageCanvas from '../../pages/ImageCanvas';
import Navbar from '../Navbar/Navbar';
import './DrawRectangle.css';
import {useEffect, useRef, useState} from 'react';

const DrawRectangle = () => {
    const [brushSize, setBrushSize] = useState(5);
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [lineWidth, setLineWidth] = useState(5);
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = 500;
        canvas.height = 500;

        const context = canvas.getContext("2d");
        context.lineCap = "round";
        context.strokeStyle = "black";
        context.lineWidth = brushSize ;
        contextRef.current = context;
    }, []);

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
                onMouseLeave={stopDrawing}><ImageCanvas />
                
            </canvas>
            <div>
            <button onClick={setToDraw}>
                {isDrawing ? 'Stop Drawing' : 'Start Drawing'}
            </button>
            <label htmlFor="brushSize">Brush Size: {brushSize}</label>
            <input
                type="range"
                id="brushSize"
                name="brushSize"
                min="1"
                max="20" // Adjust the maximum brush size range as needed
                value={brushSize}
                onChange={handleBrushSizeChange}
            />
                <button onClick={setToErase}>
                    Erase
                    
                </button>
            
                <a id="download_image_link" href="download_link" onClick={saveImageToLocal}>Download Image</a>
             
            </div>
        </div>
    )
}

export default DrawRectangle;