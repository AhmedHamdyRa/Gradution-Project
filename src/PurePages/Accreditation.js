import React from 'react';
import Footer from '../PureComp/Footer';
import Chat from '../PureComp/Chat';
import ScrollToTop from '../PureComp/ScrollToTop';
import Header from '../UseRef/Header';

import './Lawss.css';

export default function Accreditation(){
    return (
        <div> 
            <Header/>
            <div className='Contineerlaw'>
                <h3 className='Heado'>Professional and Environmental Consulting Licensing Services (Accreditation)</h3>
                <div className='LawContant'>
                <h4>Procedures and Forms</h4>
                <p>
                Pursuant to Article (13) bis of Law No. 9 of 2009 on the protection of the environment and its Executive regulation "prohibits the non-licensed persons from EEAA to practice the environmental works".<br/>Therefore <b>EEAA opened the door for the application for the environmental accreditation as an environmental specialist or environmental consultant or an environmental consulting office.</b><br/>This can be done through submitting an application to the Chief Executive Officer of the Egyptian Environmental Affairs Agency accompanied by the available form for that purpose. <b>Application shall be sent to the following address: </b>30 Misr Helwan Agricultural Rd behind the Sofitel Hotel - Maadi - Cairo - Postal Code 11728 - Environmental Management sector - the Secretariat of the Higher Committee for Registration and accreditation in addition to paying the prescribed fee stipulated in Article 13 bis of Law 9 of 2009, attaching the payment receipt on it.
                </p>
                <br/><br/>
                <h4>Required papers to be submitted for Registration and accreditation Committee:</h4>
                <ul>
                    <li>Introducing an application to Chief Executive Officer of the Egyptian Environmental Affairs Agency with the required field of registration as an environmental specialist or environmental consultant or environmental consulting office.</li>
                    <li>Filling in form number (1) for the Environmental Specialist, form number (2) for the Environmental consultant, form number (3) for environmental Consultation Office attaching with it the following documents:
                        <ul>
                            <li>Copy of graduation certificate.</li>
                            <li>Copies of master's degrees and PHD degrees, if any.</li>
                            <li>Copies of training courses certificates related to the field or fields applied for.</li>
                            <li>A clear precedent years of experience for each field separately attaching evidence for previous experience for each year.</li>
                            <li>Criminal Record addressed to the Ministry of Environment.</li>
                            <li>Preparing an electronic version (CD) of all papers listed above.</li>
                            <li>The payment of the prescribed fees 100 Egyptian pounds as a fee for presenting the papers to the Supreme Committee for each environmental field.</li>
                            <li>After the approval of the Supreme Committee of Registration and accreditation, a payment of 1000 pounds shall be paid for certificate accreditation for each environmental field.</li>
                        </ul>
                    </li>
                </ul>
                <h4>For more information:</h4>
                <p>
                <b>Phone: </b>25256452 extension 7431.
                <br/>
                <b>Fax: </b>25256475.
                </p> 
                </div>
            </div>
            <ScrollToTop/>
            <Chat/>
            <Footer/>
        </div>
    );
}