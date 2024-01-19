import React,{ useState } from 'react';
import Footer from '../PureComp/Footer';
import Chat from '../PureComp/Chat';
import ScrollToTop from '../PureComp/ScrollToTop';
import Header from '../UseRef/Header';

import './Org.css';

export default function Org(){
    const [activeTab, setActiveTab] = useState('London');

    function openCity(evt, cityName) {
        setActiveTab(cityName);
    }

    return (
    <div className="EnvironmentalTopics">
        <Header/>
    <div className="tab">
        
        <div className="btncnttt">
        <button
            className={activeTab === 'London' ? 'tablinks active' : 'tablinks'}
            onClick={(e) => openCity(e, 'London')}
        >
            Environmental Rights Organizations
        </button>
        <button
            className={activeTab === 'Paris' ? 'tablinks active' : 'tablinks'}
            onClick={(e) => openCity(e, 'Paris')}
        >
            Protection of environment Organizations
        </button>
        <button
            className={activeTab === 'Egypt' ? 'tablinks active' : 'tablinks'}
            onClick={(e) => openCity(e, 'Egypt')}
        >
            Sustainable agriculture Organizations
        </button>
        <button
            className={activeTab === 'Mansoura' ? 'tablinks active' : 'tablinks'}
            onClick={(e) => openCity(e, 'Mansoura')}
        >
            Renewable energy Organizations
        </button>
        </div>

        <div className="concnt">
        <div
            id="London"
            className={activeTab === 'London' ? 'tabcontent' : 'tabcontent hidden'}
        >
            <h3>1- Egyptian Center for Economic and Social Rights (ECESR) </h3>
            <p>
            <b>Type: </b>Non for profit legal entity:  (founded in 2009).<br/>
            <b>Contact: </b><ul>
                <li>https://www.facebook.com/ecesr</li>
                <li>info@ecesr.org</li>
                <li>1 seket elfadl street, Tahrir, Cairo</li>
                <li>+2 22393 8205 </li>
                </ul>
            <b>Activities: </b><ul>
                <li>March 2014: To mark World Water Day, the ECESR issued a study on water pollution in Egypt titled ”Water Pollution in Egypt: Causes and Fears.” </li>
                <li>April 2014: Infographic on the cement industry and coal use, part of the campaign to put an end to coal use in factories or energy generation </li>
                <li>July 2014: Fact sheet on the environment in Egypt. </li>
                <li>March 2015: Fact bulletins on economic and social rights in Egypt, including a paper on the right to water and sanitation services. </li>
                <li>On Arab Environment Day: ECESR Welcomes Renewable Energy Tariff Policy, Condemns Continue of Coal Use </li>
                </ul>
            
            <br/>

            <h3>2- Habi center for environmental rights  </h3>
            <b>Type: </b>Non- governmental organization (established 2001) <br/>
            <b>Contact: </b><ul>
                <li>http://www.hcer.org/</li>
                <li>116 Masr wa Sudan Street Hadayek El Koba</li>
                <li>Cairo, Egypt.</li>
                <li>Tel/Fax: +2 02 24820380 </li>
                </ul>
            <b>Activities: </b><ul>
                <li>April 2015: A guide :Filing complaints of violations of the right to drinking water</li>
                <li>April 2014: Booklet on  International conventions on the right information, participation and litigation </li>
                <li>Dec 14: Egypt: Forced to allow coal  </li>
                <li>June 2015: Dangerous industries monitoring guide </li>
                </ul>

            <br/>

                <h3>3-  Hurghada Environmental Protection and Conservation Association (HEPCA)  </h3>
            <b>Type: </b>non-governmental organization (founded 1992)  <br/>
            <b>Contact: </b><ul>
                <li>https://www.facebook.com/HEPCA/info</li>
                <li>Hurghada Environmental Protection and Conservation Association (HEPCA)</li>
                <li>B2 -Marina Boulevard</li>
                <li>Tel: +20 65 344 5035</li>
                </ul>
            <b>Activities: </b><ul>
                <li>Saying No to oil </li>
                <li>Solid waste management </li>
                <li>Red Sea Dugongs </li>
                <li>Mooring  system</li>
                </ul>

                <br/>

                <h3>4- 350.org Egypt </h3>
            <b>Type: </b>Branch of an International Non-profit organization (founded 2009) <br/>
            <b>Contact: </b><ul>
                <li>https://www.facebook.com/350Egypt/timeline</li>
                <li>350 Mansoura: www.fb.com/350Mans</li>
                <li>350 Alexandira: fb.com/Alexandria350.org</li>
                <li>Qena https://www.facebook.com/groups/350Qena/</li>
                </ul>
            <b>Activities: </b><ul>
                <li>A workshop on climate change concepts to mark World Meteorological Day, March 2015 </li>
                <li>Workshop on climate change, June 2014  </li>
                <li>workshop to raise youth awareness of the greenhouse effect that leads to climate change, August 2014 </li>
                <li> Workshop on power shifting, aiming to build youth capacities to organize in their communities to work on issues of climate and environmental justice, specifically coal, March 2014 </li>
                </ul>

                <br/>

                <h3>5- Arab Youth Climate Movement (AYCM) </h3>
            <b>Type: </b>non-governmental organization founded 2012 <br/>
            <b>Contact: </b><ul>
                <li>https://www.facebook.com/AYCMEgypt</li>
                <li>Hurghada Environmental Protection and Conservation Association (HEPCA)</li>
                <li>egypt@aycm.org</li>
                </ul>
            <b>Activities: </b><ul>
                <li>March 2012  students are part of the Simulation of the International Negotiations for Climate Change </li>
                <li>Aug 15-  Growing Grassroots: Changing Cities in a Changing Climate -Towards greener cities in Egypt and Germany- </li>
                <li>AYCM Egypt is leading a working-group on environment and sustainable development in the Youth consultation of the Egyptian National post-2015 population development agenda.   </li>
                <li>Egyptian-German Seminar May 2013- Phase 2 in Berlin ”Introduction to Climate Change and how YOUth can become the solution ”Organized by Arab Youth Climate Movement  - Egypt, BUNDjugend Berlin and Ro2yaty Training Agency</li>
                </ul>
            </p>
        </div>

        <div
            id="Paris"
            className={activeTab === 'Paris' ? 'tabcontent' : 'tabcontent hidden'}
        >
            <p>
            <h3>1- ASSOCIATION FOR THE PROTECTION OF  THE ENVIRONMENT (APE)</h3>
            <b>Type: </b>non-governmental organization -Founded since 25 years<br/>
            <b>Contact: </b><ul>
                <li>http://www.ape-egypt.com/</li>
                <li>Qal’a Cairo </li>
                <li>tel.: (202) 510 2723 </li>
                </ul>
                <b>Activities: </b><ul>
                <li>Recycling Machine Production Unit</li>
                <li>Plastic Recycling </li>
                <li>‘Lean and Earn’ Programs </li>
                <li>Sewing & Uniform Production Unit </li>
                </ul>
                <br/>

            <h3>2- Ain- El-Bee’ah </h3>
            <b>Type: </b>Community organization<br/>
            <b>Contact: </b><ul>
                <li>https://www.facebook.com/AinElbiaa/info?tab=page_info</li>
                <li>01148686466</li>
                <li>Email: ahmoawad@hotmail.com</li>
                </ul>
                <b>Activities: </b><ul>
                <li>November 2014: The ”Instead of tossing it, Ain El-Beeia will buy it” initiative</li>
                <li>May 2015: The ”From my school, I’ll change my environment” initiative: the objective is to awareness raising and training in agriculture and waste management. </li>
                <li>June 2015: World Environment Day 2015, organized under the slogan of ”Time for global action for individuals and the planet</li>
                </ul>
                <br/>

            <h3>3- Hemaya- Nuwaiba –Sini </h3>
            <b>Type: </b>non-profit organization (founded 1997) Naweiba <br/>
            <b>Contact: </b><ul>
                <li>Sherif El Ghamrawy </li>
                <li>Basata village</li>
                <li>23 Nuweiba Road، Nuweiba - South Sinai, Egypt </li>
                <li>phone: 069-3500480 / 81 </li>
                <li>mail: basata@basata.com</li>
                </ul>
                <b>Activities: </b><ul>
                <li>solid waste management project Collecting, sorting and transporting of solid waste, and a training center. </li>
                <li>’My School’ Project : Renovating 7 primary schools scattered across South Sinai governorate (valleys and towns).  </li>
                <li>’Back To School’: Funding and setting up a workshop for 5 days for 15 volunteers from Cairo and preparing them to carry out an educational and cultural day for the primary school kids. ”Capacity building training for the teaching staff aiming at training the teachers on better educational methods and increasing their knowledge about the environment. </li>
                <li>Organizing Cleaning and awareness campaigns </li>
                </ul>
                <br/>
            
            <h3>4- Future Eve foundation- Minia governorate  </h3>
            <b>Type: </b>non-governmental organization, Elmenia Governorate .<br/>
            <b>Contact: </b><ul>
                <li>http://www.futureeve.org/eve/eve-9-3.htm</li>
                <li>futureeve2001@yahoo.com</li>
                <li>086-2332649</li>
                <li>086-2367035 </li>
                <li>01002137923</li>
                </ul>
                <b>Activities: </b><ul>
                <li>Developing the skills and capacities of volunteers and community committees to enable them to effectively raise environmental awareness in their communities. </li>
                <li>Improving the rural home for 571 families through loans</li>
                <li>Providing loans to purchase 95 solar-powered heaters; providing loans to purchase 654 bicycles for rural families to reduce air pollution; developing 45 non-polluting local bakeries for rural families. </li>
                <li>Implementing seven environmental camps for children during which the Kafr al-Mansoura area was planted with trees. </li>
                </ul>
                <br/>

            <h3>5- Recyclina </h3>
            <b>Type: </b>community organization.<br/>
            <b>Contact: </b><ul>
                <li>https://www.facebook.com/Recyclina</li>
                <li>Email: tottylina@gmail.com</li>
                </ul>
                <b>Activities: </b><ul>
                <li>March 2015: How to make a cool mirror or a centerpiece in the bathroom or sitting room with things that you throw away?  </li>
                <li>January 15: The Recyclina team participated in a workshop on recycling in Port Said, sponsored by the Ministry of Youth and Sport. We cleaned the beach, separated trash, and made handicraft items out of it. </li>
                <li>February 15: Teaching children art through recycling</li>
                </ul>
                <br/>
            </p>
        
        </div>

        <div
            id="Egypt"
            className={activeTab === 'Egypt' ? 'tabcontent' : 'tabcontent hidden'}
        >
            <p>
            <h3>1- Fayoum Agro Organic Development Association (FAODA)</h3>
            <b>Type: </b>Non-governmental organization (established 2003)<br/>
            <b>Contact: </b><ul>
                <li>http://www.faoda.org/aboutus_ar.html</li>
                <li>Address: El-Mohafza Buildings - Iterance ”A” , Gamal Abdul-Nasser St.,Fayoum – Egypt </li>
                <li>tel.: (202) 510 2723 </li>
                <li>TeleFax: (202) 6330776  </li>
                <li>info@faoda.org</li>
                </ul>
                <b>Activities: </b><ul>
                <li>Agro-ecology Practices and Marketing for Fayoum small growers Target group: Small-scale farmers, local agricultural input traders, and members of Farmer NGOs, agricultural cooperatives, local women and General Extension Workers (GEWs).</li>
                <li>Enhancing Farmers-Public Manager Dialogue Over District Level Water </li>
                </ul>
                <br/>
            
            <h3>2- Nawaya</h3>
            <b>Type: </b>Non-governmental organization (founded 2011)<br/>
            <b>Contact: </b><ul>
                <li>http://nawayaegypt.org/</li>
                <li>https://www.facebook.com/groups/nawayaegypt/ </li>
                <li>nucleus@nawayaegypt.org</li>
                </ul>
                <b>Activities: </b><ul>
                <li>Beekeeping  workshop , March 2015 </li>
                <li>Mahragan El Nakheel, Dates Festival , Sept 2014 August2014: Living Soils Workshop </li>
                <li>DIY Chicken Coop with Nawaya,  January 2014</li>
                <li>Inclusive Agribusiness Workshop, Oct. 2-13</li>
                </ul>
                <br/>

            <h3>3- Green Zone Egypt </h3>
            <b>Type: </b>Founded since 2013 <br/>
            <b>Contact: </b><ul>
                <li>http://greenthezone.com/</li>
                <li>https://www.facebook.com/greenzoneegypt</li>
                <li>25 abu yusuf Abu elnomoros Algiza</li>
                <li>(+2) 0100 758 5098</li>
                <li>info@greenthezone.com</li>
                </ul>
                <b>Activities: </b><ul>
                <li>June 2015: Natural gardening workshop</li>
                <li>May 2015: Maadi Community Garden Meetup</li>
                <li>May 2015: Urban Agriculture workshop</li>
                <li>April 2015: Natural gardening workshop</li>
                </ul>
                <br/>
            
            <h3>4- Schaduf- urban mirco farms</h3>
            <b>Type: </b>Company (founded 2011)<br/>
            <b>Contact: </b><ul>
                <li>http://www.schaduf.com/#!about/cipy</li>
                <li>https://www.facebook.com/schaduf/info?tab=page_info</li>
                <li>1B Misr Helwan Road</li>
                <li>MAADI | CAIRO | EGYPT</li>
                <li>Tel: (+20100) 1775 224</li>
                </ul>
                <b>Activities: </b><ul>
                <li>March 2014: Schaduf’s Hydroponic Gardening Workshop</li>
                <li>Sep 2012: Rooftop Farming Intro Day</li>
                <li>Nov 13: Planting the bus</li>
                <li>Oct 13: Rooftop farming training</li>
                </ul>
                <br/>
            
            <h3>5- Shagara </h3>
            <b>Type: </b>non-governmental organization (founded 2011)<br/>
            <b>Contact: </b><ul>
                <li>https://www.facebook.com/shagaraNGO/timeline</li>
                <li>info@shagara.org</li>
                
                </ul>
                <b>Activities: </b><ul>
                <li>Rooftop agriculture; distribution of fruit trees; experimental projects for construction with cheap alternative and environmentally friendly materials</li>
                <li>A Green school in Egypt educating about adaptation to climate change- June 2015 </li>
                <li>The new design for the second roof at the Hassan Abu Bakr School in al-Qanater: replacing wood with palm branch, which has a smaller environmental footprint and is more labor intensive, thus creating jobs </li>
                <li>May 2013: Rooftop garden from the pilot ”Shagara at School project”</li>
                </ul>
                <br/>
            </p>
        
        </div>

        <div
            id="Mansoura"
            className={activeTab === 'Mansoura' ? 'tabcontent' : 'tabcontent hidden'}
        >
            <p>
            <h3>1- Youthink green Egypt</h3>
            <b>Type: </b>outhink green Egypt incubated at Cairo University (founded 2013)<br/>
            <b>Contact: </b><ul>
                <li>https://www.facebook.com/YouthinkgreenEgypt</li>
                <li>http://www.youthinkgreen-egypt.org/</li>
                <li>info@youthinkgreen-egypt.org</li>
                </ul>
                <b>Activities: </b><ul>
                <li>First summer school camp on 2014 The theme of this summer school was renewable energy, One of the main goals was to come up with five new brilliant projects in solar energ</li>
                <li>Second  Sustainability Summer Camp El Gouna, Egypt 2015 The main topics of the camp were solar energy, sustainable cities, and water energy food (WEF) nexus where the participants attended theoretical and practical workshops </li>
                <li>Solar Tree: The project won the 2nd place in the Maker Hackathon Cairo`s Competition, and it is currently under development. </li>
                <li>Eco-DoyserBy using solar technology in mobile phone</li>
                </ul>
                <br/>
            
            <h3>2- Oasis renewable energy</h3>
            <b>Type: </b>Company+ training academy (founded 2010)<br/>
            <b>Contact: </b><ul>
                <li>http://www.oasis-farouk.com/profile1.html</li>
                <li>https://www.facebook.com/pages/Oasis-Renewable-Energy-Academy/1612658952281290?sk=timeline</li>
                <li>1, Babel Sq. off Mosadak Road, Giza, Dokki, EGYPT.</li>
                <li>3 Nahda St, Nasr City, Cairo, Egypt</li>
                <li>Telephone : +202 3338 17 28 </li>
                </ul>
                <b>Activities: </b><ul>
                <li>ORE has lead and participated to various R&D projects, , for the purpose of developing products that are suiting the local marketp</li>
                <li>RENAC-OASIS Solar Academy Egypt (ROSAE) is a partnership between the Renewables Academy (RENAC) and Oasis Renewable Energy )ORE(.ROSAE provides training courses and capacity building services and aims at developing the capacities of </li>
                <li>Wind Energy, Eco Hotels Consulting Services, Renewable Energy Development Services</li>
                <li>Oasis Community Club</li>
                </ul>
                <br/>
            
            <h3>3- Egypt green Energy association</h3>
            <b>Type: </b>non-governmental organization (founded 2012)<br/>
            <b>Contact: </b><ul>
                <li>+201013369079</li>
                <li>info@egyptgreenenergy.org </li>
                <li>Maadi, Cairo</li>
                <li>www.egyptgreenenergy.org  (limited site)</li>
                <li>https://www.facebook.com/EGYPTGREENENERGY/timeline</li>
                </ul>
                <b>Activities: </b><ul>
                <li>The Maghara project in Alamein</li>
                <li>Extraction of groundwater for land reclamation using solar energy: solar cells were used to operate the motor used to extract water.</li>
                <li>Project in Arab al-Hasar: a solar-powered irrigation machine</li>
                <li>Workshop: the use of renewable energy is Egypt’s hope for new land reclamation, in several agricultural colleges in a number of universities.</li>
                </ul>
                <br/>
            
                <h3>4- Regional center for renewable energy and energy efficiency</h3>
            <b>Type: </b>Non-profit regional organizations (founded 2008inter-government organization). In solid alliance with the League of Arab States<br/>
            <b>Contact: </b><ul>
                <li>http://www.rcreee.org/content/who-we-are</li>
                <li>https://www.facebook.com/Rcreee</li>
                <li>Ard El Golf Cairo, Egypt</li>
                <li>Tel: 02 24154755</li>
                <li>media@rcreee.org</li>
                </ul>
                <b>Activities: </b><ul>
                <li>Arab Renewable Energy Framework (AREF) and National Renewable Energy Action Plans Template</li>
                <li>Diesel to Solar (D2S) Initiative</li>
                <li>Solar Atlas for the Mediterranean (olar Med-Atlas)</li>
                <li>Renewable Energy Pricing and Trading Regional Capacity Development Programs</li>
                </ul>
                <br/>

                <h3>5- Sun Infinite energy</h3>
            <b>Type: </b>Private company (founded 2011) <br/>
            <b>Contact: </b><ul>
                <li>https://www.facebook.com/SunInfiniteEnergy</li>
                <li>http://www.suninfinite.com/</li>
                <li>28 Misr-Helwan Agricultural Rd.</li>
                <li>(+2) 0100 758 5098</li>
                <li>Telephone +20 (2) 2528 3332</li>
                </ul>
                <b>Activities: </b><ul>
                <li>System integration , Solar energy site site assessment, System monitoring</li>
                <li>Solar tracking systems are used for orienting the solar tracking  toward the sun. </li>
                <li>Monitoring structures: Roof and wall mounts, Solar racks, Pedestal mounts</li>
                </ul>
                <br/>
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
