import React from 'react';
import Footer from '../PureComp/Footer';
import Chat from '../PureComp/Chat';
import ScrollToTop from '../PureComp/ScrollToTop';
import Header from '../UseRef/Header';
import './Lawss.css';

export default function EIA(){
    return (
        <div> 
            <Header/>
            <div className='Contineerlaw'>
                <h3 className='Heado'>Environmental Training</h3>
                <div className='LawContant'>
                    <p>Within the framework of the keenness of EEAA on implementing a training plan for different establishments that takes into consideration the actual needs and policies of these establishments, and identifies features of scientific methodology in all its components so that this plan will be an effective tool in the hands of those in charge of environmental training for different establishments, giving the chance for all cadres to benefit from environmental training.<br/><br/>The General Department for Training "The environmental training Marketing section" provide a range of training programs that are implemented in agreement with the requesting party according to their needs in the various environmental fields.The cost is determined according to the program (duration - the number of trainees ...). The General Department for Training is ready to prepare any program which is not listed in the following table.<br/><b>Note:</b> The training program will not be implemented if the participants are less than 8 trainees.</p>
                    <h5>Training Programs</h5>
                    <table class="styled-table">
                        <thead>
                            <tr >
                                <th> </th>
                                <th>Name of the program</th>
                                <th>Duration</th>
                                <th>Targeted Group</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1. </td>
                                <td className='H1'>Nspection and environmental records</td>
                                <td className='H1'>3 days</td>
                                <td className='H1'>environmental officials in establishments and middle management</td>
                            </tr>
                            <tr>
                                <td>2. </td>
                                <td className='H1'>Hazardous waste management in medical facilities</td>
                                <td className='H1'>3 days</td>
                                <td className='H1'>Senior and middle Management</td>
                            </tr>
                            <tr>
                                <td>3. </td>
                                <td className='H1'>Environmental crisis and disaster management</td>
                                <td className='H1'>3 days</td>
                                <td className='H1'>environmental officials in establishments</td>
                            </tr>
                            <tr>
                                <td>4. </td>
                                <td className='H1'>Hazardous substances Management in the chemical industry</td>
                                <td className='H1'>3 days</td>
                                <td className='H1'>technicians and chemists and engineers</td>
                            </tr>
                            <tr>
                                <td>5. </td>
                                <td className='H1'>Rehabilitation of Environmental officials in industrial facilities</td>
                                <td className='H1'>3 days</td>
                                <td className='H1'>technicians and chemists and engineers</td>
                            </tr>
                            <tr>
                                <td>6. </td>
                                <td className='H1'>Workshop on environmental records</td>
                                <td className='H1'>2 days</td>
                                <td className='H1'>environmental officials in establishments</td>
                            </tr>
                            <tr>
                                <td>7. </td>
                                <td className='H1'>Self-monitoring and laboratory measurements for cement plants</td>
                                <td className='H1'>3 days</td>
                                <td className='H1'>technicians and chemists and engineers</td>
                            </tr>
                            <tr >
                                <td>8. </td>
                                <td className='H1'>Environmental protection in tourist facilities</td>
                                <td className='H1'>3 days</td>
                                <td className='H1'>environmental officials from tourist facilities</td>
                            </tr>
                            <tr>
                                <td>9. </td>
                                <td className='H1'>Laboratory methods for the analysis of industrial wastewater</td>
                                <td className='H1'>3 days</td>
                                <td className='H1'>technicians and chemists and engineers</td>
                            </tr>
                        </tbody>
                    </table>

                    <p>
                        <b>Venue: </b>At facilities.<br/>
                        <b>Contacts: </b>The General Department for Training.<br/>
                        <b>Tel / Fax: </b>25256480.
                    </p>

                </div>
            </div>
            <ScrollToTop/>
            <Chat/>
            <Footer/>
        </div>
    );
}