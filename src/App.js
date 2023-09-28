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
                <div className="image-upload">
                    <label for="file-input" className='button-upload'>
                        <i className="fa-solid fa-image icon-upload" size="xl"></i>
                        &nbsp;&nbsp;Upload
                    </label>
                    <input id="file-input" type="file" accept='image/*' onChange={onImageChange} hidden/>
                </div>
               
                <div className='img-display'>
                    
                   { imageURLs.map(imageSrc => (
                    
                    <img className='' width={500} height={550} src={imageSrc}  />
                    
                    ))}
                </div>
                
           </div>
        </div>
    );
}

export default App;
