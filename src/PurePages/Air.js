import React,{ useState } from 'react';
import Footer from '../PureComp/Footer';
import Chat from '../PureComp/Chat';
import ScrollToTop from '../PureComp/ScrollToTop';
import Header from '../UseRef/Header';
import './Air.css';

export default function Air(){
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
            Air Pollutant Monitoring Network
        </button>
        <button
            className={activeTab === 'Paris' ? 'tablinks active' : 'tablinks'}
            onClick={(e) => openCity(e, 'Paris')}
        >
            Health Effects
        </button>
        <button
            className={activeTab === 'Tokyo' ? 'tablinks active' : 'tablinks'}
            onClick={(e) => openCity(e, 'Tokyo')}
        >
            Air Pollutants
        </button>
        </div>

        <div className="concnt">
        <div
            id="London"
            className={activeTab === 'London' ? 'tabcontent' : 'tabcontent hidden'}
        >
            <h3>National Network for Monitoring Ambient Air Pollutants</h3>
            <p>The National Network for Monitoring Ambient Air Pollutants of the Environmental Affairs Agency is one of the basic tools for collecting data and information on air quality and analyzing it to give a clear picture of air quality in selected places, to assess pollution rates and compare them with locally and internationally permissible limits.
                It is also the main reference for preparing environmental indicators of air quality. , as well as the basis for examining the extent of change over the previous years, as it does the following:
                <ul>
                    <li>Giving a general picture of the air pollution rates in the monitoring areas and following up the temporal development of these rates. Giving a general picture of the air pollution rates in the monitoring areas and following up the temporal development of these rates.</li>
                    <li>Possibility to compare pollution rates in different places.</li>
                    <li>Evaluation of pollution rates and their comparison with locally and internationally permitted limits.</li>
                </ul>
                The number of monitoring network stations reached 120 monitoring stations distributed in all different regions of the Republic according to the following classification:
                <ul>
                    <li>20 industrial zones.</li>
                    <li>63 urban and residential areas.</li>
                    <li>11 traffic zones.</li>
                    <li>The reference areas are 2 stations.</li>
                    <li>Areas of intertwined nature, 22 stations.</li>
                    <li>A mobile station for monitoring air pollutants, consisting of 2 stations.</li>
                </ul>
            </p>
        </div>

        <div
            id="Paris"
            className={activeTab === 'Paris' ? 'tabcontent' : 'tabcontent hidden'}
        >
            <h3>Health Effects</h3>
            <p>
                <p>Severe waves of pollution result from the outcome of an increase in the concentration of some pollutants in the air as a result of unfavorable weather conditions. Where these waves occur due to an atmospheric phenomenon known as the thermal inversion, which results in the retention of harmful gases polluting the air near the surface of the earth, and with the calm of the winds, the pollution remains constant in the air until the weather conditions improve.</p>
                <h5>Health hazards of air pollution</h5>
                <p>Pollution leads to many short-term and chronic respiratory diseases, and it greatly affects children, asthmatics, and those who exercise outdoors. Where the speed of breathing increases the amount of pollutants that a person inhales.</p>
                <h6>Measures to be taken to reduce the impact of acute pollution attacks on individuals:</h6>
                <ul>
                    <li>Children should refrain from playing outdoors when a seizure occurs.</li>
                    <li>Children, the elderly, pregnant women and sick people must be in enclosed spaces during times of acute contamination</li>
                    <li>Minimize direct exposure to sunlight</li>
                    <li>Drinking beverages and fluids, especially water, to replace the body's loss of water on a regular basis.</li>
                    <li>In the event that workers in open areas feel symptoms of illness, they must enter closed places.</li>
                    <li>You should refrain from exercising in open places.</li>
                    <li>Close the windows when the seizure occurs.</li>
                    <li>Spray water from the sprayer in the air inside the house and on the curtains until the suspended particles settle in the air.</li>
                    <li>Wear sunglasses when going out to protect your eyes.</li>
                </ul>
                <h5>Question and Answer:</h5>
                <ul>
                    <li>What should I do if I was out of the house at the time of the crisis?.</li>
                    <p>It is necessary to hurry to closed places and reduce the duration of being in open places as much as possible. A wet tissue should also be placed on the nose to reduce inhalation of pollutants. Those who organize any outdoor activities, whether sports or entertainment, must transfer these activities to closed places.</p>
                    <li>How can air pollution be reduced?</li>
                    <p>Pollution can be reduced through several methods, such as banning the open burning of solid waste, stopping incinerators of all kinds, voluntarily reducing the number of used cars, not allowing cars to enter the city center, stopping all industries that use diesel fuel in residential areas, increasing the supply of natural gas to electric power stations, and stopping any works that use wood burning. Or rubber, coal, or plastic....etc</p>
                    <li>How can I, as a citizen, contribute to reducing air pollution?</li>
                    <p>If you are a car owner, you must conduct a periodic test for your car’s exhaust, use mass transportation, reduce the use of the car as much as possible, and share several people in one car to go to the same places.
It is necessary to refrain from burning garbage, because burning it produces pollutants that cause human diseases, including dioxin, which is a carcinogen.
Reducing the operation of air conditioners and limiting the use of electricity because power stations produce air pollutants. Preventing smoking and fighting it everywhere.</p>
                    <li>What are the preparations of the Ministry of Health to face this crisis?</li>
                    <p>In emergencies, all hospitals will be fully prepared to receive emergency cases.</p>
                    <li>How do we get accurate information during a bout of pollution?</li>
                    <p>By following up the media that are currently being coordinated with to issue accurate data on air quality indicators as well as weather forecasts.</p>
                </ul>
            </p>
        </div>

        <div
            id="Tokyo"
            className={activeTab === 'Tokyo' ? 'tabcontent' : 'tabcontent hidden'}
        >
            <h3>Air Pollutants</h3>
            <p><br/>
                Protecting the air from pollution is one of the main lines of action of the Ministry and its executive body, which is reflected in the long-term commitment to this issue as expressed in the five-year action plan. This comes in line with the continuous efforts in implementing the existing environmental legislations, as air quality is one of the main issues in Environment Law No. 4 of 1994.
                <br/> <br/> A group of environmental pollutants has been selected to be monitored by the Environmental Information and Monitoring Program, which have a direct impact on public health and facilities, and through monitoring their concentrations, it is possible to evaluate the air quality in the areas where the measurement takes place. These pollutants include:
                <br/> <br/> <h5>1. Nitrogen oxides</h5><p>Nitrogen dioxide (NO2) is one of the most important nitrogen oxides present in the atmosphere, and it is with nitrogen monoxide (NO) what is known as the total nitrogen oxides (Nox), and they are the most abundant nitrogen oxides that are generated by humans in urban and urban areas. Nitrogen oxides are formed as a result of all combustion processes that take place at high temperatures. Although nitrogen monoxide is the main product, it is not considered to have a bad effect on human health due to the small concentrations in the surrounding air.</p>
                <p>Traffic emissions are the main source of nitrogen oxides, while some small concentrations are produced from power stations and some other industrial sources. However, emissions from power stations and industrial areas are in most cases higher than those of monitoring stations. Their height helps the rapid spread of pollutants in the atmosphere. Therefore, traffic emissions are considered to be primary source.</p>
                <h5>2. Sulfur dioxide</h5><p>Sulfur dioxide (SO2) is formed as a result of the oxidation of sulfur residues present in some fuels during combustion. Power plants produce a large amount of sulfur dioxide, in addition to the quantities generated from some other industrial areas that use petroleum fuels, especially diesel fuel, as fuel for energy production.</p>
                <p>And although sulfur dioxide is not emitted from cars that are run on gasoline (whether added or not), cars that are run by diesel (diesel) produce a significant amount of sulfur dioxide, which clearly affects the concentrations in traffic areas. The open burning of organic waste is also a source of sulfur dioxide.</p>
                <h5>3. The suspended particles are less than 10 μm</h5> <p>In recent years, there has been a noticeable focus on the concentrations of suspended particles in the air, and the focus was more clearly on suspended particles less than 10 micrometers due to their danger to public health, as they are inhaled more and settle in the lungs to cause health problems after that. Traffic emissions represent One of the main sources of dust suspended in the atmosphere, which is stirred up by the wind. The open burning of all kinds of waste is also an important source of chest dust. This is in addition to industrial emissions. There is also another source of dust in Egypt resulting from the dry and desert nature of most regions, which represents a source For dust when the wind blows, even if it is less dangerous than other sources.</p>
                <h5>4. Carbon monoxide</h5><p>The main source of carbon monoxide is traffic emissions, but the amount of emissions is significantly affected by the speed of the car and the efficiency of its engine, and it is at its highest rate when the car speed is at its lowest rate.</p>
                <h5>5. Ozone</h5><p>Ozone gas concentrations are found in the atmosphere as a result of the presence of ozone in the stratosphere, in addition to the concentrations that are emitted from the troposphere. Therefore, ozone concentrations depend on the location in which the monitoring takes place and the time in which the monitoring takes place. However, ozone concentrations decrease significantly as a result of the interaction of ozone with Some other pollutants in the atmosphere such as nitrogen oxides.</p>


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
