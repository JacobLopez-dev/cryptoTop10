

function Stats() {
  return (
    <div className="stats stats-vertical lg:stats-horizontal shadow">
  
        <div className="stat">
            <div className="stat-title">Current Price</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">Jan 1st</div>
        </div>
  
        <div className="stat">
            <div className="stat-title">Market Cap</div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>
  
        <div className="stat">
            <div className="stat-title">New Wallets</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
         </div>
  
    </div>
  )
}

export default Stats