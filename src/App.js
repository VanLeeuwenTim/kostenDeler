import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import Login from "./components/Login";

function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <Switch>
      <ProtectedRoute
        exact
        path="/"
        component={Home}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <Route path="/login" component={Login} />
    </Switch>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}
export default connect(mapStateToProps)(App);



// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams
// } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import Container from "./Container";
// import Familie from "./Familie";
// import "./App.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Login from "./components/LoginOld";
// import SignUp from "./components/Signup";





// export default function App() {
//   return (
//     <Router>
//       <div className="App">
//         <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//           <div className="container">
//             <Link className="navbar-brand" to={"/sign-in"}>
//               expensesOverview Daan and Tim
//             </Link>
//             <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//               <ul className="navbar-nav ml-auto">
//                 <li className="nav-item">
//                   <Link className="nav-link" to={"/sign-in"}>
//                     Login
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to={"/sign-up"}>
//                     Sign up
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>

//         <div className="auth-wrapper">
//           <div className="auth-inner">
//             <Switch>
//               <Route exact path="/" component={Login} />
//               <Route path="/sign-in" component={Login} />
//               <Route path="/sign-up" component={SignUp} />
//             </Switch>
//           </div>
//         </div>
//       </div>
//     </Router>

    // <Router>
    //   <div>
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/about">About</Link>
    //       </li>
    //       <li>
    //         <Link to="/groepen">Groepen</Link>
    //       </li>
    //     </ul>

    //     <Switch>
    //       <Route path="/about">
    //         <About />
    //       </Route>
    //       <Route path="/groepen">
    //         <Groepen />
    //       </Route>
    //       <Route path="/">
    //         <Home />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
}

// function Groepen() {
//   let match = useRouteMatch();

//   return (
//     <div>
//       <h2>Groepen</h2>

//       <ul>
//         <li>
//           <Link to={`${match.url}/container`}>Container</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/familie`}>Familie</Link>
//         </li>
//       </ul>

//       <Switch>
//         <Route path={`${match.path}/container`}>
//           <Container />
//         </Route>
//         <Route path={`${match.path}/familie`}>
//           <Familie />
//         </Route>
//         <Route path={match.path}>
//           <h3>Please select a group.</h3>
//         </Route>
//       </Switch>
//     </div>
//   );
// }
