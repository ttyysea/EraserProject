import React, { useEffect, useState } from "react";
import './App2';
function ImageCanvas() {
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
    <div>    
      <div className="image-upload">
          <label for="file-input" className='button-upload'>
              <i className="fa-solid fa-image icon-upload" size="xl"></i>
              &nbsp;&nbsp;Upload
          </label>
          <input id="file-input" type="file" accept='image/*' onChange={onImageChange} hidden/>
      </div>
      
      <div >
          </div>
      
      <div >
        { imageURLs.map(imageSrc => ( 
          <img className='img-display' src={imageSrc}  />
          ))}
      </div>
      
  </div>
  );
}

export default ImageCanvas;
