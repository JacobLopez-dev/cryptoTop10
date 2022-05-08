import {FaReddit, FaDesktop, FaFileAlt, FaTwitter} from 'react-icons/fa'

function CryptoSocials({urls}) {

  const handleClick = (location) => {
    window.open(location)
}

  return (
    <div className="grid lg:grid-cols-2 lg:grid-rows-2 md:grid-cols-2 md:col-span-2 lg:col-span-1 col-span-1 gap-3 justify-items-center">
      {urls && urls.twitter.length !== 0 && 
      <div className="card w-60 h-40 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">          
          <button onClick={()=>handleClick(urls.twitter)} className="grid hover:text-secondary-focus duration-200">
            <FaTwitter className='text-6xl justify-self-center'/>
            <h2 className="card-title">Twitter</h2>
          </button>
      </div>
    </div>}

    {urls && urls.website && 
    <div className="card w-60 h-40 bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <button onClick={()=>handleClick(urls.website[0])} className="grid hover:text-secondary-focus duration-200">
        <FaDesktop className='text-6xl justify-self-center'/>
        <h2 className="card-title">Website</h2>
        </button>
      </div>
    </div>}


    {urls && urls.reddit && 
    <div className="card w-60 h-fit bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <button onClick={()=>handleClick(urls.reddit)} className="grid hover:text-secondary-focus duration-200">
          <FaReddit className='text-6xl justify-self-center'/>
          <h2 className="card-title">Reddit</h2>
        </button>
      </div>
    </div>}

    {urls && urls.technical_doc && 
    <div className="card w-60 h-40 bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <button onClick={()=>handleClick(urls.technical_doc)} className="grid hover:text-secondary-focus duration-200">
          <FaFileAlt className='text-6xl justify-self-center'/>
          <h2 className="card-title">Technical Doc</h2>
        </button>
      </div>
    </div>}

</div>
  )
}

export default CryptoSocials