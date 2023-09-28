import { useState, useEffect } from 'react';
import '../css/Home.css';

function Home (){

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
        <div className='upbox'>
            <input  type='file' multiple accept='image/*' onChange={onImageChange} />
            { imageURLs.map(imageSrc => (
                <img width={500} height={550} src={imageSrc}  />
                ))}
        </div>
        
    );

}
export default Home;




