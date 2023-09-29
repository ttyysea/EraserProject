import React, { Component } from 'react';
import './ZoomStyle.css'

class ZoomImageOnScroll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: 1, // Initial scale
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { scale } = this.state;
    const scrollY = window.scrollY;

    // You can adjust the zoom factor (0.005) to control the zoom speed
    const newScale = 1 + scrollY * 0.005;

    // Ensure that the scale is within a reasonable range (e.g., 1 to 2)
    if (newScale >= 1 && newScale <= 2) {
      this.setState({ scale: newScale });
    }
  };

  render() {
    const { imageUrl } = this.props;
    const { scale } = this.state;

    const imageStyle = {
      transform: `scale(${scale})`,
    };

    return (
      <div className="zoom-image-container">
        <img
          src={imageUrl}
          alt="Zoomable Image"
          className="zoom-image"
          style={imageStyle}
        />
      </div>
    );
  }
}

export default ZoomImageOnScroll;