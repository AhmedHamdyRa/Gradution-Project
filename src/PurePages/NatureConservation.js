import './NatureConservation.css';
import React,{ useState } from 'react';
import Footer from '../PureComp/Footer';
import Chat from '../PureComp/Chat';
import ScrollToTop from '../PureComp/ScrollToTop';
import Header from '../UseRef/Header';
import SlideProtected1 from '../PureComp/SlideProtected1';
import SlideProtected2 from '../PureComp/SlideProtected2';
import SlideProtected6 from '../PureComp/SlideProtected6';
import SlideProtected3 from '../PureComp/SlideProtected3';
import SlideProtected4 from '../PureComp/SlideProtected4';
import SlideProtected5 from '../PureComp/SlideProtected5';

export default function NatureConservation(){
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
            About Nature Protected Areas
        </button>
        <button
            className={activeTab === 'Paris' ? 'tablinks active' : 'tablinks'}
            onClick={(e) => openCity(e, 'Paris')}
        >
            Protected Areas Map
        </button>
        
        </div>

        <div className="concnt">
        <div
            id="Paris"
            className={activeTab === 'Paris' ? 'tabcontent' : 'tabcontent hidden'}
        >
        
            <h3>Protected Areas Map</h3>
            <p>
                <p>To provide protection for natural resources and biodiversity and to maintain environmental balance, the idea of declaring so-called natural reserves emerged that reflects the beauty of nature as an element of natural resources. The matter of protecting the environment to be in support of what was stated in Law No. 102 of 1983.</p>
                <p>The Prime Minister issued decrees announcing 30 natural reserves until 2012, at a rate of more than 15% of the total area of Egypt.</p>
            </p>
        </div>

        <div
            id="London"
            className={activeTab === 'London' ? 'tabcontent' : 'tabcontent hidden'}
        >
            <h3> About Nature Protected Areas</h3>
            <p>
            <h4>1- Ashtoum El-Gamil Reserve and Tennis Island in Port Said Governorate:</h4>
                <p><b>Announcement date: </b>1988.</p>
                <p><b>Its area: </b>180 km2.</p>
                <p><b>Type: </b>A wetland reserve and a natural sanctuary for birds.</p>
                <p><b>Distance from Cairo: </b>200 km.</p>
                <br/>
                <SlideProtected6/>
                <br/>
                <p>The reserve includes Boghazi El Gamil, Ashtoum El Gamil, and Lake Manzala. The area of ​​Tnis Island is also located within Lake Manzala. Lake Manzala is considered to have the largest area among the Delta lakes and is characterized by its diverse environmental systems. The area of Lake Manzala was a fertile agricultural land full of tender, and its land declined as a result of the earthquake that occurred in the late sixth century AD. Sea water prevailed and stormed the sand dunes that separated the sea from those agricultural lands, and the water covered them year after year until the area was submerged, except for the famous Tennis, and the great buildings were spacious, full of merchants and livelihood, and there were palm trees, vineyards, trees, and farms, and it had streams high from the ground that descended From it, the water pours into the sea from all its bays, now known as Al-Ashtum.</p>
                <br/>

                <h4>2- Protected islands of Saluga and Ghazal and the small islands between them (the first waterfall) in Aswan Governorate:</h4>
                <p><b>Announcement date: </b>1986.</p>
                <p><b>Its area: </b>0.5 km2.</p>
                <p><b>Type: </b>Wetland and landscape reserve.</p>
                <p><b>Distance from Cairo: </b>700 km.</p>
                <br/>
                <SlideProtected5/>
                <br/>
                <p>The region is characterized by the predominance of shrubby species such as acacia, tamarisk, al-Luyth, and al-Heglig. The vegetation in the region includes about 94 different types of plants, including some plants that are unique to these islands, especially along the Nile Valley. The distinguished natural conditions of these islands provided opportunities for the life of resident and migratory birds. More than 60 species of birds, including rare and endangered birds at the international level, have been counted. Some of them have been living and breeding on these islands since the days of the ancient Egyptians. They are recorded in their inscriptions and monuments, including Al-Waq and Hoopoe. And the Egyptian geese.</p>
                <br/>

                <h4>3- Ras Muhammad Protected Areas and the islands of Tiran and Sanafir in South Sinai Governorate:</h4>
                <p><b>Announcement date: </b>1983.</p>
                <p><b>Its area: </b>850 km2.</p>
                <p><b>Type: </b>A world heritage Protected Areas.</p>
                <p><b>Distance from Cairo: </b>446 km.</p>
                <br/>
                <SlideProtected1/>
                <br/>
                <p>This Protected Areas is located at the confluence of the Gulf of Suez and the Gulf of Aqaba, and the eastern edge of the Ras Mohammed Reserve represents a rocky wall with the waters of the Gulf in which coral reefs are located. There is also a mangrove channel that separates the Ras Mohammed peninsula from the island of Al-Bairah, with a length of about 250 meters. The Ras Mohammed region is characterized by coral beaches located in the depths of the watery ocean of Ras Mohammed, colorful fish, endangered sea turtles and rare aquatic organisms. Landslides, "earthquakes", formation of water caves at the bottom of the island, and the reserve is home to many important birds and animals, such as: Nubian ibex in mountainous areas, small mammal species, reptiles, and insects, which only appear at night. The reserve is also home to many important birds such as herons and gulls.</p>
                
                <br/>
                <h4>4- The coastal bush area in Rafah, North Sinai Governorate:</h4>
                <p><b>Announcement date: </b>1985</p>
                <p><b>Its area: </b>8 km2.</p>
                <p><b>Type: </b>Resources development reserve.</p>
                <p><b>Distance from Cairo: </b>370 km.</p>
                <br/>
                <SlideProtected3/>
                <br/>
                <p>The forest reserve is characterized by areas of sand dunes that reach a height of about 60 meters above sea level and are covered by a high density of acacia trees, some tamarisk and eucalyptus trees, shrubs, herbs, and other pastoral and fodder plants, which makes them a resource for pastures, wood, and a shelter for wild animals and birds. It also works to stabilize sand dunes and groves located Within the scope of protection to preserve one of the important environments of the Mediterranean coast.</p>

                <br/>
                <h4>5- Al-Ameed Nature Reserve in Matrouh Governorate:</h4>
                <p><b>Announcement date: </b>1986.</p>
                <p><b>Its area:</b>700 km2.</p>
                <p><b>Type: </b>Desert and Biosphere Reserve.</p>
                <p><b>Distance from Cairo: </b>300 km.</p>
                <br/>
                <SlideProtected4/>
                <br/>
                <p>Whether sand dunes or internal plateaus, studies have shown that these wild plants have economic and medical benefits, as there are about 70 species that can be used for medical and therapeutic purposes, including analgesic, wormwood, plantain, gratitude, and sorrel. There are also 60 species that can be used for various purposes, including fuel sources such as sage And bramble, a source of oils and soap such as henna, food for humans such as onions, beautification of gardens such as the old man's molar, manufacturing ropes and roofs such as reeds, and grazing such as buoys and bears. There are also about 40 species of plants that have importance for their environmental role, including seizing sand and building new layers. There are many wild animals in the reserve such as (deer, foxes, rabbits, jerboas, Abu Shook, mountain judges, chameleons, scorpions), and there are 14 types of birds of prey.</p>
                
                <br/>
                <h4>6- Al-Zaraniq Protected Areas and Sabkhat Al-Bardawil, North Sinai Governorate:</h4>
                <p><b>Announcement date: </b>1985.</p>
                <p><b>Its area:</b>230 km2</p>
                <p><b>Type: </b>A wetland Protected Areas and a natural sanctuary for birds.</p>
                <p><b>Distance from Cairo: </b>300 km.</p>
                <br/>
                <SlideProtected2/>
                <br/>
                <p>The Zaranik Nature Protected Areas and Sabkhat al-Bardawil are considered one of the main keys to bird migration in the world, as it represents the first stop for birds to rest and obtain food after the hardships of the migration journey from Europe and Asia during the fall, heading to Africa. Some birds also reside in the area permanently and breed in it. More than 270 species of birds have been recorded in the reserve, representing 14 species. The most important birds that have been recorded are: pelicans, bacharosh, egrets, egrets, storks, martens of chickens, falcons, quails, al-Mara’a, white goats, crowned larks, macaques, jokes, and Abu. The Alexandrian heads of Al-Hajwalah.</p>

            </p>
            <br/>
        </div>

        
        </div>
            
    </div>

    <Footer/>
    <ScrollToTop/>
    <Chat/>
    

    </div>
);
}
