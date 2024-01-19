import React from 'react';
import './Footer.css';

export default function Footer(){
        return (
        <footer class="footer">

                <div className='top'>
                        <a href="/Feature">
                        <h3>Topic</h3>
                        </a>
                        <p>
                        <a href="/Air">Air</a><br/>
                        <a href="/Water">Water</a><br/>
                        <a href="/Wastes">wastes</a><br/>
                        <a href="/climateChanges">climate Changes</a><br/>
                        <a href="/NatureConservation">Nature Conservation</a><br/>
                        <a href="/EnvironmentalTopics">Env Management</a>
                        </p>
                </div>

                <div className='top1'>
                        <a href='/Pricing'>
                        <h3>Service</h3>
                        </a>
                        <p>
                        <a href="/EIA">Environmental Training</a><br/>
                        <a href="FundandSupport">Fund and Support</a><br/>
                        <a href="InspectionandCompliance">Inspection and Compliance</a><br/>
                        <a href="Accreditation">Accreditation</a><br/>
                        <a href="CoalHandlingProcedures">Ozone</a><br/>
                        <a href="ComplaintsandInquiries">The NGOs</a></p>
                </div>

                <div className='top3'>
                        <h3>Laws</h3>
                        <p>
                        <a href='EnvironmentalProtectionLaw'>Env Protection Law</a><br/>
                        <a href='WasteManagementRegulationLaw'>Waste Management Law</a><br/>
                        <a href='OtherLaws'>Other Laws</a><br/>
                        <a href='MinisterialDecrees'>Ministerial Decrees</a><br/>
                        </p>
                </div>

                <div className='line'></div>

                <div className='top2'>
                        <h3>Contact Us:</h3>
                        <div className='connect'>
                                <span className='gg-facebook'></span> <span className='gg-instagram'></span> <span className='gg-twitter'></span>
                        </div>
                </div>

        </footer>    
);
}