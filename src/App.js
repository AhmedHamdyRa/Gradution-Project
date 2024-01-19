// import './App.css'
// import React, { useContext } from "react";
// import Header from "./UseRef/Header"
// import FunCom from "./UseRef/FunCom";
// import {AuthProvider,AuthContext} from "./UseRef/AuthContext";
// //import { Route,BrowserRouter, Routes} from "react-router-dom";
// import { Fragment } from 'react';
// import ScrollButton from './PureComp/ScrollToTop';
// import { Content} from './PureComp/ScrollToTopStyle';
// // import Sign from './UseRef/Sign';

// //pages 
// //import Home from './PurePages/Home';

// function App () {
//   const authContext = useContext(AuthContext)
//   return (
//     <div>
//       <Header/>

//       {authContext.auth.email ? "": <FunCom/>} 

//       <Fragment>
//       <Content />
//       <ScrollButton />
//       </Fragment>
      
//     </div>
//   );
// }

// function AppWithStore(){
//   return(
//   <AuthProvider>
//     <App/>
//   </AuthProvider>
//   )
// }
// export default AppWithStore;