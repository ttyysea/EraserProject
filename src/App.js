import './App.css';
import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar/Navbar"

function App() {
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);
    useEffect(() => {
        if(images.length < 1) return;
        const newImageUrls = [];
        images.forEach(image => newImageUrls.push(URL.createObjectURL(image)))
        setImageURLs(newImageUrls);

    },[images]);
    function onImageChange(e){
        setImages([...e.target.files]);
    }
    return (
        <div className='App'>
           <Navbar />
           <div>
                <div class="image-upload">
                    <label for="file-input">
                        <i class="fa-solid fa-image"></i>
                    </label>
                    <input id="file-input" type="file" accept='image/*' onChange={onImageChange} hidden/>
                </div>
               
                <div className='imgBox'>
                    
                   { imageURLs.map(imageSrc => (
                    
                    <img width={500} height={550} src={imageSrc}  />
                    
                    ))}
                </div>
                
           </div>
        </div>
    );
}

export default App;
