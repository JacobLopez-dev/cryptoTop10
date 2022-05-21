
function Stats({marketCap, price, change, volume, volumeChange}) {

  return (
    <div className="stats bg-neutral mt-5 border-2 text-neutral-content stats-vertical shadow col-span-1 lg:col-span-2 md:col-span-2 ">
        <div className="stat">
            <div className="stat-title accent">Current Price</div>
            {price && <div className="stat-value">${price.toLocaleString("en-US")}</div>}
            <div className="stat-desc">{new Date().toLocaleString()}</div>
        </div>
  
         <div className="stat">
            <div className="stat-title">Market Cap</div>
            {marketCap && <div className="stat-value">${marketCap.toLocaleString("en-US")}</div>}
            {change && <div style={{color: Math.sign(change) === 1 || Math.sign(change) % 2 === 0 ? "green" : 'red'}} className="stat-desc">24h: {change.toFixed(3)}%</div>}
         </div>

         <div className="stat">
            <div className="stat-title">Volume</div>
            {change && <div className="stat-value">{volume.toLocaleString("en-US")}</div>}
            {volumeChange && <div style={{color: Math.sign(volumeChange) === 1 || Math.sign(volumeChange) % 2 === 0 ? "green" : 'red'}} className="stat-desc">24h: {volumeChange}%</div>}
         </div>
    </div>
  )
}

export default Stats