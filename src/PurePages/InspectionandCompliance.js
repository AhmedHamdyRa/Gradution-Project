import React,{ useState } from 'react';
import Footer from '../PureComp/Footer';
import Chat from '../PureComp/Chat';
import ScrollToTop from '../PureComp/ScrollToTop';
import Header from '../UseRef/Header';
import './Air.css';
import './Lawss.css';

import H from './A laws/H.pdf';
import N from './A laws/N.pdf';

export default function InspectionandCompliance(){
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
            About Environmental Inspection and Compliance
        </button>
        <button
            className={activeTab === 'Paris' ? 'tablinks active' : 'tablinks'}
            onClick={(e) => openCity(e, 'Paris')}
        >
            Reconciliation Procedures
        </button>
        </div>

        <div className="concnt">
        <div
            id="London"
            className={activeTab === 'London' ? 'tabcontent' : 'tabcontent hidden'}
        >
            <h3>About Inspection and Environmental Compliance</h3>
            <p>
            Environmental inspection aims at supporting and enhancing environment and public health as pollution from industrial plants have a harmful impact not only on the environment but also on human health. Therefore, many of the procedures applied by industrial plants can mitigate the adverse environmental impacts that cause threat for workers’ health, as well as residents in areas affected by industrial Emissions. Consequently, the effectiveness of the inspection process leads to the environmental and public health protection.<br/>Environmental inspection process includes many aspects related to each other, and it includes planning, executive procedures and data side. EEAA affiliated authorities conduct different types of inspection such as comprehensive / periodical / inspection as a result of a complaint.
            </p>
            <h4>Inspection Objectives:</h4>
            The overall objectives of the inspection are as following:
            <ul>
                <li>Verification of facilities' compliance with environmental applicable laws and legislations.</li>
                <li>Determining the impact of any facility on the environment.</li>
                <li>Urging facilities to comply with Law No. 4/1994 by filling lawsuits to apply legal sanctions (violations, misdemeanors, felonies) on offense facilities.</li>
                <li>Supporting environmental performance of industrial facilities through guiding it for technical and financial support of EEAA and to provide assistance in many areas, including waste control, waste treatment and efficiency of treatment processes, the application of self-monitoring systems and application of programs to reduce pollution at source.</li>
            </ul>
            <br/>
            <h4>Environmental Inspection Tasks:</h4>
            <p>There are two tasks for environmental inspectors, the Judicial enforcement officers and administrative control. The inspectors conduct a series of actions in case of periodical inspection, while the task of Judicial enforcement officers starts when the violation starts. The environmental inspectors who are holding attribute of Judicial enforcement officers, whose names are issued by a decree of the Minister of Justice.<br/><br/><b>Note: </b>Manuals for Environmental Self-monitoring are available on the Projects Page (EPAP I).</p>
        
            
        </div>

        <div
            id="Paris"
            className={activeTab === 'Paris' ? 'tabcontent' : 'tabcontent hidden'}
        >
            <h3>Reconciliation Procedures</h3>
            <p>
            Reconciliation procedures and crimes stipulated in the Environmental Law and its amendments, and the extent to which reconciliation is possible.
            </p>
            <table class="styled-table">
                        <thead>
                            <tr>
                                <th>Law</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                                <td>1. Articles of the Environmental Law in which reconciliation is permissible
                                <a href={H} target="_blank" rel='noreferrer' className='Dow'> Download</a>
                                </td>
                                
                            </tr>
                            <tr>
                                <td>2. Crimes stipulated in the Environmental Law and its amendments, and the extent to which they can be reconciled
                                <a href={N} target="_blank" rel='noreferrer' className='Dow'> Download</a>
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
                                <td>3. Environmental violations reconciliation request form
                                <a href={H} target="_blank" rel='noreferrer' className='Dow'> Download</a>
                                </td>
                                
                            </tr>
                        </tbody>
                    </table>
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th>Procedures</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                                <td>4. Reconciliation procedures
                                <a href={H} target="_blank" rel='noreferrer' className='Dow'> Download</a>
                                </td>
                                
                            </tr>                           
                        </tbody>
                    </table>
        </div>
        </div>
            
    </div>

    <Footer/>
    <ScrollToTop/>
    <Chat/>
    

    </div>
);
}
