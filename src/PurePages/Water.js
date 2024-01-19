import React,{ useState } from 'react';
import Footer from '../PureComp/Footer';
import Chat from '../PureComp/Chat';
import ScrollToTop from '../PureComp/ScrollToTop';
import Header from '../UseRef/Header';
import './Water.css';

export default function Water(){
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
            Fresh water
        </button>
        <button
            className={activeTab === 'Paris' ? 'tablinks active' : 'tablinks'}
            onClick={(e) => openCity(e, 'Paris')}
        >
            lakes
        </button>
        <button
            className={activeTab === 'Tokyo' ? 'tablinks active' : 'tablinks'}
            onClick={(e) => openCity(e, 'Tokyo')}
        >
            Wastewater
        </button>
        </div>

        <div className="concnt">
        <div
            id="London"
            className={activeTab === 'London' ? 'tabcontent' : 'tabcontent hidden'}
        >
            <h3>Fresh water</h3>
            <p>
                <h5>introduction</h5>
                <p>Water resources constitute one of the axes of development in Egypt, as it is considered one of the most important elements of the environmental system. Egypt's water needs increase as a result of the increasing population growth and its use in many different activities, including urban and tourism activities. maximum possible coverage. In view of the limited water resources and in the framework of the increasing demand for them, it was necessary to take care of those resources by preserving them and exerting all energies to make good use of them and maintain their quality continuously from the risks of pollution in a way that guarantees the rights of future generations to these resources in accordance with the strategy of Egypt’s Vision 2030 for sustainable development.</p>
                <p>The Nile River is the lifeblood of Egypt, so the state makes every effort to preserve this important resource and protect it from pollution, as many legislations, laws and regulations have been issued that limit encroachments on waterways and protect them from pollution, including the issuance of Environment Law No. 4 of 1994 and its executive regulations The state, represented by the Ministry of Environment, also undertakes to reduce pollution loads from the source and to periodically monitor the quality of the Nile water by implementing periodic monitoring programs to study and evaluate the quality of the water of the Nile and its branches, and to study the sources of pollution, the most important of which are industrial, health and agricultural drainage.</p>
                <h5>The response and efforts of the Ministry of Environment to protect the Nile River and waterways from pollution</h5>
                <p>The Ministry of Environment exerts a lot of effort and coordination with all ministries and concerned authorities to reduce pollution on the Nile River and waterways, through periodic follow-up and inspection of facilities that have direct and indirect drainage on fresh water bodies, and implement periodic monitoring programs to study and evaluate the quality of the Nile water. And its two branches (Damietta, Rashid), as the network of the Ministry of Environment includes 69 monitoring sites on the Nile River in addition to three points of the High Dam Lake (Lake Nasser), where monitoring takes place in 16 governorates (Aswan - Luxor - Qena - Sohag - Assiut - Minya - Beni Suef - Cairo - Giza - Qalyubia - Menoufia - Gharbia - Dakahlia - Damietta - Beheira - Kafr El-Sheikh) through the central laboratory and the laboratories of the regional branches of the Environmental Affairs Agency.</p>
                <p>The Ministry is also working on studying the sources of pollution on the Nile River and its two branches, and reducing pollution loads through the implementation of several axes as follows:</p>
                <h5>The first axis: environmental control and inspection and the reconciliation of environmental conditions</h5>
                <p>Through the implementation of a periodic program to inspect companies that carry out direct or indirect industrial drainage into the Nile River, and to follow up the environmental sanitation plans implemented by the facilities to reconcile their environmental conditions in accordance with the limits of the law, where the following is done:</p>
                <ul>
                    <li>The regional branches of the Environmental Affairs Agency, in partnership with the Ministry of Water Resources and Irrigation and the Industrial Development Authority, carry out extensive campaigns to inspect industrial establishments that drain into the Nile River, whether direct or indirect.</li>
                </ul>
                <h5>The second axis: completing the establishment of the real-time monitoring network</h5>
                <p>The total number of stations of the real-time monitoring network has reached (22) stations to monitor the quality of water in the waterways and the quality of the industrial wastewater of the facilities to which it is disbursed. These stations were distributed as follows:</p>
                <ul>
                    <li>Number (9) stations to monitor the water quality of the Nile River in the governorates (Aswan, Luxor, Qena, Sohag, Assiut, Minya, Beni Suef and Cairo).</li>
                    <li>Number (7) stations to monitor the quality of industrial waste water for establishments that discharge directly into the Nile River in the governorates (Aswan, Luxor, Qena, Sohag).</li>
                    <li>(1) station at the Max pump station, (3) stations to monitor the water quality in Lake Mariout.</li>
                    <li>Two (2) monitoring stations for a moment in Lake Manzala at the beautiful Boughaz and the beautiful Ashtum Boughaz.</li>
                </ul>
                <h5>The third axis: providing financing mechanisms for the implementation of projects to control industrial drainage on the Nile River</h5>
                <p>Providing technical and material support to reconcile the environmental conditions of industrial facilities, including, for example, providing support to the Abu Qurqas Sugar Factory of the Sugar and Integrated Industries Company in Minya Governorate, through an environmental protection project for the private sector and the industrial public business sector, to install a dryer for vinasse liquid in the factory in order to achieve full compatibility with the quality of Water draining on the Nile River (indirect drainage - Atledem drain).</p>
            </p>
        </div>

        <div
            id="Paris"
            className={activeTab === 'Paris' ? 'tabcontent' : 'tabcontent hidden'}
        >
            <h3> lakes</h3>
            <p>
                <p>The Mediterranean basin in northern Egypt includes five northern lakes arranged from west to east (Mariout - Idku - Burullus - Manzala - Bardawil). These lakes are of great economic importance as their fish production amounts to more than 75% of the total production in Egypt. These lakes are exposed to a number of challenges, including the shortage and decay of their area and the problems of pollution resulting from the expansion of agricultural and industrial activities and fish farms.</p>
                <p>An agreement has been reached between the Environmental Affairs Agency and the National Institute of Marine Sciences and Fisheries to implement a program of periodic monitoring of the northern lakes starting from July 2009.</p>
                <p>The Bitter and Timsah Lakes, then Qarun and Al-Rayyan Lakes were added to the monitoring program in 2010 and 2011, respectively.</p>
                <p>The periodic monitoring program for Egyptian lakes aims to:</p>
                <ul>
                    <li>Repel water quality and sediment lakes.</li>
                    <li>Evaluate the current environmental and geological status of each lake.</li>
                    <li>Establishing a comprehensive database of lakes based on quality control and quality assurance work, which will be relied upon in the management of all these lakes.</li>
                </ul>
            </p>
        </div>

        <div
            id="Tokyo"
            className={activeTab === 'Tokyo' ? 'tabcontent' : 'tabcontent hidden'}
        >
            <h3> Wastewater</h3>
            <p>
                <h5>The national network for real-time continuous monitoring of wastewater quality</h5>
                <p>Guidelines for the process of electronically linking the final sewage of the establishments to the national network for continuous monitoring of the quality of industrial wastewater (first edition - September 2019).</p>
                <p>Note: Please refer to the environmental monitoring reports and guides to obtain the electronic link guide to the national network for continuous real-time monitoring of wastewater quality.</p>
                <h5>industrial drainage</h5>
                <h5>Guidelines for industrial drainage, handling samples, and assessment of pollution loads</h5>
                <p>The guideline for industrial drainage aims to define the types of pollutants and the negative effects of industrial drainage and the loads of specific pollution related to the various wastes in industrial drainage for a number of important industries attributed to the production unit of the industrial product or inputs, which would contribute to an effective role in evaluating the efficiency of industrial processes and evaluating the quality of wastewater The guide also addresses the definition of best practices when dealing with industrial wastewater and some voluntary initiatives that can be used to improve environmental performance to facilitate compliance with laws and regulations, leading to continuous improvement in the environmental performance of industrial facilities.</p>
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
