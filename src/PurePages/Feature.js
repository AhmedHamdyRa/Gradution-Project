import React from 'react';
import './Feature.css';
import Footer from '../PureComp/Footer';
import Chat from '../PureComp/Chat';
import ScrollToTop from '../PureComp/ScrollToTop';
import Header from '../UseRef/Header';

export default function Features(){
    return (
        <div className='Feature'>
            <Header/>
            <div className='Serv'>
                    <div className='HeadServ'>
                    <h2>Environmental Topics</h2>
                    
            </div>
            
            <div className='ServTypes1'>

                <a href="/Air">
                <div className='ServTyp3'>
                    <div className='add'>
                        <div className='gg-live-photo'> </div>
                        <h4>Air</h4> <br/>
                    </div>                    
                </div>
                </a>
                
                <a href="/Wastes">
                <div className='ServTyp4'>
                    <div className='add'>
                        <div className='gg-trash'> </div>
                        <h4> Wastes</h4> <br/>
                    </div>
                </div>
                </a>

                <a href="/Land">
                <div className='ServTyp7'>
                    <div className='add'>
                        <div className='gg-drop'> </div> 
                        <h4>Land</h4> <br/>
                    </div>                    
                </div>
                </a>

                <a href="/IndustryandEnergy">
                <div className='ServTyp8'>
                    <div className='add3'>
                        <div className='gg-list'> </div>
                        <h4>Industry and Energy</h4> <br/>
                    </div>
                </div>
                </a>

                <a href="/Water">
                <div class="ServTyp1">
                    <div class="add">
                        <div class="gg-drop"></div> 
                        <h4>Water</h4>
                    </div>
                </div>
                </a>

                <a href="/NatureConservation">
                <div className='ServTyp5'>
                    <div className='add3'>
                        <div className='gg-pentagon-down'> </div>
                        <h4>Nature Conservation</h4> <br/>
                    </div>
                </div>
                </a>
                
                <a href="/ClimateChanges">
                <div className='ServTyp2'>
                    <div className='add2'>
                        <div className='gg-cloud'> </div>
                        <h4>Climate Changes </h4> <br/>
                    </div>
                </div>
                </a>

                <a href="/EnvironmentalTopics">
                <div className='ServTyp6'>
                    <div className='add3'>
                        <div className='gg-trees'> </div>
                        <h4>Env Management</h4> <br/>
                    </div>
                </div>
                </a>

                </div>

            </div>
            <ScrollToTop/>
            <Chat/>
            <Footer/> 
        </div>
    );
}