import React,{ useState } from 'react';
import Footer from '../PureComp/Footer';
import Chat from '../PureComp/Chat';
import ScrollToTop from '../PureComp/ScrollToTop';
import Header from '../UseRef/Header';
import './Air.css';

export default function IndustryandEnergy(){
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
            About industry and energy
        </button>
        <button
            className={activeTab === 'Paris' ? 'tablinks active' : 'tablinks'}
            onClick={(e) => openCity(e, 'Paris')}
        >
            Control of industrial pollution
        </button>
        <button
            className={activeTab === 'Tokyo' ? 'tablinks active' : 'tablinks'}
            onClick={(e) => openCity(e, 'Tokyo')}
        >
            Sustainable energy
        </button>
        </div>

        <div className="concnt">
        <div
            id="London"
            className={activeTab === 'London' ? 'tabcontent' : 'tabcontent hidden'}
        >
            <h3>About industry and energy</h3>
            <p>
                <p>Protecting and improving the industrial environment is keen to support the integrated relationship between cleaner production and sustainable development, to develop industrial activities polluting the environment and convert it into green industrial activities, in which environmental integration and preserving environmental health are taken into account, by following the best methods available to reduce industrial pollution in all its forms, monitoring and monitoring pollution Air, water and soil continuously, to preserve the natural, human and economic resources of the country, in a way that guarantees the rights of future generations to benefit from them, and in order to advance Egyptian industries.</p>
                <p>Among the integrative relationships that we find between different applications, we find it between cleaner production and sustainable development, because protecting and improving the industrial environment aims to raise the level of public awareness of all environmental aspects, according to the goals of sustainable development 2030, which lead to an increase in the trend towards the green economy, green growth and green industries Less -based carbon, support for integrated environmental management systems in industries, expanding support for small and medium enterprises in the field To achieve the optimal use of sustainable energy with operations such as solar cells in lighting, and the use of solar heaters instead of boilers.</p>
                <p>The procedures for cleaner production aim to reduce the rates of air pollution resulting from the emissions of industrial operations and achieve environmental compatibility, with the participation of all relevant ministries and parties, through the formation of joint committees, to discuss and transform old, polluted and random industries throughout the Republic, into environmentally friendly industries, in support of the Egyptian environment and industry And the national economy. In this, the priorities, executive procedures, time programs, resources and needs required for the application are determined, so that the best methods, methods and executive, applied and operational procedures are developed, with a visualization of potential obstacles, the best proposed solutions and alternatives to applicable solutions, and implementation through sustainable methods and mechanisms aimed at maximizing the benefit of resources The raw materials, the application of methods of re -use and recycling of the components of the products of the production process, rationalizing consumption of water and energy and the reuse of the consumer from them, to reach (sustainable production).</p>
            </p>
        </div>

        <div
            id="Paris"
            className={activeTab === 'Paris' ? 'tabcontent' : 'tabcontent hidden'}
        >
            <h3>Control of industrial pollution</h3>
            <p>
                <p>The control of industrial pollution in the general public depends on improving the industrial environment, by reducing the consumption of environmental resources a significant reduction, and replacing polluting materials for the environment used in the production processes, and the harm used in the industry with another environmentally friendly, as much as possible, and reduce emissions by placing units for processing, leading to Get rid of emissions technically and technical in the environment.</p>
                <p>The control of industrial pollution also depends on monitoring industrial drainage operations during the industrial process in all production units within the facility, to the final product to ensure industrial drainage conformity to the legal and legislative borders and ministerial decisions organized before drainage on the network and water bodies, and setting a visualization of water recycling, and re -re - Using them after treatment in the facility's industrial processes, encouraging facilities to reach Zero Liquid Discharge whenever possible, and use them for other purposes (fire extinguishing water - irrigation of unethical trees), and their compliance with the national code for agriculture and washing floors. Industrial pollution control work also puts possible solutions to reuse the waste resulting from industrial processes in all its forms within production processes again, or recycle them, to benefit from them as possible, with a visualization of some operations and procedures for some industrial operations that lead to preventing pollution from the source, Industrial pollution controls and improved industrial processes are done through the following:</p>
                <h4>1. Industrial research applications and cleaner production projects</h4>
                <ul>
                    <li>Research applications in the field of improving the industry are an important tools for controlling industrial pollution, where all applied studies and research are found in the field of improving industry and cleaner production, and researching the best methods and applications for all polluted industries and displaying proposals for decision -makers with recommendations supporting the higher level decisions.</li>
                    <li>Through industrial installations update programs using green technology and providing the best solutions and environmental alternatives to update industrial processes.</li>
                    <li>Study the proposals, innovations and inventions aimed at improving industrial processes, or controlling industrial pollution, and examining the means of application in a way that achieves cleaning production mechanisms and providing all procedural means to facilitate the reach of the best results, and to discuss the possibility of application in industrial processes to raise the efficiency and improve industrial processes in industrial facilities.</li>
                    <li>Coordination with all governmental and private academic research bodies interested in studying the Egyptian environmental problems and industry, and exchanging all experiences and presentation at the higher administrative level in support of the decision.</li>
                </ul>
                <h4>Performance evaluation and improving the environmental situation of industrial facilities</h4>
                <p>The evaluation of performance and improving the environmental status of industrial facilities, through environmental reviews, is on industrial processes, to verify the application of cleaner production mechanisms, display the status of the facilities and the proposal to develop industrial operations and modernize old technologies with modern and environmentally friendly one, with the aim of reducing the negative effects.</p>
                <h5>Industrial operations reviews are done through the following:</h5>
                <ol>
                    <li>Reviewing the extent of the compatibility of industrial processes with environmental requirements and standards, studying the incompatibility of installations and reviewing the reasons for the vice on the environmental compatibility to reduce contaminated emissions to the environment to preserve the environment, discuss the best applicable methods and follow -up results.</li>
                    <li>Show environmentally friendly products that apply cleaner production technology, and encourage polluted industries to pursue green industry experience.</li>
                    <li>Reviewing consumption rationalization methods of raw materials and natural resources (water - energy - maximizing the benefit of waste of all kinds), and the optimal use of them.</li>
                    <li>Check the application of environmental management and self -monitoring systems in all industrial facilities.</li>
                    <li>Search the ability to reuse water resulting from industrial processes in the production process again, reduce the industrial drainage rate to the maximum extent possible, and reduce the organic loads of industrial facilities by obliging them to operate the treatment plants for industrial waste of all kinds.</li>
                </ol>
                <h5>Management and rationalization of water use and research methods of re -benefit from natural resources in industrial facilities in the general public:</h5>
                <ul>
                    <li>Ensure that industrial facilities follow the wise management in dealing with industrial drainage water and verifying the extent of their compatibility of the borders and standards set by Law No. 4 of 1994, the executive lips and their amendments.</li>
                    <li>Ensure that the facilities are applied to clean production technologies that aim to optimize the water and reduce industrial wastewater to the maximum, and to reuse it in industrial processes again or from the symptoms of agriculture (non -fruitful trees).</li>
                    <li>Coordination between unacceptable industrial establishments and the bodies funding for industrial projects with the aim of improving their environmental situation.</li>
                    <li>Ensure the efficiency of the treatment stations in industrial facilities and offer the best solutions to raise their efficiency.</li>
                </ul>
                <br/>
                <h3>2. Control of industrial pollution</h3>
                <p>Industrial pollution controls are done through:Introducing cleaner production methods in industrial processes and developing them through the optimal use of natural resources. And the use of economic methods to reuse resources and production waste, and review the methods used to control emissions, waste management and industrial drainage through the application of environmental management systems, and to find ways and applied methods to prevent pollution from the source, for any possible negative effects on the Egyptian environment in partnership with the relevant relevant ministries from During inspection and supportive technical committees. Technical support and technical assistance are also provided for all types of small and medium industries and intense consumption of energy and resources, in order to achieve the reconciliation of their environmental conditions in accordance with the laws and regulations for environmental protection.</p>
                <p>The executive measures of the development and rehabilitation work of the non -environmentally compatible industries are also taken with the aim of creating a clean environmentally friendly industrial environment, working to develop old industrial processes, which include harmful practices in the environment and inherited since the Old Testament, for example the heritage industries that depend on minerals operations using use Old ovens, equipment and primitive industrial methods that depend on personal, not technical and technical jurisprudence, which undoubtedly cause many damages that negatively affect the environment and human health, these industries are located, many of which are inside industrial areas that are not approved and others within residential gatherings. Pollution control and improvement of the industry work to replace it with environmentally friendly, by helping the unacceptable facilities, to start and move forward in the implementation of integrated environmental management systems, with all units of industrial activity within the facility, by noticing the lives, and discussing the reasons that It led to it, and sheds light on the correct and legal environmental methods that are subject to industrial processes to environmental compatibility, in full cooperation with the facility to communicate the concept of participation in the environmental responsibility until the completion of the proposed timetable for environmental consensus in partnership with the departments concerned with the environmental affairs and related administrative bodies.</p>
                <p>The protection and improvement of the industrial environment and energy takes the mechanisms necessary to control industrial pollution, which is a protective shield for the facility, aimed at protecting and protecting it from going into an environmental incompatibility, which may expose it to legal violations. These mechanisms are applied through the relevant departments related to the Environmental Affairs Agency and with the participation of the competent administrative authorities.<br/>Control of industrial pollution and its corrective applied solutions to the laws of the facility if it is found and which prevents the facility and environmental compatibility. It is one of the most important procedures that prevent the facility and the violation of the determinants stipulated in the Environmental Law and discuss the possibility of controlling industrial pollution and eliminating it from the source, and displaying executive recommendations, and this is to advance the Egyptian industry and support it to penetrate international markets, many of which are not trading the polluting industries of the environment, according to the agreements International specifications and quality, in order to achieve sustainable development goals.</p>
            </p>
        </div>

        <div
            id="Tokyo"
            className={activeTab === 'Tokyo' ? 'tabcontent' : 'tabcontent hidden'}
        >
            <h3>Sustainable energy</h3>
            <p>
                <h4>In general: </h4>
                <ul>
                    <li>Policies, plans and programs that aim to improve the energy efficiency in industry are placed and prepared and prepared in all activities in all activities to protect and develop the environment.</li>
                    <li>The standards and requirements are set for all projects and facilities of power generation, and the necessary rates and reference rates are set to ensure that the facilities are not exceeded for the permissible limits of the Environmental Law No. 4 of 1994, the executive loyalty and their amendments, and in particular the polluting activities of the environment that are still burning fuel.</li>
                    <li>Standards and requirements are set for energy generation projects and facilities in the urban areas and new regions and coordination with the competent authorities, regarding working to benefit from the results of local and international studies and research to protect the environment, by benefiting from clean energy sources, with a focus on renewable energy sources such as solar and wind energy.</li>
                    <li>Sustainable Energy Management monitors the results of the implementation of clean energy programs and projects, by emphasizing the quality and quality of the environment.</li>
                    <li>It works to expand the uses of cleaner fuel in all industries, especially intense energy consumption, and all activities, with the aim of protecting the environment and preserving the health of citizens.</li>
                    <li>The concept of sustainable energy is based on encouraging and supporting solar energy projects, and expanding the uses of all types of new, renewable and environmentally friendly energies.</li>
                    <li>The administration is working to encourage industrial facilities to adopt the technologies of rationalizing energy consumption in all its forms, which depend on the use of oil and natural gas oil products.</li>
                    <li>Through the Sustainable Energy Department, the Ministry of Environment sets visions, goals and suggestions in international and local forums through coordination with the ministries, relevant bodies and competent administrative bodies such as the Ministry of Electricity (Electricity Holding Company - New and Renewable Energy Authority - Industry Update Center - Ministry of Industry), and UNIDO in Energy and fuel projects.</li>
                    <li>Clean energy management also works to encourage experimental projects that depend on solar energy and wind energy, expansion and participation in all projects that serve the environment, in terms of reducing emissions and rationalizing energy uses and replacing them with new and renewable energy, and has been implemented Some projects that target clean energy uses.</li>
                    <li>Clean fuel management works by encouraging work in experimental projects, which are for the production of cleaner fuel, especially natural gas, as well as providing many studies and ideas for expanding the production of biofuels from plants.</li>
                </ul>
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
