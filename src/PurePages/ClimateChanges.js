import './ClimateChanges.css';
import React,{ useState } from 'react';
import Footer from '../PureComp/Footer';
import Chat from '../PureComp/Chat';
import ScrollToTop from '../PureComp/ScrollToTop';
import Header from '../UseRef/Header';

export default function ClimateChanges(){
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
            About climate changes
        </button>
        <button
            className={activeTab === 'Paris' ? 'tablinks active' : 'tablinks'}
            onClick={(e) => openCity(e, 'Paris')}
        >
            Mitigation and CDM
        </button>
        <button
            className={activeTab === 'Tokyo' ? 'tablinks active' : 'tablinks'}
            onClick={(e) => openCity(e, 'Tokyo')}
        >
            Risk and Adaptation
        </button>
        </div>

        <div className="concnt">
        <div
            id="London"
            className={activeTab === 'London' ? 'tabcontent' : 'tabcontent hidden'}
        >
            <h3>About climate changes</h3>
            <p>
                <p>The phenomenon of climate change has been distinguished from most other environmental problems in that it is global in nature, as it has crossed the borders of countries to pose a threat to the whole world. The steady increase in surface air temperatures over the globe as a whole has been confirmed as the global average has increased by 0.3 to 0.6 degrees over the past 100 years.</p>
                <p>Studies of the Intergovernmental Panel on Climate Change (IPCC) have indicated that this continuous rise in the global average temperature will lead to many serious problems such as sea level rise threatening to flood some areas of the world, as well as the impact on water resources and crop production, in addition to spread of some diseases.</p>
                <h5>National liaison coordinator</h5>
                <h6>Engineer / Sherif Abdel Rahim</h6>
                <p>Head of the Central Department of Climate Change</p>
                <p>National Liaison Coordinator for the United Nations Framework Convention on Climate Change</p>
                <h6>T/Fax:</h6>:25246162 (02- 2+ )
                <h6>E-mail:</h6>unfccc_eg.cccu@yahoo.com
            </p>
        </div>

        <div
            id="Paris"
            className={activeTab === 'Paris' ? 'tabcontent' : 'tabcontent hidden'}
        >
            <h3> Mitigation and CDM</h3>
            <p>
                <h5>Mitigation</h5>
                It is intended to reduce greenhouse gas emissions from various sectors through the use of clean technology, fuel substitution, and the use of renewable energies (wind - sun - watershed - and vitality).
                <h5>CDM</h5>
                It is one of the mechanisms for implementing the Kyoto Protocol, which allows industrial countries to fulfill their obligations to reduce emissions by purchasing a share of the emissions that are reduced in developing countries.

            </p>
        </div>

        <div
            id="Tokyo"
            className={activeTab === 'Tokyo' ? 'tabcontent' : 'tabcontent hidden'}
        >
            <h3>Risk and Adaptation</h3>
            <p>
                <h5>Risk</h5>
                It refers to the degree of vulnerability of a particular place or ecosystem to the risks of climate change impacts, such as the threat resulting from sea level rise, which will lead to the drowning of inhabited parts and the destruction of fertile lands, and the threat resulting from the lack of water resources, as well as the spread of diseases.
                <h5>daptation</h5>
                It is intended to respond to the returns of climate change and coexist with the conditions resulting from those conditions, such as developing new strains of crops that tolerate salinity and high temperature, the optimal use of water resources through the application of water rationing policies and the rationalization of consumption.
                
            </p>
        </div>
        </div>
            
    </div>

    <Footer/>
    <ScrollToTop/>
    <Chat/>
    

    </div>
);
}
