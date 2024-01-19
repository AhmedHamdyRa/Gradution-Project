import './Home.css';
import React from 'react';
import Footer from '../PureComp/Footer';
import Chat from '../PureComp/Chat';
import ScrollToTop from '../PureComp/ScrollToTop';
import Header from  '../UseRef/Header';
import Slideshow from '../PureComp/Slideshow';
import WeatherDisplay from '../PureComp/WeatherDisplay';

import './Feature.css';
import './Pricing.css';

export default function Home(){
    return (
        <div className='Home'> 
            <Header/>  
            <div className='home'>

                <div className='homeHead'>
                    <h2>News</h2>          
                </div>

                <br/>
                <Slideshow/>
                <br/><br/><br/><br/>
                <div className='homeHead'>
                    <h2>Weather</h2>
                    <br/>
                    <WeatherDisplay />
                </div>
                <br/><br/><br/><br/>

                <div className='CardHead homeHead'>
                    <h2>Topics:</h2>
                    <h2 className='SerCards'>Services:</h2>
                </div>
                <br/>
                <div className='CardsCont homeHead'>
                    
                    <div className='TopicCont'>

                    <div className='TopicContantt card1'>
                            <div class="go-corner" href="#">
                                <a href='/NatureConservation'>
                                <div class="go-arrow">
                                    →
                                </div>
                                </a>
                            </div>
                            <div className='Contantt'>
                                <div className='gg-pentagon-down'> </div>
                                <h4>Nature Conservation</h4> <br/>
                            </div>

                        </div>

                        <div className='TopicContantt card1'>
                            <div class="go-corner" href="#">
                                <a href='Air'>
                                <div class="go-arrow">
                                    →
                                </div>
                                </a>
                            </div>
                            <div className='Contantt1'>
                                <div className='gg-live-photo'> </div>
                                <h4>Air</h4> <br/>
                            </div>
                        </div>

                        <div className='TopicContantt card1'>
                            <div class="go-corner" href="#">
                                <a href='Water'>
                                <div class="go-arrow">
                                    →
                                </div>
                                </a>
                            </div>
                            <div className='Contantt1'>
                                <div class="gg-drop"></div> 
                                <h4>Water</h4>
                            </div>
                        </div>
                        <div className='TopicContantt card1'>
                            <div class="go-corner" href="#">
                                <a href='Feature'>
                                <div class="go-arrow">
                                    →
                                </div>
                                </a>
                            </div>
                            <div className='Contantt2'>
                                <h4>For more..</h4> <br/>
                            </div>
                        </div>
                    </div>

                    <div className='LawsCont'>
                        <div className='TopicContantt card1'>
                            <div class="go-corner" href="#">
                                <a href='EIA'>
                                <div class="go-arrow">
                                    →
                                </div>
                                </a>
                            </div>
                            <div className='Contantt3'>
                                <div className='gg-repeat'> </div> 
                                <h4>Environmental Training</h4> 
                            </div>
                        </div>
                        <div className='TopicContantt card1'>
                            <div class="go-corner" href="#">
                                <a href='FundandSupport'>
                                <div class="go-arrow">
                                    →
                                </div>
                                </a>
                            </div>
                            <div className='Contantt4'>
                                <div className='gg-folder-add'> </div>
                                <h4>Fund and Support</h4>
                            </div>
                        </div>
                        <div className='TopicContantt card1'>
                            <div class="go-corner" href="#">
                                <a href='InspectionandCompliance'>
                                <div class="go-arrow">
                                    →
                                </div>
                                </a>
                            </div>
                            <div className='Contantt3'>
                                <div className='gg-search'> </div>
                                <h4>Inspect and Compliance</h4> <br/>
                            </div>
                        </div>
                        <div className='TopicContantt card1'>
                            <div class="go-corner" href="#">
                                <a href='Pricing'>
                                <div class="go-arrow">
                                    →
                                </div>
                                </a>
                            </div>
                            <div className='Contantt2'>
                                <h4>For more..</h4> <br/>
                            </div>
                        </div>
                    </div>
                </div>
                <br/><br/><br/><br/><br/>
            
            <div className='Alll homeHead'>
                <div className='Part1'>

                    <div className='RelHeads'>
                    <h2>Affiliated or Related Websites</h2>
                    <p>Visit the websites affiliated or related to the Ministry.</p>
                    </div>

                    
                    <div className='RelLink'>
                    
                        <div className='TopicContantt1 card1'>
                            
                                        <div class="go-corner" href="#">
                                        <a href='https://wims.wmra.gov.eg/'>
                                            <div class="go-arrow">
                                                →
                                            </div>
                                        </a>
                                        </div>
                                        <div className='RelContant'>
                                            <br/>
                                            <h4>WMRA Services</h4>
                                            <p>Electronic system for licenses for activities of waste and</p>
                                        </div>
                        </div>
                        
                        <div className='TopicContantt1 card1'>
                            
                                        <div class="go-corner" href="#">
                                        <a href='https://ecoegypt.org/'>
                                            <div class="go-arrow">
                                                →
                                            </div>
                                        </a>
                                        </div>
                                        <div className='RelContant'>
                                            <br/>
                                            <h4>ECO EGYPT Campaign</h4>
                                            <p>Egypt's Ecotourism Experiences</p>
                                        </div>
                            
                        </div>
                        
                        <div className='TopicContantt1 card1'>
                                        <div class="go-corner" href="#">
                                        <a href='https://epap3.com/'>
                                            <div class="go-arrow">
                                                →
                                            </div>
                                        </a>
                                        </div>
                                        <div className='RelContant'>
                                            <br/>
                                            <h4>EPAP III Program</h4>
                                            <p>Egyptian Pollution Abatement Program website</p>
                                        </div>
                            
                        </div>

                        
                        <div className='TopicContantt1 card1'>
                                        <div class="go-corner" href="#">
                                        <a href='https://cop27.eg/#/'>
                                            <div class="go-arrow">
                                                →
                                            </div>
                                        </a>
                                        </div>
                                        <div className='RelContant'>
                                            <br/>
                                            <h4>COP27 Climate Change Conference</h4>
                                            <p>Egypt official website for Conference of the Parties</p>
                                        </div>
                        </div>
                        </div>
                </div>
                <div className='Part2'></div>
            </div>

            </div>
            <ScrollToTop/>
            <Chat/>
            <Footer/>
        </div>
    );
}