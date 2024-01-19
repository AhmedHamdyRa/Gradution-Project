//import React, { useContext } from "react";
//import {AuthContext, AuthProvider} from "./AuthContext";
import React from "react";
import { AuthProvider} from "./AuthContext";

import {Link} from "react-router-dom";
import './Header.css';



function Header () {

    // const authContext = useContext(AuthContext)

    // function logout (){
    //     localStorage.removeItem('token')
    //     localStorage.removeItem('email')
    //     authContext.setAuth({})
    // }

return (
<div>
    <nav classname='website_head'>
            <div class="website_head">

                <img src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcGYtczEtdGVkLTA5ODgucG5n.png?s=Lc4q2yzJ4LBOHK5g6YMu_cutWAB64dcqF1evntS_Adc" alt="Pure" width="40" height="30"></img>
                {/* <img src="./logo.png" alt="Pure"></img> */}
                <Link className='logo' to="/">Pure</Link>

                <div class="container_links">
                    <ul className='menu'>

                        <li class="text">
                            <Link class="text" to="/">Home</Link> 
                        </li>

                        <li class="text">
                            <Link class="text" to="/Feature" >Topics</Link>
                            <div class="dropdown">
                                <ul>
                                <li><Link to="/Air">Air</Link></li>
                                <li><Link to="/Wastes">Wastes</Link></li>
                                <li><Link to="/Land">Land</Link></li>
                                <li><Link to="/IndustryandEnergy">Industry and Energy</Link></li>
                                <li><Link to="/Water">Water</Link></li>
                                <li><Link to="/NatureConservation">Nature Conservation</Link></li>
                                <li><Link to="/ClimateChanges">Climate Changes</Link></li>
                                <li><Link to="/EnvironmentalTopics">Env Management</Link></li>
                                </ul>
                            </div>
                        </li>

                        <li class="text">
                            <Link class="text" to="/Pricing">Services</Link>
                            <div class="dropdown">
                                <ul>
                                <li><Link to="/EIA">Environmental Training</Link></li>
                                <li><Link to="/FundandSupport">Fund and Support</Link></li>
                                <li><Link to="/InspectionandCompliance">Inspection and Compliance</Link></li>
                                <li><Link to="/Accreditation">Accreditation</Link></li>
                                <li><Link to="/CoalHandlingProcedures">Ozone</Link></li>
                                <li><Link to="/ComplaintsandInquiries">The NGOs</Link></li>
                                </ul>
                            </div>
                        </li>
                        
                        <li class="text">
                            <Link class="text" to="/Recycle">Recycle</Link> 
                        </li>
                        
                        <li class="text">
                            <Link class="text" to="/Chat">Chat</Link> 
                        </li>
                        
                        <li class="text">
                            <Link class="text" to="">Laws</Link> 
                            <div class="dropdown">
                                <ul>
                                <li><Link to="/EnvironmentalProtectionLaw">Env Protection Law</Link></li>
                                <li><Link to="/WasteManagementRegulationLaw">Waste Management Law</Link></li>
                                <li><Link to="/OtherLaws">Other Laws</Link></li>
                                <li><Link to="/MinisterialDecrees">Ministerial Decrees</Link></li>
                                </ul>
                            </div>
                        </li>                        
                        
                        <li class="text">
                            <Link class="text" to="/Org">Organizations</Link> 
                        </li>

                    </ul >
                </div>  

                {/* logout */}
                {/* <span  class="User">
                    <div>
                        {authContext.auth.email?<div>
                                        
                                        <div className="gg-profile"></div>
                                        {authContext.auth.email}
                                        {' '}
                                        <a href="/">
                                        <button type="button" class="btn btn-success" onClick={logout} >LogOut</button>
                                        </a>
                                        </div>:<div className="needtoLog">
                                                Guest
                                                {' '}
                                                <a href="/">
                                                    <button type="button" class="btn btn-success" onClick={logout} >LogOut</button>
                                                </a>
                                                </div>
                        }
                    </div>
                </span> */}

            </div>
        </nav>
        </div>
        
    );
}

function AppWithStore(){
    return(
    <AuthProvider>
        <Header/>
    </AuthProvider>
    )
}
export default AppWithStore;

