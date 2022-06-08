import React from 'react'
import CoinItem from './CoinItem';
import './Coins.css';
import { Link } from 'react-router-dom';
import Coin from '../routes/Coin';

const Coins = (props) => {
  return (
    <div className="max-w-c m-auto">
        <div>
            <div className="heading flex justify-between items-center bg-g shadow-md shadow-g1 rounded-sm">
                <p>#</p>
                <p className="coin-name">Coins</p>
                <p>Price</p>
                <p>24h</p>
                <p className="hide-mobile">Volume</p>
                <p className="hide-mobile">Mkt cap</p>
            </div>

            {props.coins.map(coins => {
                return (
                    <Link to={`/coin/${coins.id}`} element={<Coin />}>
                        <CoinItem coins={coins}/>
                    </Link>
                );
            })}
        </div>
    </div>
  )
}

export default Coins