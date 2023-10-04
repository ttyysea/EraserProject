import { useState, useEffect } from 'react';
import'./Home';

function App2 (){
      return (
        <div>
          <div>
            <canvas id="canvas" width={500} height={200} />
          </div>
          <div style={{marginTop: '5px'}}>
            <span>Size: </span>
            <input type="range" min={1} max={50} defaultValue={25} className="size" id="sizeRange" />
          </div>
          <div style={{marginTop: '5px'}}>
            <span>Color: </span>
            <input type="radio" name="colorRadio" defaultValue="rgb(227,7,19,0.75)" defaultChecked />
            <label htmlFor="black">Black</label>
          </div>
          <button className="save-img">Save As Image</button>
          <button className="save-img-ori">Save As Image Original</button>
          <button className="save-img-binary">Binary Image</button>
          <button className="send-picwish">Pic Wish</button>
          <div style={{marginTop: '5px'}}>
            <button id="clear">Clear</button>
          </div>
          <br />
            <input id="upload" type="file" accept="image/*" />
        </div>
      );
    }
  

export default App2;