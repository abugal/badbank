import React from 'react';
import './App.css';
import Home from "./pages/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
//import Home from './components/Home';
//import Balance from './components/balance';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateAccount from './pages/CreateAccount';
import Deposit from './pages/deposit';
import  Withdraw  from './pages/withdraw';
import Transfer from './pages/transfer';
import Balance from './pages/balance'
import NewCustomer from './pages/newcustomer'
function App() {
  return (

    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/newcustomer" element={<NewCustomer />} />
          <Route exact path="/deposit" element={<Deposit />} />
          <Route exact path="/withdraw" element={<Withdraw />} />
          <Route exact path="/transfer" element={<Transfer />} />
          <Route exact path="/balance" element={<Balance />} />
        </Routes>
      </Router>



    </div>






  );
}

export default App;
