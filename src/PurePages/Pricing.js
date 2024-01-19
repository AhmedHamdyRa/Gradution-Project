import React from 'react';
import './Pricing.css';
import Footer from '../PureComp/Footer';
import Chat from '../PureComp/Chat';
import Header from '../UseRef/Header';
import ScrollToTop from '../PureComp/ScrollToTop';

export default function Pricing(){
    return (
        <div className='Pricing'>
            <Header/>
            <div className='Serv'>
                <div className='HeadServ'>
                <h2>Ministry Services</h2>
                <p>The Ministry provides a number of services to citizens and investors.</p>
                </div>

                
                <div className='ServTypes'>

                <a href="/EIA">
                <div className='ServTyp'>
                    <div className='gg-repeat'> </div> 
                    <h4>Environmental Training</h4> 
                    <p>Within the framework of the keenness of EEAA on implementing a training plan for different... </p>
                </div>
                </a>

                <a href="FundandSupport">
                <div className='ServTyp'>
                    <div className='gg-folder-add'> </div>
                    <h4>Fund and Support</h4> <br/>
                    <p>The EPF provides information about the financial assistance to implement... </p>
                </div>
                </a>

                <a href="InspectionandCompliance">
                <div className='ServTyp'>
                <div className='gg-list'> </div>
                    <h4>Inspection and Compliance</h4> <br/>
                    <p>Environmental inspection aims at supporting and enhancing environment and public health... </p>
                </div>
                </a>

                <a href="Accreditation">
                <div className='ServTyp'>
                    <div className='gg-credit-card'> </div>
                    <h4>Accreditation</h4> <br/>
                    <p>Procedures and Forms Pursuant to Article (13) bis of Law... </p>
                </div>
                </a>

                <a href="CoalHandlingProcedures">
                <div className='ServTyp'>
                    <div className='gg-smart-home-boiler'> </div>
                    <h4>Ozone</h4> <br/>
                    <p>Ozone Unit Services which can hel.... </p>
                </div>
                </a>

                <a href="ComplaintsandInquiries">
                <div className='ServTyp'>
                <div className='gg-search'> </div>
                    
                    <h4>The NGOs</h4> <br/>
                    <p>About the NGOs General Department... </p>
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