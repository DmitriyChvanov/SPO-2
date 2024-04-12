import React, { Component } from 'react';
import gif from '../gifs/diski.mp4';
import './video.css'

class KirillFlex extends Component {
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

export default KirillFlex;