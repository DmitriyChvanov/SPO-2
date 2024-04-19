import React, { Component } from 'react';
import gif from '../gifs/Queen.mp4';
import './video.css';

class DimaQueen extends Component {
    render() {
        return (
            <div className='ya'>
                <video autoPlay muted loop>
                    <source src={gif} type="video/mp4" />
                </video>
            </div>
        );
    }
}

export default DimaQueen;