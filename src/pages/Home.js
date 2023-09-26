import React from 'react'
import { useEffect, useRef, useState } from 'react';
import '../css/Home.css'
function Home (){
    const [image, setImage] = useState(null)
    const [fileName, setFileName] = useState("No selected file")
    return (
     <main>
        <form action='' 
        className='upbox'
        onClick={() => document.querySelector(".input-field").Click()}
        >
            <input type='file' name='image/*'>

            </input>
            
        </form>
     </main>   
    )

}
export default Home;