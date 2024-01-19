import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// import App from './App';
import reportWebVitals from "./reportWebVitals";
import { Route, BrowserRouter, Routes } from "react-router-dom";

//pages
import Home from "./PurePages/Home";
import Feature from "./PurePages/Feature";
import Pricing from "./PurePages/Pricing";
import EnvironmentalTopics from "./PurePages/EnvironmentalTopics";
import Air from "./PurePages/Air";
import Wastes from "./PurePages/Wastes";
import Land from "./PurePages/Land";
import IndustryandEnergy from "./PurePages/IndustryandEnergy";
import Water from "./PurePages/Water";
import NatureConservation from "./PurePages/NatureConservation";
import ClimateChanges from "./PurePages/ClimateChanges";
import FundandSupport from "./PurePages/FundandSupport";
import EIA from "./PurePages/EIA";
import InspectionandCompliance from "./PurePages/InspectionandCompliance";
import Accreditation from "./PurePages/Accreditation";
import CoalHandlingProcedures from "./PurePages/CoalHandlingProcedures";
import ComplaintsandInquiries from "./PurePages/ComplaintsandInquiries";
//import FunCom from './UseRef/FunCom';
import Sign from "./UseRef/Sign";
import Recycle from "./PurePages/Recycle";
import Chat from "./PurePages/Chat";
import EnvironmentalProtectionLaw from "./PurePages/EnvironmentalProtectionLaw";
import WasteManagementRegulationLaw from "./PurePages/WasteManagementRegulationLaw";
import OtherLaws from "./PurePages/OtherLaws";
import MinisterialDecrees from "./PurePages/MinisterialDecrees";
import Org from "./PurePages/Org";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<FunCom/>}/> */}
      <Route path="/" exact element={<Home />} />
      <Route path="/Recycle" element={<Recycle />} />
      <Route path="/Chat" element={<Chat />} />
      <Route path="/Pricing" element={<Pricing />} />
      <Route path="/Feature" element={<Feature />} />
      <Route path="/EnvironmentalTopics" element={<EnvironmentalTopics />} />
      <Route path="/Air" element={<Air />} />
      <Route path="/Wastes" element={<Wastes />} />
      <Route path="/Land" element={<Land />} />
      <Route path="/IndustryandEnergy" element={<IndustryandEnergy />} />
      <Route path="/Water" element={<Water />} />
      <Route path="/NatureConservation" element={<NatureConservation />} />
      <Route path="/ClimateChanges" element={<ClimateChanges />} />
      <Route path="/FundandSupport" element={<FundandSupport />} />
      <Route path="/EIA" element={<EIA />} />
      <Route
        path="/InspectionandCompliance"
        element={<InspectionandCompliance />}
      />
      <Route path="/Accreditation" element={<Accreditation />} />
      <Route
        path="/CoalHandlingProcedures"
        element={<CoalHandlingProcedures />}
      />
      <Route
        path="/ComplaintsandInquiries"
        element={<ComplaintsandInquiries />}
      />
      <Route path="/Sign" element={<Sign />} />
      <Route
        path="/EnvironmentalProtectionLaw"
        element={<EnvironmentalProtectionLaw />}
      />
      <Route
        path="/WasteManagementRegulationLaw"
        element={<WasteManagementRegulationLaw />}
      />
      <Route path="/OtherLaws" element={<OtherLaws />} />
      <Route path="/MinisterialDecrees" element={<MinisterialDecrees />} />
      <Route path="/Org" element={<Org />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
