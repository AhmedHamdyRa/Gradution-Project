import React from 'react';
import Footer from '../PureComp/Footer';
import Chat from '../PureComp/Chat';
import ScrollToTop from '../PureComp/ScrollToTop';
import Header from '../UseRef/Header';
import OOOne from './A laws/OOOne.pdf';
import TTTwo from './A laws/TTTwo.pdf';
import TTThere from './A laws/TTThere.pdf';

import './Lawss.css';

export default function OtherLaws(){
    return (
        <div> 
            <Header/>
            <div className='Contineerlaw'>
                <h3 className='Heado'>Other Laws</h3>
                <div className='LawContant'>
                    <h4>Other related laws and protocols</h4>
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th>Law</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1. Nature Protection Law 102/1983
                                <a href={OOOne} target="_blank" rel='noreferrer' className='Dow'>Download</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <br/>

                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th>Executive Regulation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2. Decree 44 of 2000 amending the executive regulation of Law 93 of 1962 regarding the disposal of liquid waste (Ministry of Housing)	
                                <a href={TTTwo} target="_blank" rel='noreferrer' className='Dow'> Download</a>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>

                    <br/>

                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th>Protocols</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>3. The amended protocol for the requirements for the installation of mobile phone base stations 2005
                                <a href={TTThere} target="_blank" rel='noreferrer' className='Dow'> Download</a>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>

                </div>
            </div>
            <ScrollToTop/>
            <Chat/>
            <Footer/>
        </div>
    );
}