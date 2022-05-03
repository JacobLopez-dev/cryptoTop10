function CryptoSocials({urls}) {

  const handleClick = (location) => {
    window.open(location)
}

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-5">
      {urls && urls.twitter.length !== 0 && <div className="card w-80 h-40 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Twitter</h2>
          <button onClick={()=>handleClick(urls.twitter)} className="btn btn-primary">Twitter</button>
      </div>
    </div>}

    {urls && urls.website && <div className="card w-80 h-40 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Website</h2>
          <button onClick={()=>handleClick(urls.website[0])} className="btn btn-primary">Website</button>
      </div>
    </div>}


    {urls && urls.reddit && <div className="card w-80 h-40 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Reddit</h2>
          <button onClick={()=>handleClick(urls.reddit)} className="btn btn-primary">Reddit</button>
      </div>
    </div>}

    {urls && urls.technical_doc && <div className="card w-80 h-40 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Technical Doc</h2>
          <button onClick={()=>handleClick(urls.technical_doc)} className="btn btn-primary">Technical Doc</button>
      </div>
    </div>}

</div>
  /* <div className="stats  bg-neutral-content stats-vertical shadow">
        {urls && urls.twitter.length !== 0 && <div className="stat">
        <div className="stat-title accent"></div>
            <div className="stat-value">
              <button onClick={()=>handleClick(urls.twitter)} className="btn btn-primary">Twitter</button>
            </div>
            <div className="stat-desc"></div>
        </div>}
  
        {urls && urls.website && <div className="stat">
            <div className="stat-title"></div>
            <div className="stat-value">
              <button onClick={()=>handleClick(urls.website[0])} className="btn btn-primary">Website</button>
            </div>
            <div className="stat-desc"></div>
        </div>}
  
        {urls && urls.reddit && <div className="stat">
            <div className="stat-title"></div>
            <div className="stat-value">
              <button onClick={()=>handleClick(urls.reddit)} className="btn btn-primary">Reddit</button>
            </div>
            <div className="stat-desc"></div>
        </div>}
    </div> */
  )
}

export default CryptoSocials