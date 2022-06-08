import React, { useState, useEffect } from "react";
import axios from "axios";
import Coins from './components/Coins';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom';

import Coin from './routes/Coin';

function App() {

  const [coins, setCoins] = useState([]);
  const [theme, setTheme] = useState(false);

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=30&page=1&sparkline=false';

  useEffect(()=>{
    axios.get(url).then((response)=>{
      setCoins(response.data)
      console.log(response.data[0]);
    }).catch((error)=>{
      console.log(error);
    })
  }, [])

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Coins coins={coins}/>}/>
        <Route path='/coin' element={<Coin />}>
          <Route path=":coinId" element={<Coin />} />
        </Route>
      </Routes>

      <Footer theme={theme} setTheme={setTheme}/>
    </>
  );
}

export default App;
