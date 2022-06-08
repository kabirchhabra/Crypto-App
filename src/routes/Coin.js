import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DOMPurify from 'dompurify';

import "./Coin.css";

const Coin = () => {
  const [coin, setCoin] = useState({});

  const params = useParams();
  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoin(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="coin-container">
        <div className="content">
          <h1 className='font-bold text-2xl'>{coin.name}</h1>
        </div>
        <div className="content">
          <div className="rank font-bold">
            <span className="rank-btn">Rank # {coin.market_cap_rank}</span>
          </div>
          <div className="info">
            <div className="coin-heading">
              {coin.image ? <img src={coin.image.small} alt="" /> : null}
              <p>{coin.name}</p>
              {coin.symbol ? <p>{coin.symbol.toUpperCase()}/INR</p> : ''}
            </div>
            <div className="coin-price">
                {coin.market_data?.current_price ? <h1>₹{coin.market_data.current_price.inr.toLocaleString()}</h1>:null}
            </div>
          </div>
        </div>

        <div className="content">
          <table>
            <thead>
              <tr>
                <th>1H</th>
                <th>24H</th>
                <th>7D</th>
                <th>14D</th>
                <th>1M</th>
                <th>1Y</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {coin.market_data?.price_change_percentage_1h_in_currency ? <p>{coin.market_data.price_change_percentage_1h_in_currency.inr.toFixed(2)}%</p> : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_24h_in_currency.inr.toFixed(2)}%</p> : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_7d_in_currency ? <p>{coin.market_data.price_change_percentage_7d_in_currency.inr.toFixed(2)}%</p> : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_14d_in_currency ? <p>{coin.market_data.price_change_percentage_14d_in_currency.inr.toFixed(2)}%</p> : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_30d_in_currency ? <p>{coin.market_data.price_change_percentage_30d_in_currency.inr.toFixed(2)}%</p> : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_1y_in_currency ? <p>{coin.market_data.price_change_percentage_1y_in_currency.inr.toFixed(2)}%</p> : null}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="content">
          <div className="stats">
            <div className="left">
              <div className="row">
                <h4>24 Hour Low</h4>
                {coin.market_data?.low_24h ? <p>₹{coin.market_data.low_24h.inr.toLocaleString()}</p> : null}
              </div>
              <div className="row">
                <h4>24 Hour High</h4>
                {coin.market_data?.high_24h ? <p>₹{coin.market_data.high_24h.inr.toLocaleString()}</p> : null}
              </div>
            </div>
            <div className="right">
              <div className="row">
                <h4>Market Cap</h4>
                {coin.market_data?.market_cap ? <p>₹{coin.market_data.market_cap.inr.toLocaleString()}</p> : null}
              </div>
              <div className="row">
                <h4>Circulating Supply</h4>
                {coin.market_data ? <p>{coin.market_data.circulating_supply.toLocaleString()}</p> : null}
              </div>
            </div>
          </div>
        </div>

        <div className="content">
            <div className="about">
                <h3 className="font-bold text-xl">About</h3>
                <p dangerouslySetInnerHTML={{
                  __html:DOMPurify.sanitize(coin.description ? coin.description.en : ''),
                }}></p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Coin;
