import React from 'react';
import Footer from '../PureComp/Footer';
import ScrollToTop from '../PureComp/ScrollToTop';
import Header from '../UseRef/Header';
import './Recycle.css';

import ImagePrediction from './ImagePrediction'

export default function Recycle(){

    return (
        <div className='Recycle'> 
            <Header/> <br/><br/>

            <div className='contineerrr'>
                <ImagePrediction/>
                <ScrollToTop/>
            </div>
            <br/><br/>
            <Footer/>
        </div>
    );
}