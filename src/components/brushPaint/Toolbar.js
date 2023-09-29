import './style.css'
import {
    faArrowsAltH,
    faEraser,
    faMagic,
    faPaintBrush,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import React from "react";
  
  export const Toolbar: React.FC<any> = ({
    currentWidth,
    currentColor,
    handleDownload,
    dateUrl,
    handleClear,
    handleSpecialMode,
    handleEraserMode,
    setAutoWidth,
    handleRegularMode,
    handleColor,
    handleWidth,
    setCurrentSaturation,
    setCurrentLightness,
    isRegularMode,
    isAutoWidth,
    isEraser,
  }) => {
    return (
      <div>
        <div>
          {/* <BrushPreview currentWidth={currentWidth} currentColor={currentColor} />
          <div className="tool-section tool-section--lrg">
          </div>
          <div className="tool-section">
            <small>
              <strong>Tools</strong>
            </small>
          </div>
          <div className="tool-grid tool-section tool-section--lrg">
            <div>
              <button
                className={`btn btn--tool ${
                  isRegularMode && !isEraser ? "btn--active" : ""
                }`}
                onClick={handleRegularMode}
              >
                <FontAwesomeIcon icon={faPaintBrush} />
              </button>
            </div>
            <div>
              <button
                className={`btn btn--tool ${
                  !isRegularMode ? "btn--dream-active" : ""
                }`}
                onClick={handleSpecialMode}
              >
                <FontAwesomeIcon icon={faMagic} />
              </button>
            </div>
            <div>
              <button
                className={`btn btn--tool ${
                  isEraser ? "btn--eraser-active" : ""
                }`}
                onClick={handleEraserMode}
              >
                <FontAwesomeIcon icon={faEraser} />
              </button>
            </div>
            <div>
              <input
                disabled={isEraser}
                checked={isAutoWidth}
                id="tool-autowidth"
                type="checkbox"
                onChange={setAutoWidth}
                title="Dynamic brush size"
              />{" "}
              <label
                htmlFor="tool-autowidth"
                className={`btn btn--tool ${
                  isAutoWidth ? "btn--width-active" : ""
                }`}
              >
                <FontAwesomeIcon icon={faArrowsAltH} />
              </label>
            </div>
          </div> */}
          {!isAutoWidth && (
            <div className="tool-section tool-section--lrg">
              <div className="brushSize">
              Brush size
               
              </div>
              <div className="brushSize" >
                <input
                  background-color= "#9a905d"
                  defaultValue="50"
                  type="range"
                  min="5"
                  max="100"
                  onChange={handleWidth}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };