import React from 'react';
import Footer from '../PureComp/Footer';
import Chat from '../PureComp/Chat';
import ScrollToTop from '../PureComp/ScrollToTop';
import Header from '../UseRef/Header';
import One from './A laws/One.pdf';
import Two from './A laws/Two.doc';
import Four from './A laws/Four.pdf';
import Five from './A laws/Five.doc';
import Six from './A laws/Six.pdf';
import Seven from './A laws/Seven.pdf';
import Eight from './A laws/Eight.pdf';
import Nine from './A laws/Nine.pdf';
import Ten from './A laws/Ten.pdf';
import './Lawss.css';

export default function EnvironmentalProtectionLaw(){
    return (
        <div> 
            <Header/>
            <div className='Contineerlaw'>
                <h3 className='Heado'>Environmental Protection Law</h3>
                <div className='LawContant'>
                    <h4>Law 4/1994 for the Protection of the Environment Amended by Law 9/2009 and the Executive Regulation </h4>
                    <p><b>Law 4/1994</b>, has a greater role with respect to all governmental sectors as a whole. The law has been designated as the highest coordinating body in the field of the environment that will formulate the general policy and prepare the necessary plans for the protection and promotion of the environment. It will also, follow-up the implementation of such plans with competent administrative authorities.<br/>The original text of the Act is in Arabic, and it is the one authorized official version.<br/>The English translation can, therefore, only be considered as an aid to information dissemination.</p>
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th>Law</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1. Law 4/1994 for the Protection of the Environment Amended by Law 9/2009
                                <a href={One} target="_blank" rel='noreferrer' className='Dow'>Download</a>
                                </td>
                            </tr>
                            <tr class="active-row">
                                <td>2. Law 4/1994 for the Protection of the Environment Amended by Law 9/2009
                                <a href={Two} target="_blank" rel='noreferrer' className='Dow'> Download</a>
                                </td>
                                
                            </tr>
                            <tr>
                                <td>3. Law 105 for 2015, Ammendment of Law 4 in Arabic
                                <a href={Four} target="_blank" rel='noreferrer' className='Dow'> Download</a>
                                </td>
                                
                            </tr>
                            <tr class="active-row">
                                <td>4.Nature Protection Law 102/1983
                                <a href={Four} target="_blank" rel='noreferrer' className='Dow'> Download</a>
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
                                <td>5. Executive Regulation of the Environment Law ammended in 2005 in Arabic
                                <a href={Five} target="_blank" rel='noreferrer' className='Dow'> Download</a>
                                </td>
                            </tr>
                            <tr class="active-row">
                                <td>6. PM Decree 1095 of 2011 amending some provisions of the Regulation 
                                <a href={Six} target="_blank" rel='noreferrer' className='Dow'> Download</a>
                                </td>
                            </tr>
                            <tr>
                                <td>7. PM Decree 964 of 2015 amending some provisions of the Regulation in Arabic
                                <a href={Seven} target="_blank" rel='noreferrer' className='Dow'> Download</a>
                                </td>
                            </tr>
                            <tr class="active-row">
                                <td>8. PM Decree 544 of 2016 amending some provisions of the Regulation in Arabic
                                <a href={Eight} target="_blank" rel='noreferrer' className='Dow'> Download</a>
                                </td>
                            </tr>
                            <tr>
                                <td>9.  PM Decree 618 of 2017 amending some provisions of the Regulation in Arabic
                                <a href={Nine} target="_blank" rel='noreferrer' className='Dow'> Download</a>
                                </td>
                            </tr>
                            <tr class="active-row">
                                <td>10. PM Decree 1963 of 2017 amending some provisions of the Regulation in Arabic
                                <a href={Ten} target="_blank" rel='noreferrer' className='Dow'> Download</a>
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