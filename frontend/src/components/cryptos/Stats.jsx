function Stats({marketCap, price, change}) {

  return (
    <div className="stats stats-vertical shadow">
        <div className="stat">
            <div className="stat-title">Current Price</div>
            {price && <div className="stat-value">${price.toLocaleString("en-US")}</div>}
            <div className="stat-desc">Jan 1st</div>
        </div>
  
        <div className="stat">
            <div className="stat-title">Market Cap</div>
            {marketCap && <div className="stat-value">${marketCap.toLocaleString("en-US")}</div>}
            <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>
  
        <div className="stat">
            <div className="stat-title">24 Hour change</div>
            {change && <div style={{color: Math.sign(change) === 1 || Math.sign(change) % 2 === 0 ? "green" : 'red'}} className="stat-value">%{change.toFixed(3)}</div>}
            <div className="stat-desc"></div>
         </div>
  
    </div>
  )
}

export default Stats