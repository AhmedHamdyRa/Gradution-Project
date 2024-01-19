import React from 'react';
import Footer from '../PureComp/Footer';
import Chat from '../PureComp/Chat';
import ScrollToTop from '../PureComp/ScrollToTop';
import Header from '../UseRef/Header';
import OOne from './A laws/OOne.pdf';
import TTwo from './A laws/TTwo.pdf';

import './Lawss.css';

export default function WasteManagementRegulationLaw(){
    return (
        <div> 
            <Header/>
            <div className='Contineerlaw'>
                <h3 className='Heado'>Waste Management Regulation Law</h3>
                <div className='LawContant'>
                    <h4>Law 202 for 2020 promulgating the Waste Management Regulation Law  and the Executive Regulation</h4>
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th>Law</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1. Law 202 for 2020 promulgating the Waste Management Regulation Law
                                <a href={OOne} target="_blank" rel='noreferrer' className='Dow'>Download</a>
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
                                <td>2. Executive Regulation of Law 202 of 2020
                                <a href={TTwo} target="_blank" rel='noreferrer' className='Dow'> Download</a>
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