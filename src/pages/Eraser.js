import { useState, useEffect } from 'react';
import '../css/Eraser.css';

function Eraser (){

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

    return(
        <main>
            <form className='upbox'>
                
                <input  type='file' multiple accept='image/*' onChange={onImageChange} />
                { imageURLs.map(imageSrc => (
                    <img width={450} height={400} src={imageSrc}  />
                    ))}
               
            </form>
            
        </main>
       
    );
}

export default Eraser;