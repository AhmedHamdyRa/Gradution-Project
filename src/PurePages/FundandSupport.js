import './NatureConservation.css';
import React,{ useState } from 'react';
import Footer from '../PureComp/Footer';
import Chat from '../PureComp/Chat';
import ScrollToTop from '../PureComp/ScrollToTop';
import Header from '../UseRef/Header';

import './Lawss.css';
import ApplicationForm from './A laws/ApplicationForm.doc';

export default function FundandSupport(){
    const [activeTab, setActiveTab] = useState('London');

    function openCity(evt, cityName) {
        setActiveTab(cityName);
    }

    return (
    <div className="EnvironmentalTopics">
        <Header/>
    <div className="tab">
        
        <div className="btncnt">
        <button
            className={activeTab === 'London' ? 'tablinks active' : 'tablinks'}
            onClick={(e) => openCity(e, 'London')}
        >
            Support from Environmental Protection Fund
        </button>
        <button
            className={activeTab === 'Paris' ? 'tablinks active' : 'tablinks'}
            onClick={(e) => openCity(e, 'Paris')}
        >
            Support from Egyptian Pollution Abatement Project
        </button>
        
        </div>

        <div className="concnt">
        <div
            id="London"
            className={activeTab === 'London' ? 'tabcontent' : 'tabcontent hidden'}
        >
            <h3>Environmental Protection Fund - EPF</h3><br/><br/>         
            <p>The EPF provides information about the financial assistance to implement environmental projects according to the Environmental law 4/1994 and 9/2009.<br/>If you believe that you have a suitable project, fill out the Application Form , and submit it to the EPF.</p>
            <br/>
            <table class="styled-table">
                        <thead>
                            <tr>
                                <th>Forms</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                                <td>1. Application Form (Ar)
                                <a href={ApplicationForm} target="_blank" rel='noreferrer' className='Dow'> Download</a>
                                </td>
                            </tr>
                            </tbody>
                    </table>
                    <br/><br/><br/><br/><br/><br/>
        </div>

        <div
            id="Paris"
            className={activeTab === 'Paris' ? 'tabcontent' : 'tabcontent hidden'}
        >
            <h3> Egyptian Pollution Abatement Project</h3><br/>
            <p>
            The Egyptian Pollution Abatement Programme is a major initiative of the Ministry of Environment to help industry improve performance and comply with environmental regulations. Eligible industries can take advantage of funds available through the Egyptian Pollution Abatement Project.
            </p>
            <table class="styled-table">
                        <thead>
                            <tr>
                                <th>Procedures</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                                <td>1. Project Brief (in Arabic)
                                <a href={ApplicationForm} target="_blank" rel='noreferrer' className='Dow'> Download</a>
                                </td>
                            </tr>
                            </tbody>
                    </table>
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th>Forms</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                                <td>2. Application Form (Ar)
                                <a href={ApplicationForm} target="_blank" rel='noreferrer' className='Dow'> Download</a>
                                </td>
                            </tr>
                            </tbody>
                    </table>
                    <br/><br/>
        </div>

        
        </div>
            
    </div>

    <Footer/>
    <ScrollToTop/>
    <Chat/>
    

    </div>
);
}
