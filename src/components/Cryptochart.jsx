import React from 'react'
import TradeViewChart from 'react-crypto-chart';
const Cryptochart = () => {
  return (
    <div>
      <h3>BTC/USDT</h3>
      <TradeViewChart
        containerStyle={{
          minHeight: '300px',
          minWidth: '400px',
          marginBottom: '30px',
        }}
        pair="BTCUSDT"
      />
      <h3>ADA/USDT</h3>
      <TradeViewChart
        containerStyle={{
          minHeight: '300px',
          minWidth: '400px',
          marginBottom: '30px',
        }}
        pair="ADAUSDT"
      />
      {/* <h3>ETH/USDT</h3>
      <TradeViewChart
        containerStyle={{
          minHeight: '300px',
          minWidth: '400px',
          marginBottom: '30px',
        }}
        pair="ETHUSDT"
      /> */}
    </div>
  )
}

export default Cryptochart
