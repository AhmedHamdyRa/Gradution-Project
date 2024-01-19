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
            Solid waste
        </button>
        <button
            className={activeTab === 'Paris' ? 'tablinks active' : 'tablinks'}
            onClick={(e) => openCity(e, 'Paris')}
        >
            Hazardous materials and waste
        </button>
        
        </div>

        <div className="concnt">
        <div
            id="London"
            className={activeTab === 'London' ? 'tabcontent' : 'tabcontent hidden'}
        >
            <h3>Solid waste "Garbage"</h3>
            
            <p>It can be defined as the solid or semi-solid materials that are left over from normal daily human activities and are disposed of at the source of their generation as waste that is of no value worth keeping, although it may have value in another location or other conditions that provide conditions for reuse. or rotate. Thus, hazardous, industrial (productive), agricultural, and construction and demolition wastes are excluded from this classification (although some of them may find a way to municipal waste and mix with it, as is the case in the current situation, and therefore it is necessary to deal with them or find independent means and sub-systems that guarantee dealing with them and disposing of them In which).</p>
            <h3>Guidelines for the rehabilitation of public dumps</h3>  
            <h4>Introduction:</h4>
                <p>The requirements and guidelines for the rehabilitation of public dumps aim to:</p>
                    <p>1. Improving methods of final disposal of waste in a scientific and practical manner that reduces the harmful effects of waste on the environment.</p>
                    <p>2. Tight control of self-ignition and air pollution.</p>
                    <p>3. Preserving the health and safety of the residents of neighboring areas from smells, unpleasant scenes, diseases and ignitions.</p>
                    <p>4. Maintaining the health and safety of the operators and visitors to the site.</p>
                In order to achieve these goals, the following elements should be available in the rehabilitation of public dumps:
            <br/>
            <h4>The Location:</h4>
            <ul>
                    <li>Constructing a fence around the perimeter of the site to prevent unauthorized individuals from entering the site.</li>
                    <li>Surrounding the site with tall trees such as algazorin and eucalyptus.</li>
                    <li>Providing firefighting equipment.</li>
                    <li>Establishing a suitable office for supervisors to be located next to the dump gates to monitor the entry and exit of vehicles and its supply.</li>
                    <li>With basic utilities such as electricity, water, toilets and telephone.</li>
                    <li>Providing a garage for dump equipment (bulldozers, transport vehicles...etc.) for maintenance work and storing spare parts and maintenance equipment inside the site.</li>
                    <li>Installing a scale to weigh the amount of waste entering the dump.</li>
                    <li>Organizing the passage of transport vehicles and loaders into the dump by providing a worker at the beginning of the road into the dump and another at the runway inside the dump so that coordination is made for the passage of vehicles according to the role with the division of work areas at the site.</li>
                    <li>A reception site must be specified for the waste transport vehicles to wait for their turn to dispose of the waste at the dump.</li>
                    <li>Ensure the quality and properties of the soil, to make the sides of the dump with proper and safe inclinations to avoid any waste (collapses) of the sides on the workers and exposing them to dangers, in addition to wasting areas of the dump.</li>
                    <li>Design and construction of internal roads at the dump (for movement from one cell to another) at an acceptable level and cost that suits the period and the temporary purpose of its use.</li>
            </ul>
            <h4>The Location equipment:</h4>
            <p>There are requirements and specifications that must be observed and adhered to when allocating waste disposal sites, as follows:</p>
            <ul>
                    <li>Providing a garage either within the boundaries of the site or in an adjacent place to carry out maintenance procedures and periodic inspection of the equipment used on the site; In addition to providing a closed warehouse for the safe storage of spare parts, lubricating devices and hand tools that are used in routine maintenance and equipment repair.</li>
                    <li>Create an airtight fuel tank and place it in a suitable place to meet the fuel needs for at least a week.</li>
                    <li>Carrying out periodic maintenance and inspection of site equipment and keeping a record of all maintenance procedures that are carried out on each equipment present in the dump.</li>
                    <li>Provide iron bars to help the unloading loaders enter the cells, if the ground is not level enough, which may hinder the movement of the loaders into the final burial point of solid waste.</li>
                    <li>The availability of a permanent water source for the need to wash and clean the equipment operating within the site.</li>
            </ul>
            <h4>Safety:</h4>
            <ul>
                <li>Providing protective clothing and supplies (industrial safety), especially slippers, masks, glasses and helmets, in accordance with occupational health and safety requirements for dump workers.</li>
                <li>It is not permissible for workers within the sanitary landfill to work without wearing industrial safety gear.</li>
                <li>Providing the scientists in sorting operations with the appropriate tasks to carry out their work.</li>
                <li>Regular maintenance of dilapidated fences to prevent animals from entering the site.</li>
            </ul>

        </div>

        <div
            id="Paris"
            className={activeTab === 'Paris' ? 'tabcontent' : 'tabcontent hidden'}
        >
            <h3> Hazardous materials and waste</h3>
            <p>
                <h3>The definitions:</h3>
                <ul>
                    <li><h5>Hazardous substances:</h5></li>
                    <p>Materials with dangerous properties that harm human health or affect a harmful effect on the environment, such as infectious, toxic, explosive, ignitions, or ionized radiation.</p>
                    <li><h5>Dangerous waste:</h5></li>
                    <p>Various activities and operations or their ashes retained by the properties of dangerous materials that do not have original or alternative uses such as clinical waste from therapeutic activities and waste resulting from the manufacture of any of the pharmaceutical products, medicines, organic solvents, inks, dyes and paints.</p>
                </ul>
                <h3>The procedures required to express the opinion of the Environmental Affairs Agency in customs certificates received from the Egyptian customs:</h3>
                <ul>
                    <li>The fulfillment of a request on a paper approved by the imported company (the owner of the shipment) in the name of Mr. Professor Dr. The phone is the applicant, the delegation and the card, the card.</li>
                    <li>The customs certificate must clarify a visa to display on the (Environmental Affairs Agency) and sealed with exports and imports.</li>
                    <li>Bring the assets of the documents for the annihilation to view and attach pictures from these documents attached to the request for delivery.</li>
                    <li>The documents are reviewed and the opinion is shown through an official letter from the Environmental Affairs Agency to customs outlets, exports and imports, as well as the company's original image.</li>
                    <li>The documents are reviewed through a committee of researchers in the administration and approved by the competent managers in accordance with the law and the lists of materials and waste issued by the competent authorities in this regard.</li>
                    <li>Review the documents through the competent department on the application and a redeeming public archive.</li>
                    <li>The request is registered in the general archive and a redemption for the office of Mr. Professor Dr. CEO of the Authority to guide the competent administration.</li>
                    <li>In the event of any inquiries through (the General Administration of Citizen Service) only.</li>
                    <li>To inquire through the archive.</li>
                    <li>The letter is issued within 3-5 working days and it is received from the general archive in the Ministry on the ground floor and with an official mandate from the company, accompanied by the national ID card.</li>
                </ul>
                <p><b>For inquiries on the phone: </b>25256452 internal 8899/8896/7723/8050/8131, or Fax 25256490.</p>
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
