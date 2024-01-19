import React from 'react';
import Footer from '../PureComp/Footer';
import Chat from '../PureComp/Chat';
import ScrollToTop from '../PureComp/ScrollToTop';
import Header from '../UseRef/Header';
import Q1 from './A laws/Q1.pdf';

import './Lawss.css';

export default function CoalHandlingProcedures(){
    return (
        <div> 
            <Header/>
            <div className='Contineerlaw'>
                <h3 className='Heado'>Ozone</h3>
                <div className='LawContant'>
                    <h4>Ozone Unit Services </h4>
                    <h5>Contacts:</h5>
                    <p><b>Address: </b>4 Abd El Wahab Selim St, from Misr - Helwan Agricultural RD, Maadi - Cairo.<br/><b>P.O: </b>11728.<br/><b>Tel: </b>01281071060.<br/><b>WhatsApp: </b>01272232324.<br/><b>Fax: </b>25256490.<br/><b>E.mail: </b>ozone.egypt@gmail.com. </p>
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th>Guides</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1. Customs guide for the import and export of controlled substances in accordance with the Montreal Protocol and its amendments
                                <a href={Q1} target="_blank" rel='noreferrer' className='Dow'>Download</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <br/>
                </div>
            </div>
            <ScrollToTop/>
            <Chat/>
            <Footer/>
        </div>
    );
}