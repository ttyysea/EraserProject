import React, { useState } from 'react'
import { MdCloudUpload } from 'react-icons/md'
//import { AiFillFileImage,MdDete } from 'react-icons/ai'

import '../css/Home.css'
function Home (){

    const [image, setImage] = useState(null)
    const [fileName, setFileName] =useState("No selected file")
    return (
     <main>
        <button action='' 
        className='upbox'
        onClick={() => document.querySelector(".input-field").Click}
        >
            <input type='file' name='image/*' hidden 
            onChange={({target:{files}}) => {
                files[0] && setFileName(files[0].name)
                if(files){
                    setImage(URL.createObjectURL(files[0]))
                }
            }}
            />

            {image ?
            <img scr={image} width={60} height={60} alt={fileName} />
            :
            <MdCloudUpload color='#1475cf' size={60} />
        }
        </button>
     </main>   
    )

}
export default Home;