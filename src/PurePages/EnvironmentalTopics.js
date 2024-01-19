import './NatureConservation.css';
import React,{ useState } from 'react';
import Footer from '../PureComp/Footer';
import Chat from '../PureComp/Chat';
import ScrollToTop from '../PureComp/ScrollToTop';
import Header from '../UseRef/Header';

export default function Wastes(){
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
            Coastal areas
        </button>
        
        
        </div>

        <div className="concnt">
        <div
            id="London"
            className={activeTab === 'London' ? 'tabcontent' : 'tabcontent hidden'}
        >
            <h3>Integrated management of coastal, sea and lakes</h3>
            <p>
                <p>The Egyptian coast line extends over the Mediterranean and the Red Sea to about 3,200 km, with a length of the Mediterranean coast of about 1550 km and the length of the Red Sea coast is approximately 1705 km.</p>
                <p>Most coastal areas are characterized by aesthetic manifestations of environmental systems and natural habitats, which are: coastal lakes, salt dirts, clay plains, sand dunes and beaches along the Mediterranean coast, shura (mangroves) and coral reefs in the coastal area of the Red Sea in addition to the biological diversity associated with these marine and coastal habitats ( Migratory coastal birds - turtles - fish).</p>
                <p>This diversity in the resources and environmental characteristics of both the Mediterranean and the Red Sea and the different conditions and environmental characteristics of each of them, and the coastal region is exposed to severe and increasing pressure from the challenges facing the integrated coastal administration. Population growth rates and economic growth rates also represent the most important social and environmental challenges facing the integrated management of coastal areas, in addition to climate changes, which have become an important issues because of their clear impact on most coastal lands, especially low parts of them.</p>
                <p>And by the issuance of Law No. (4) for the year 1994 regarding the protection of the environment and amended by Law No. (9) of 2009 and its executive regulations No. 1095 of 2011 was entrusted with the Ministry of Environment - the Environmental Affairs Agency preparation for a national strategy for integrated coastal management, and the strategy was prepared through a comprehensive review of coastal management systems Integrated and benefit from the projects that were implemented in the field of integrated coastal administration, and the strategy included analyzing the current situation, setting priorities, drawing a road map and setting standards to measure the implementation of the strategy.</p>
            <h5>Among the most important pillars of the integrated management policy of coastal areas:</h5>
            <ol>
                <li>Issuing Environment Law No. 4 of 1994 and its executive regulations.</li>
                <li>The formation of the National Committee for the Integrated Management of coastal areas in 1994.</li>
                <li>Issuing the "Structural Program for the Preparing the National Plan for the Integrated Management of Coastal Regions in Egypt" in 1996.</li>
                <li>Preparing the guidelines for environmental impact assessment procedures in 1996.</li>
                <li>Preparing the guidelines for development in coastal areas in 1996.</li>
                <li>Coastal Water Monitoring Program starting in 1998.</li>
                <li>Preparing the second national environmental action plan in 2002.</li>
                <li>Reshaping the Supreme Committee for the Integrated Administration of coastal areas and activating them in 2007.</li>
                <li>Amending the Environment Law No. 4 of 1994 by Law No. 9 of 2009 and the executive regulations of Resolution No. 1095 of 2011 to include concepts of the integrated management protocol of coastal areas by adding materials related to the integrated management of coastal areas.</li>
            </ol>
            <h4>The national strategy adopted the integrated coastal administration on 3 main ways:</h4>
            <ul>
                <li>Enhancing support for integrated coastal management policy.</li>
                <li>Sustainable planning for coastal resources uses.</li>
                <li>Encouraging and promoting awareness among the concerned authorities.</li>
            </ul>
            <h5>Within the framework of supporting the implementation of the national strategy for the integrated coastal administration, a cooperation protocol was prepared to rehabilitate the northern lakes and the Nile River Delta. A number of guidelines were prepared, namely:</h5>
            <ol>
                <li>The guiding guide to study the evaluation of the environmental impact ports and river anchors.</li>
                <li>The guiding guide for the application of environmental management systems in seaports.</li>
                <li>The guiding guide to prevent pollution caused by ships.</li>
            </ol>
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
