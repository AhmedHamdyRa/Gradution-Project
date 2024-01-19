import React from 'react';
import Footer from '../PureComp/Footer';
import Chat from '../PureComp/Chat';
import ScrollToTop from '../PureComp/ScrollToTop';
import Header from '../UseRef/Header';

import './Lawss.css';

export default function ComplaintsandInquiries(){
    return (
        <div> 
            <Header/>
            <div className='Contineerlaw'>
                <h3 className='Heado'>The NGOs</h3>
                <div className='LawContant'>
                    <h4>About the NGOs General Department</h4>
                    <h5>Vision</h5>
                    <p>To foster building strategic effective partnership between the government and designated environmental NGOs.. </p>
                    
                    <h5>Mission</h5>
                    <p>To support the sustainable environmental endeavors of NGOs in their local communities by providing them with financial, technical, institutional, and cognitive aids considering gender engagement of both men and women through a process depends on networking and experience exchange. </p>
                    
                    <h5>Main Responsibilities</h5>
                    <ol>
                        <li>Prioritization of environmental programs and projects which require participation of civil community through the NGOs.</li>
                        <li>Develop plans and programs concerned with environment protection, through establishment of strategic partnership between governmental organizations and NGOs.</li>
                        <li>Adopting approaches & principles of good governance to motivate the role of NGOs in environment protection.</li>
                        <li>Coordinating with different relevant stakeholders inside and outside EEAA concerning the motivation of environmental NGOs’ initiatives whether governmental parties or private sector or donors.</li>
                        <li>Creation and updating database about environmental NGOs and their activities.</li>
                        <li>Design and organize environmental advocacy campaigns in collaboration with NGOs.</li>
                        <li>Provision of technical and financial support to environmental NGOs, building their capacities, and support governorates using the available mechanisms, in collaboration with pertinent stakeholders.</li>
                        <li>Assist in experience exchange between NGOs at the national and the international levels.</li>
                        <li>Monitoring and evaluating the environmental initiatives of NGOs.</li>
                        <li>Documentation and dissemination of best practices to benefit by them through seminars and periodical conferences.</li>
                    </ol>

                    <h5>Grants</h5>
                    <p>The ministry deeply believes in the importance of activating the role of NGOs in preserving the environment and contributing to solving the environmental issues facing Egypt. Hence, The NGOs General Department (NGOs GD) has taken the responsibility of supporting Civil Society Organizations working in environmental field in order to effectively contribute in solving these issues. </p>
                    
                    <h5>Terms & Conditions of Providing Grants</h5>
                    <ul>
                        <li>The NGOs GD has set a group of selection criteria to select the NGOs matching the requirements of providing grants.</li>
                        <li>The grants’ applications received and examined by professionals of NGOs GD staff to gauge the eligibility and matching grants.</li>
                        <li>All applications must comply with rules and conditions set by NGOs GD and use the application forms and supporting documents.</li>
                    </ul>
                    
                </div>
            </div>
            <ScrollToTop/>
            <Chat/>
            <Footer/>
        </div>
    );
}