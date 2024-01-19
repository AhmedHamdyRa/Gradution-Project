import React,{ useState } from 'react';
import Footer from '../PureComp/Footer';
import Chat from '../PureComp/Chat';
import ScrollToTop from '../PureComp/ScrollToTop';
import Slideland from '../PureComp/Slideland';
import './Land.css';
import Header from '../UseRef/Header';

export default function Land(){
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
            Afforestation and forests
        </button>
        
        </div>

        <div className="concnt">
        <div
            id="London"
            className={activeTab === 'London' ? 'tabcontent' : 'tabcontent hidden'}
        >
            <h3>Afforestation, forests and nurseries</h3>
            <p>
            <h4>Introduction</h4> 
            <p>Trees are one of the most important elements of the natural environment, and they represent one of the elements of renewable natural resources that maintain the environmental balance, and without trees, human life would become unsustainable, and the best evidence for this is what many international agreements and conferences called for, to preserve trees for generations Trees contribute significantly to improving air quality, especially in cities with high levels of pollution and mitigating the effects of climate change, as planting trees increases the ability to sequester carbon emissions, as trees absorb a large amount of carbon dioxide that results from various development activities and the release of oxygen, in addition to absorbing Some toxic compounds from the air. The average tree absorbs 1.7 kg of carbon dioxide per day and produces 120 liters of oxygen. Seven trees are required to remove the polluting effects of one car. An acre of trees removes 2.6 tons of carbon dioxide from the atmosphere annually.</p>
            <p>Trees also contribute significantly to combating the phenomenon of desertification, soil stabilization, prevention of sand encroachment, windbreaks and dust storms, and an important source for wood production, which limits imports, provides difficult work, and increases biodiversity in urban areas. Preserving and protecting trees is our responsibility all in order to preserve our natural resources. Therefore, efforts must be concerted among all members of society and the necessary legislation and laws are issued to protect trees from encroachment on them by cutting them down and addressing this with addressing urban encroachment on agricultural lands and launching awareness campaigns on how to preserve trees, and coordinating with local agencies to maintain trees, replace and renew what is damaged and pruning trees by roads Correct scientific at the hands of specialists.</p>
            <p>The call to plant gardens, parks, and even the rooftops of homes, schools, universities, and government institutions is a matter that deserves attention because of what it achieves in terms of environmental, health, agricultural, social development, and economic goals. The state seeks to increase the per capita share of green spaces, by intensifying afforestation works in various governorates of Egypt, in addition to increasing the green spaces in new cities, as it was planned in establishing new cities that the per capita share should not be less than 15 m, which is the global average (the administrative capital).</p>
            <Slideland/>
            <h5>Afforestation projects</h5>
            <h5>Objectives:</h5>
            <p>Increasing per capita green spaces, improving air quality, and combating desertification</p>
            <h5>Afforestation of the most polluted areas:</h5>
            <p>Where the Ministry annually plants one of the most abundant areas, where the areas of Helwan, Shubra Al-Kheima, Al-Khanka, Abu Zaabal, Al-Tebbin and Al-Maasara have been planted with a total number of trees approximately 30 thousand trees</p>
            <h5>Project of landscaping schools, universities and institutes:</h5>
            <p>The ministry planted these places nationwide with 50,000 trees annually</p>
            <h5>Landscaping project for main roads and squares:</h5>
            <p>Where the Ministry plants the main roads in coordination with the General Authority for Roads and Bridges, where the ring road and Wadi al-Natrun road, Alamein, have been planted with 17 thousand trees, in addition to planting the squares (Turimenf), Almaza, and the streets of Heliopolis</p>
            <h5>Rooftop project:</h5>
            <p>The project aims to exploit the roofs to grow varieties of vegetables and plants to provide food, solve the problem of unemployment and improve air quality. The Ministry has implemented a pilot training project on the roofs of the Ministry of Environment in Fustat to benefit from it environmentally, socially and economically. This project will be a training center for school students, where every 1 m2 planted from the roof can It removes about 100g of pollutants annually</p>
            <h5>Afforestation project, decent life villages:</h5>
            <p>The project aims to afforestation of decent life villages in order to provide a healthy environment for citizens, create job opportunities, combat desertification and increase the per capita share of green spaces. With a total of 500,000 trees for the two phases, varieties were chosen to suit the environment of each governorate, which have low water needs and are easy to care for and bear the harsh environmental conditions, whether fruit trees or ornamental trees.</p>
            <h5>Future vision:</h5>
            <p>The Ministry of the Environment is intensifying efforts to add more green spaces, plant trees, support and environmental awareness, and establish gardens, whether in schools, universities, public places, or new urban communities, as well as support civil associations because of the environmental, health, aesthetic, and tourism effects of great benefit to society. In addition to combating desertification, and with the continuous increase in quantities of Sewage water, which is treated, and the successive establishment of treatment plants throughout the Republic during the years of the plan. The Ministry of Environment, in cooperation with all relevant ministries, attaches great importance to the progress of work and the cultivation of more tree forests and green belts around the Ring Road of Greater Cairo and with the intersecting roads and around the new and industrial cities.</p>
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
